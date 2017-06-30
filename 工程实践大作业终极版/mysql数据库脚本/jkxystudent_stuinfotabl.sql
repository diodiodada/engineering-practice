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
-- Table structure for table `stuinfotabl`
--

DROP TABLE IF EXISTS `stuinfotabl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stuinfotabl` (
  `name` char(10) DEFAULT NULL,
  `studentNumber` char(12) DEFAULT NULL,
  `password` char(15) DEFAULT NULL,
  `course` varchar(500) DEFAULT NULL,
  `usertype` char(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stuinfotabl`
--

LOCK TABLES `stuinfotabl` WRITE;
/*!40000 ALTER TABLE `stuinfotabl` DISABLE KEYS */;
INSERT INTO `stuinfotabl` VALUES ('管理员1','001','01','','管理员'),('管理员2','002','02','','管理员'),('李老师','16001','01','计算机导论&数据结构&数据库原理','教师'),('王老师','16002','02','计算机导论&数据结构&数据库原理','教师'),('赵老师','16003','03','计算机导论&数据结构&数据库原理','教师'),('周杰','160327001','01','计算机导论&数据结构&数据库原理','学生'),('张超','160327002','02','计算机导论&数据结构&数据库原理','学生'),('陈开河','160327003','03','计算机导论&数据结构&数据库原理','学生'),('李真骁','160327004','04','计算机导论&数据结构&数据库原理','学生');
/*!40000 ALTER TABLE `stuinfotabl` ENABLE KEYS */;
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
