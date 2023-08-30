CREATE DATABASE database_03_tenhocvien;

USE database_03_tenhocvien;

CREATE TABLE
  Products (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `ProductName` VARCHAR(255),
    `OriginalPrice` DECIMAL(10, 2),
    `SalePrice` DECIMAL(10, 2),
    `Description` TEXT,
    `Quantity` INT,
    `Instructions` TEXT,
    `created_at` TIMESTAMP,
    `updated_at` TIMESTAMP
  );

CREATE TABLE
  Attributes (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `AttributeName` VARCHAR(255),
    `created_at` TIMESTAMP,
    `updated_at` TIMESTAMP
  );

CREATE TABLE
  ProductAttributes (
    `ProductID` INT,
    `AttributeID` INT,
    `created_at` TIMESTAMP,
    `updated_at` TIMESTAMP,
    PRIMARY KEY (ProductID, AttributeID),
    FOREIGN KEY (ProductID) REFERENCES Products (id),
    FOREIGN KEY (AttributeID) REFERENCES Attributes (id)
  );

INSERT INTO
  Products (
    `ProductName`,
    `OriginalPrice`,
    `SalePrice`,
    `Description`,
    `Quantity`,
    `Instructions`,
    `created_at`,
    `updated_at`
  )
VALUES
  (
    'Product 1',
    10.99,
    8.99,
    'Description 1',
    5,
    'Instructions 1',
    NOW (),
    NOW ()
  ),
  (
    'Product 2',
    15.99,
    12.99,
    'Description 2',
    0,
    'Instructions 2',
    NOW (),
    NOW ()
  ),
  (
    'Product 3',
    20.99,
    18.99,
    'Description 3',
    3,
    'Instructions 3',
    NOW (),
    NOW ()
  );

INSERT INTO
  Attributes (`AttributeName`, `created_at`, `updated_at`)
VALUES
  ('attribute 1', NOW (), NOW ()),
  ('attribute 2', NOW (), NOW ()),
  ('attribute 3', NOW (), NOW ());

INSERT INTO
  ProductAttributes (
    `ProductID`,
    `AttributeID`,
    `created_at`,
    `updated_at`
  )
VALUES
  (2, 1, NOW (), NOW ()),
  (2, 2, NOW (), NOW ()),
  (2, 3, NOW (), NOW ()),
  (1, 1, NOW (), NOW ()),
  (1, 2, NOW (), NOW ()),
  (3, 1, NOW (), NOW ()),
  (3, 2, NOW (), NOW ()),
  (3, 3, NOW (), NOW ());

SELECT
  *
FROM
  Products;

SELECT
  `AttributeName`,
  `AttributeID`
FROM
  Attributes,
  ProductAttributes
WHERE
  Attributes.id = ProductAttributes.AttributeID
  AND ProductAttributes.ProductID = 2;

SELECT
  *
FROM
  Products
WHERE
  `Quantity` > 0;