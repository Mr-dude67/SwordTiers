
const boody = document.querySelector('body');
const cursor = document.getElementById('cursor');
const input = document.getElementById('input');

document.addEventListener("mousemove", (e) => {
	
	cursor.style.left = e.clientX + "px";
	cursor.style.top = e.clientY + "px";
	
});

window.onmousedown = () => { cursor.style.width = '25px'; cursor.style.height = '25px'; };
window.onmouseup = () => { cursor.style.width = '20px'; cursor.style.height = '20px'; };

const placement = document.querySelector('.placement');
const tier1 = document.getElementById('tier');

placement.textContent = '#1'; // will add better system l8r, but we know where he is SPEEDRUN1 GOAT 67 🐐 🐐
