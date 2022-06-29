-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 29, 2022 at 07:32 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mysteria_node`
--

-- --------------------------------------------------------

--
-- Table structure for table `food_menu`
--

CREATE TABLE `food_menu` (
  `food_id` int(11) NOT NULL,
  `food_name` varchar(60) NOT NULL,
  `food_category` varchar(80) NOT NULL,
  `imagePath` varchar(300) NOT NULL,
  `ingredient` varchar(2000) NOT NULL,
  `price` double NOT NULL,
  `date_added` date NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 10
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `food_menu`
--

INSERT INTO `food_menu` (`food_id`, `food_name`, `food_category`, `imagePath`, `ingredient`, `price`, `date_added`, `quantity`) VALUES
(1, 'Cocktail Meatballs', 'Appetizer', '../../resources/images/Grape-Jelly-Cocktail-Meatballs-.jpg', 'Frozen Meatballs, Grape Jelly, Chili Sauce', 150, '2022-04-11', 7),
(2, 'Strawberry Salsa', 'Appetizer', '../../resources/images/Strawberry.jpg', 'Fresh Strawberries, Plum tomatoes, Red onion, Jalapeno Peppers.', 200, '2022-04-11', 8),
(3, 'Grilled Guacamole', 'Appetizer', '../../resources/images/Guacamole.jpg', 'Ripe Avocadoes, Red onion, Tomatoes, Jalapeno pepper.', 137, '2022-04-11', 10),
(4, 'Grilled Zucchini with Peanut Chicken', 'Appetizer', '../../resources/images/Grilled-Zucchini.jpg', 'Zucchini, Creamy Peanut Butter, Shredded Cooked Chicken.', 149, '2022-04-11', 10),
(5, 'Samosa', 'Appetizer', '../../resources/images/Samosas.jpg', 'Flour, Red onion, Potatoes, Peas, Cumin seeds.', 65, '2022-04-11', 10),
(6, 'Chicken Cutlet', 'Appetizer', '../../resources/images/Cutlets.jpg', 'Ground Chicken, Smashed Potatoes, Chili, Ginger, Garlic, Corn powders.', 169, '2022-04-11', 10),
(7, 'cherry tomato salad', 'Appetizer', '../../resources/images/cherry tomato sald.jpg', 'Cherry tomatoes, White vinegar,Parsely, Basil, Oregano.', 99, '2022-04-11', 10),
(8, 'Strawberry Kale Salad', 'Appetizer', '../../resources/images/Strawberry-Kale-Salad.jpg', 'Strawberries, Crumbled feta cheese, Vinegar, KaleSlivered Almonds.', 124, '2022-04-11', 10),
(9, 'Sweetheart Cookies', 'Dessert', '../../resources/images/Sweetheart-Cookies.jpg', 'Raspberry or Strawberry, Butter, Flour, Egg yolk, sugar.', 100, '2022-04-11', 10),
(10, 'Peanut Butter Cookies', 'Dessert', '../../resources/images/Old-Fashioned-Peanut-Butter-Cookies.jpg', 'Peanut butter, Brown sugar, Flour, Eggs, Baking soda.', 100, '2022-04-11', 10),
(11, 'Peanut Butter Cookies', 'Dessert', '../../resources/images/Old-Fashioned-Peanut-Butter-Cookies.jpg', 'Peanut butter, Brown sugar, Flour, Eggs, Baking soda.', 100, '2022-04-11', 10),
(12, 'Easy Blueberry Sauce', 'Dessert', '../../resources/images/Easy-Blueberry-Sauce.jpg', 'Cornstarch, Blueberries, Lemon zest, vanilla ice-cream.', 150, '2022-04-11', 10),
(13, 'Orange-LemonCake', 'Dessert', '../../resources/images/Orange-Lemon-Cake.jpg', 'Orange juice, Lemon cake, Orange gelatin, Eggs, Flour.', 125, '2022-04-11', 10),
(14, 'Bread', 'Dessert', '../../resources/images/exps.jpg', 'Package Chocolate, Cream Cheese, Egg, semi-sweet chocolate chips, Semi-sweet chocolate chips.', 125, '2022-04-11', 10),
(15, 'Rich Hot Fudge Sauce', 'Dessert', '../../resources/images/Rich-Hot-Fudge-Sauce.jpg', 'Vanilla ice-cream, Strawberry jam, Miniature semi-sweet chocolate chips.', 100, '2022-04-11', 10),
(16, 'Chocolate Pudding', 'Dessert', '../../resources/images/Homemade-Chocolate-Pudding.jpg', 'Baking cocoa, Cornstarch, sugar, Milk, vanilla, Sweetened whipped cream and M&M\'s (optional). ', 163, '2022-04-11', 10),
(17, 'Vanilla Ice-cream', 'Dessert', '../../resources/images/Vanilla-Ice-Cream.jpg', 'Vanilla ice-cream, Strawberry jam, Miniature semi-sweet chocolate chips.', 100, '2022-04-11', 10),
(18, 'Grilled Pineapple with Lime Dip', 'Dessert', '../../resources/images/Grilled-Pineapple-with-Lime-Dip.jpg', 'Pineapple, Cream Cheese, Honey, lime juice, Plain yogurt, brown sugar.', 100, '2022-04-11', 10),
(19, 'Strawberry Trifle', 'Dessert', '../../resources/images/Strawberry-Trifle.jpg', 'Strawberries, Whipping Cream, Vanilla pudding, orange zest.', 100, '2022-04-11', 10),
(20, 'Tea', 'Drink', '../../resources/images/tea.jpeg', '', 50, '2022-03-12', 10),
(21, 'Chocolate milkshake', 'Drink', '../../resources/images/cup-chocolate-milkshake-caramel.jpg', '', 150, '2022-03-12', 10),
(22, 'Coffee', 'Drink', '../../resources/images/coffee.jpeg', '', 70, '2022-03-12', 10),
(23, 'Vanilla milkshake', 'Drink', '../../resources/images/vanillacapshake.jpeg', '', 150, '2022-03-12', 10),
(24, 'Green Tea', 'Drink', '../../resources/images/green tea.jpg', '', 50, '2022-03-12', 10),
(25, 'strawberry milkshake', 'Drink', '../../resources/images/strawberry-milkshake.jpg', '', 150, '2022-03-12', 10),
(26, 'Hot Chocolate', 'Drink', '../../resources/images/hotchak.jpg', '', 70, '2022-03-12', 10),
(27, 'Oreo milkshake', 'Drink', '../../resources/images/oreo milkshake.jpg', '', 70, '2022-03-12', 10),
(28, 'Macchiato', 'Drink', '../../resources/images/macciato.jpeg', '', 70, '2022-03-12', 10),
(29, 'Home Special', 'Drink', '../../resources/images/milkshake-ice-cream-chocolate.jpg', '', 150, '2022-03-12', 10),
(30, 'Orange juice', 'Drink', '../../resources/images/orange.jpg', '', 100, '2022-03-12', 10),
(31, 'Habesha Beer', 'Drink', '../../resources/images/habesha.jpeg', '', 50, '2022-03-12', 10),
(32, 'Carrot juice', 'Drink', '../../resources/images/carrot.jpg', '', 100, '2022-03-12', 10),
(33, 'Giorgis Beer', 'Drink', '../../resources/images/Giorgis.jpeg', '', 100, '2022-03-12', 10),
(34, 'Avocado juice', 'Drink', '../../resources/images/avocado.jpeg', '', 50, '2022-03-12', 10),
(35, 'Heinken Beer', 'Drink', '../../resources/images/heniken.jpeg', '', 50, '2022-03-12', 10),
(36, 'Apple juice', 'Drink', '../../resources/images/apple.jpeg', '', 100, '2022-03-12', 10),
(37, 'wine.jpeg', 'Drink', '../../resources/images/wine.jpeg', '', 150, '2022-03-12', 10),
(38, 'Juice Plus', 'Drink', '../../resources/images/juicePlus.jpeg', '', 100, '2022-03-12', 10),
(39, 'Tej', 'Drink', '../../resources/images/tej.jpeg', '', 70, '2022-03-12', 10),
(40, 'Chicken Wrap', 'Meatatarian', '../../resources/images/chicken_wrap.jpg', 'chicken breasts, garlic herb cheese,tortilas,lettuce leaves, tomatoes,cucumber,carrot.', 150, '2022-03-13', 10),
(41, 'Chicken Grilled', 'Meatatarian', '../../resources/images/Roast-Chicken.jpg', 'chicken, all purpose flour,garlic salt,paprika, pepper,poultry seasoning,eggs,oil.', 265, '2022-03-13', 7),
(42, 'Cheese Burger', 'Meatatarian', '../../resources/images/grilled cheese burger.jpg', 'Beef, Worcestershire sauce, garlic powder,pepper, olive oil,butter,onion, American Cheese,bread.', 177, '2022-03-13', 9),
(43, 'Doro Wot', 'Meatatarian', '../../resources/images/Doro Wet.jpg', 'Chicken, Red onion, Garlic, Pepper, Egg, Butter.', 315, '2022-03-13', 10),
(44, 'Traditional Tibs', 'Meatatarian', '../../resources/images/Tibs.jpg', 'Beef, Tomato, Red onion, Garlic, Butter, Rosemary.', 315, '2022-03-13', 10),
(45, 'Traditional all in one (fasting)', 'Meatatarian', '../../resources/images/ye tsom.jpeg', 'Vegies, Cereals, Rice, Soups.', 153, '2022-03-13', 9),
(46, 'Traditional all in one (Non-fasting)', 'Meatatarian', '../../resources/images/ye fesk.jpg', 'Beef (all kind), Egg.', 215, '2022-03-13', 9),
(47, 'Crispy Fried Chicken', 'Meatatarian', '../../resources/images/Crispy-Fried-Chicken.jpg', 'Barbeque sause,chicken,pepper, onion,cheese, Tomato Sauce.', 250, '2022-03-13', 8),
(48, 'BBQ Chicken Pizza', 'Meatatarian', '../../resources/images/pizza.jpg', 'Flour, Mozzarella Cheese, Tomato Sauce.', 250, '2022-03-13', 9),
(49, 'Margheritta Pizza', 'Meatatarian', '../../resources/images/BBQ-Ranch-Chicken-Pizza.jpg', 'yeast,olive oil,sugar, bread flour,basil leaves,oregano, mozzarella cheese,pepper,tomatoes.', 250, '2022-03-13', 8),
(50, 'Vegiterian Pizza', 'Meatatarian', '../../resources/images/pizza.png', 'red peppers,mushroom,tomatoes, black olives,mozzarella, garlic,spinach.', 110, '2022-03-13', 9),
(51, 'Shekla Tibs', 'Meatatarian', '../../resources/images/tibs (2).jpg', 'Beef, Red onion, Garlic, Pepper, Injera, Bread.', 110, '2022-03-13', 9),
(52, 'Beef Fillets with Portobello Sauce', 'Meatatarian', '../../resources/images/Beef-Fillets-with-Portobello-Sauce.jpg', 'Flour, Mozzarella Cheese, Tomato Sauce.', 110, '2022-03-13', 9),
(53, 'Crispy Beer Battered Fish', 'Meatatarian', '../../resources/images/Crispy-Beer-Battered-Fish.jpg', 'Cod fillets, Cornstarch, Baking powder, Paprika, Creole seasoning.', 350, '2022-03-13', 9),
(54, 'garlic grilled steaks', 'Meatatarian', '../../resources/images/garlic grilled steaks.jpg', 'Garlic cloves, Worcestershire sauce, Boneless beef strip/ ribeye steaks.', 379, '2022-03-13', 8),
(55, 'Creamy chicken with potatoes,chorizo and leeks', 'Special', '../../resources/images/creamy chicken.png', 'Chicken breasts spanish chorizo, Garlic, potato, yellow onion, small leak, kosher salt, olive oil, paprika, red pepper chicken broth, white wine, heavy cream chives,parsley leaves,', 486, '2022-02-14', 10),
(56, 'Warm salad with lamb chops and meditrranean dressing', 'Special', '../../resources/images/warm salad.png', 'Lamb ribs olive oil,red wine vinegar,green onion marjoram,thyme,black peeper raddicho,cherry tomatoes,spinach', 520, '2022-02-14', 10),
(57, 'Japanese roast chicken', 'Special', '../../resources/images/japanese roast.png', 'Chicken navel orange,carrot,olive oilbutter, Japanese spice mix,chicken broth sesame oil, fresh herbs,baby boy choy', 398, '2022-02-14', 10),
(58, 'Orange-LemonCake,chorizo and leeks', 'Special', '../../resources/images/Orange-Lemon-Cake.jpg', 'Orange juice, Lemon cake, Orange gelatin, Eggs, Flour.', 125, '2022-02-14', 10),
(59, 'Bread', 'Special', '../../resources/images/exps.jpg', 'Package Chocolate, Cream Cheese, Egg, semi-sweet chocolate chips, Semi-sweet chocolate chips.', 125, '2022-02-14', 10),
(60, 'Lamb chops with blackberry-pear,chorizo and leeks', 'Special', '../../resources/images/lamb-chops.png', 'Lamb ribs pear,green onoins,cloves vegitable oil, blackberries,red wine vinegar allspice,black peeper', 478, '2022-02-14', 10),
(61, 'Black Bean and Rice', 'vegetarian', '../../resources/images/Black-Bean-and-Rice.jpg', 'Kidney beans, Brown rice, Italian Seasoning, Bay leaf, Tomato sauce, chili powder.', 150, '2022-01-14', 7),
(62, 'Chili Lime Mushroom Tacos', 'vegetarian', '../../resources/images/Chili-Lime-Mushroom Tacos_.jpg', 'Fresh lime, Mushroom, Red chili.', 200, '2022-01-14', 9),
(63, 'Slow Cooker Veggie Lasagna', 'vegetarian', '../../resources/images/Slow-Cooker-Veggie-Lasagna.jpg', 'Vegetable bouillon, Whole wheat lasagna sheets, Tomatoes, courgettes.', 137, '2022-01-14', 10),
(64, 'Zucchini Lasagna Rolls', 'vegetarian', '../../resources/images/Zucchini-Lasagna-Rolls.jpg', 'Zucchini, Italian sausage, Skim ricotta cheese.', 149, '2022-01-14', 10),
(65, 'Southern Okra Bean Stew', 'vegetarian', '../../resources/images/Southern-Okra-Bean-Stew.jpg', 'Kidney beans, Diced Tomatoes, Garlic, Hot sauce.', 66, '2022-01-14', 9),
(66, 'Pierog', 'vegetarian', '../../resources/images/Pierog.jpg', 'Flour, Potatoes, onions, Chili, Ginger, Garlic, Corn powders.', 169, '2022-01-14', 10),
(67, 'Rustic Squash Tarts', 'vegetarian', '../../resources/images/Rustic-Squash-Tarts.jpg', 'Butternut squash, Red onion, Garlic, olive oil, Acorn squash.', 99, '2022-01-14', 10),
(130, 'Pasta with cabbage', 'Vegetarian', '../../resources/images/pastas.png', 'pasta, cabbage, onion', 65, '2022-05-19', 10);

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `user_id` int(11) NOT NULL,
  `username` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`user_id`, `username`, `email`, `password`) VALUES
(1, 'red', 'rberane383@gmail.com', '$2a$10$0pSMGZyz2/VT1GzC/0DLa.B.5Fw7lBnAklg2yuCv3Cz930rpzE.oa'),
(2, 'yyy', 'rberhane383@gmail.com', '$2a$10$0pSMGZyz2/VT1GzC/0DLa.B.5Fw7lBnAklg2yuCv3Cz930rpzE.oa'),
(3, 'in', 'rberhane383@gmail.com', '$2a$10$0pSMGZyz2/VT1GzC/0DLa.B.5Fw7lBnAklg2yuCv3Cz930rpzE.oa'),
(11, 'pt', 'paulman7792@gmail.com', '$2a$10$0pSMGZyz2/VT1GzC/0DLa.B.5Fw7lBnAklg2yuCv3Cz930rpzE.oa'),
(14, 'paulos', 'paulman7792@gmail.com', '$2a$10$7agboO8WQThx1B1ivJ8T7upzMItix6PLrpwDfu/Yuu1y/BnUHT8ma');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `food_menu`
--
ALTER TABLE `food_menu`
  ADD PRIMARY KEY (`food_id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `food_menu`
--
ALTER TABLE `food_menu`
  MODIFY `food_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=223;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
