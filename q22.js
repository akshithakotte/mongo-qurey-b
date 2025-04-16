//Arrays

db.employees.updateMany(
    {},
    {$push:{points:5}}
);           //creates points array with value 5

db.employees.updateMany(
    {},
    {$push:{points:7}}
);            //inserts 7 into points array


db.employees.updateMany(
    {},
    {$push:{hobbies:"Movies"}}
);        //insert movies into array hobbies

db.employees.updateMany(
    {email : "dan@gmail.com"},
    {$addToSet:{hobbies:"Sports"}}
);  

db.employees.updateMany(
    {email : "dan@gmail.com"},
    {$pull:{hobbies:"Sports"}}
); 

db.employees.updateMany(
    {},
    {$pull:{points:{$gte:7}}}
);