-- Use the Cars database
USE Cars;

-- Delete any existing table
DROP TABLE IF EXISTS LuxuryCars;

-- Recreate the table
CREATE TABLE LuxuryCars (
    id int not null,
    brand text not null,
    model text not null,
    year text not null,
    price text not null,
    primary key (id)
);
-- add data to the table
INSERT INTO LuxuryCars (id, brand, model, year, price, isAutomatic)
values (
    ROUND(RAND()*(99999-10000)+10000, 0), 'Mercedes Benz', 'CLK63 AMG', 2008, 212000
), (
    ROUND(RAND()*(999999-100000)+100000, 0), 'Audi', 'S5', 2012, 97000
), (
    ROUND(RAND()*(999999-100000)+100000, 0), 'Cadillac', 'XLRV', 2008, 112000
), (
    ROUND(RAND()*(999999-100000)+100000, 0), 'Cadillac', 'XTS', 2014, 103000
), (
    ROUND(RAND()*(999999-100000)+100000, 0), 'Mercedes Benz', 'S600', 2015, 214000
), (
    ROUND(RAND()*(999999-100000)+100000, 0), 'Rolls Royce', 'Dawn', 2019, 356500
), (
    ROUND(RAND()*(999999-100000)+100000, 0), 'BMW', 'M4', 2016, 68000
), (
    ROUND(RAND()*(999999-100000)+100000, 0), 'Bentley', 'Continental GT', 2016, 238000
), (
    ROUND(RAND()*(999999-100000)+100000, 0), 'Mercedes Benz', 'SL65 AMG' 2009, 109000
), (
    ROUND(RAND()*(999999-100000)+100000, 0), 'Bentley', 'Flying Spur', 2017, 198000
);