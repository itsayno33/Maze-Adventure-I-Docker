-- ------------------------------------------------------
-- Host: localhost    Database: db_mad
-- ------------------------------------------------------
-- Server version	9.0.1

/* SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/* SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/* SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES=utf8mb4;
/* SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*SET TIME_ZONE='+00:00' */;
/* SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/* SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/* SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/* SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

SET GLOBAL local_infile=on;

--
-- Current Database: `db_mad`
--

CREATE DATABASE IF NOT EXISTS db_mai DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_ja_0900_as_cs_ks DEFAULT ENCRYPTION='N';

USE db_mai;

ALTER DATABASE db_mai DEFAULT CHARACTER SET = utf8mb4;
ALTER DATABASE db_mai DEFAULT COLLATE = utf8mb4_ja_0900_as_cs_ks;

/**********************/
/*   TABLE tbl_user   */
/**********************/

--
-- Table structure for table `tbl_user`
--

CREATE TABLE IF NOT EXISTS tbl_users (
  id     int NOT NULL AUTO_INCREMENT,
  uuid   int NOT NULL DEFAULT '-32000',
  userid int NOT NULL,
  name   varchar(260) CHARACTER SET utf8mb4 COLLATE utf8mb4_ja_0900_as_cs_ks NOT NULL,
  mbname varchar(260) CHARACTER SET utf8mb4 COLLATE utf8mb4_ja_0900_as_cs_ks,
  cretime datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updtime datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY userid (userid),
  UNIQUE KEY uuid (uuid),
  KEY name (name)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_ja_0900_as_cs_ks;
