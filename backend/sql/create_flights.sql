-- create flight table
USE supercoolflights;

CREATE TABLE flights (
    id INT PRIMARY KEY,
    planename VARCHAR(50),
    departdate VARCHAR(50),
    departtime INT,
    arrivedate VARCHAR(50),
    arrivetime INT,
    source VARCHAR(50),
    destination VARCHAR(50)
);

INSERT INTO flights(id, planename, departdate, departtime, arrivedate, arrivetime, source, destination)
VALUES
(1, 'Boeing 737', '2020-01-01', 1200, '2020-01-01', 1500, 'YYZ', 'YYC'),
(2, 'Boeing 747', '2020-01-01', 1415, '2020-01-01', 1645, 'YYZ', 'YYC'),
(3, 'Airbus A320', '2020-01-01', 900, '2020-01-01', 1130, 'YYZ', 'YYC'),
(4, 'Boeing 787', '2020-01-01', 1300, '2020-01-01', 1530, 'YYZ', 'YYC'),
(5, 'Airbus A380', '2020-01-01', 1100, '2020-01-01', 1330, 'YYZ', 'YYC'),
(6, 'Boeing 737', '2020-01-01', 1400, '2020-01-01', 1630, 'YYZ', 'YYC'),
(7, 'Boeing 747', '2020-01-01', 1000, '2020-01-01', 1230, 'YYC', 'YYZ'),
(8, 'Airbus A320', '2020-01-02', 900, '2020-01-02', 1130, 'YYZ', 'YYC'),
(9, 'Boeing 787', '2020-01-02', 1300, '2020-01-02', 1530, 'YYZ', 'YYC'),
(10, 'Airbus A380', '2020-01-03', 1100, '2020-01-03', 1330, 'YYZ', 'YYC'),
(11, 'Boeing 737', '2020-01-03', 1400, '2020-01-03', 1630, 'YYZ', 'YYC'),
(12, 'Boeing 747', '2020-01-04', 1000, '2020-01-04', 1230, 'YYC', 'YYZ')
;