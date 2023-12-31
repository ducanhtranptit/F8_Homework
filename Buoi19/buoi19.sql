CREATE DATABASE database_02_DucAnhTran;

USE database_02_DucAnhTran;

CREATE TABLE
  customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
  );

CREATE TABLE
  products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
  );

CREATE TABLE
  orders (
    order_id INT PRIMARY KEY,
    customer_id INT NOT NULL,
    total_quantity INT NOT NULL, --tổng số lượng sản phẩm
    total_amount DECIMAL(10, 2) NOT NULL, -- tổng giá trị của đơn hàng
    order_status VARCHAR(50) NOT NULL, -- trạng thái đơn hàng
    order_time DATETIME NOT NULL, --thời gian đặt hàng
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers (customer_id)
  );

CREATE TABLE
  order_details (
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL, --số lượng sản phẩm chi tiết trong đơn hàng
    amount DECIMAL(10, 2) NOT NULL, --số tiền chi tiết của đơn hàng
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders (order_id),
    FOREIGN KEY (product_id) REFERENCES products (product_id)
  );

DESCRIBE customers;

DESCRIBE products;

DESCRIBE orders;

DESCRIBE order_details;

-- DROP DATABASE database_02_DucAnhTran;