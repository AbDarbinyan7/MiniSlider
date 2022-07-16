 const slider_imges = document.querySelector(".slider_imges")
 const allImges = document.querySelectorAll(".slider_imges img")
 const backButton =  document.querySelector(".backButton")
 const dotsDiv = document.querySelector(".dots")
 backButton.onclick = () => onPrevImg()
 const  selectButton = document.querySelector(".selectButton")
 selectButton.onclick = () => onSelectImg()


let counter = 1


for (let i = 0; i < allImges.length; i++) {
     const img = allImges[i];
     let dot = document.createElement("div")
     dot.classList.add("dot")
     dotsDiv.appendChild(dot)
     dot.onclick = ()=>  onDotDrive(i,dot);     
}
const dots = document.querySelectorAll(".dot")

if (counter === 1) {
    let dot = dots[counter - 1]
    onchangeDotStyle(dot)
}   

 function onDotDrive(id, elem) {
    
    onChangeTransitionTransform(id)
     counter = id + 1
     for (let i = 0; i < dots.length; i++) {
          const el = dots[i];
          onDotBorderBoxshadowchange(el)
          onchangeDotStyle(elem)
      }

}
function onSelectImg(){

   if(counter === allImges.length){
      slider_imges.style.transition = "none"
      counter = 0
      slider_imges.style.transform = "translateX(" + counter * -100 + "%)"
   }
    onChangeTransitionTransform(counter)
    counter++
    onDotStyle()
}
function onPrevImg(){
 
    if(counter === 1){
    slider_imges.style.transition = "none"
    counter = allImges.length + 1
    onSearchXandTransform()
    } 
    onSearchXandTransform()
    slider_imges.style.transition = "0.6s"
    counter--
    onDotStyle()
}
function onChangeTransitionTransform(point){
    slider_imges.style.transition = "0.6s"
    slider_imges.style.transform = "translateX(" + point * -100 + "%)"
}
function onchangeDotStyle (dot){
    dot.style.border = "5px solid black"
    dot.style["boxShadow"] = "0px 0px 10px 2px rgb(58, 201, 113)"
}
function onDotBorderBoxshadowchange(dot){
    dot.style.border = "none"
    dot.style["boxShadow"] = "none"
}
function onDotStyle() {
    for (let i = 0; i < dots.length; i++) {
        const el = dots[i];
        onDotBorderBoxshadowchange(el)
        if(counter){
            onchangeDotStyle(dots[counter-1])
        }
    }
}
function onSearchXandTransform() {
    let x = (counter - 2) * 100
    slider_imges.style.transform = "translateX(" +  -x + "%)"
}
    
