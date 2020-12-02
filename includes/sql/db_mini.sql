-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 02, 2020 at 11:50 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
 

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_mini`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_models`
--

DROP TABLE IF EXISTS `tbl_models`;
CREATE TABLE IF NOT EXISTS `tbl_models` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `details` varchar(200) NOT NULL,
  `acceleration` varchar(50) NOT NULL,
  `accImg` varchar(50) NOT NULL,
  `horsepower` varchar(50) NOT NULL,
  `hpImg` varchar(50) NOT NULL,
  `torque` varchar(50) NOT NULL,
  `tqImg` varchar(50) NOT NULL,
  `image` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_models`
--

INSERT INTO `tbl_models` (`id`, `name`, `details`, `acceleration`, `accImg`, `horsepower`, `hpImg`, `torque`, `tqImg`, `image`) VALUES
(1, 'CONVERTIBLE', '3-in-1 soft top roof design.,Rain Warning feature for rain alerts when top is down.,Luggage compartment with Easy Load Function.', '6.3 sec', 'convertibleACC.svg', '228 hp', 'convertibleHP.svg', '236 ft/lb', 'convertibleTQ.svg', 'convertible.png'),
(2, '3 DOOR', 'Iconic MINI design; a direct descendant of John Cooper’s first Mini.,The highest top speed of any MINI model.,Driver-centric cockpit technology.', '6.1 sec', '3doorACC.svg', '228 hp', '3doorHP.svg', '236 ft/lb', '3doorTQ.svg', '3door.png'),
(3, 'CLUBMAN', 'Sophisticated and spacious cabin design.,ALL4 All-Wheel Drive versatility.,Practical split rear doors.', '4.9 sec', 'clubmanACC.svg', '301 hp', 'clubmanHP.svg', '331 ft/lb', 'clubmanTQ.svg', 'clubman.png'),
(4, 'COUNTRYMAN', 'The most spacious MINI ever produced.,ALL4 All-Wheel Drive off-road capabilities.,Higher seating position.', '6.1 sec', 'clubmanTQ.svg', '301 hp', 'countrymanHP.svg', '358 ft/lb', 'countrymanTQ.svg', 'countryman.png');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_specs`
--

DROP TABLE IF EXISTS `tbl_specs`;
CREATE TABLE IF NOT EXISTS `tbl_specs` (
  `spec_id` int(11) NOT NULL AUTO_INCREMENT,
  `acceleration` varchar(50) NOT NULL,
  `horsepower` varchar(50) NOT NULL,
  `torque` varchar(50) NOT NULL,
  PRIMARY KEY (`spec_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_specs`
--

INSERT INTO `tbl_specs` (`spec_id`, `acceleration`, `horsepower`, `torque`) VALUES
(1, '6.3 sec,convertibleACC.svg', '228 hp,convertibleHP.svg', '236 ft/lb,convertibleTQ.svg'),
(2, '6.1 sec,3doorACC.svg', '228 hp,3doorHP.svg', '236 ft/lb,3doorTQ.svg'),
(3, '4.9 sec,clubmanACC.svg', '301 hp,clubmanHP.svg', '331 ft/lb,clubmanTQ.svg'),
(4, '6.1 sec,countrymanACC.svg', '301 hp,countrymanHP.svg', '358 ft/lb,countrymanTQ.svg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
