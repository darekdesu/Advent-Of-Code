const TREE_SYMBOL = '#';

const isThereTree = (input, currentRow, currentPosition) => {
    const row = input[currentRow];
    const index = (currentPosition % row.length + 1) - 1;

    return row[index] === TREE_SYMBOL;
}

const part1 = data => {
    const input = data.split('\n');
    let currentRow = 1;
    let currentPosition = 3;
    let treeCounter = 0;

    while (currentRow < input.length) {
        if (isThereTree(input, currentRow, currentPosition)) {
            treeCounter += 1;
        }
        currentRow += 1;
        currentPosition += 3;
    }

    return treeCounter;
}

const part2 = data => {
    const input = data.split('\n');
    const traverseMap = [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2],
    ];
    const currentRowMap = [1, 1, 1, 1, 2];
    const currentPositionMap = [1, 3, 5, 7, 1];
    const treeCounterMap = Array.from({ length: traverseMap.length }).fill(0);

    traverseMap.forEach(([rightStep, downStep], index) => {
        while (currentRowMap[index] < input.length) {
            if (isThereTree(input, currentRowMap[index], currentPositionMap[index])) {
                treeCounterMap[index] += 1;
            }
            currentRowMap[index] += downStep;
            currentPositionMap[index] += rightStep;
        }
    })

    return treeCounterMap.reduce((prev, curr) => prev * curr);
}

module.exports = { part1, part2 };
