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

var login = function (email, password, role) {
  var loggedUser = data.find(
    (user) => user.email === email && user.password === password
  );

  if (role !== "user") {
    console.error("Bạn không phải là người dùng hợp lệ");
    return;
  }

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

const user3 = register(
  "Nguyen Van C",
  "12345678",
  "nguyenvanc@email.com",
  "user"
);

const user4 = register(
  "Nguyen Van D",
  "123456789",
  "nguyenvand@email.com",
  "user"
);

const user5 = register(
  "Nguyen Van E",
  "1234567890",
  "nguyenvane@email.com",
  "user"
);

const user6 = register(
  "Nguyen Van F",
  "abcdefgh",
  "nguyenvanf@email.com",
  "user"
);

const user7 = register(
  "Nguyen Van G",
  "abcdefg123",
  "nguyenvang@email.com",
  "user"
);

const user8 = register(
  "Nguyen Van H",
  "654321",
  "nguyenvanh@email.com",
  "user"
);

const user9 = register(
  "Nguyen Van I",
  "qwerty",
  "nguyenvani@email.com",
  "user"
);

const user10 = register(
  "Nguyen Van J",
  "0987654321",
  "nguyenvanj@email.com",
  "user"
);

const user11 = register(
  "Nguyen Van K",
  "password",
  "nguyenvank@email.com",
  "user"
);

const user12 = register(
  "Nguyen Van L",
  "abcdef",
  "nguyenvanl@email.com",
  "user"
);

const user13 = register(
  "Nguyen Van M",
  "abc123",
  "nguyenvanm@email.com",
  "user"
);

const user14 = register(
  "Nguyen Van N",
  "123abc",
  "nguyenvann@email.com",
  "user"
);

const user15 = register(
  "Nguyen Van O",
  "test123",
  "nguyenvano@email.com",
  "user"
);

const user16 = register(
  "Nguyen Van P",
  "password123",
  "nguyenvanp@email.com",
  "user"
);

const user17 = register(
  "Nguyen Van Q",
  "123456abc",
  "nguyenvanq@email.com",
  "user"
);

const user18 = register(
  "Nguyen Van R",
  "abcdef123456",
  "nguyenvanr@email.com",
  "user"
);

// Đăng nhập
const loggedInUser1 = login("nguyenvanb@email.com", "1234567", "user");
console.log("dataLogin =", loggedInUser1);

// Đăng nhập
const loggedInUser2 = login("nguyenvanl@email.com", "abcdef", "hacker");
console.log("dataLogin =", loggedInUser2);
