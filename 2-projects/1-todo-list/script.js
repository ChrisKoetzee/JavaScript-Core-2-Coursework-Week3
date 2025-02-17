function populateTodoList(todos) {
  let todoInput = document.getElementById("todoInput");
  
  const newTask = todoInput.value
  
  if (!newTask) {
      alert("Please add a todo ");
      return todos;
  } else {
    const list = document.querySelector("#todo-list");
    list.classList.add("newTask");

    const listItem = document.createElement('li');
    listItem.classList.add("todoInput");
    listItem.innerText = newTask;
    // listItem.setAttribute("id", "todoInput");
    list.append(listItem);
    console.log(listItem);

    let span = document.createElement('span');
    listItem.append(span);
    span.setAttribute("class", "badge bg-primary rounded-pill");

    // let lineThru = document.createElement("i");
    // let trash = document.createElement('i');
    // span.appendChild(lineThru, trash);
    // lineThru.setAttribute("class", "fa fa-check");
    // lineThru.setAttribute("aria-hidden", "true");
    // trash.setAttribute("class", "fa fa-trash");
    // trash.setAttribute("aria-hidden", "true");
  }
  console.log(listItem);

  // document.getElementById("todoInput").setAttribute("type", "badge bg-primary rounded-pill");
  // console.log(addBtn);
  // addBtn.addEventListener('click', () => {
  //   if (todoInput = 'text') {
  //     return todoInput = li.innerHTML;
  //   }
  // };
}



  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.


// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
