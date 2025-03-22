
let count = 0;
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const imgPath = document.querySelector('#certificate');


const certificateArray = [
 "/Image-Carousal/assets/cer1.png",
 "/Image-Carousal/assets/cer2.png",
 "/Image-Carousal/assets/cer3.png",
 

];


imgPath.addEventListener('click',() => {
      clearInterval(intervalId);
});

let intervalId = setInterval(() => {
    ++count;
    count = count % certificateArray.length;
    imgPath.setAttribute("src",certificateArray[count]);


   
},2000);


nextBtn.addEventListener('click', () => {
 
   ++count;
   count = count % certificateArray.length;
  
   setTimeout(() =>{
    imgPath.setAttribute("src",certificateArray[count]);
   },500);
   
})

prevBtn.addEventListener('click', () => {

    --count;
    if(count < 0){
        count = certificateArray.length - 1;
    }
    count = count % certificateArray.length;

    setTimeout(() => {
        imgPath.setAttribute("src", certificateArray[count]);
    },500);
})
