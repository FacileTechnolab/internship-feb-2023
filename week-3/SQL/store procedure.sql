-- create procedure 
delimiter  $$
create procedure get_clients()
begin
	select * from studentinfo1;
end$$
delimiter ;

-- Drop procedure
drop procedure get_clients;
drop procedure if exists get_clients;

-- variable
begin
declare @first_var as int
set @first_var=5456
print (first_var); 
end 