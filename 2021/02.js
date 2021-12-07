const parseData = (data) => data.split('\n').map(x => x);

const part1 = data => {
  const parsedData = parseData(data);
  
  let horizontal = 0;
  let depth = 0;
  parsedData.forEach(command => {
    const coordinates = command.split(' ');
    coordinates[1] = Number(coordinates[1])

    if (coordinates[0] === 'forward') { horizontal += coordinates[1] }
    if (coordinates[0] === 'down') { depth += coordinates[1] }
    if (coordinates[0] === 'up') { depth -= coordinates[1] }

    return;
  });

  return horizontal * depth;
}

const part2 = data => {
  const parsedData = parseData(data);
  
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  parsedData.forEach(command => {
    const coordinates = command.split(' ');
    coordinates[1] = Number(coordinates[1])

    if (coordinates[0] === 'forward') {
      horizontal += coordinates[1]
      depth += aim * coordinates[1] 
    }
    if (coordinates[0] === 'down') { aim += coordinates[1] }
    if (coordinates[0] === 'up') { aim -= coordinates[1] }

    return;
  });

  return horizontal * depth;
}

module.exports = { part1, part2 };
