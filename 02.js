const getInput = (data) => data.split('\n').map(d => {
    const parts = d.split(' ');
    const minMax = parts[0].split('-');
    return {
      min: parseInt(minMax[0]),
      max: parseInt(minMax[1]),
      char: parts[1].slice(0, -1),
      pass: parts[2]
    }
  });

const part1 = data => {
  const input = getInput(data);
  let counter = 0;

  for(let i = 0; i < input.length; i++) {
    const { min, max, char, pass } = input[i];
    const charOccurences = pass.split(char).length - 1;

    if (charOccurences >= min && charOccurences <= max) {
      counter++;
    }
  }

  return counter;
}

const part2 = data => {
  const input = getInput(data);
  let counter = 0;

  for(let i = 0; i < input.length; i++) {
    const { min, max, char, pass } = input[i];
    const firstChar = pass.charAt(min - 1);
    const secondChar = pass.charAt(max - 1);

    if (firstChar === char && secondChar === char) continue;
    if (firstChar === char) { counter++; }
    if (secondChar === char) { counter++; }
  }

  return counter;
}

module.exports = { part1, part2 };
