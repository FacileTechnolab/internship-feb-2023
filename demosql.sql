-- use world;
-- select * from city
-- where ID = 1
-- order by Name

-- select 
--       ID,
--       Name,
--       Population,
--       (Population * 20) -100 AS 'Discount Factor'
-- from city

-- select distinct District
-- from city

-- SELECT *
-- FROM city
-- WHERE ID < '20';
-- use sakila
-- select * 
-- from city
-- where ID < 10;


USE WORLD;
select * 
from city
where District = 'Kabol' or District = 'Herat' or District = 'Balkh'

select * 
from city
where District = 'Kabol' and District = 'Herat' or District = 'Balkh'

select * 
from city
where District = 'Kabol' and District = 'Herat' and District = 'Balkh'

select * 
from city
where District = 'Kabol' or District = 'Herat' and District = 'Balkh'

select * 
from city
where District in ('Kabol', 'Herat','Balkh')

select * 
from city
where District not in ('Kabol', 'Herat','Balkh')

select * 
from city
where ID between 20 and 50

-- CREATE TABLE date (
--     ID   int,
--     LastName varchar(255),
--     FirstName varchar(255),
--     Address varchar(255),
--     City varchar(255),
-- );

-- insert into date values (1 , 'Dipali', 'Kuhad', 'Vastral', 'Ahmedabad'  );

-- select * 
-- from date;

-- alter table date
-- add   B_date date;

-- select * 
-- from date;
-- -- insert into date (B_date)
-- -- values (29-10-2001);
-- update date
-- set B_date = "2001-10-29"
-- where ID = 1;

-- INSERT INTO DATE 
-- VALUES (2 , 'Krishika', 'Maurya', 'Naroda', 'Ahmedabad', '2002-02-23');

drop table date;
USE Employee;
CREATE DATABASE Employee;
SHOW databases;
CREATE TABLE EMPLOYEESINFO (
  Emp_NO INTEGER PRIMARY KEY,
  Emp_Name TEXT NOT NULL,
  Emp_Add TEXT NOT NULL,
  Emp_Phone TEXT NOT NULL,
  Dept_No TEXT NOT NULL,
  Dept_Name TEXT NOT NULL,
  Salary TEXT NOT NULL
);
INSERT INTO EMPLOYEESINFO VALUES (0001, 'Ramesh', 'GNoida','9855498465', '3445', 'Sales','25000');
INSERT INTO EMPLOYEESINFO VALUES (0002, 'Suresh', 'GNoida','98565498465', '0072', 'Sales','75000');
INSERT INTO EMPLOYEESINFO VALUES (0003, 'Rajesh', 'GNoida','9855497865', '2324', 'Sales','28000');
INSERT INTO EMPLOYEESINFO VALUES (0004, 'Shyamu', 'BSB','9853698465', '8883', 'Sales','35000');
INSERT INTO EMPLOYEESINFO VALUES (0005, 'Ramu', 'BSB','9855498235', '74568', 'Sales','96000');
INSERT INTO EMPLOYEESINFO VALUES (0006, 'Mahesh', 'GNoida','9851678465', '1238', 'Sales','25000');
INSERT INTO EMPLOYEESINFO VALUES (0007, 'Chaman', 'BSBS','9856723465', '7634', 'D10','215000');

SELECT * FROM EMPLOYEESINFO;

UPDATE EMPLOYEESINFO
SET Emp_Add = 'Mathura'
WHERE Emp_NO = 5;

alter table EMPLOYEESINFO
add  Emp_date date;

update EMPLOYEESINFO
set Emp_date = "1906-10-10"
where Emp_NO = 5;

SELECT * 
FROM EMPLOYEESINFO
WHERE Emp_date between '1900-10-10' AND '2001-10-29'

-- like operator
SELECT * 
FROM EMPLOYEESINFO
WHERE Emp_Add LIKE '%T%'
SELECT * 
FROM EMPLOYEESINFO
WHERE Emp_Add LIKE 'B%'
SELECT * 
FROM EMPLOYEESINFO
WHERE Emp_Add LIKE '%DA'
SELECT * 
FROM EMPLOYEESINFO
WHERE Emp_Add LIKE '_____A'
SELECT * 
FROM EMPLOYEESINFO
WHERE Emp_Add LIKE '______A'
SELECT * 
FROM EMPLOYEESINFO
WHERE Emp_Add LIKE 'G____A'

-- REGEXP operator
SELECT * 
FROM EMPLOYEESINFO
WHERE Emp_Add REGEXP 'IDA$'
SELECT * 
FROM EMPLOYEESINFO
WHERE Emp_Add REGEXP 'MATH|IDA|BS'
SELECT * 
FROM EMPLOYEESINFO
WHERE Emp_Name REGEXP 'A[RM]'

-- IS NULL OPERATOR
SELECT * 
FROM EMPLOYEESINFO
WHERE Emp_date IS NULL

-- ORDER BY
SELECT * 
FROM EMPLOYEESINFO
ORDER BY Emp_Name DESC
SELECT * 
FROM EMPLOYEESINFO
ORDER BY Emp_Name, Salary

-- limit operator
SELECT * 
FROM EMPLOYEESINFO
LIMIT 4
SELECT * 
FROM EMPLOYEESINFO
LIMIT 4 , 4


-- join
SELECT *
FROM city
JOIN country ON  city.ID = country.Code


DESC EMPLOYEESINFO;