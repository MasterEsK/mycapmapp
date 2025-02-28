// service MyService @(path: 'MyService') {
//     // Definition of a function. Implementation happens in same name js file
//     function hello(name:String) returns String    
// }

using { anubhav.db.master  } from '../db/datamodel';

service MyService @(path: 'MyService') {
    //definition
    function hello(name:String) returns String;
    entity ReadEmployeeSrv as projection on master.employees;
}
