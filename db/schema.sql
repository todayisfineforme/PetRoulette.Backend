DROP DATABASE IF EXISTS pet_adopter;

CREATE DATABASE pet_adopter;

USE pet_adopter;

CREATE TABLE user(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR (30) NOT NULL,
    email VARCHAR (256) NOT NULL,
    `password` VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE wishlist
 (
    `id` INT NOT NULL AUTO_INCREMENT,
    `userId` INT NOT NULL,
    `petId` INT NOT NULL,
    PRIMARY KEY(`id`),
    CONSTRAINT `user_id` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON UPDATE CASCADE
);
