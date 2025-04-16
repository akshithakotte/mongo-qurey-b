db.employees.find(
    { department :"HR" } 
);

db.employees.find(
    { department : { $eq : "HR" } }
);

db.employees.find(
    { salary : { $eq : 5000 } }
);

db.employees.find(
    { salary : { $ne : 5000 } }
);

db.employees.find(
    { salary : { $gt : 2000 } }
);

db.employees.find(
    { salary : { $gte : 2000 } }
);

db.employees.find(
    { salary : { $lt : 2456 } }
);

db.employees.find(
    { salary : { $lte : 2456 } }
);

