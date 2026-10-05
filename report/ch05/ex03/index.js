// 判断条件はいわゆる「西向く士(2,4,6,9,11)は31日で終わらない」に基づいている
export function isEndofMonth31ByIf(dateStr) {
  if (
    dateStr === "Feb" ||
    dateStr === "Apr" ||
    dateStr === "Jun" ||
    dateStr === "Sep" ||
    dateStr === "Nov"
  ) {
    return false;
  } else {
    return true;
  }
}

export function isEndofMonth31BySwitch(dateStr) {
  switch (dateStr) {
    case "Feb":
    case "Apr":
    case "Jun":
    case "Sep":
    case "Nov":
      return false;
    default:
      return true;
  }
}

function main() {
  // If
  console.log("Jan:" + isEndofMonth31ByIf("Jan")); // true
  console.log("Feb:" + isEndofMonth31ByIf("Feb")); // false
  console.log("Mar:" + isEndofMonth31ByIf("Mar")); // true
  console.log("Apr:" + isEndofMonth31ByIf("Apr")); // false
  console.log("May:" + isEndofMonth31ByIf("May")); // true
  console.log("Jun:" + isEndofMonth31ByIf("Jun")); // false
  console.log("Jul:" + isEndofMonth31ByIf("Jul")); // true
  console.log("Aug:" + isEndofMonth31ByIf("Aug")); // true
  console.log("Sep:" + isEndofMonth31ByIf("Sep")); // false
  console.log("Oct:" + isEndofMonth31ByIf("Oct")); // true
  console.log("Nov:" + isEndofMonth31ByIf("Nov")); // false
  console.log("Dec:" + isEndofMonth31ByIf("Dec")); // true
  // Switch
  console.log("Jan:" + isEndofMonth31BySwitch("Jan")); // true
  console.log("Feb:" + isEndofMonth31BySwitch("Feb")); // false
  console.log("Mar:" + isEndofMonth31BySwitch("Mar")); // true
  console.log("Apr:" + isEndofMonth31BySwitch("Apr")); // false
  console.log("May:" + isEndofMonth31BySwitch("May")); // true
  console.log("Jun:" + isEndofMonth31BySwitch("Jun")); // false
  console.log("Jul:" + isEndofMonth31BySwitch("Jul")); // true
  console.log("Aug:" + isEndofMonth31BySwitch("Aug")); // true
  console.log("Sep:" + isEndofMonth31BySwitch("Sep")); // false
  console.log("Oct:" + isEndofMonth31BySwitch("Oct")); // true
  console.log("Nov:" + isEndofMonth31BySwitch("Nov")); // false
  console.log("Dec:" + isEndofMonth31BySwitch("Dec")); // true
}
main();
