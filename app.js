let gameSeq = [];
let userSeq = [];
let start = "false";
let level = 0;
let h2 = document.querySelector("h2");
let body = document.querySelector('body')
let btns = ['yellow','red','purple', 'green']

document.addEventListener("keypress", function () {
  if (start == "false") {
    console.log("gameStarted");
    start = "true";
    levelUP();
  }
});


function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}


function levelUP() {
  userSeq = []
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random()*3)
  let randColor = btns[randIdx]
  let randBtn = document.querySelector(`.${randColor}`)
  btnFlash(randBtn)
  gameSeq.push(randColor)
  console.log(gameSeq);
}


function checkAns(idx){
  if (gameSeq[idx] == userSeq[idx]){
   if (userSeq.length == gameSeq.length){
     setTimeout(levelUP, 300);

   }
  }else{
   h2.innerText = `Game Over ! Your Score was ${level} Press any key to Restart`
   body.classList.add('red')
   setTimeout(()=>{
    body.classList.remove('red')
    },100)
    console.clear()
    reset()
  }
}


function btnPress(btn) {
  btnFlash(btn);
  let userColor = btn.getAttribute("id");
  // console.log(userColor);
  userSeq.push(userColor);
  // console.log(userSeq);
}


let allbtns = document.querySelectorAll(".btn")
for (btn of allbtns){
  btn.addEventListener('click',function(){
    console.log("Button was pressed"); 
    btnPress(this)
    // console.log(this); 
    checkAns(userSeq.length -1)

  })
}


function reset(){
  start = "false"
  level = 0
  userSeq = []
  gameSeq = []

}