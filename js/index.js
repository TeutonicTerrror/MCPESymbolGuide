const formats = [
    {code: '0', name: 'Black', color: '#000000'},
    {code: '1', name: 'Dark Blue', color: '#0000AA'},
    {code: '2', name: 'Dark Green', color: '#00AA00'},
    {code: '3', name: 'Cyan', color: '#00AAAA'},
    {code: '4', name: 'Red', color: '#AA0000'},
    {code: '5', name: 'Purple', color: '#AA00AA'},
    {code: '6', name: 'Gold', color: '#FFAA00'},
    {code: '7', name: 'Gray', color: '#AAAAAA'},
    {code: '8', name: 'Dark Gray', color: '#555555'},
    {code: '9', name: 'Light Blue', color: '#5555FF'},
    {code: 'a', name: 'Lime', color: '#55FF55'},
    {code: 'b', name: 'Light Cyan', color: '#55FFFF'},
    {code: 'c', name: 'Light Red', color: '#FF5555'},
    {code: 'd', name: 'Magenta', color: '#FF55FF'},
    {code: 'e', name: 'Yellow', color: '#FFFF55'},
    {code: 'f', name: 'White', color: '#FFFFFF'},
    {code: 'l', name: 'Bold', style: 'font-weight: bold'},
    {code: 'n', name: 'Underlined', style: 'text-decoration: underline'},
    {code: 'o', name: 'Italics', style: 'font-style: italic'},
    {code: 'k', name: 'Scrambled', style: 'font-family: monospace; letter-spacing: 2px'},
    {code: 'r', name: 'Reset', style: 'all: revert'}
];

const grid = document.getElementById('grid');
    
formats.forEach(format => {
    const card = document.createElement('div');
    card.className = 'card';
    const exampleContent = format.code === 'r' ? '<code>Example Text</code>' : 
                          format.code === 'k' ? '<div class="scramble-text">▒▒▓▓██</div>' : 
                          'Example Text';
    card.innerHTML = `
        <div class="code" style="${format.style || `color: ${format.color}`}">§${format.code}</div>
        <div>${format.name}</div>
        <div class="example" style="${format.style || `color: ${format.color}`}">${exampleContent}</div>
    `;
    card.addEventListener('click', () => copySymbol(`§${format.code}`));
    grid.appendChild(card);
});

function copySymbol(symbol) {
    navigator.clipboard.writeText(symbol);
    const notice = document.getElementById('copyNotice');
    notice.style.display = 'block';
    setTimeout(() => notice.style.display = 'none', 1000);
}
