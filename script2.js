function playSound(e){
    let audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    console.log(audio);
    if(!audio)return;
    //es5 syntax;
    /*var audi0 = document.querySelector("audio[data-key=\""+ e.keyCode+"\"]")
    console.log(audi)*/
    let key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    let div = document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(div)
   div.classList.add("play")
    audio.currentTime=0;
    audio.play()
}
function playByClick(e){
console.log(e)
    let div = document.querySelector(`div[data-key="${e.target.dataset.key}"]`);
    console.log(div)
    div.classList.add("play")
    let keyCode=e.target.dataset.key
    console.log(keyCode)
    let audio = document.querySelector(`audio[data-key="${keyCode}"]`)
    console.log(audio);
    audio.currentTime=0;
    audio.play()
    
  

}
window.addEventListener("keydown", playSound)
let key = document.querySelectorAll(".key")
key.forEach(item=>{
    item.addEventListener("click",playByClick)
})
//console.log(key)

function removeTransition(e){
    
        //console.log(this)
     
      this.classList.remove("play")  
      

}
let transition = document.querySelectorAll(".key")
transition.forEach(item=>{
    item.addEventListener("transitionend",removeTransition)
})

