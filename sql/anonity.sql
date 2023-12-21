-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2023 at 12:31 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `anonity`
--

-- --------------------------------------------------------

--
-- Table structure for table `chats`
--

CREATE TABLE `chats` (
  `users` varchar(500) NOT NULL,
  `chatdata` varchar(10000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chats`
--

INSERT INTO `chats` (`users`, `chatdata`) VALUES
('ars/ars', ''),
('ars/arsd', 'ars@$:$@hi,ars@$:$@hey'),
('ars/arsd3', ''),
('ars/asd', ''),
('ars/asds', ''),
('ars/baba', ''),
('ars/dab', ''),
('ars/efa', ''),
('ars/Harry', 'Harry@$:$@Hey there,Harry@$:$@This is a Test Message,ars@$:$@Got the Message,ars@$:$@So whats up?,Harry@$:$@hi,ars@$:$@hello,ars@$:$@😗'),
('car/ars', 'car@$:$@babaa,ars@$:$@gaga,car@$:$@hi,ars@$:$@gel,ars@$:$@much,car@$:$@too'),
('Harry/arsd', ''),
('Harry/arsd3', ''),
('Harry/baba', ''),
('Harry/efa', ''),
('Harry/Harry', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(20) NOT NULL,
  `password` varchar(256) NOT NULL,
  `email` varchar(300) NOT NULL,
  `friends` varchar(1000) DEFAULT NULL,
  `requests` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `email`, `friends`, `requests`) VALUES
('ars', '2310', 'arsg@gmail.com', 'arsd,arsd3,baba', NULL),
('arsd', '44523', '12@gmail.com', 'ars,baba', NULL),
('arsd3', '44523', '12@gmail.com', NULL, NULL),
('asds', '21', 'asd@gmail.com', NULL, NULL),
('baba', '123', 'baba@gmail.com', NULL, NULL),
('car', '4321', 'car@gmail.com', NULL, NULL),
('dab', '123', '123asd@gm.com', NULL, NULL),
('efa', '44', '123asd@gm.com', NULL, NULL),
('Harry', 'Harry', 'sad', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chats`
--
ALTER TABLE `chats`
  ADD PRIMARY KEY (`users`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
