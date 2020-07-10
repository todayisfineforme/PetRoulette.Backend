CREATE DATABASE pet_adopter;

USE pet_adopter;

CREATE TABLE users
 (
    `UserID` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `Email` VARCHAR (256) NOT NULL,
    `Location` INT UNSIGNED NULL,
    `PetPreference` SET ('dog', 'cat', 'both', 'other', 'any') NULL,
    PRIMARY KEY (`UserID`)
    );


CREATE TABLE wishlist
 (
    `IDWishlist` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `UserID` INT UNSIGNED NOT NULL,
    `PetID` INT UNSIGNED NOT NULL,
    `ImageURL` VARCHAR(256) NULL,
    PRIMARY KEY(`IDWishlist`),
    INDEX `UserID_idx`(`UserID` ASC),
    CONSTRAINT `UserID`,
    FOREIGN KEY(`UserID`),
    REFERENCES `pet_adopter`.`users`(`UserID`),
    ON DELETE CASCADE ON UPDATE CASCADE
    );


CREATE TABLE user(
    username VARCHAR (30) NOT NULL,
    userid INT NOT NULL AUTO_INCREMENT,
    email VARCHAR (256) NOT NULL,
    `password` VARCHAR(30) NOT NULL,
    PRIMARY KEY (userid)
    );
