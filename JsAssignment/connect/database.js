const {createPool}=require('mysql');
const pool=createPool({
    host:"Localhost",
    user:"root",
    password:"root123",
    database:"test",
    connectionLimit:10

})
pool.query('select * from employee',(err,result,feilds)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result)
});
module.export=pool;