const ans = Math.floor(Math.random()*100+1)
let form = document.querySelector(".form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let cp = document.querySelector(".cp");
    let mess = document.querySelector("#guess");
    let hiOrLo = document.querySelector(".lowerOrHi");
    let lastGuess = document.querySelector(".lastResult");
    let remaining = document.querySelector(".guesses");
    let input = parseInt(document.querySelector("#guessField").value)
    if(input === ans){
        alert("You Win!!!!")
        hiOrLo.innerHTML = `Score = ${remaining.innerText*100}`;
        mess.innerHTML = `Score = ${remaining.innerText*100}`;
        cp.innerHTML = "Click refresh to try again";
    }
    else if(input>ans){
        hiOrLo.innerHTML = "Lower Number Please";
    }
    else{
        hiOrLo.innerHTML = "Higher Number Please";
    }
    lastGuess.appendChild(document.createTextNode(input + " "));
    remaining.innerText = remaining.innerText-1;
    if(remaining.innerText == 0){
        mess.innerHTML = "Game Over";
        cp.innerHTML = "You Lose Click refresh to try again";
    }
})