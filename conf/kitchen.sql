/*
 Navicat Premium Data Transfer

 Source Server         : kitchen
 Source Server Type    : MySQL
 Source Server Version : 80032
 Source Host           : localhost:3306
 Source Schema         : kitchen

 Target Server Type    : MySQL
 Target Server Version : 80032
 File Encoding         : 65001

 Date: 28/03/2023 17:52:35
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for k_menu
-- ----------------------------
DROP TABLE IF EXISTS `k_menu`;
CREATE TABLE `k_menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` char(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `img` varchar(255) NOT NULL,
  `index` int NOT NULL,
  `is_del` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SET FOREIGN_KEY_CHECKS = 1;
