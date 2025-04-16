db.employees.updateOne(
    { email : "amy@gmail.com"},
    { $set : {department:"Admin"}}
);

db.employees.find()


// mongosh 127.0.0.1:27017

db.employees.find(
    {department:"HR", location:"FL"},
    {_id:0,name:1,email:1}
);

db.employees.updateOne(
         {email:"jason@gmail.com"},
         {$set:{email:"jason@yahoo.com"}}
    );