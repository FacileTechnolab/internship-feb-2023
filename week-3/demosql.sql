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
USE sakila;
SELECT *
FROM address
JOIN city 
     ON  address.city_id = city.city_id
     
SELECT address_id, phone
FROM address
JOIN city 
     ON  address.city_id = city.city_id

USE EMPLOYEE;
CREATE table SELFJOIN2
(
  Emp_ID INTEGER ,
  Emp_Name TEXT NOT NULL,
  Mnager_ID INTEGER 

);
INSERT INTO SELFJOIN2 VALUES (0001, 'Ramesh', 4);
INSERT INTO SELFJOIN VALUES (0002, 'Suresh',4);
INSERT INTO SELFJOIN VALUES (0003, 'Mahesh', 1);
INSERT INTO SELFJOIN VALUES (0004, 'Shyamu', 2);
INSERT INTO SELFJOIN VALUES (0005, 'Ramu', 2);
USE EMPLOYEE;
CREATE table SELFJOIN
(
  Emp_ID INTEGER ,
  Emp_Name TEXT NOT NULL,
  Mnager_ID INTEGER 

);
INSERT INTO SELFJOIN VALUES (0001, 'Ramesh', 4);
INSERT INTO SELFJOIN VALUES (0002, 'Suresh',4);
INSERT INTO SELFJOIN VALUES (0003, 'Mahesh', 5);
INSERT INTO SELFJOIN VALUES (0004, 'Shyamu', 6);
INSERT INTO SELFJOIN VALUES (0005, 'Ramu', );
USE EMPLOYEE;
CREATE table EMP_MANA
(
  Emp_ID INTEGER ,
  Emp_Name TEXT NOT NULL,
  Mnager_ID INTEGER 

);
INSERT INTO EMP_MANA VALUES (0001, 'Ramesh', 4);
INSERT INTO EMP_MANA VALUES (0002, 'Suresh',4);
INSERT INTO EMP_MANA VALUES (0003, 'Mahesh', 5);
INSERT INTO EMP_MANA VALUES (0004, 'Shyamu', 6);
INSERT INTO EMP_MANA VALUES (0005, 'Ramu', 1);
INSERT INTO EMP_MANA VALUES (0006, 'Samu', 1);


SELECT * FROM EMP_MANA;

-- selfjoin
SELECT A.EMP_Name AS MANAGER , B.EMP_Name AS EMPLOYEE 
FROM EMP_MANA AS A
INNER JOIN EMP_MANA AS B
ON A.Mnager_ID = B.Emp_ID;

-- cross join
SELECT *
FROM employeesinfo
CROSS JOIN EMP_MANA;

-- compound join
use sakila;
select * 
from payment as p
join rental as r
on p.staff_id = r.staff_id
and p.rental_id = r.rental_id;

-- using cluase
use sakila;
select * 
from payment 
join rental 
using (staff_id);

-- natural join
USE EMPLOYEE;
CREATE TABLE DEPARTMENT
(
  DEPT_ID INT,
  DEPT_NAME VARCHAR(10)
);
INSERT INTO DEPARTMENT 
VALUES (1, 'JANVI'), (2, 'Dipali'), (3, 'Krishika'), (4, 'Shivangi'),(5, 'Priyanki');
SELECT * FROM DEPARTMENT;

CREATE TABLE EMPLOYEESTATE
(
  Emp_ID INT,
  DEPT_ID INT,
  Emp_NAME VARCHAR(10)
);
INSERT INTO EMPLOYEESTATE 
VALUES (1,1, 'Tom'), (2,2, 'Som'), (3,2, 'Dom'), (4,4, 'Gom'),(5,3,'Mom'),(6,4,'Pom'),(7,5,'Wom');
SELECT * FROM EMPLOYEESTATE;

-- NATURAL JOIN
SELECT *
FROM EMPLOYEESTATE 
NATURAL JOIN DEPARTMENT;

USE EMPLOYEE;
CREATE TABLE STUDENT
(
  ID INT,
  NAME VARCHAR(10),
  AGE INT,
  GENDER VARCHAR(10),
  CITY INT,
  COURSES INT
);
INSERT INTO STUDENT 
VALUES (1,'Ram', 20, 'M', 1, 1), (2,'Sam', 12, 'F', 2, 2), (3,'Salman', 42, 'M', 1, 1), (4,'Juhi', 18, 'f', 3, 3),(5,'Anil', 12, 'm', 1, 3),(6,'SUNIL', 12, 'm', 1, 3);
SELECT * FROM STUDENT;

USE EMPLOYEE;
CREATE TABLE LECTURERS
(
  ID INT,
  NAME VARCHAR(10),
  AGE INT,
  GENDER VARCHAR(10),
  CITY INT,
  COURSES INT
);
INSERT INTO LECTURERS
VALUES (1,'RAJ', 20, 'M', 1, 1), (2,'SADHNA', 12, 'F', 2, 2), (3,'RAM', 42, 'M', 1, 1), (4,'SALIM', 18, 'f', 3, 3),(5,'NAGMA', 12, 'm', 1, 3);
SELECT * FROM LECTURERS;

