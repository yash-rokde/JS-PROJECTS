const addBtn = document.querySelector("#add-btn");

function makeElement(elementType,imagePath,text, addclasses = []) {
         
  const element = document.createElement(elementType);
  const imagePat = imagePath;

  if(addclasses.length > 0){
    addclasses.forEach((value) => {
         element.classList.add(value);
    })
  }

  if(imagePat !== ""){
    element.setAttribute("src", imagePat);
  }
  
  if(text !== ""){
     const textNode = document.createTextNode(text);
     element.appendChild(textNode);
  }

return element;
}











addBtn.addEventListener('click', ()=> {

    let value = document.getElementById("task-input").value;
    if(value.length > 0){

      const listElement = makeElement("li","","",["task"]);
      const textElement = makeElement("span","",value,["font-mono"]);
      const divElement =  makeElement("div","","",["task-btns"]);
      const deleteElement = makeElement("button","","",["delete-btn"]);
      const completedElement = makeElement("button","","Mark as Completed",["bg-white","p-2","shadow-sm","text-sm","rounded-md","cursor-pointer","completed-btn","cursor-pointer"]);
      const deleteImage = makeElement("img","/To-Do-List-App/assets/delete.png","",["w-7","h-7","cursor-pointer"])

     
      deleteElement.appendChild(deleteImage);
      divElement.appendChild(deleteElement);
      divElement.appendChild(completedElement);

      listElement.appendChild(textElement);
      listElement.appendChild(divElement);


      document.getElementById("task-container").appendChild(listElement);


      deleteElement.addEventListener('click', () => {
        listElement.remove();
    });

    completedElement.addEventListener('click',() =>{
      completedElement.innerHTML = `<img src = "/To-Do-List-App/assets/healthy.png" class="w-7 h-7 cursor-pointer"></img>`;
    })
      
    }
});

