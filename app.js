const todos = [];

const pendingClasses = "bg-white w-full text-center text-black rounded py-4 border-2 border-purple-500 transition transform ease-in-out duration-300 hover:bg-purple-500 hover:text-white hover:rotate-1 hover:scale-110 cursor-pointer";
const completedClasses = "bg-white w-full text-center text-black rounded py-4 border-2 border-red-400 transition transform ease-in-out duration-300 hover:bg-red-400 hover:text-white hover:scale-110 hover:-rotate-1 cursor-pointer";

const showTodos = () =>{   
    const pendingList = document.getElementById('pendingList');
    const pendingTodos = todos.filter(todo => todo.status === "pending");

    pendingList.innerHTML = "";
    pendingTodos.forEach((todo)=>{
        const pendingItem = document.createElement("li");
        pendingItem.className = pendingClasses;
        pendingItem.innerText = todo.text;
        pendingItem.id = todo.id;
        pendingList.appendChild(pendingItem);
    });
    
    const completedList = document.getElementById('completedList');
    const completedTodos = todos.filter((todo) => todo.status === "done");

    completedList.innerHTML = "";
    completedTodos.forEach((todo) => {
        const completedItem = document.createElement("li");
        completedItem.className = completedClasses;
        completedItem.innerText = todo.text;
        completedItem.id = todo.id;
        completedList.appendChild(completedItem);
    });
};

const addForm = document.getElementById("addForm");
const newTodo = document.getElementById("newTodo");

addForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    todos.push({
        id: Math.floor(Math.random() * 100000).toString(),
        text: newTodo.value,
        status: "pending",
    });
    newTodo.value = "";
    showTodos();
});

pendingList.addEventListener("click", (event)=>{
    todos.find((todo) => todo.id === event.target.id).status = "done";
    showTodos();
});

completedList.addEventListener("click", (event)=>{
    todos.find((todo) => todo.id === event.target.id).status = "pending";
    showTodos();
});