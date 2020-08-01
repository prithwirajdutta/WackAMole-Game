const square1 = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
let r = 0

// pop mole randomly

function randomsq(){
    square1.forEach(c => {
        c.classList.remove("mole")
    })
    i = Math.floor(Math.random()*9)
    square1[i].classList.add("mole")
    hitid = square1[i].id
}

setInterval(() => {
    randomsq()
}, 1000)

// check if hit add to score

square1.forEach(i=>{
    i.addEventListener("mouseup",()=>{
        if(i.id===hitid){
           r++
           score.textContent = r
        }
    })
})

// timer

t = timeLeft.textContent
setInterval(() => {
    t--
    timeLeft.textContent = t
    if(t === 0)
    {
        alert("Game Over, your final score is "+ r)
        timeLeft.textContent = 60
        t=60
    }
}, 500)

// reset

const reset = document.querySelector("#reset")
reset.addEventListener("click",function(){
    score.textContent = 0
    timeLeft.textContent = 60
    t=60
})