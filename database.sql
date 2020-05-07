-- MySQL dump 10.13  Distrib 5.7.28, for osx10.15 (x86_64)
--
-- Host: localhost    Database: commerce_bank_api_development
-- ------------------------------------------------------
-- Server version	5.7.28

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
-- Table structure for table `account_transactions`
--

DROP TABLE IF EXISTS `account_transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account_transactions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `amount` decimal(9,2) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `description` text,
  `state` varchar(255) DEFAULT NULL,
  `hidden` tinyint(1) DEFAULT '0',
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `account_id` bigint(20) DEFAULT NULL,
  `transaction_type` varchar(255) DEFAULT NULL,
  `start_balance` decimal(9,2) DEFAULT NULL,
  `end_balance` decimal(9,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `index_account_transactions_on_account_id` (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_transactions`
--

LOCK TABLES `account_transactions` WRITE;
/*!40000 ALTER TABLE `account_transactions` DISABLE KEYS */;
INSERT INTO `account_transactions` VALUES (1,1200.00,NULL,'Commerce Bank Co.','MO',0,'2020-05-06 23:31:31.539732','2020-05-06 23:31:31.539732',1,'DR',0.00,1200.00),(2,500.00,NULL,'Bikini Bottom Taxes','MO',0,'2020-05-06 23:35:01.988190','2020-05-06 23:35:01.988190',1,'CR',1200.00,700.00),(3,12.52,NULL,'Kelp Juice','MO',0,'2020-05-07 00:33:07.194555','2020-05-07 00:33:07.194555',1,'CR',700.00,687.48),(4,32.99,NULL,'Boating school','MO',0,'2020-05-07 00:33:40.128594','2020-05-07 00:33:40.128594',1,'CR',687.48,654.49),(5,300.00,NULL,'Boating school','MO',0,'2020-05-07 02:06:13.702196','2020-05-07 02:06:13.702196',1,'CR',654.49,354.49),(6,350.00,NULL,'Boat Payment','MO',0,'2020-05-07 02:06:42.153653','2020-05-07 02:06:42.153653',1,'CR',354.49,4.49),(7,1200.00,NULL,'Shell City Tax Return','MO',0,'2020-05-07 02:08:28.150656','2020-05-07 02:08:28.150656',2,'DR',0.00,1200.00);
/*!40000 ALTER TABLE `account_transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accounts` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `account_number` int(11) NOT NULL,
  `balance` decimal(9,2) NOT NULL DEFAULT '0.00',
  `name` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_accounts_on_user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (1,1,594031083,4.49,'Savings','2020-05-06 23:30:47.241049','2020-05-07 02:06:42.164844'),(2,1,695342451,1200.00,'Christmas Fund','2020-05-07 00:31:00.245133','2020-05-07 02:08:28.165429');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ar_internal_metadata`
--

DROP TABLE IF EXISTS `ar_internal_metadata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ar_internal_metadata` (
  `key` varchar(255) NOT NULL,
  `value` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ar_internal_metadata`
--

LOCK TABLES `ar_internal_metadata` WRITE;
/*!40000 ALTER TABLE `ar_internal_metadata` DISABLE KEYS */;
INSERT INTO `ar_internal_metadata` VALUES ('environment','development','2020-05-06 23:27:48.160120','2020-05-06 23:27:48.160120'),('schema_sha1','a02d669fa3446d3710ec3f337c550f21794752b0','2020-05-06 23:27:48.168328','2020-05-06 23:27:48.168328');
/*!40000 ALTER TABLE `ar_internal_metadata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `custom_transaction_categories`
--

DROP TABLE IF EXISTS `custom_transaction_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `custom_transaction_categories` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_custom_transaction_categories_on_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `custom_transaction_categories`
--

LOCK TABLES `custom_transaction_categories` WRITE;
/*!40000 ALTER TABLE `custom_transaction_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `custom_transaction_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_histories`
--

DROP TABLE IF EXISTS `login_histories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login_histories` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `state` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_login_histories_on_user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_histories`
--

LOCK TABLES `login_histories` WRITE;
/*!40000 ALTER TABLE `login_histories` DISABLE KEYS */;
/*!40000 ALTER TABLE `login_histories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notifications` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `message` blob NOT NULL,
  `read` tinyint(1) NOT NULL DEFAULT '0',
  `user_id` bigint(20) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `title` text,
  PRIMARY KEY (`id`),
  KEY `index_notifications_on_user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (1,_binary 'Transaction of $500.0 has occurred on account 594031083. Please take time to review your transactions report anything that appears to be incorrect.\n',1,1,'2020-05-06 23:35:02.017130','2020-05-06 23:35:42.249662','Large Withdrawal'),(2,_binary 'Transaction of $350.0 has occurred on account 594031083. Please take time to review your transactions report anything that appears to be incorrect.\n',0,1,'2020-05-07 02:06:42.220988','2020-05-07 02:06:42.220988','Large Withdrawal'),(3,_binary 'Account 594031083 (Savings) has a balance below $100.0. Please review your transactions and try to reduce spending\n',0,1,'2020-05-07 02:06:42.231307','2020-05-07 02:06:42.231307','Low Account Balance');
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schema_migrations`
--

DROP TABLE IF EXISTS `schema_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schema_migrations` (
  `version` varchar(255) NOT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schema_migrations`
--

LOCK TABLES `schema_migrations` WRITE;
/*!40000 ALTER TABLE `schema_migrations` DISABLE KEYS */;
INSERT INTO `schema_migrations` VALUES ('20200303205923'),('20200328023915'),('20200328031107'),('20200403034035'),('20200405200703'),('20200406045228'),('20200413222914'),('20200413233321'),('20200414002148'),('20200415030154'),('20200415031301'),('20200415040344'),('20200418020339'),('20200503200832');
/*!40000 ALTER TABLE `schema_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `session_id` varchar(255) NOT NULL,
  `data` text,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `index_sessions_on_session_id` (`session_id`),
  KEY `index_sessions_on_updated_at` (`updated_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `triggered_events`
--

DROP TABLE IF EXISTS `triggered_events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `triggered_events` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `trigger_type` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `account_id` bigint(20) DEFAULT NULL,
  `account_transaction_id` bigint(20) DEFAULT NULL,
  `trigger_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `index_triggered_events_on_account_id` (`account_id`),
  KEY `index_triggered_events_on_account_transaction_id` (`account_transaction_id`),
  KEY `index_triggered_events_on_trigger_id` (`trigger_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `triggered_events`
--

LOCK TABLES `triggered_events` WRITE;
/*!40000 ALTER TABLE `triggered_events` DISABLE KEYS */;
INSERT INTO `triggered_events` VALUES (1,'LargeWithdrawalTrigger','2020-05-06 23:35:02.011423','2020-05-06 23:35:02.011423',1,2,1),(2,'LargeWithdrawalTrigger','2020-05-07 02:06:42.210779','2020-05-07 02:06:42.210779',1,6,1),(3,'LowAccountBalanceTrigger','2020-05-07 02:06:42.223668','2020-05-07 02:06:42.223668',1,6,2);
/*!40000 ALTER TABLE `triggered_events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `triggers`
--

DROP TABLE IF EXISTS `triggers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `triggers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `trigger_type` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `account_id` bigint(20) DEFAULT NULL,
  `bound` decimal(9,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `index_triggers_on_account_id` (`account_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `triggers`
--

LOCK TABLES `triggers` WRITE;
/*!40000 ALTER TABLE `triggers` DISABLE KEYS */;
INSERT INTO `triggers` VALUES (1,'LargeWithdrawalTrigger','2020-05-06 23:34:33.459835','2020-05-06 23:34:33.459835',1,300.55),(2,'LowAccountBalanceTrigger','2020-05-07 02:01:24.294676','2020-05-07 02:01:24.294676',1,100.00);
/*!40000 ALTER TABLE `triggers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) NOT NULL,
  `password_digest` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'patric@star.com','Patrick','Star','krabbypatty','2020-05-06 23:28:47.827009','2020-05-06 23:28:47.827009','$2a$12$ZIz9KLroFOgzzpNvD6rALOFy7OCvVwvonNUhzEfr56Xe.QrCU7tOy','CA'),(2,'spongebob@krustykrab.bikinibottom','Spongebobk','Squarepants','imreadyimready','2020-05-07 00:56:06.931029','2020-05-07 00:56:06.931029','$2a$12$f8V0VjFBo7qLsnUo6I2a6.V0kRn.WESTaqvRSKxPK8JKrjpFMkDpS','CA');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-06 21:38:27
