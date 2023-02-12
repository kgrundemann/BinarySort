const calculatePrimeNumbers = (count) => {
  let primes = [];
  let num = 2;

  while (primes.length < count) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
    num++;
  }
  return primes;
};

export default calculatePrimeNumbers;
