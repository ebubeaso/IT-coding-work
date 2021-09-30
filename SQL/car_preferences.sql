-- This SQL script will be used to strore some dummy data (For d3 graphing purposes)

-- Use the Cars database
USE Cars;
-- delete the existing table if it exists
DROP TABLE IF EXISTS CarPreferences;

-- create the table
CREATE TABLE CarPreferences(
    id int not null, CarType text not null, Likes int not null,
    PRIMARY KEY (id)
);
-- insert data into the table
INSERT INTO CarPreferences (id, CarType, Likes)
VALUES 
(ROUND(RAND() * (99999-10000)+10000 , 0), "Tuners", ROUND(RAND() * (999-100)+100, 0)), 
(ROUND(RAND() * (99999-10000)+10000 , 0), "MuscleCars", ROUND(RAND() * (999-100)+100, 0)), 
(ROUND(RAND() * (99999-10000)+10000 , 0), "Exotics", ROUND(RAND() * (999-100)+100, 0)), 
(ROUND(RAND() * (99999-10000)+10000 , 0), "LuxuryCars", ROUND(RAND() * (999-100)+100, 0)), 
(ROUND(RAND() * (99999-10000)+10000 , 0), "Trucks", ROUND(RAND() * (999-100)+100, 0)), 
(ROUND(RAND() * (99999-10000)+10000 , 0), "SUVs", ROUND(RAND() * (999-100)+100, 0)), 
(ROUND(RAND() * (99999-10000)+10000 , 0), "Bikes", ROUND(RAND() * (999-100)+100, 0)),
(ROUND(RAND() * (99999-10000)+10000 , 0), "LowRiders", ROUND(RAND() * (999-100)+100, 0));