-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 05, 2025 at 04:18 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `plushshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `name`, `pass`, `email`) VALUES
(1, 'Alice', '1234', 'alice@example.com'),
(2, 'Bob', '5678', 'bob@example.com'),
(3, 'Charlie', '9999', 'charlie@example.com');

-- --------------------------------------------------------

--
-- Table structure for table `plush`
--

CREATE TABLE `plush` (
  `id_plush` int(11) NOT NULL,
  `name_plush` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `img_url` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `plush`
--

INSERT INTO `plush` (`id_plush`, `name_plush`, `price`, `img_url`) VALUES
(1, 'Bear Brown Classic', 299.00, 'https://example.com/img/bear_brown.jpg'),
(2, 'Cute Pink Rabbit', 249.00, 'https://example.com/img/pink_rabbit.jpg'),
(3, 'Blue Penguin Soft', 320.00, 'https://example.com/img/blue_penguin.jpg'),
(4, 'Yellow Duck Plush', 199.00, 'https://example.com/img/yellow_duck.jpg'),
(5, 'Panda Hug Edition', 350.00, 'https://example.com/img/panda_hug.jpg'),
(6, 'Miku', 5000.00, 'https://m.media-amazon.com/images/I/51giX5whVaL._SS400_.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plush`
--
ALTER TABLE `plush`
  ADD PRIMARY KEY (`id_plush`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `plush`
--
ALTER TABLE `plush`
  MODIFY `id_plush` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
