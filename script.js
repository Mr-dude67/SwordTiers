
const boody = document.querySelector('body');
const cursor = document.getElementById('cursor');
const input = document.getElementById('input');

document.addEventListener("mousemove", (e) => {
	
	cursor.style.left = e.clientX + "px";
	cursor.style.top = e.clientY + "px";
	
});

window.onmousedown = () => { cursor.style.width = '25px'; cursor.style.height = '25px'; };
window.onmouseup = () => { cursor.style.width = '20px'; cursor.style.height = '20px'; };

const placement = document.querySelector('.placement-text');

// i did add a BETTER SYSTEM placement.textContent = '#1'; // will add better system l8r, but we know where he is SPEEDRUN1 GOAT 67 🐐 🐐

// script for making new players

const playerHolder = document.querySelector('.player-holder');

function addPlayer(username, tier, gmImg, ranking) {
	
	const playerBox = document.createElement("div");
	playerBox.classList.add("player");
	
	const playerHead = document.createElement("img");
	playerHead.classList.add("player-head");
	playerHead.src = "https://minotar.net/avatar/" + username
	
	const playerUsername = document.createElement("p");
	playerUsername.textContent = username;
	
	const tierText = document.createElement("h5");
	tierText.classList.add("tier-text");
	tierText.textContent = tier;
	
	const gamemodeImg = document.createElement("img");
	gamemodeImg.classList.add("small-ranking-img");
	gamemodeImg.src = gmImg;
	
	const rank = document.createElement("h2")
	rank.classList.add("placement-text");
	rank.textContent = ranking;
	
	playerBox.append(playerHead);
	playerBox.append(playerUsername);
	playerBox.append(tierText);
	playerBox.append(gamemodeImg);
	playerBox.append(rank);
	
	playerHolder.append(playerBox);
	
}

addPlayer('speedrun1', 'HT1', 'sword.jpg', '#1');
addPlayer('DrNamee', 'LT5', 'sword.jpg', '#2');
