USE DEMO;
CREATE TABLE CITY(
  CID INT PRIMARY KEY,CNAME VARCHAR(255));
  INSERT INTO CITY VALUES (5,'NOIDA');
  CREATE TABLE STUDENT(
  ID INT PRIMARY KEY NOT NULL,
  NAME VARCHAR(255),PERCENTAGE INT,AGE INT ,GENDER VARCHAR(255),CITY INT,
  FOREIGN KEY(CITY) REFERENCES CITY (CID));
  SELECT * FROM CITY;
  INSERT INTO STUDENT VALUES(1,'RAM KUMAR',45,19,'M',1);
  INSERT INTO STUDENT VALUES(2,'SARITA KUMARI',55,22,'F',2);
  INSERT INTO STUDENT VALUES(3,'SALMAN KHAN',62,20,'M',1);
  INSERT INTO STUDENT VALUES(4,'JUHI CHAWLA',47,18,'F',3);
  INSERT INTO STUDENT VALUES(5,'ANIL KAPOOR',74,22,'M',1);
  INSERT INTO STUDENT VALUES(6,'JOHN ABRAHAM',64,21,'M',2);
  INSERT INTO STUDENT VALUES(7,'SHAHID KAPOOR',52,20,'M',1);
  SELECT * FROM STUDENT;
  SELECT S.ID,S.NAME,S.PERCENTAGE,S.AGE,S.GENDER,C.CNAME  FROM STUDENT S INNER JOIN CITY C ON  S.CITY = C.CID
  WHERE C.CNAME='AGRA'
  ORDER BY S.NAME;
  SELECT * FROM STUDENT RIGHT JOIN CITY 
  ON STUDENT.CITY = CITY.CID ;
  USE DEMO
   SELECT * FROM STUDENT CROSS JOIN CITY;  
   SELECT S.ID,S.NAME ,C.CNAME FROM STUDENT S , CITY C;
     SELECT S1.NAME , S2.CITY FROM STUDENT AS S1
        INNER JOIN STUDENT AS S2 ON
         S1.ID = S2.CITY;
          SELECT * FROM STUDENT AS S1
        INNER JOIN STUDENT AS S2 ON
         S1.ID = S2.CITY;
         
         
          SELECT * FROM STUDENT;
          
         SELECT S1.NAME AS CITY  ,S2.NAME AS ID 
          FROM STUDENT AS S1 
          INNER JOIN STUDENT AS S2 
          ON S1.ID = S2.CITY;
          
          
          SELECT * FROM STUDENT CROSS JOIN CITY;  
          
          CREATE TABLE COURSE
( CRID INT PRIMARY KEY,
  COURSE VARCHAR(255));
  INSERT INTO COURSE VALUES(1,'BTECH');
  INSERT INTO COURSE VALUES(2,'BCA');
   INSERT INTO COURSE VALUES(3,'BBA');
   SELECT * FROM COURSE;
   SELECT * FROM STUDENT 
          INNER JOIN CITY ON  
           STUDENT.ID = CITY.CID
            INNER JOIN COURSE
            STUDENT.ID = COURSE.CRID;
              SELECT * FROM STUDENT 
          INNER JOIN CITY ON  
           STUDENT.CITY = CITY.CID
            INNER JOIN COURSE
            STUDENT.ID = COURSE.CRID;
            SELECT S.ID,S.NAME,S.AGE,S.GENDER , C.CNAME , C1.COURSE FROM STUDENT S 
          INNER JOIN CITY C  ON  
           S.CITY = C.CID
            INNER JOIN COURSE C1 ON
            S.COURSE = C1.CRID;		
            ALTER TABLE STUDENT ADD COLUMN COURSE INT;
            UPDATE STUDENT SET  COURSE = 3 WHERE ID =7;
            
            USE WORLD;
            SELECT * FROM CUSTOMER;
            SELECT * FROM ORDER1;
            
            
        SELECT * FROM PAYMENT P JOIN
		 RENTAL R ON 
		 P.STAFF_ID = R.STAFF_ID
		 AND P.RENTAL_ID = R.RENTAL_ID;
          SELECT * FROM STUDENT JOIN CITY WHERE STUDENT.ID = CITY.CID;
            SELECT * FROM STUDENT , CITY   WHERE STUDENT.ID = CITY.CID;
            
		(SELECT *
            FROM CUSTOMER 
          left OUTER JOIN ORDER1 o1 ON CUSTOMER.ID = o1.ID 
        ORDER BY CUSTOMER.NAME;	)
        
       ( SELECT *
            FROM CUSTOMER 
          left OUTER JOIN ORDER1 o1 ON CUSTOMER.ID = o1.ID 
        ORDER BY CUSTOMER.NAME;	)
        SELECT * FROM CUSTOMER JOIN ORDER1  USING(ID);
        SELECT * FROM CUSTOMER NATURAL JOIN ORDER1;
        CREATE TABLE LECTURERS(
     ID INT ,NAME VARCHAR(255),
	 AGE INT,GENDER VARCHAR(10),
	 CITY INT,COURSE INT);
     INSERT INTO LECTURERS VALUES (1,'RAJ KAPOOR',37,'M',1,2);
     DROP TABLE LECTURERS;
     	 INSERT INTO LECTURERS VALUES (2,'SADHANA',39,'F',4,3);
	 INSERT INTO LECTURERS VALUES (3,'RAM KUMAR',38,'M',2,1);
	 INSERT INTO LECTURERS VALUES (4,'SALIM KHAN',45,'M',3,2);
	 INSERT INTO LECTURERS VALUES (5,'NAGMA',42,'F',2,1);
     SELECT * FROM STUDENT
	 UNION
	  SELECT * FROM LECTURERS;
      
      
      SELECT * FROM demo.COURSE;
