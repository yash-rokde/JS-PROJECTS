const btn = document.querySelector('#btn');
const palette = document.querySelector('.palette');
const colorCode = document.querySelector('.color-code');

btn.addEventListener('click',() => {

    let letters = '0123456789ABCDEF';
    let color = '#'

    palette.innerHTML = '';

    for( let j = 0; j < 10; j++){
    for (let i = 0; i < 6; i++){
        color += letters[(Math.floor(Math.random() * 16))]; 
    }
    const colorBox = document.createElement('div');
    colorBox.classList.add('Box');
    colorBox.setAttribute('data-color', color);
    colorBox.style.backgroundColor = color;


    palette.appendChild(colorBox);

    color = '#';

    
    
    }

   colorCode.children[0].style.display = "block";
    

})

palette.addEventListener('click', (e) =>{
    
    
    const color = document.querySelector('.colorCode');
    color.innerHTML = "";
   
    if(e.target.classList.contains('Box')){
        
        const hexColor = e.target.getAttribute('data-color');
        document.body.style.backgroundColor = hexColor;
        color.textContent = hexColor;

    }
    
})





