-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.0.3-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for f8_orders
CREATE DATABASE IF NOT EXISTS `f8_orders` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `f8_orders`;

-- Dumping structure for table f8_orders.customers
CREATE TABLE IF NOT EXISTS `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT 'User',
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `status` int(11) DEFAULT 1,
  `province` varchar(100) DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.customers: ~5 rows (approximately)
INSERT INTO `customers` (`id`, `name`, `email`, `password`, `status`, `province`, `deleted_at`, `created_at`, `updated_at`) VALUES
	(1, 'Tran Duc Anh', 'tda.ducanh@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 1, NULL, NULL, '2023-08-28 04:27:39', '2023-08-28 04:27:42'),
	(3, 'Hoang Tien Dat', 'hoangtiendat@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 0, NULL, NULL, '2023-08-28 04:33:30', '2023-08-28 04:33:32'),
	(4, 'Nguyen Tuan Anh', 'dantruong@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 1, NULL, NULL, '2023-08-28 08:03:55', '2023-08-28 08:03:56'),
	(5, 'Tran Duc Anh(admin)', 'admin@gmail.com', '33cf7f2d6fc15cb70e39f1d45a5ac8b6', 1, NULL, NULL, '2022-04-20 06:53:21', '2023-09-12 00:43:53'),
	(6, 'Nguyen Van A', 'vana@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 0, NULL, NULL, '2023-09-13 03:48:07', '2023-09-13 03:48:08'),
	(7, 'Nguyen Van B', 'vanb@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 1, NULL, '2023-04-22 18:55:23', '2023-09-13 03:49:02', '2023-09-13 03:49:06'),
	(8, 'puiopu', 'uiopup@gmail.com', 'sasdfaASDFAs141234!"#$!"#$124', 1, NULL, NULL, NULL, NULL),
	(9, 'nguyễn văn a', 'nguyenvana@gmail.com', 'Abc@123', 0, NULL, NULL, NULL, NULL),
	(10, 'tran van c', 'vanc@gmail.com', 'Abc@123', 0, NULL, NULL, NULL, NULL),
	(11, 'User', 'bimbeophoto01@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 0, NULL, NULL, NULL, NULL);

-- Dumping structure for table f8_orders.order
CREATE TABLE IF NOT EXISTS `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `customers_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total` float NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customers_id` (`customers_id`),
  KEY `status_id` (`status_id`),
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`customers_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `order_ibfk_2` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.order: ~5 rows (approximately)
INSERT INTO `order` (`id`, `customers_id`, `status_id`, `quantity`, `total`, `created_at`, `updated_at`) VALUES
	(1, 1, 2, 2, 12213, '2023-08-31 02:37:41', '2023-08-31 02:37:42'),
	(2, 3, 3, 2, 6345630, '2023-08-31 02:38:13', '2023-08-31 02:38:14'),
	(3, 4, 3, 2, 43241, '2023-08-31 02:38:30', '2023-08-31 02:38:31'),
	(4, 1, 3, 2, 234234, '2023-08-31 02:40:35', '2023-08-31 02:40:36'),
	(5, 1, 2, 6, 345634, '2023-08-31 02:40:51', '2023-08-31 02:40:52');

-- Dumping structure for table f8_orders.order_detal
CREATE TABLE IF NOT EXISTS `order_detal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `price` float NOT NULL,
  `quantity` int(11) NOT NULL,
  `amount` float NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `order_detal_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`),
  CONSTRAINT `order_detal_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.order_detal: ~2 rows (approximately)
INSERT INTO `order_detal` (`id`, `order_id`, `product_id`, `price`, `quantity`, `amount`, `created_at`, `updated_at`) VALUES
	(1, 1, 8, 1000000, 23, 234, '2023-08-31 03:43:37', '2023-08-31 03:43:38'),
	(2, 2, 7, 1324340, 545, 345634, '2023-08-31 03:44:06', '2023-08-31 03:44:07');

-- Dumping structure for table f8_orders.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) DEFAULT NULL,
  `sku` varchar(10) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` text DEFAULT NULL,
  `price` float DEFAULT 0,
  `thumbnail` varchar(150) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_products_product_categories` (`category_id`),
  CONSTRAINT `FK_products_product_categories` FOREIGN KEY (`category_id`) REFERENCES `product_categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.products: ~3 rows (approximately)
INSERT INTO `products` (`id`, `category_id`, `sku`, `name`, `description`, `price`, `thumbnail`, `created_at`, `updated_at`) VALUES
	(7, 1, 'sku 1', 'product name 1', 'des 1', 100000, 'thumbnail 1', '2023-08-31 03:40:31', '2023-08-31 03:40:33'),
	(8, 1, 'sku 2', 'product name 2', 'des 2', 90000, 'thumbnail 2', '2023-08-31 03:41:50', '2023-08-31 03:41:50'),
	(9, 2, 'sku 3', 'product name 3', 'des 3', 30000, 'thumbnail 3', '2023-08-31 03:42:41', '2023-08-31 03:42:42');

-- Dumping structure for table f8_orders.product_categories
CREATE TABLE IF NOT EXISTS `product_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.product_categories: ~2 rows (approximately)
INSERT INTO `product_categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 'cate name 1', '2023-08-31 03:37:31', '2023-08-31 03:37:32'),
	(2, 'cate name 2', '2023-08-31 03:37:40', '2023-08-31 03:37:39'),
	(4, 'cate name 4', '2023-08-31 03:38:16', '2023-08-31 03:38:17');

-- Dumping structure for table f8_orders.province
CREATE TABLE IF NOT EXISTS `province` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.province: ~2 rows (approximately)
INSERT INTO `province` (`id`, `name`) VALUES
	(1, 'Hà Nội'),
	(2, 'Đà Nẵng'),
	(3, 'Hồ Chí Minh');

-- Dumping structure for table f8_orders.status
CREATE TABLE IF NOT EXISTS `status` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table f8_orders.status: ~3 rows (approximately)
INSERT INTO `status` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 'chờ xử lý', '2023-08-31 02:35:30', '2023-08-31 02:35:31'),
	(2, 'đang xử lý', '2023-08-31 02:35:49', '2023-08-31 02:35:51'),
	(3, 'đã thanh toán', '2023-08-31 02:36:11', '2023-08-31 02:36:12');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
