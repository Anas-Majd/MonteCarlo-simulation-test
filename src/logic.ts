function generateRandomBinaryString() {
  const randomNumber = Math.floor(Math.random() * 2 ** 10);
  let binaryString = randomNumber.toString(2);
  binaryString = binaryString.padStart(10, "0");
  return binaryString;
}
export function CalculateScore(string: string) {
  let ans = generateRandomBinaryString();
  return Array.from(string).reduce((score:number, char, i) => {
    return score + (char === ans[i] ? 1 : 0);
  }, 0);
}
export function SD(data: { name: string ,value: number; }[]) {
  let sd = 0;
  let avg = average(data);
  for (let i = 1; i <= 10; i++) {
    sd += Math.pow(avg - i, 2) * (data[i].value / 1000000);
  }
  sd = Math.sqrt(sd);
  return sd;
}
export function average(data: { name: string ,value: number; }[]) {
  let avg = 0;
  for (let i = 1; i <= 10; i++) {
    avg += (i * data[i].value) / 1000000;
  }
  return avg;
}
export async function Compute() {
  let allTrue = Array.from({ length: 11 }, (_, i) => ({ name: `${i}`, value: 0 }));
  let allFalse = Array.from({ length: 11 }, (_, i) => ({ name: `${i}`, value: 0 }));
  let random = Array.from({ length: 11 }, (_, i) => ({ name: `${i}`, value: 0 }));
  let testCases = 1000000;
  while (testCases--) {
    let Rscore = 0;
    let Tscore = 0;
    let ans = generateRandomBinaryString();
    let randomAns = generateRandomBinaryString();
    for (let i = 0; i < 10; i++) {
      if (ans[i] === randomAns[i]) {
        Rscore += 1;
      }
      if (ans[i] === "1") {
        Tscore += 1;
      }
    }
    allTrue[Tscore].value += 1;
    allFalse[10 - Tscore].value += 1;
    random[Rscore].value += 1;
  }
  return {
    allTrue,
    allFalse,
    random,
  };
}
