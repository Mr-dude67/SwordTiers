
const boody = document.querySelector('body');
const cursor = document.getElementById('cursor');
const input = document.getElementById('input');

document.addEventListener("mousemove", (e) => {
	
	cursor.style.left = e.clientX + "px";
	cursor.style.top = e.clientY + "px";
	
});

window.onmousedown = () => { cursor.style.width = '25px'; cursor.style.height = '25px'; };
window.onmouseup = () => { cursor.style.width = '20px'; cursor.style.height = '20px'; };

const tierBox1 = document.getElementById('tier1');
const tierBox2 = document.getElementById('tier2');
const tierBox3 = document.getElementById('tier3');
const tierBox4 = document.getElementById('tier4');
const tierBox5 = document.getElementById('tier5');

function addTieredPlayer(user, tier, visualTier) {
	
	if (tier == 'T1') {
		const userText = document.createElement("p");
		userText.textContent = user;
		
		const tierText = document.createElement("span");
		tierText.textContent = visualTier;
		tierText.style.fontWeight = "bold";
		tierText.style.color = "blue";
		
		userText.append(' ', tierText);
		
		tierBox1.append(userText);
		
	} else if (tier == 'T2') {
		const userText = document.createElement("p");
		userText.textContent = user;
		
		const tierText = document.createElement("span");
		tierText.textContent = visualTier;
		tierText.style.fontWeight = "bold";
		tierText.style.color = "deeppink";
		
		userText.append(' ', tierText);
		
		tierBox2.append(userText);
		
	} else if (tier == 'T3') {
		const userText = document.createElement("p");
		userText.textContent = user;
		
		const tierText = document.createElement("span");
		tierText.textContent = visualTier;
		tierText.style.fontWeight = "bold";
		tierText.style.color = "white";
		
		userText.append(' ', tierText);
		
		tierBox3.append(userText);
		
	} else if (tier == 'T4') {
		const userText = document.createElement("p");
		userText.textContent = user;
		
		const tierText = document.createElement("span");
		tierText.textContent = visualTier;
		tierText.style.fontWeight = "bold";
		tierText.style.color = "cyan";
		
		userText.append(' ', tierText);
		
		tierBox4.append(userText);
		
	} else if (tier == 'T5') {
		const userText = document.createElement("p");
		userText.textContent = user;
		
		const tierText = document.createElement("span");
		tierText.textContent = visualTier;
		tierText.style.fontWeight = "bold";
		tierText.style.color = "red";
		
		userText.append(' ', tierText);
		
		tierBox5.append(userText);
		
	}
	
}

addTieredPlayer('speedrun1', 'T1', 'HT1');
addTieredPlayer('everyone else', 'T5', 'LT5');