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
const userA = register(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com",
  "user"
);

const userB = register(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com",
  "user"
);

const userC = register(
  "Nguyen Van C",
  "12345678",
  "nguyenvanc@email.com",
  "user"
);

const userD = register(
  "Nguyen Van D",
  "123456789",
  "nguyenvand@email.com",
  "user"
);

const userE = register(
  "Nguyen Van E",
  "1234567890",
  "nguyenvane@email.com",
  "user"
);

const userF = register(
  "Nguyen Van F",
  "abcdefgh",
  "nguyenvanf@email.com",
  "user"
);

const userG = register(
  "Nguyen Van G",
  "abcdefg123",
  "nguyenvang@email.com",
  "user"
);

const userH = register(
  "Nguyen Van H",
  "654321",
  "nguyenvanh@email.com",
  "user"
);

const userI = register(
  "Nguyen Van I",
  "qwerty",
  "nguyenvani@email.com",
  "user"
);

const userJ = register(
  "Nguyen Van J",
  "0987654321",
  "nguyenvanj@email.com",
  "user"
);

const userK = register(
  "Nguyen Van K",
  "password",
  "nguyenvank@email.com",
  "user"
);

const userL = register(
  "Nguyen Van L",
  "abcdef",
  "nguyenvanl@email.com",
  "user"
);

const userM = register(
  "Nguyen Van M",
  "abc123",
  "nguyenvanm@email.com",
  "user"
);

const userN = register(
  "Nguyen Van N",
  "123abc",
  "nguyenvann@email.com",
  "user"
);

const userO = register(
  "Nguyen Van O",
  "test123",
  "nguyenvano@email.com",
  "user"
);

const userP = register(
  "Nguyen Van P",
  "password123",
  "nguyenvanp@email.com",
  "user"
);

const userQ = register(
  "Nguyen Van Q",
  "123456abc",
  "nguyenvanq@email.com",
  "user"
);

const userR = register(
  "Nguyen Van R",
  "abcdef123456",
  "nguyenvanr@email.com",
  "user"
);

const userS = register(
  "Nguyen Van S",
  "z3x2y1",
  "nguyenvans@email.com",
  "user"
);

const userT = register(
  "Nguyen Van T",
  "a1b2c3",
  "nguyenvant@email.com",
  "user"
);

const userU = register(
  "Nguyen Van U",
  "b2c3a1",
  "nguyenvanu@email.com",
  "user"
);

const userV = register(
  "Nguyen Van V",
  "c3a1b2",
  "nguyenvanv@email.com",
  "user"
);

const userW = register(
  "Nguyen Van W",
  "d4e5f6",
  "nguyenvanw@email.com",
  "user"
);

const userX = register(
  "Nguyen Van X",
  "e5f6d4",
  "nguyenvanx@email.com",
  "user"
);

const userY = register(
  "Nguyen Van Y",
  "f6d4e5",
  "nguyenvany@email.com",
  "user"
);

const userZ = register(
  "Nguyen Van Z",
  "g7h8i9",
  "nguyenvanz@email.com",
  "user"
);

// Đăng nhập
const loggedInUser1 = login("nguyenvanb@email.com", "1234567", "user");
console.log("dataLogin =", loggedInUser1);

// Đăng nhập
const loggedInUser2 = login("nguyenvanl@email.com", "abcdef", "hacker");
console.log("dataLogin =", loggedInUser2);
