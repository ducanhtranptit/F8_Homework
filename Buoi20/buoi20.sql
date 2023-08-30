CREATE DATABASE database_03_tenhocvien;

USE database_03_tenhocvien;

CREATE TABLE
  Products (
    `ProductID` INT AUTO_INCREMENT PRIMARY KEY,
    `ProductName` VARCHAR(255),
    `OriginalPrice` DECIMAL(10, 2),
    `SalePrice` DECIMAL(10, 2),
    `Description` TEXT,
    `Quantity` INT,
    `Instructions` TEXT,
    `UpdateTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

CREATE TABLE
  Attributes (
    `AttributeID` INT AUTO_INCREMENT PRIMARY KEY,
    `AttributeName` VARCHAR(255)
  );

CREATE TABLE
  ProductAttributes (
    `ProductID` INT,
    `AttributeID` INT,
    `AttributeValue` VARCHAR(255),
    PRIMARY KEY (ProductID, AttributeID),
    FOREIGN KEY (ProductID) REFERENCES Products (ProductID),
    FOREIGN KEY (AttributeID) REFERENCES Attributes (AttributeID)
  );

INSERT INTO
  Products (
    `ProductName`,
    `OriginalPrice`,
    `SalePrice`,
    `Description`,
    `Quantity`,
    `Instructions`
  )
VALUES
  (
    'Product 1',
    10.99,
    8.99,
    'Description 1',
    5,
    'Instructions 1'
  ),
  (
    'Product 2',
    15.99,
    12.99,
    'Description 2',
    0,
    'Instructions 2'
  ),
  (
    'Product 3',
    20.99,
    18.99,
    'Description 3',
    3,
    'Instructions 3'
  );

INSERT INTO
  Attributes (`AttributeName`)
VALUES
  ('attribute 1'),
  ('attribute 2'),
  ('attribute 3');

INSERT INTO
  ProductAttributes (`ProductID`, `AttributeID`, `AttributeValue`)
VALUES
  (2, 1, 'Value 1'),
  (2, 2, 'Value 2'),
  (2, 3, 'Value 3');

SELECT
  *
FROM
  Products;

SELECT
  Attributes.AttributeName,
  ProductAttributes.AttributeValue
FROM
  Attributes
  INNER JOIN ProductAttributes ON Attributes.AttributeID = ProductAttributes.AttributeID
WHERE
  ProductAttributes.ProductID = 2;

SELECT
  *
FROM
  Products
WHERE
  `Quantity` > 0;