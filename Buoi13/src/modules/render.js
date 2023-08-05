const fs = require("fs");
const User = require("./user");

class Render extends User {
  constructor() {
    super();
  }

  renderNameAndDescription() {
    const nameAttr = this.name;
    const descriptionHTML = this.description
      .map((desc) => `<span>"${desc}",</span>`)
      .join("");
    const html = `
      <div class="block">
        <p>
          <span class="key">name</span><span class="attr">${nameAttr}</span>
        </p>
        <div id="typed-strings">
          ${descriptionHTML}
        </div>
        <p><span class="key">description</span><span id="typed"></span></p>
      </div>
    `;
    return html;
  }

  renderAddress() {
    const addressHTML = this.address
      .map((addr) => `<p class="array-attr">${addr}</p>`)
      .join("");
    const html = `
      <div class="block">
        <p><span class="array-key">address</span></p>
        <div class="array">
          ${addressHTML}
        </div>
      </div>
    `;
    return html;
  }

  renderContact() {
    const contactHTML = Object.entries(this.contact)
      .map(
        ([key, value]) =>
          `<p><span class="list-subkey">${key}</span><span class="list-attr">${value}</span></p>`
      )
      .join("");
    const html = `
      <div class="block">
        <p><span class="list-key">contact</span></p>
        <div class="list">
          ${contactHTML}
        </div>
      </div>
    `;
    return html;
  }

  renderProfiles() {
    const profileHTML = Object.entries(this.profile)
      .map(
        ([key, value]) =>
          `<p class="array-attr"><a href="${value}" target="_blank">${key}</a></p>`
      )
      .join("");
    const html = `
      <div class="block">
        <span class="array-key">profiles</span>
        <div class="array">
          ${profileHTML}
        </div>
      </div>
    `;
    return html;
  }

  renderHTMLForm() {
    const name_and_description = this.renderNameAndDescription();
    const address = this.renderAddress();
    const contact = this.renderContact();
    const profile = this.renderProfiles();
    const data = { name_and_description, address, contact, profile };
    return data;
  }

  render = (req, res) => {
    let data = this.renderHTMLForm();
    fs.readFile(`./src/views/index.html`, "utf8", (err, viewContent) => {
      const result = viewContent.match(/{.+?}/g);
      if (result.length) {
        for (let i = 0; i < result.length; i++) {
          const item = result[i];
          const itemKey = item.replaceAll("{", "").replaceAll("}", "");
          viewContent = viewContent.replaceAll(item, data[itemKey]);
        }
      }

      res.end(viewContent);
    });
  };
}
module.exports = new Render();
