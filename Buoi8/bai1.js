function Customer(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

var createCustomers = function (customers) {
  const customersObjects = customers.map(
    (customer) => new Customer(customer.name, customer.age, customer.address)
  );

  //sắp xếp tăng dần
  customersObjects.sort((a, b) => a.age - b.age);

  customersObjects.forEach((customer) => {
    var arrayName = customer.name.split(" ");
    var lastName = arrayName[arrayName.length - 1];
    customer.shortName = `${arrayName[0]} ${lastName.charAt(0)}`;
  });

  return customersObjects;
};
var customers = [
  { name: "Nguyễn Văn Anh", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn Binh", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn Chinh", age: 12, address: "TP.HCM" },
];

console.log(createCustomers(customers));
