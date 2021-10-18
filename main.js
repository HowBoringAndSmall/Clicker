
//preview, timer: 
const timer = document.getElementById("timer");
const minutesInput = document.getElementById("input_min");
const submit = document.getElementById("submit1");
const game = document.getElementById("game");
const preview = document.getElementById("preview");
const endGame = document.getElementById("end-game");
let minutes = 0;
let everlasting = 0;
let startTime = 0;

submit.onclick = function(){
    minutes = minutesInput.value;
    startTime = minutes;
    preview.style.display = "none";
    game.style.display = "flex";
    console.log(21353)
    if(minutes > 0){
        timer.textContent = "time: " + minutes;
        setInterval(()=>{
            minutes --
            timer.textContent = "time: " + minutes;
            if (minutes < 0){
                game.style.display = "none";
                endGame.style.display = "block";
                let lastCounter = counter;
                endGame.innerHTML = `
                <h1>Time:${startTime} seconds</h1>
                <h2 class="score">Score:${lastCounter}</h2>`
            }
        }, 1000)
    }
    else
        everlasting = 0;
}



// game:


const countClick = document.getElementById("clicks");
const buttonClick = document.getElementById("button_click");
const upFisrt = document.getElementById("up_fisrt");
const autoClick = document.getElementById("auto_click")
let pointsUpFisrt = 1;
let counter = 0;

buttonClick.addEventListener('click', function(){
    counter += pointsUpFisrt;
    countClick.textContent = 'Counte clicks:' + counter;
});
upFisrt.addEventListener('click', function(){
    if (counter > 9){
        counter -= 10;
        countClick.textContent = 'Counte clicks:' + counter;
        pointsUpFisrt++;
    }
})
autoClick.addEventListener('click', function(){
    if (counter>99){
        counter -= 100;
        countClick.textContent = 'Counte clicks:' + counter;
        setInterval(()=>{
            counter++
            countClick.textContent = 'Counte clicks:' + counter;
        }, 1000)

    }
})

//end game:
