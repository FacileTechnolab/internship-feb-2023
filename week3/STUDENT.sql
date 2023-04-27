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

