const parseData = (data) => data.split('\n').map(x => Number.parseInt(x));

const part1 = data => {
  const parsedData = parseData(data);
  
  let counter = 0;
  parsedData.reduce((prev, curr) => {
    if (curr > prev) {
      counter++;
    }

    return curr;
  });

  return counter;
}

const part2 = data => {
  const parsedData = parseData(data);

  let counter = 0;
  parsedData.reduce((prev, curr, index) => {
    if (index < 3) return prev + curr; 
    const exMeasurement = parsedData[index - 3];

    if (prev + exMeasurement < prev + curr) {
      counter++
    }

    return prev - exMeasurement + curr;
  });

  return counter;
}

module.exports = { part1, part2 };
