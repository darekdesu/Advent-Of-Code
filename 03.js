const TREE_SYMBOL = '#';

const isThereTree = (input, currentRow, rightStep) => {
    const row = input[currentRow];
    const position = currentRow * rightStep;
    const index = (position % row.length + 1) - 1;

    return row[index] === TREE_SYMBOL;
}

const part1 = data => {
    const input = data.split('\n');
    let currentRow = 1;
    let treeCounter = 0;

    while (currentRow < input.length) {
        if (isThereTree(input, currentRow, 3)) {
            treeCounter += 1;
        }
        currentRow += 1;
    }

    return treeCounter;
}

const part2 = data => {}

module.exports = { part1, part2 };