-- UNION/UNION ALL OPERATOR
SELECT * FROM STUDENT
UNION 
SELECT * FROM LECTURERS
SELECT NAME FROM STUDENT
UNION 
SELECT NAME FROM LECTURERS
SELECT NAME FROM STUDENT
UNION ALL
SELECT  NAME FROM LECTURERS

-- insert row
USE EMPLOYEE;
INSERT INTO department 
VALUES (6, 'Sweta')
INSERT INTO department 
VALUES (7,'null')
-- INSERT MULTIPLE ROW
INSERT INTO department(DEPT_NAME)
VALUES ('NAME1'),
	   ('NAME2'),
	   ('NAME3')
       
-- CREATING COPY TABLE
USE EMPLOYEE;
CREATE TABLE EMPLOYEESINFO1 AS
SELECT * 
FROM EMPLOYEESINFO

INSERT INTO EMPLOYEESINFO1 
SELECT * 
FROM EMPLOYEESINFO
WHERE Emp_date > '2000-09-10'

-- updating single row
UPDATE EMPLOYEESINFO
SET SALARY = 226000, Emp_date = '2012-05-21'
where Emp_no = 7
-- updating multiple row
UPDATE EMPLOYEESINFO
SET SALARY = 22000 , Dept_No = 'D30'
where Emp_no in (3, 5)

-- USING SUBQUERY IN UPDATES
UPDATE EMPLOYEESINFO
SET SALARY = 22000 , Dept_No = 'D30'
where Emp_Name = (SELECT Emp_no
                FROM EMPLOYEESINFO
                WHERE Salary IN  (22000, 'Ramesh'))

-- delete row
DELETE FROM department
WHERE DEPT_ID = 7

DELETE FROM department
WHERE DEPT_ID = (SELECT * 
				 FROM employeesinfo1
                 WHERE Emp_Name = 'Shyamu')
                 
-- Aggregate Functions
SELECT MAX(AGE) AS MAX,
	   MIN(AGE) AS MIN,
	   AVG(AGE) AS AVG,
       SUM(NAME) AS SUM,
       COUNT(NAME) AS COUNT
FROM  student

-- GROUP BY CLUSE
USE EMPLOYEE;
SELECT * FROM student WHERE AGE IN (
SELECT AGE
FROM  student
GROUP BY AGE
ORDER BY AGE
)
ORDER BY NAME

USE EMPLOYEE;
CREATE table PERSONAL
(
  Emp_ID INTEGER ,
  Emp_Name VARCHAR(10),
  PERCENTAGE INTEGER,
  AGE INTEGER,
  GENDER VARCHAR(10),
  CITY INTEGER,
  COURSES INTEGER
);
INSERT INTO PERSONAL VALUES (0001, 'Ramesh', 45, 19, 'M', 1, 1);
INSERT INTO PERSONAL VALUES (0002, 'Suresh',55, 22, 'F', 2, 2);
INSERT INTO PERSONAL VALUES (0003, 'Mahesh',62, 20, 'M', 1, 1);
INSERT INTO PERSONAL VALUES (0004, 'Shyamu', 47, 18, 'F', 3, 1);
INSERT INTO PERSONAL VALUES (0005, 'Ramu', 75, 22, 'M', 1, 3);

SELECT * FROM  PERSONAL;

CREATE table CITY
(
  C_ID INTEGER ,
  C_Name VARCHAR(10)
);
INSERT INTO CITY VALUES (0001, 'Agra');
INSERT INTO CITY VALUES (0002, 'Delhi');
INSERT INTO CITY VALUES (0003, 'Bopal');
INSERT INTO CITY VALUES (0004, 'Jaipur');
SELECT * FROM  CITY;

SELECT CITY , COUNT(CITY)
FROM PERSONAL
GROUP BY CITY;

SET SESSION sql_mode = sys.list_add(@@session.sql_mode, 'ONLY_FULL_GROUP_BY');
SELECT c.C_Name , COUNT(p.CITY) as total
FROM PERSONAL p
INNER JOIN CITY c
ON p.CITY = c.C_ID
-- WHERE AGE > 20
GROUP BY c.C_Name
ORDER BY COUNT(p.CITY) ;

-- HAVING BY CLUSE
SELECT c.C_Name , COUNT(p.CITY) as total
FROM PERSONAL p
INNER JOIN CITY c
ON p.CITY = c.C_ID
GROUP BY c.C_Name
HAVING COUNT(p.CITY) > 2
ORDER BY COUNT(p.CITY) ;

-- rollup
SELECT c.C_Name , COUNT(p.CITY) as total
FROM PERSONAL p
INNER JOIN CITY c
ON p.CITY = c.C_ID
GROUP BY c.C_Name with rollup;


-- subquery
SELECT *
FROM PERSONAL
WHERE AGE > ( SELECT AVG(AGE)
             FROM PERSONAL);

-- all operator
SELECT Emp_Name 
FROM personal
WHERE AGE > all (
SELECT AGE 
FROM personal
WHERE AGE = 18);

-- any operator
SELECT Emp_Name 
FROM personal
WHERE AGE > any (
SELECT AGE 
FROM personal
WHERE AGE = 18);





