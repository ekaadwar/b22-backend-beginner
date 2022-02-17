-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 17 Feb 2022 pada 19.04
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `coffee`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `categories`
--

CREATE TABLE `categories` (
  `id` int(3) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Favorite Product', '2021-12-01 12:19:56', NULL),
(2, 'coffee', '2021-12-01 12:28:10', NULL),
(3, 'non coffee', '2021-12-01 12:28:21', NULL),
(4, 'foods', '2021-12-01 12:28:29', NULL),
(5, 'add on', '2021-12-01 12:28:42', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `items`
--

CREATE TABLE `items` (
  `id` int(3) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `category_id` int(3) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `items`
--

INSERT INTO `items` (`id`, `name`, `price`, `category_id`, `created_at`, `updated_at`) VALUES
(5, 'Kopi Susu Bu Susi', 10000, 2, '2021-11-20 11:34:01', NULL),
(7, 'Kopi Hitam Ndeso', 18000, 2, '2021-11-20 11:35:40', NULL),
(12, 'Kopi Sanger aceh', 20000, 2, '2021-12-30 20:27:21', NULL),
(13, 'Kopi sidikalang', 18000, 2, '2021-12-30 20:27:21', NULL),
(14, 'kopi jahe lombok', 18000, 2, '2021-12-30 20:27:21', NULL),
(16, 'teh tarik', 12000, 3, '2021-12-30 20:29:36', NULL),
(17, 'teh tubruk', 12000, 3, '2021-12-30 20:29:36', NULL),
(18, 'wedang jahe', 10000, 3, '2021-12-30 20:29:36', NULL),
(21, 'pisang goreng', 12000, 4, '2022-01-01 21:27:00', NULL),
(23, 'indomie rebus', 10000, 4, '2022-01-01 21:27:00', NULL),
(24, 'telor', 3000, 5, '2022-01-01 21:27:00', NULL),
(25, 'sukun goreng', 15000, 4, '2022-01-01 21:27:00', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int(3) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(100) NOT NULL,
  `description` text NOT NULL,
  `quantity` int(11) NOT NULL,
  `delivery_on` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `quantity`, `delivery_on`, `created_at`, `updated_at`) VALUES
(33, 'Arabika Sidomukti', 21000, 'Kopi Arabika lamak bana', 1000, 'Delivery only on Monday to friday at  1 - 7 pm', '2021-12-04 09:48:32', '2021-12-06 11:09:45'),
(34, 'Honey Arabika Gayo', 25000, 'Lamak bana', 1000, 'Delivery only on Monday to friday at  1 - 7 pm', '2021-12-04 10:33:48', '2021-12-06 11:09:45'),
(35, 'Natural Java Robusta', 30000, 'Lamak bana', 1000, 'Delivery only on Monday to friday at  1 - 7 pm', '2021-12-04 10:34:24', '2021-12-06 11:09:45'),
(36, 'Luak Liar Aceh Gayo', 70000, 'Lamak bana', 1000, 'Delivery only on Monday to friday at  1 - 7 pm', '2021-12-04 10:35:00', '2021-12-06 11:09:45'),
(37, 'Kopi Jahe', 18000, 'Lamak bana', 1000, 'Delivery only on Monday to friday at  1 - 7 pm', '2021-12-04 10:35:26', '2021-12-06 11:09:45'),
(38, 'Kopi Susu', 18000, 'Lamak Bana', 1000, 'Delivery only on Monday to friday at  1 - 7 pm', '2021-12-04 10:36:04', '2021-12-06 11:09:45'),
(39, 'Choco Latte', 20000, 'Lamak Bana', 1000, 'Delivery only on Monday to friday at  1 - 7 pm', '2021-12-04 10:37:40', '2021-12-06 11:09:45'),
(40, 'Macha Green Latte', 27000, 'Lamak Bana', 1000, 'Delivery only on Monday to friday at  1 - 7 pm', '2021-12-04 10:38:29', '2021-12-06 11:09:45'),
(41, 'Nasi Goreng Special', 45000, 'Lamak Bana', 1000, 'Delivery only on Monday to friday at  1 - 7 pm', '2021-12-04 10:39:38', '2021-12-06 11:09:45'),
(42, 'Bakmi Goreng Seafood', 45000, 'Lamak Bana', 1000, 'Delivery only on Monday to friday at  1 - 7 pm', '2021-12-04 10:40:05', '2021-12-06 11:09:45'),
(43, 'Paket Sup Iga', 45000, '75000', 1000, 'Delivery only on Monday to friday at  1 - 7 pm', '2021-12-04 10:40:43', '2021-12-06 11:09:45'),
(44, 'Nasi Goreng Seafood', 30000, 'Lamak Bana', 1000, 'Delivery only on Monday to friday at  1 - 7 pm', '2021-12-04 10:41:49', '2021-12-06 11:09:45'),
(45, 'Nasi Putih', 5000, 'Lamak Bana', 1000, 'Delivery only on Monday to friday at  1 - 7 pm', '2021-12-04 10:42:10', '2021-12-06 11:09:45'),
(46, 'Telur', 5000, 'Lamak Bana', 1000, 'Delivery only on Monday to friday at  1 - 7 pm', '2021-12-04 10:42:26', '2021-12-06 11:09:45'),
(47, 'Sambal', 5000, 'Lamak Bana', 1000, 'Delivery only on Monday to friday at  1 - 7 pm', '2021-12-04 10:42:47', '2021-12-06 11:09:45'),
(48, 'Lalapna', 5000, 'Lamak Bana', 1000, 'Delivery only on Monday to friday at  1 - 7 pm', '2021-12-04 10:42:59', '2021-12-06 11:09:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `product_categories`
--

CREATE TABLE `product_categories` (
  `id` int(3) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_category` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product_categories`
--

INSERT INTO `product_categories` (`id`, `id_product`, `id_category`, `created_at`, `updated_at`) VALUES
(11, 32, 1, '2021-12-04 04:01:26', NULL),
(12, 32, 2, '2021-12-04 04:01:26', NULL),
(13, 33, 1, '2021-12-04 09:48:32', NULL),
(14, 33, 2, '2021-12-04 09:48:32', NULL),
(15, 34, 1, '2021-12-04 10:33:49', NULL),
(16, 34, 2, '2021-12-04 10:33:49', NULL),
(17, 35, 1, '2021-12-04 10:34:24', NULL),
(18, 35, 2, '2021-12-04 10:34:24', NULL),
(19, 36, 1, '2021-12-04 10:35:00', NULL),
(20, 36, 2, '2021-12-04 10:35:00', NULL),
(21, 37, 1, '2021-12-04 10:35:26', NULL),
(22, 37, 2, '2021-12-04 10:35:26', NULL),
(23, 38, 2, '2021-12-04 10:36:04', NULL),
(24, 39, 3, '2021-12-04 10:37:40', NULL),
(25, 40, 3, '2021-12-04 10:38:29', NULL),
(26, 41, 1, '2021-12-04 10:39:38', NULL),
(27, 41, 4, '2021-12-04 10:39:38', NULL),
(28, 42, 1, '2021-12-04 10:40:05', NULL),
(29, 42, 4, '2021-12-04 10:40:05', NULL),
(30, 43, 1, '2021-12-04 10:40:43', NULL),
(31, 43, 4, '2021-12-04 10:40:43', NULL),
(32, 44, 4, '2021-12-04 10:41:49', NULL),
(33, 45, 5, '2021-12-04 10:42:10', NULL),
(34, 46, 5, '2021-12-04 10:42:26', NULL),
(35, 47, 5, '2021-12-04 10:42:47', NULL),
(36, 48, 5, '2021-12-04 10:42:59', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `product_variants`
--

CREATE TABLE `product_variants` (
  `id` int(3) NOT NULL,
  `additional_price` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_variant` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `product_variants`
--

INSERT INTO `product_variants` (`id`, `additional_price`, `id_product`, `id_variant`, `created_at`, `updated_at`) VALUES
(1, 0, 33, 1, '2021-12-05 00:09:28', NULL),
(2, 3000, 33, 2, '2021-12-05 00:09:28', NULL),
(3, 5000, 33, 3, '2021-12-05 00:09:28', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(3) NOT NULL,
  `display_name` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `mobile_number` varchar(20) NOT NULL,
  `address` text DEFAULT NULL,
  `first_name` varchar(20) DEFAULT NULL,
  `last_name` varchar(20) DEFAULT NULL,
  `gender` enum('Pria','Wanita') DEFAULT NULL,
  `birth` varchar(100) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `display_name`, `email`, `password`, `mobile_number`, `address`, `first_name`, `last_name`, `gender`, `birth`, `created_at`, `updated_at`) VALUES
(1, 'Jill Valentinus', 'user2@email.com', 'Jill', '082156438756', 'Gading Grande 10 FH, Kelapa Gading, Jakarta Utara', 'Jill', 'Valentine', 'Wanita', '1996-09-27', '2022-02-04 02:19:53', NULL),
(3, NULL, 'ekafajhariadwar@gmail.com', '1234567890', '082167895432', NULL, NULL, NULL, NULL, NULL, '2022-02-06 01:05:12', NULL),
(4, NULL, 'bangjono@gmail.com', '1234567890', '082167895433', NULL, NULL, NULL, NULL, NULL, '2022-02-06 02:43:20', NULL),
(5, NULL, 'kangasep@gmail.com', '1234567890', '082167895434', NULL, NULL, NULL, NULL, NULL, '2022-02-06 02:43:37', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `variants`
--

CREATE TABLE `variants` (
  `id` int(3) NOT NULL,
  `additional_price` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `code` varchar(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `variants`
--

INSERT INTO `variants` (`id`, `additional_price`, `name`, `code`, `created_at`, `updated_at`) VALUES
(1, 0, 'Regular', 'R', '2021-12-05 03:57:30', NULL),
(2, 3000, 'Large', 'L', '2021-12-05 03:58:50', NULL),
(3, 5000, 'Extra Large', 'XL', '2021-12-05 03:58:50', NULL);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `product_variants`
--
ALTER TABLE `product_variants`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `variants`
--
ALTER TABLE `variants`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `items`
--
ALTER TABLE `items`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT untuk tabel `product_categories`
--
ALTER TABLE `product_categories`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT untuk tabel `product_variants`
--
ALTER TABLE `product_variants`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `variants`
--
ALTER TABLE `variants`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
