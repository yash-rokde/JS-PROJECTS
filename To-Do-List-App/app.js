const addBtn = document.querySelector("#add-btn");
const inputBox = document.getElementById("task-input");
const taskContainer = document.querySelector("#task-container");

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


inputBox.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});

addBtn.addEventListener('click', ()=> {

    let value = document.getElementById("task-input").value;
    if(value.trim().length > 0){

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
      document.getElementById("task-input").value = "";
      
    }
});


taskContainer.addEventListener('click',(e) => {
      if( e.target.classList.contains('delete-btn') || e.target.tagName === "IMG"){
       
            let flag = confirm("Are you sure want to delete this task ?");
            if(flag) e.target.closest('li').remove();
       
      }
      if(e.target.classList.contains('completed-btn')){

            e.target.closest('li').classList.toggle('completed-task');
            const isCompleted = e.target.closest('li').classList.contains('completed-task');
            e.target.textContent = isCompleted ?  "Completed" : "Mark as completed" ;

      }
})

