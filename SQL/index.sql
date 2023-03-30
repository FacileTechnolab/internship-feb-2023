use student;
explain select stu_id from stu_add where city ='nagpur';
create index idx_city on stu_add(city);

show indexes in stu_add;
