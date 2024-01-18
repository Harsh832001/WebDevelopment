const fs = require("fs");

fs.writeFile("message.txt", "Hello Harsh in the first file", (err) => {
    if(err) throw err;
    console.log("Write in file successfilly");
});

fs.readFile("/home/local/CORPORATE/harsh/Documents/Learning_Material/Related-Node/message.txt", 'utf8', (err,data) => {
    if(err) throw err;
    console.log(data);
})
