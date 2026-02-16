console.log("Jack Ma maslahatlari");
const list = [
  "Yaxshi talaba boling", // 0-20
  "Togri boshliq tanlang va koproq xato qiling", // 20-30
  "Uzingizni ishingizni boshlang", // 30-40
  "Siz kuchli bolgan narsalarni qiling", // 40-50
  "Yoshlarga investitsiya qiling", // 50-60
  "Endi dam oling foydasi yoq", // 60
];

function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("please insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a < 30 && a <= 30) callback(null, list[1]);
  else if (a < 40 && a <= 40) callback(null, list[2]);
  else if (a < 50 && a <= 50) callback(null, list[3]);
  else if (a < 0 && a <= 0) callback(null, list[4]);
  else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 3000);
  }
}

console.log(" +++ 111  ");
maslahatBering(55, (err, data) => {
  if (err) console.log("ERROR:", err);

  console.log("javob:", data);
});
console.log(" +++ 222  ");
