class User {
  constructor() {
    this.name = "Tran Duc Anh khong phai Beo";
    this.description = ["Hello", "This is my website", "Looks like json"];
    this.address = ["123 add, ress", "Ha Noi", "Viet Nam"];
    this.contact = {
      office: "123 add",
      phone: "9999999999",
      email: "abc@email",
      page: "my page",
    };
    this.profile = {
      facebook: "https://www.facebook.com",
      linkedin: "https://www.linkedin.com",
      github: "https://github.com",
    };
  }
}

module.exports = User;
