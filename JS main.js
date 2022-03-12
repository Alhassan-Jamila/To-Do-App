//variables
const todoInput = document.querySelector("#todo-input")
const addBtn = document.querySelector("#add-btn")
const todoList = document.querySelector("ul")

let todoArray = new Set();
let user;

//funtion to add new
const addTodo = () =>{
   if(todoArray.size != 5){
      if(todoInput.value !=""){
       todoInput.parentElement.classList.remove("error")
       todoArray.add(todoInput.value)
    
       if(user){
        let db = [...todoArray]    //spreads the content of todoArray 
        let _db = (JSON.stringify(db))   //_db is the string form of db array
        localStorage.setItem(user, _db)
        setTodo(todoArray)
   } else{
       setTodo(todoArray)
   }
    } else{
        todoInput.parentElement.classList.add("error")
    }
        todoInput.value = ''
     } else {
     alert('you have five things todo')
    }
}
        //event handlers

        addBtn.addEventListener('click', addTodo)

        const setTodo = (arr) => {
            let htmlArr = '';

            for(el of arr){
                let html =
                `<li id=${el}>
                <div class ="todo">
                <p>${el}</p>
                <input type="text" class="hide"/>
                </div>
                <div class ="btns">
                <buttom>Edit</buttom>
                <buttom>Save</buttom>
                <buttom>Delete</buttom>
                </div>
                </li>`
            htmlArr +=html
            }
            todoList.innerHTML =htmlArr
        }
    

    
















