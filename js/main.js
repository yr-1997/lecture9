const generateBlocks = () => {
    const square = document.createElement('div');
    square.classList.add('bigSquare');
    square.style.width = 250 + 'px';
    square.style.display = 'flex';
    square.style.margin = "100px auto";
    square.style.flexWrap = 'wrap';
    document.body.prepend(square);
    const countOfLittleSquare = 25;
    for (let i = 1; i <= countOfLittleSquare; i++) {
        const littleSquare = document.createElement('div');
        littleSquare.classList.add('littleSquare');
        littleSquare.style.width = 50 + 'px';
        littleSquare.style.height = 50 + 'px';
        square.append(littleSquare);
    }
};
generateBlocks();
const generateBlocksInterval = () => {
    document.querySelectorAll('.littleSquare').forEach(el => {
        el.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8);
    });
};
const delay = 1000;
setInterval(() => generateBlocksInterval(), delay);