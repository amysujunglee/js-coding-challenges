let time = "12:45:54AM";

let ampm = time.slice(-2);
let timeArr = time.slice(0, -2).split(":");

if (ampm === "AM" && timeArr[0] === "12") {
  timeArr[0] = "00";
} else if (ampm === "PM" && timeArr[0] === "12") {
  timeArr[0] = "12";
} else if (ampm === "PM" && timeArr[0] !== "12") {
  timeArr[0] = parseInt(timeArr[0]) + 12;
}

console.log(timeArr.join(":"));
