// const employee = require('./employee.json');
const fs = require('fs');

jsonReader = (filePath, cb) => {
    fs.readFile(filePath, (err, fileData) =>{
        if(err){
            return cb && cb(err);
        }
        try {
            const object = JSON.parse(fileData);
            return cb && cb(null, object);
          } catch (err) {
            return cb && cb(err);
          }
    });
}

jsonReader("./employee.json", (err, employee) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(employee);
})