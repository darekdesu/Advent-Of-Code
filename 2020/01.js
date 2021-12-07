const parseInput = (input) => input.split('\n').map(x => Number.parseInt(x));
const YEAR = 2020;

const part1 = data => {
  const input = parseInput(data);
  for (let x = 0; x < input.length; x++) {
    for (let y = 0; y < input.length; y++) {
      if (input[x] + input[y] === YEAR) {
        return input[x] * input[y]
      }
    }
  }
}

const part2 = data => {
  const input = parseInput(data);
  for (let x = 0; x < input.length; x++) {
    for (let y = 0; y < input.length; y++) {
      for (let z = 0; z < input.length; z++) {
        if (input[x] + input[y] + input[z] === YEAR) {
          return input[x] * input[y] * input[z]
        }
      }
    }
  }
}

module.exports = { part1, part2 };
