-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: jkxystudent
-- ------------------------------------------------------
-- Server version	5.7.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `askforleave`
--

DROP TABLE IF EXISTS `askforleave`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `askforleave` (
  `studentNumber` char(12) DEFAULT NULL,
  `course` char(20) DEFAULT NULL,
  `time` date DEFAULT NULL,
  `reason` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `askforleave`
--

LOCK TABLES `askforleave` WRITE;
/*!40000 ALTER TABLE `askforleave` DISABLE KEYS */;
INSERT INTO `askforleave` VALUES ('160327001','汇编语言','2017-01-01','生病'),('160327001','汇编语言','2017-01-01','生病'),('160327001','汇编语言','2017-01-01','生病'),('160327002','汇编语言','2017-01-01','生病'),('160327002','汇编语言','2017-01-01','生病'),('160327002','汇编语言','2017-01-01','生病'),('160327003','汇编语言','2017-01-01','生病'),('160327003','汇编语言','2017-01-01','生病'),('160327003','汇编语言','2017-01-01','生病'),('160327004','汇编语言','2017-01-01','生病'),('160327004','汇编语言','2017-01-01','生病'),('160327004','汇编语言','2017-01-01','生病'),('160327001','体育课','2012-01-01','生病'),('160327004','音乐课','2017-01-01','生病'),('160327001','物理课','1999-01-01','生病'),('160327001','数学','2001-01-01','生病'),('160327002','计算机','2012-01-01','感冒'),('160327001','化学','1999-01-01','生病'),('160327001','计算机技术','1000-01-01','生病'),('160327001','数学','2017-01-01','生病'),('160327001','生物','1992-02-02','生病'),('160327001','工程实践','2000-01-01','感冒');
/*!40000 ALTER TABLE `askforleave` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-30  4:55:05
