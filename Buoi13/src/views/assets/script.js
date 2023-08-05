(function (root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory();
  else if (typeof define === "function" && define.amd) define([], factory);
  else if (typeof exports === "object") exports.Typed = factory();
  else root.Typed = factory();
})(this, function () {
  function Typed(elementId, options) {
    var self = this;
    self.el =
      typeof elementId === "string" ? document.querySelector(elementId) : elementId;
    self.options = Object.assign({}, defaults, options);
    self.isInput = self.el.tagName.toLowerCase() === "input";
    self.attr = self.options.attr;
    self.bindInputFocusEvents = self.options.bindInputFocusEvents;
    self.showCursor = !self.isInput && self.options.showCursor;
    self.cursorChar = self.options.cursorChar;
    self.cursorBlinking = true;
    self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;
    self.contentType = self.options.contentType;
    self.typeSpeed = self.options.typeSpeed;
    self.startDelay = self.options.startDelay;
    self.backSpeed = self.options.backSpeed;
    self.smartBackspace = self.options.smartBackspace;
    self.backDelay = self.options.backDelay;
    self.fadeOut = self.options.fadeOut;
    self.fadeOutClass = self.options.fadeOutClass;
    self.fadeOutDelay = self.options.fadeOutDelay;
    self.isPaused = false;
    self.strings = self.options.strings.map(function (str) {
      return str.trim();
    });
    self.stringsElement =
      typeof self.options.stringsElement === "string"
        ? document.querySelector(self.options.stringsElement)
        : self.options.stringsElement;

    if (self.stringsElement) {
      self.strings = [];
      self.stringsElement.style.display = "none";
      var elements = Array.prototype.slice.apply(self.stringsElement.children);
      var len = elements.length;
      if (len) {
        for (var i = 0; i < len; i += 1) {
          var element = elements[i];
          self.strings.push(element.innerHTML.trim());
        }
      }
    }

    self.strPos = 0;
    self.arrayPos = 0;
    self.stopNum = 0;
    self.loop = self.options.loop;
    self.loopCount = self.options.loopCount;
    self.curLoop = 0;
    self.shuffle = self.options.shuffle;
    self.sequence = [];
    self.pause = {
      status: false,
      typewrite: true,
      curString: "",
      curStrPos: 0,
    };
    self.typingComplete = false;
    for (var i in self.strings) {
      self.sequence[i] = i;
    }

    self.currentElContent = self.getCurrentElContent(self);
    self.autoInsertCss = self.options.autoInsertCss;

    self.appendAnimationCss(self);
  }

  Typed.prototype.getCurrentElContent = function (self) {
    return self.attr
      ? self.el.getAttribute(self.attr)
      : self.isInput
      ? self.el.value
      : self.contentType === "html"
      ? self.el.innerHTML
      : self.el.textContent;
  };

  Typed.prototype.appendAnimationCss = function (self) {
    if (
      self.autoInsertCss &&
      (self.showCursor || self.fadeOut) &&
      !document.querySelector("[data-typed-js-css]")
    ) {
      var css = document.createElement("style");
      css.type = "text/css";
      css.setAttribute("data-typed-js-css", true);
      var innerCss = "";
      if (self.showCursor) {
        innerCss +=
          "\n.typed-cursor{\n  opacity: 1;\n}\n.typed-cursor.typed-cursor--blink{\n  animation: typedjsBlink 0.7s infinite;\n  -webkit-animation: typedjsBlink 0.7s infinite;\n  animation: typedjsBlink 0.7s infinite;\n}\n@keyframes typedjsBlink{\n  50% { opacity: 0.0; }\n}\n@-webkit-keyframes typedjsBlink{\n  0% { opacity: 1; }\n  50% { opacity: 0.0; }\n  100% { opacity: 1; }\n}";
      }
      if (self.fadeOut) {
        innerCss +=
          "\n.typed-fade-out{\n  opacity: 0;\n  transition: opacity .25s;\n}\n.typed-cursor.typed-cursor--blink.typed-fade-out{\n  -webkit-animation: 0;\n  animation: 0;\n}";
      }
      if (innerCss.length > 0) {
        css.innerHTML = innerCss;
        document.body.appendChild(css);
      }
    }
  };

  Typed.prototype.typeHtmlChars = function (str, curStrPos, self) {
    if (self.contentType !== "html") return curStrPos;
    var curChar = str.substr(curStrPos).charAt(0);
    if (curChar === "<" || curChar === "&") {
      var endTag = curChar === "<" ? ">" : ";";
      for (
        ;
        str.substr(curStrPos + 1).charAt(0) !== endTag && !(curStrPos + 1 > str.length);

      ) {
        curStrPos++;
      }
      curStrPos++;
    }
    return curStrPos;
  };

  Typed.prototype.backSpaceHtmlChars = function (str, curStrPos, self) {
    if (self.contentType !== "html") return curStrPos;
    var curChar = str.substr(curStrPos).charAt(0);
    if (curChar === ">" || curChar === ";") {
      var startTag = curChar === ">" ? "<" : "&";
      for (; str.substr(curStrPos - 1).charAt(0) !== startTag && !(curStrPos < 0); ) {
        curStrPos--;
      }
      curStrPos--;
    }
    return curStrPos;
  };

  // ... (the rest of the Typed.prototype methods)

  return Typed;
});

window.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed", {
    stringsElement: "#typed-strings",
    backSpeed: 10,
    typeSpeed: 30,
    backDelay: 1000,
    loop: true,
    smartBackspace: true,
  });
});
