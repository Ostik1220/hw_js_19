// 1
const openButton = document.querySelector('[data-action="open-modal"]')
console.log(openButton)
const closeButton = document.querySelector('[data-action="close-modal"]')
const backdrop = document.querySelector(".js-backdrop")
openButton.addEventListener("click", () =>{
    backdrop.style.opacity = "1";
    backdrop.style.visibility = "visible";
    backdrop.style.pointerEvents = "initial"
})

closeButton.addEventListener("click", () =>{
    backdrop.style.opacity = "0";
    backdrop.style.visibility = "hidden";
    backdrop.style.pointerEvents = "none"
})

//2

backdrop.addEventListener("click", () =>{
    backdrop.style.opacity = "0";
    backdrop.style.visibility = "hidden";
    backdrop.style.pointerEvents = "none"
})

//3
const body = document.querySelector("body")
const colorRed = document.querySelector('[value="red"]')
const colorWhite = document.querySelector('[value="white"]')
const colorGreen = document.querySelector('[value="green"]')
console.log(colorRed)
colorRed.addEventListener("change", (event) =>{
    const statusCheck = event.target.checked;
    if (statusCheck === true) {
        body.style.backgroundColor = "red"
      } 
})
colorWhite.addEventListener("change", (event) =>{
    const statusCheck = event.target.checked;
    if (statusCheck === true) {
        body.style.backgroundColor = "white"
      } 
})
colorGreen.addEventListener("change", (event) =>{
    const statusCheck = event.target.checked;
    if (statusCheck === true) {
        body.style.backgroundColor = "green"
      } 
})

//4
const inputQuestion = document.querySelector("#name-input")
const nameSpan = document.querySelector("#name-output")

inputQuestion.addEventListener("input", (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
        nameSpan.textContent = "незнайомець"
    } else {
        nameSpan.textContent = e.target.value;
    }
    
  }); 

  //4.5

  const inputElement = document.querySelector("#validation-input");
  const requiredLength = Number(inputElement.dataset.length); 
  
  inputElement.addEventListener("blur", (e) => {
      const inputLength = e.target.value.length; 
  

      e.target.classList.remove("valid", "invalid");
  
      if (inputLength !== requiredLength) {
          e.target.classList.add("invalid"); 
      } else {
        e.target.classList.add("valid"); 
      }
  });

  //5
  const fontSizeControl = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

fontSizeControl.value = 16; 
textElement.style.fontSize = `${fontSizeControl.value}px`;


fontSizeControl.addEventListener("input", (e) => {
    textElement.style.fontSize = `${e.target.value}px`;
});