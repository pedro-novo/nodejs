const fs = require("fs");

// Read files
// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// Write files
// fs.writeFile("./docs/blog1.txt", "hello world", () => {
//   console.log("succesfull");
// });
// fs.writeFile("./docs/blog2.txt", "hello again", () => {
//   console.log("succesfull");
// });

// Directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) console.log(err);
//     console.log("folder created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder deleted");
//   });
// }

// Delete files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) console.log(err);
    console.log("file deleted");
  });
}
