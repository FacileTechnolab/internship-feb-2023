SELECT * FROM demo.COURSE;
SELECT * FROM demo.student; 
update student set
PERCENTAGE = PERCENTAGE * 10,
AGE = AGE * 10
WHERE ID IN(1,2,3,6);
USE DEMO
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
         SELECT * FROM ORDER1;
         SELECT ID,SUM(PRICE) AS TOTAL FROM CUSTOMER JOIN ORDER1 USING(ID)
         WHERE BIRTHDATE >= '2000-01-01'
         GROUP BY ORDER_DATE,O_ID,NAME  ORDER BY TOTAL DESC;
         
	      SELECT ID,SUM(PRICE) AS TOTAL,
           COUNT(*) AS NO_OF_PRICE
           FROM CUSTOMER 
           where price>500
	   GROUP BY ID 
       HAVING TOTAL>200 AND NO_OF_PRICE > 5;
       USE WORLD;
       SELECT * FROM CUSTOMER;
       SELECT * FROM ORDER1;
       SELECT * FROM CUSTOMER JOIN ORDER1
       USING (ID) WHERE ADDERESS = 'AHMEDABAD';
       SELECT ID,SUM(PRICE) AS PRICES 
       FROM CUSTOMER
       GROUP BY NAME WITH ROLLUP;
          