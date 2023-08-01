function addTask() {
    const inputElement = document.getElementById('taskInput');
    const task = inputElement.value.trim();
    
    if (task === '') {
      return;
    }

    const taskListElement = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button onclick="markDone(this)">Done</button>
      <button onclick="removeTask(this)">Remove</button>
    `;
    taskListElement.appendChild(li);
    inputElement.value = '';
  }

  function markDone(button) {
    const li = button.parentElement;
    li.style.textDecoration = 'line-through';
    button.disabled = true;
  }

  function removeTask(button) {
    const li = button.parentElement;
    li.remove();
  }