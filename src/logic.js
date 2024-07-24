function generateRandomBinaryString() {
  const randomNumber = Math.floor(Math.random() * 2 ** 20);
  let binaryString = randomNumber.toString(2);
  binaryString = binaryString.padStart(20, "0");
  return binaryString;
}
export function CalculateScore(string) {
  let ans = generateRandomBinaryString();
  return Array.from(string).reduce((score, char, i) => {
    return score + (char === ans[i] ? 1 : 0);
  }, 0);
}
export function SD(data) {
  let sd = 0;
  let avg = average(data);
  for (let i = 1; i <= 20; i++) {
    sd += Math.pow(avg - i, 2) * (data[i].value / 1000000);
  }
  sd = Math.sqrt(sd);
  return sd;
}
export function average(data) {
  let avg = 0;
  for (let i = 1; i <= 20; i++) {
    avg += (i * data[i].value) / 1000000;
  }
  return avg;
}
export function Compute() {
  let allTrue = Array.from({ length: 21 }, (_, i) => ({ name: i, value: 0 }));
  let allFalse = Array.from({ length: 21 }, (_, i) => ({ name: i, value: 0 }));
  let random = Array.from({ length: 21 }, (_, i) => ({ name: i, value: 0 }));
  let testCases = 1000000;
  while (testCases--) {
    let Rscore = 0;
    let Tscore = 0;
    let ans = generateRandomBinaryString();
    let randomAns = generateRandomBinaryString();
    for (let i = 0; i < 20; i++) {
      if (ans[i] === randomAns[i]) {
        Rscore += 1;
      }
      if (ans[i] === "1") {
        Tscore += 1;
      }
    }
    allTrue[Tscore].value += 1;
    allFalse[20 - Tscore].value += 1;
    random[Rscore].value += 1;
  }
  return {
    allTrue,
    allFalse,
    random,
  };
}
