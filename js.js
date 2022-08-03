// const slider = document.querySelector(".slider"),
// activ = document.querySelector("#activ"),
// line1 = document.querySelector("#line1"),
// line2 = document.querySelector("#line2"),
// line3 = document.querySelector("#line3"),
// line4 = document.querySelector("#line4"),
// wrapper = document.querySelector(".wrapper");



// line1.addEventListener("click",function(){
//     slider.style.transform='translateX(0)'
//     activ.style.top = 0;

//     wrapper.style.backgroundColor = "#ADB90B";
// })
// line2.addEventListener("click",function(){
//     slider.style.transform='translateX(-25%)'
//     activ.style.top = '80px';

//     wrapper.style.backgroundColor = "#B9680B";
// })
// line3.addEventListener("click",function(){
//     slider.style.transform='translateX(-50%)'
//     activ.style.top = '160px';

//     wrapper.style.backgroundColor = "#282DB9";
// })
// line4.addEventListener("click",function(){
//     slider.style.transform='translateX(-75%)'
//     activ.style.top = '240px';

//     wrapper.style.backgroundColor = "03B900";
// })



const slider = document.querySelector(".slider"),
activ = document.querySelector("#activ"),
line1 = document.querySelector("#line1"),
line2 = document.querySelector("#line2"),
line3 = document.querySelector("#line3"),
line4 = document.querySelector("#line4"),
wrapper = document.querySelector(".wrapper");



line1.addEventListener("click",function(){
    slider.style.transform='translateX(0)'
    activ.style.top = 0;

    // wrapper.style.backgroundColor = "#ADB90B";
})
line2.addEventListener("click",function(){
    slider.style.transform='translateX(-25%)'
    activ.style.top = '80px';

    // wrapper.style.backgroundColor = "#B9680B";
})
line3.addEventListener("click",function(){
    slider.style.transform='translateX(-50%)'
    activ.style.top = '160px';

    // wrapper.style.backgroundColor = "#282DB9";
})
line4.addEventListener("click",function(){
    slider.style.transform='translateX(-75%)'
    activ.style.top = '240px';

    // wrapper.style.backgroundColor = "03B900";
})


let adtBtn = document.querySelector("#adt");
let sutBtn = document.querySelector("#sut");
let qtt = document.querySelector("#qttBox");

adtBtn.addEventListener("click", () => {
  qtt.value = parseInt(qtt.value) + 1;
});

sutBtn.addEventListener("click", () => {
  if (qtt.value <= 0) {
    qtt.value = 0;
  } else {
    qtt.value = parseInt(qtt.value) - 1;
  }
});