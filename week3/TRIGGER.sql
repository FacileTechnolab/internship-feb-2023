USE WORLD;
SELECT * FROM CUSTOMER;

DELIMITER $$
CREATE TRIGGER PAYMENT_AFTER_INSERT
  AFTER INSERT ON CUSTOMER
  FOR EACH ROW
BEGIN
  UPDATE ORDER1
  SET PRICE = PRICE + NEW.PRICE
  WHERE ORDER1.ID = NEW.ORDER1.ID;
END $$
DELIMITER ;  
INSERT INTO CUSTOMER VALUES(2,'JACK',2002-06-10,9362410250,'SURAT',80000);


CREATE trigger SALARY
BEFORE INSERT OR DELETE OR UPDATE ON CUSTOMER
FOR EACH ROW
DECLARE SALARY;
BEGIN
SALARY = NEW.PRICE - OLD.PRICE;
END;
ROLLBACK;
  
  USE DEMO;
  CREATE TABLE EMP(
  ID INT,
  NAME VARCHAR(30),
  SAL DECIMAL(10,2)
  )
  
  USE DEMO;
  INSERT INTO EMP VALUES(1,'ANAND',15000);
  INSERT INTO EMP VALUES (2,'NEHA',12400);
  INSERT INTO EMP VALUES(3,'SOHAN',11500);
  INSERT INTO EMP VALUES('VIJAY',15500);
  INSERT INTO EMP VALUES(5,'SAPNA',14000);
  SELECT * FROM EMP;
  CREATE TABLE EMP1(
  ID INT,
  NAME VARCHAR(30),
  SAL DECIMAL(10,2)
  )
  TRUNCATE TABLE EMP1;
  SELECT * FROM PASSENGER;
  
  CREATE TABLE PASSENGER(
  NAME VARCHAR(20),
  ID INT(10),ADDRESS VARCHAR(20),
  CHARGES INT(10),PRIMARY KEY(ID));
  
  INSERT INTO PASSENGER VALUES('GAURAV',4021,'PUNE',5000);
INSERT INTO PASSENGER VALUES('SEEMA',4022,'MUMBAI',12000);
INSERT INTO PASSENGER VALUES('REEMA',4023,'SANAND',8000);
INSERT INTO PASSENGER VALUES('RAJ',4024,'RAIPUR',2000);
  INSERT INTO PASSENGER VALUES('RAHUL',4025,'NAGPUR',9000);
  
  create trigger flight
  before insert 
  on passenger
  for each row
  set new.charges = new.charges-2000;
    INSERT INTO PASSENGER VALUES('tina',4031,'narol',15000);
    select * from passenger;
    
    
    create table college_student( nmae varchar(20),
    id int(10),
    age int(10),
    primary key(id));
    use demo;
 select 
 * from college_student ;
 
 create table audit(
 id int(10),
 audit_desc varchar(200),
 primary key(id));    
  select * from audit;
  DROP  TRIGGER IF EXISTS AFTERINSERTCOL;
  CREATE TRIGGER AFTERINSERTCOL
  AFTER INSERT ON COLLEGE_STUDENT
  FOR EACH ROW
  INSERT INTO AUDIT values( 2 ,CONCAT('NEW ROW',DATE_FORMAT(NOW(),'%D %M %y %h %i %s %p')));
  
  insert into college_student values('manish',2,23);
  insert into college_student values('ram',31,21);
  
  create table workers(
  id int(10),
  name varchar(20),
  income int(20),
  primary key(id));
  
  insert into workers values(12,'zoya',1000);
  select * from workers;
  
  DROP TRIGGER IF EXISTS BEF_UPD;
  
  
  delimiter //
  CREATE TRIGGER BEF_UPD
  BEFORE UPDATE 
  ON WORKERS
  FOR EACH ROW
  BEGIN
  IF NEW.INCOME < 12000 THEN
  SET NEW.INCOME = 12000;
  END IF;
  END;
  
  UPDATE WORKERS SET INCOME = 5000 WHERE ID=12;
  
  
  CREATE TABLE EMP_AUDIT(
  ID INT(10),
  AUDIT_DESC VARCHAR(200),
  PRIMARY KEY(ID)); 
  SELECT * FROM EMP_AUDIT;
  select * from workers;
  
  delimiter //
  CREATE TRIGGER AFT_UP
  AFTER  UPDATE
  ON WORKERS
 FOR EACH ROW
  begin
  INSERT INTO EMP_AUDIT VALUES(12,CONCAT('UPDATE ROW',DATE_FORMAT(NOW(),'%d %m %y  %h:%i:%s  %p')));
  end //
  delimiter ;
  
  insert into workers values(10,'zinat',10000);
  select * from workers;
  update workers set income = 30000 where id=10;
  select * from emp_audit;
  
  
  SHOW VARIABLES like 'event%';
  show events;
  
  CREATE EVENT myevent
    ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR
    DO
      UPDATE myschema.mytable SET mycol = mycol + 1;
	
    
    show variables like 'transaction_isolation';