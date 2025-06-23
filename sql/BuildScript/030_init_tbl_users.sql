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

--
-- Current Database: `db_mad`
--

USE db_mad;

--
-- initialize tbl_users
--

-- LOAD DATA LOCAL INFILE '/docker-entrypoint-initdb.d/013_tbl_users.csv' INTO TABLE 013_tbl_users FIELDS TERMINATED BY '\t' ENCLOSED BY '\"' LINES TERMINATED BY '\n';

INSERT INTO tbl_player                       /*** CHECK the TABLE NAME!! ***/
  (name,passwd,mbname,email)
VALUES
  ('test_user1','test1',  'テストユーザー1','dumm1@foo.com'),
  ('test_user2','test2',  'テストユーザー2','dumm2@foo.com'),
  ('namwonS',  'PE333833','なむうぉんす'   ,'namwons33@gmail.com');
