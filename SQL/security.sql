use student;
--  create user;
create user uv@localhost;
create user uv Identified by 'uv@123';

--  drop user;
create user pk@localhost identified by 'pk@123';
drop user pk@localhost;
