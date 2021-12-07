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
  throw new Error('Implement me!');
}

module.exports = { part1, part2 };
