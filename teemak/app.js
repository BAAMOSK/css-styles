const view = document.getElementById('window');

const width = view.offsetWidth;
const height = view.offsetHeight;
//const area = ((width + height) * 2) / 25;
//const  area  = width * height;
const area = 6;

const result = ((width * height) / 25);
console.log(result);

for(let i = 0; i < 655; i++) {
    const box = document.createElement('div');
    box.className = 'frame';
    view.appendChild(box);
}
