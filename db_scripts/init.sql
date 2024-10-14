-- MySQL dump 10.13  Distrib 8.0.39, for Linux (aarch64)
--
-- Host: localhost    Database: my_db
-- ------------------------------------------------------
-- Server version	8.0.39
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;

/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;

/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;

/*!50503 SET NAMES utf8mb4 */;

/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;

/*!40103 SET TIME_ZONE='+00:00' */;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contacts`
--
DROP TABLE IF EXISTS `contacts`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `contacts` (
    `id` int NOT NULL AUTO_INCREMENT,
    `firstName` varchar(255) NOT NULL,
    `lastName` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `phoneNumber` varchar(255) NOT NULL,
    `city` varchar(255) NOT NULL,
    `postalCode` varchar(255) NOT NULL,
    `comment` varchar(255) NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 9 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--
LOCK TABLES `contacts` WRITE;

/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;

INSERT INTO
  `contacts`
VALUES
  (
    1,
    'James',
    'Tanthikun',
    'james@test.com',
    '4035557890',
    'Calgary',
    'A9A 9A9',
    'test',
    '2024-10-13 07:26:08',
    '2024-10-13 07:26:08'
  ),
  (
    2,
    'John',
    'Doe',
    'john.doe@example.com',
    '403-123-4567',
    'Calgary',
    'T2P 1J9',
    'This is a test comment.',
    '2024-10-13 12:00:00',
    '2024-10-13 12:00:00'
  ),
  (
    3,
    'Jane',
    'Smith',
    'jane.smith@example.com',
    '587-987-6543',
    'Toronto',
    'M5G 2L2',
    'Another sample comment.',
    '2024-10-13 12:00:00',
    '2024-10-13 12:00:00'
  ),
  (
    4,
    'Michael',
    'Johnson',
    'michael.johnson@example.com',
    '416-555-7890',
    'Vancouver',
    'V6E 3X2',
    'Dummy data for testing.',
    '2024-10-13 12:00:00',
    '2024-10-13 12:00:00'
  ),
  (
    5,
    'Emily',
    'Brown',
    'emily.brown@example.com',
    '780-765-4321',
    'Edmonton',
    'T5J 3S2',
    'Additional test comment.',
    '2024-10-13 12:00:00',
    '2024-10-13 12:00:00'
  );

/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;

UNLOCK TABLES;

--
-- Table structure for table `employees`
--
DROP TABLE IF EXISTS `employees`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;

/*!50503 SET character_set_client = utf8mb4 */;

CREATE TABLE
  `employees` (
    `id` char(36) CHARACTER
    SET
      utf8mb4 COLLATE utf8mb4_bin NOT NULL,
      `firstName` varchar(255) NOT NULL,
      `lastName` varchar(255) NOT NULL,
      `position` varchar(255) NOT NULL,
      `photo` varchar(255) DEFAULT NULL,
      `bio` text,
      `createdAt` datetime NOT NULL,
      `updatedAt` datetime NOT NULL,
      PRIMARY KEY (`id`)
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--
LOCK TABLES `employees` WRITE;

/*!40000 ALTER TABLE `employees` DISABLE KEYS */;

INSERT INTO
  `employees`
VALUES
  (
    '62c1075f-8688-4ac1-a313-f9b09e5097f4',
    'Daniel',
    'Carter',
    'Interior Design Specialist',
    'daniel_carter.jpeg',
    'Alexandra transforms spaces into personal sanctuaries. Her expertise in blending modern design with timeless elements ensures that every room she touches becomes a reflection of her client’s unique personality and lifestyle. From cozy living rooms to functional home offices, she makes spaces come alive.',
    '2024-10-13 02:39:40',
    '2024-10-13 02:39:45'
  ),
  (
    '9a8d5e3b-782a-4483-b751-4f2a41c22471',
    'David',
    'Reynolds',
    'Client Relations Manager',
    'david_reynolds.jpeg',
    'David is the friendly face behind the scenes, making sure every client feels heard and valued. With his background in hospitality and client services, he ensures that all interactions are smooth, efficient, and tailored to meet the needs of each individual. He’s always ready to assist with any inquiries.',
    '2024-10-13 02:39:40',
    '2024-10-13 02:39:45'
  ),
  (
    'f8864431-6f4e-4b91-9184-576bf482c3c6',
    'Emma',
    'Thompson',
    'Lead Photographer',
    'emma_thompson.jpeg',
    'With over 10 years of experience in capturing life’s most beautiful moments, Emma has a keen eye for detail and a passion for telling stories through her lens. Whether it’s a family portrait or an intimate event, she ensures that every shot reflects the emotion and connection of the moment.',
    '2024-10-13 02:39:40',
    '2024-10-13 02:39:45'
  );

/*!40000 ALTER TABLE `employees` ENABLE KEYS */;

UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;

/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;

/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-14  5:46:03