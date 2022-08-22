document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', addTask);

  taskList.addEventListener('click', removeTask);


  function addTask(e){
    e.preventDefault();

    constnewTaskDescription = document.getElementById('new-task-description').value;
    console.log(newTaskDescription);

    const li = document.createElement('li');

    li.appendChild(document.createTextNode(newTaskDescription));

    const deleteBtn = document.createElement('button');

    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);

    taskList.appendChild(li);
  }
  
  function removeTask(e) {
    if (e.target.nodeNmae === 'Button'){
      if(confirm('Are you sure?')){
        let li = e.target.parentElement;
        taskList.removeChild(li);
      }
    }
  }

});
