show databases;
use mysql;
show tables;
desc user;
select user from user;

create user 'stu1'@'localhost' identified by 'stu1';
select user from mysql.user;

DROP USER stu1;

SHOW GRANTS FOR stu1;