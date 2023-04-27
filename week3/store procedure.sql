use demo;
DELIMITER $$
CREATE PROCEDURE CLIENT()
BEGIN
   select * from student;
END $$
DELIMITER ;   
CALL CLIENT1('F');
CALL CITY('3');

DROP PROCEDURE  IF EXISTS CLIENT1;
DELIMITER $$
CREATE PROCEDURE CLIENT1(
  gender varchar(255)
)
BEGIN
   select * from student s  
   WHERE  s.GENDER = gender;
END $$
DELIMITER ;   
DELIMITER $$
CREATE PROCEDURE CL(
 name varchar(255)
)
BEGIN 
   SELECT ID,    
     NAME,CITY from student s  
     WHERE  s.NAME = IFNULL(name,s.NAME);
END $$
DELIMITER ;  

CALL CL(''); 





DROP PROCEDURE CL;
INSERT INTO STUDENT VALUES(12,NULL,75,25,'F',1,1); 
SELECT * FROM STUDENT;
DELIMITER $$
CREATE PROCEDURE CL1(
 name varchar(255)
)
BEGIN 
   IF NAME IS NULL THEN 
     SET NAME= 'YUG';
     END IF;
  
      SELECT ID,    
     NAME,CITY from student s  
     WHERE  s.NAME = name;
  END $$
DELIMITER ;  
CALL CL1('JOHN');

CREATE DEFINER=`root`@`localhost` PROCEDURE `customer`(
id INT,
   price  FLOAT
  )
BEGIN
 SELECT * FROM CUSTOMER  c
 WHERE
  C.ID = IFNULL(id,C.ID) AND
  C.PRICE = IFNULL(price, C.PRICE);

END



CREATE DEFINER=`root`@`localhost` PROCEDURE `cust`( 
  id INTEGER,
  price FLOAt,
  BIRTHDATE DATE
  
)
BEGIN
 IF PRICE <= 0 THEN 
 SIGNAL SQLSTATE '22003'
 SET MESSAGE_TEXT = 'INVALID';
 END IF;

END




-- function
CREATE DEFINER=`root`@`localhost` PROCEDURE `gettotal`()
BEGIN
declare total int default 0;
select count(*) into total from customer;
select total;

END