    
    show variables like 'transaction_isolation';
    use world;
    set transaction isolation level read uncommitted;
    SELECT PRICE FROM CUSTOMER
    WHERE ID = 5;
    ROLLBACK;
    START TRANSACTION ;
    UPDATE CUSTOMER
    SET PRICE = 46000.00
    WHERE ID = 5 
   Rollback;
    Commit;
    SELECT * FROM CUSTOMER;
    
    
    set transaction isolation level read uncommitted;
    start transaction;
    SELECT PRICE FROM CUSTOMER WHERE ID = 5;
     SELECT PRICE FROM CUSTOMER WHERE ID = 5;
     commit;
     
     
	         
    start transaction;
    SELECT PRICE FROM CUSTOMER WHERE ID = 5;
     SELECT PRICE FROM CUSTOMER WHERE ID = 5;
     commit;
   