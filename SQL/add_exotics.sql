-- This sql script will add exotic cars to my MariaDB database
USE Cars;
INSERT INTO Exotics (id, brand, model, year, automatic, price, topSpeed)
values (ROUND(RAND()*(999999-100000)+100000, 0), 'Lamborghini', 'Aventador', 2016, 'No', 245000, '226 mph'), 
(ROUND(RAND()*(999999-100000)+100000, 0), 'Aston Martin', 'DB9', 2017, 'Yes', 127000, '202 mph'),
(ROUND(RAND()*(999999-100000)+100000, 0), 'Ford', 'GT', 2019, 'Yes', 254000, '225 mph'),
(ROUND(RAND()*(999999-100000)+100000, 0), 'Pagani', 'Zonda', 2010, 'No', 173000, '211 mph'),
(ROUND(RAND()*(999999-100000)+100000, 0), 'Chrysler', 'ME-4 12', 2004, 'Yes', 251000, '225 mph'),
(ROUND(RAND()*(999999-100000)+100000, 0), 'Ferrari', 'FXX-K', 2016, 'No', 311000, '230 mph');