create or alter view ContactAgeDays
as
select Id, Name, BirthDate, datediff(day, BirthDate, getdate()) as AgeDays,
Id as ContactId
from Contact
where BirthDate is not null