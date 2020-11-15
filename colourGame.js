let numSquares= 6;
let colours= generateRandomColours(numSquares);
let squares= document.querySelectorAll(".square");
let pickedColour= pickColour();
let colourDisplay= document.getElementById("colourDisplay");
let messageDisplay= document.querySelector("#message");
let h1= document.querySelector("h1");
let resetButton= document.querySelector("#reset");
let easyBtn= document.querySelector("#easyBtn");
let hardBtn= document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares= 3;
	colours= generateRandomColours(numSquares);
	pickedColour= pickColour();
	colourDisplay.textContent= pickedColour;
	for(let i = 0; i < squares.length; i++){
		if(colours[i]){
			squares[i].style.background= colours[i];
		} else {
			squares[i].style.display= "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares= 6;
	colours= generateRandomColours(numSquares);
	pickedColour= pickColour();
	colourDisplay.textContent= pickedColour;
	for(let i = 0; i < squares.length; i++){
       squares[i].style.background= colours[i];
	   squares[i].style.display= "block";
    }
});

resetButton.addEventListener("click", function(){
	colours= generateRandomColours(numSquares);
	pickedColour= pickColour();
	colourDisplay.textContent= pickedColour;
	this.textContent= "New Colours"
	messageDisplay.textContent= "";
	for(let i = 0; i < squares.length; i++){
		squares[i].style.background= colours[i];
	}
	h1.style.background= "#6465A5";
})

colourDisplay.textContent= pickedColour;
for(let i = 0; i < squares.length; i++){
	squares[i].style.background= colours[i];

	squares[i].addEventListener("click", function(){
		let clickedColour= this.style.background;
		console.log(clickedColour, pickedColour);
		if(clickedColour === pickedColour){
			messageDisplay.textContent= "Correct";
			resetButton.textContent= "Play Again?"
			changeColours(clickedColour);
			h1.style.background= clickedColour;
		} else {
			this.style.background= "#232323";
			messageDisplay.textContent= "Try Again"
		}
	});
}

function changeColours(colour){
 	for(let i = 0; i < squares.length; i++){
 		squares[i].style.background= colour;
 	}
 }

 function pickColour(){
 	let random= Math.floor(Math.random() * colours.length);
 	return colours[random];
}

function generateRandomColours(num){
	let arr= []
	for(let i = 0; i < num; i++){
		arr.push(randomColour())
    }
	return arr;
}

function randomColour(){
	let r= Math.floor(Math.random() * 256);
	let g= Math.floor(Math.random() * 256);
	let b= Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}



