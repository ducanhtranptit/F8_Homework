function User(name, password, email, role) {
  this.name = name;
  this.password = password;
  this.email = email;
  this.role = role;
}

var data = [];

var register = function (name, password, email, role) {
  if (!name || !password || !email) {
    console.error("Thông tin không đầy đủ");
    return;
  }

  var existingUser = data.find((user) => user.email === email);
  if (existingUser) {
    console.error("Email đã tồn tại trong hệ thống");
    return;
  }

  var newUser = new User(name, password, email, role);
  data.push(newUser);

  return newUser;
};

var login = function (email, password) {
  var loggedUser = data.find(
    (user) => user.email === email && user.password === password
  );

  if (!loggedUser) {
    console.error("thông tin đăng nhập không hợp lệ");
    return;
  }
  return loggedUser;
};

// Đăng ký người dùng
const user1 = register(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com",
  "user"
);
const user2 = register(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com",
  "user"
);

// Đăng nhập
const loggedInUser = login("nguyenvanb@email.com", "1234567");

console.log("");
console.log("data =", data);
console.log("dataLogin =", loggedInUser);
