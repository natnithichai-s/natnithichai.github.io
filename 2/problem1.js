const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  
  const inputLoop = () => {
    const input = prompt("Enter a positive integer:");
  
    if (input === null) {
      alert("Operation cancelled.");
      return;
    }
  
    const inputValue = parseInt(input);
  
    if (isNaN(inputValue) || inputValue <= 0 || input.includes(".") || input.includes(",")) {
      alert("Please enter a valid positive integer.");
      inputLoop(); // Repeat the loop for valid input
    } else {
      const primeNumbers = [];
  
      for (let i = 2; i <= inputValue; i++) {
        if (isPrime(i)) {
          primeNumbers.push(i);
        }
      }
  
      if (primeNumbers.length > 0) {
        alert(`For n = ${inputValue}, prime numbers are: ${primeNumbers.join(", ")}`);
      } else {
        alert(`For n = ${inputValue}, no prime numbers found.`);
      }
    }
  };
  
  inputLoop(); // Start the input loop
  