export const calculateAverage = (numbers) => {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return Number((sum / numbers.length).toFixed(2));
  };
  
  
