import './componets/colorBall.js';

const agregar = document.querySelector('.agregar');
const containerBolas = document.querySelector('.container-bolas');
const containerInfo = document.querySelector('.container-info');

//  Cuando se agrega un componente con el btn 'agregar'
agregar.addEventListener('click', () => {
	const colorBall = document.createElement('color-ball');
	containerBolas.appendChild(colorBall);
});

// El body escucha el evento 'INFO' que emite el click en componente colorBall
document.body.addEventListener('INFO', (e) => {
	containerInfo.innerHTML = `<div><h1>${e.detail.num}</h1><h3>${e.detail.color}</h3></div>`;
	containerInfo.style.backgroundColor = e.detail.color;
});
