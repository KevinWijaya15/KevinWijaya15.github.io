var testi = ["Awesome game - really nice implementation :)", "Nice game! This looks very professional.", "This is epic. The accuracy is great. You really made it looks professional. Not to mention that you made it functional (well the most functional it can be).", "This is really good for your first platformer. Great work!", "This is amazing! Everything is so smooth and the little ninja guy is so cute!", "Wow very nice! The gameplay overall is great and I like how you structured the menu screen and overall UI.", "I see no reason for this not to be at the top of the hotlist.", "Wow very nice! The gameplay overall is great and I like how you structured the menu screen and overall UI.", "nice game! this is pretty original and very fun. good work :D"];

var author = ["Grant Jenkins", "Ky", "VEXCESS", "originallyIK", "dragonQueen", "SKY", "Ace", "SKY", "Ibraheem Ahmed"];

var game = ["Knife Dash", "Knife Dash", "Spotify Sound", "Ninja Jumper", "Ninja Jumper", "Piano Tiles", "Piano Tiles", "Piano Tiles", "Highway Drivers"];

var testiEl = document.querySelector("h2.testimonial");
var descEl = document.querySelector("p.testimonial");
var authorEl = document.querySelector("strong.testimonial");
var gameEl = document.querySelector("span.testimonial");	

var which = 0;

//automatically change every 5 seconds
function chgTestiAuto() {
	which++;

	if (which > 8) { which = 0; } //restart

	if (which === 2) { testiEl.style.fontSize = "1.15em"; }
	else if (which === 4) { testiEl.style.fontSize = "1.25em"; }
	else { testiEl.style.fontSize = "1.5em"; }
	
	testiEl.textContent = testi[which];
	authorEl.textContent = author[which];
	gameEl.textContent = game[which];
}

window.setInterval(chgTestiAuto, 5000); 

//buttons
var buttons = document.getElementsByClassName("button");

function addWhich(e) { //next function
    e.preventDefault();
    
    chgTestiAuto();
};
function minusWhich(e) { //previous function
	e.preventDefault();

	which--;

	if (which < 0) { which = 8; }

	testiEl.textContent = testi[which];
	authorEl.textContent = author[which];
	gameEl.textContent = game[which];
}

buttons[0].addEventListener("click", minusWhich);
buttons[1].addEventListener("click", addWhich);