// code your solution here

function superbowlWin(record) {
  const isWin = record.find((element) => element.result === "W");
  console.log(isWin);
  return isWin ? isWin.year : undefined;
}

superbowlWin(record);
