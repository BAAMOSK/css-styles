const container = document.getElementById('container');
const width = window.innerWidth;
const height = window.innerHeight;

console.log(width);
console.log(height);

const area = (height + width) * 2;
console.log(area);

for(let i = 0; i < area; i++) {    
    const box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);
}
