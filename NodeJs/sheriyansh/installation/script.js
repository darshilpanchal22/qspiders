const fs = require('fs')


//^ for write something and create file
// fs.writeFile("abcd.txt", "hey heloo", function (err) {
//     if (err) console.log(err);
//     else console.log("file created")
// })

//& for read file
// fs.readFile("abcd.txt", "utf8", function (err, data) {
//     if (err) console.log(err)
//     else console.log(data)
// })

//* for add data
// fs.appendFile("abcd.txt", " appended data", function (err) {
//     if (err) console.log(err)
//     else console.log("appended data")
// })

//~ for rename file
// fs.rename("abcd.txt", "hey.txt", function (err) {
//     if (err) console.log(err)
//     else console.log("done")
// })

//? for delete file
fs.unlink("hey.txt", function(err){
    if (err) console.log(err)
        else console.log("deleted")
})