// let ball = prompt("ballingiz nechi !");
// if (ball < 60) {
//   alert("siz institutga kirolmadingiz");
//   document.body.style.backgroundColor = "dodgerblue";
// } else if (ball >= 60 && ball <= 80) {
//   alert("siz super kantraktga kirdingiz");
//   document.body.style.backgroundColor = "red";
// } else if (ball >= 80 && ball <= 100) {
//   alert("siz kantraktga kirdingiz");
//   document.body.style.backgroundColor = "blue";
// } else if (ball >= 100 && ball <= 150) {
//   alert("siz grand asosida kirdingiz");
//   document.body.style.backgroundColor = "yellow";
// } else if (ball >= 200 && ball <= 300) {
//   document.body.style.backgroundColor = "black";
//   alert("o' geniy ekansiz");
// } else {
//   alert("Eror");
//   document.body.style.backgroundColor = "green";
// }

function plusOne() {
  let son3 = prompt("qo'shuv amallarni yoz");
  let son4 = prompt("qoshuv amalaranini ikinchisini yoz");
  const javob = Number(son3) + Number(son4);
  alert("javob:" + javob);
}
function hello() {
  console.log("hello");
  let son5 = prompt("ayirish amalini yoz ");
  let son6 = prompt("ayirish amalini yoz ");
  const javob =Number ( son5) - Number ( son6);
  alert("javob:" + javob);
}

function math() {
  let son1 = prompt("ko'paytirish amalini yoz");
  let son2 = prompt("ko'paytirish amallarini yoz");
  const javob = Number(son1) * Number (son2);
  alert("javob:" + javob);
}
function bolish() {
  let a = prompt("son yoz");
  let b = prompt("son yoz");
  const javob = Number(a) / Number(b);
  alert("javob: " + javob);
}
