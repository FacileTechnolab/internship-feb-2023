use student;
--  create user;
create user uv@localhost;
create user uv Identified by 'uv@123';

--  drop user;
create user pk@localhost identified by 'pk@123';
drop user pk@localhost;

-- grant 
create user moon_app identified by '3656';
grant select, insert, update, delete , execute
on student.*	
to moon_app;

 show grants for moon_app;

