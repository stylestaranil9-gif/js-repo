let date = new Date();  // current date

let day = date.getDate().toString().padStart(2, "0");
let month = (date.getMonth() + 1).toString().padStart(2, "0"); // months are 0-based
let year = date.getFullYear();

let indianDate = `${day}-${month}-${year}`;
// console.log(indianDate);  // e.g. "09-09-2025"
// Output format: DD-MM-YYYY



// If you want the actual time zone conversion:

let date2 = new Date();

let options = {
  timeZone: "Asia/Kolkata",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
};

let indianDateTime = date2.toLocaleString("en-IN", options);
// setInterval(() => {
//     indianDateTime = date2.toLocaleString("en-IN", options);
//     console.log(indianDateTime);  
// }, 1000);
console.log(indianDateTime);  
// Example: "09/09/2025, 11:35:10 am"