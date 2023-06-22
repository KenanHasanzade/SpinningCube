const cube = document.querySelector(".cube");
const faces = [...document.querySelectorAll(".face")]
const ul = document.querySelector("ul");
let X = 0;
let Y = 0;
let allow = true;   

document.addEventListener("transitionstart",()=>{
    [...ul.children].map(a=>{
        a.classList.add("deactive")
    })
    allow = false;
});
document.addEventListener("transitionend",()=>{
    [...ul.children].map(a=>{
        a.classList.remove("deactive")
    })
    allow = true;
});
const setDegrees = ()=>{
    cube.style.transform = `rotateX(${X}deg) rotateY(${Y}deg)`
}
faces.map(face=>{
    const li = document.createElement("li");
    li.textContent = face.classList.value.split(" ")[1];
    ul.prepend(li);
})
ul.addEventListener("click",(e)=>{
    if(e.target.tagName !=="LI" || !allow){
        return
    }
  switch(e.target.textContent){
    case "front":
        X = 0;
        Y = 0;
        setDegrees()
        break;
    case "back":
        X = 0;
        Y = 180;
        setDegrees()
        break;
    case "left":
        X = 0;
        Y = 90;
        setDegrees()
        break;
    case "right":
        X = 0;
        Y = -90;
        setDegrees()
        break;
    case "top":
        X = -90;
        Y = 0;
        setDegrees()
        break;
    case "bottom":
        X = 90;
        Y = 0;
        setDegrees()
        break;
    default:
        X = Math.floor(Math.random() * 5) * 90;
        Y = Math.floor(Math.random() * 5) * 90;
        setDegrees()
  }
})