SELECT * FROM demo.student; 
update student set
PERCENTAGE = PERCENTAGE * 10,
AGE = AGE * 10
WHERE ID IN(1,2,3,6);
USE world
SELECT ID FROM STUDENT WHERE NAME = 'JOHN ABRAHAM';
    update student set
              PERCENTAGE = PERCENTAGE * 10,
              AGE = AGE * 10
            WHERE ID = 'NULL';
         (SELECT CRID FROM COURSE WHERE COURSE IN ('BBA','BCA'));
         INSERT INTO CITY VALUES (0,'MBA');
         INSERT INTO STUDENT VALUES(0,'',0,0,'F',0,0);
         DELETE FROM STUDENT WHERE ID =
         (SELECT * FROM STUDENT WHERE NAME = 'SARITA KUMARI');
       ; select * from customer;
           SELECT ID,SUM(PRICE) AS TOTAL,
           COUNT(*) AS NO_OF_PRICE
           FROM CUSTOMER 
           where price>500
	   GROUP BY ID 
       HAVING address in(ahmedabad,surat);
         SELECT ID,SUM(PRICE) AS TOTAL FROM CUSTOMER
	   GROUP BY ID HAVING birthdate >='2000-01-01';
         SELECT MAX(PRICE) FROM CUSTOMER;
         SELECT ID,SUM(PRICE) AS TOTAL FROM CUSTOMER JOIN ORDER1 USING(ID)
         WHERE BIRTHDATE >= '2000-01-01'
         GROUP BY ORDER_DATE,O_ID,NAME;
          MAX(PRICE)  AS HIGHEST,
		  MIN(PRICE) AS LOWEST,
		  AVG(PRICE) AS AVERAGE,
          SUM(PRICE) AS SUM,
          COUNT(PRICE) AS NO_COUNT 
		 FROM CUSTOMER;
         SELECT * FROM customer;
         SELECT ID,SUM(PRICE) AS TOTAL FROM CUSTOMER JOIN ORDER1 USING(ID)
         WHERE BIRTHDATE >= '2000-01-01'
         GROUP BY ORDER_DATE,O_ID,NAME  ORDER BY TOTAL DESC;
         
	      SELECT ID,SUM(PRICE) AS TOTAL,
           COUNT(*) AS NO_OF_PRICE
           FROM CUSTOMER 
           where price > 1000
	   GROUP BY ID 
       HAVING TOTAL >200 AND NO_OF_PRICE > 5;
       USE WORLD;
       SELECT * FROM CUSTOMER;
       SELECT * FROM city;
       SELECT * FROM CUSTOMER JOIN ORDER1
       USING (ID) WHERE ADDERESS = 'AHMEDABAD';
       SELECT ID,SUM(PRICE) AS PRICES 
       FROM CUSTOMER
       GROUP BY NAME WITH ROLLUP;
       select sum(countrycode),name 
       from city 
       group by name
       having count(countrycode)>5;
          use demo;
          select * from city;
          select * from student;
          SELECT ID,NAME 
          IFNULL (NAME,'NOT ASSIGNED')AS name
          FROM STUDENT;
          SELECT ID,SUM(PRICE) AS PRICES 
       FROM CUSTOMER
       GROUP BY ID WITH ROLLUP;
       select * from customer where name > (    
       select name   from customer where id >= 3);
       select * from customer where birthdate >
       ( select birthdate from customer
       where id =3);
       select * from customer 
       where price  > (
select avg(price) from customer);

select  c.cname , count(s.city)
          from student s  inner join city c
          on s.city = c.cid
          group by city;
          select * from student
          where id not in (
          select distinct course from student );
          select * from city where cid not in (
 select distinct city from student );
         SELECT * FROM demo.student;
         
         select * from student where city = 1;
select * from student1 where age>18;
insert into student  select * from student1 where age>18;



select * from student where p > Any(
select name,address
 from
customer
where id = 3);
	 
     
     SELECT * FROM demo.student;use demo;
select * from student s where  not exists(
select cid from city 
where cid = s.id);




use world;
insert into customer values(10,'Ravi','2023-05-01',9875432651,'vapi',2500.32,'ravi@gmail.com');

SELECT * FROM customer;
select ID, NAME,
 IF(
 YEAR(BIRTHDATE) = YEAR(NOW()),
 'ACTIVE',
'ARCHIVED') AS VOTE_NOT
FROM CUSTOMER;
select ID, NAME,
 IF(
PRICE > 1000.00,
 'ACTIVE',
'ARCHIVED') AS CATEGORY
FROM CUSTOMER;

SELECT ID,NAME,BIRTHDATE,
CASE
WHEN PRICE < 1000 THEN 'LOSS'
WHEN price<1500 then 'profit'
WHEN PRICE > 2500 THEN 'PAISA HI PAISA' 
ELSE 'DO NOT KNOW'
 END AS BUDGET
 FROM CUSTOMER;
select * from customer where price > Any(
select name,address
 from
customer
where id = 3);
select * from customer where id = all (
select id
from customer group by id
having count(*) >= 2);

select * from customer c  where price > 
(  select avg(price) from customer
where id = c.id );
	 select name from customer where price > any
     (10000,1500,2000);
     select * from customer c
     where exists (
      select id from order1
      where id = c.id );
      
      
      select * from (
      select id ,name,price, 
      (select avg(price) from customer)
     as invoice ,
     price - (select invoice)
     from customer
     )as sales_summary
     where price is not null;
     
     
     
  