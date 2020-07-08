CREATE DATABASE "pet_adopter";

USE "pet_adopter";

CREATE TABLE `pet_adopter`.`users` (
    'UserID' INT UNSIGNED NOT NULL AUTO_INCREMENT,
    'Email' VARCHAR(256) NOT NULL,
    'Location' INT UNSIGNED NULL,
    'PetPreference' SET('dog', 'cat', 'both', 'other', 'any') NULL,
    PRIMARY KEY ('UserID'));


CREATE TABLE `pet_adopter`.`wishlist` (
    'IDWishlist' INT UNSIGNED NOT NULL AUTO_INCREMENT,
    'UserID' INT UNSIGNED NOT NULL,
    'PetID' INT UNSIGNED NOT NULL,
    'ImageURL' VARCHAR(256) NULL,
    PRIMARY KEY ('IDWishlist'),
    INDEX 'UserID_idx' ('UserID' ASC),
    CONSTRAINT 'UserID'
    FOREIGN KEY ('UserID')
    REFERENCES 'pet_adopter'.'users' ('UserID')
    ON DELETE CASCADE
    ON UPDATE CASCADE);