//callback

var openFile = function (callback) {
  setTimeout(() => {
    console.log("File đã được mở");
    callback();
  }, 2000);
};

var readFile = function (callback) {
  setTimeout(() => {
    console.log("F8 - Học lập trình để đi làm");
    callback();
  }, 1000);
};

var closeFile = function () {
  setTimeout(() => {
    console.log("File đã đóng");
  }, 1000);
};

openFile(() => {
  readFile(() => {
    closeFile();
  });
});

//promise

var openFile = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("File đã được mở");
    }, 2000);
  });
};

var readFile = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("F8 - Học lập trình để đi làm");
    }, 1000);
  });
};

var closeFile = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("File đã đóng");
    }, 1000);
  });
};

openFile()
  .then((response) => {
    console.log(response);
    return readFile();
  })
  .then((response) => {
    console.log(response);
    return closeFile();
  })
  .then((response) => {
    console.log(response);
  });
