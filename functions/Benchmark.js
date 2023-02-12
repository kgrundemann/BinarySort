import GetStandardDeviation from "../functions/GetStandardDeviation";

export const runBenchmark = (testFunction, data, numOfRuns) => {
  let runtimes = [];
  let sortedData;
  for (let i = 0; i < numOfRuns; i++) {
    let start = performance.now();
    sortedData = testFunction(data);
    let end = performance.now();
    let total = end - start;
    runtimes[i] = total;
  }
  let results = "Results for " + numOfRuns + " runs:\n";
  results += "Max: " + Math.max(...runtimes) + "\n";
  results += "Min: " + Math.min(...runtimes) + "\n";
  results +=
    "Average: " + runtimes.reduce((a, b) => a + b, 0) / numOfRuns + "\n";
  results += "StdDev: " + GetStandardDeviation(runtimes) + "\n";
  return { results, sortedData };
};
