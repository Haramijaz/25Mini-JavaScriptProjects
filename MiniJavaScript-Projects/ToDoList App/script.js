// Step 1: Select elements
let taskInput = document.getElementById("taskInput"); // Input field
let addBtn = document.getElementById("addBtn");       // Add button
let taskList = document.getElementById("taskList");   // UL for tasks

// Step 2: Load tasks from localStorage when page loads
let tasks = JSON.parse(localStorage.getItem("tasks")) || []; 
// If tasks exist in localStorage, load them; else use empty array

tasks.forEach(function(task){
    addTaskToDOM(task); // Display each task from localStorage
});

// Step 3: Add new task when button is clicked
addBtn.addEventListener("click", function(){

    let taskText = taskInput.value.trim(); // Get value and remove spaces

    if(taskText === ""){
        alert("Please enter a task!");
        return;
    }

    let task = {
        text: taskText,
        completed: false
    };

    tasks.push(task);              // Add task to array
    saveTasks();                   // Save tasks in localStorage
    addTaskToDOM(task);            // Add task to screen
    taskInput.value = "";          // Clear input field
});

// Step 4: Function to add task to screen
function addTaskToDOM(task){
    let li = document.createElement("li"); // Create list item
    li.textContent = task.text;            // Set text

    // If task is completed, add class
    if(task.completed){
        li.classList.add("completed");
    }

    // Add click event to mark completed
    li.addEventListener("click", function(){
        task.completed = !task.completed; // Toggle completed
        li.classList.toggle("completed");
        saveTasks(); // Update localStorage
    });

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    // Delete task on click
    deleteBtn.addEventListener("click", function(){
        taskList.removeChild(li);           // Remove from DOM
        tasks = tasks.filter(t => t !== task); // Remove from array
        saveTasks();                        // Update localStorage
    });

    li.appendChild(deleteBtn); // Add delete button to li
    taskList.appendChild(li);  // Add li to UL
}

// Step 5: Function to save tasks in localStorage
function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
