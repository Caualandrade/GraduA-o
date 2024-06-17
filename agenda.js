document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        const taskDueDate = taskDate.value;
        if (taskText && taskDueDate) {
            const li = document.createElement('li');
            li.innerHTML = `${taskText} - <em>${taskDueDate}</em> <button class="completeBtn">Concluir</button>`;
            taskList.appendChild(li);
            taskInput.value = '';
            taskDate.value = '';
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('completeBtn')) {
            const li = e.target.parentElement;
            li.style.textDecoration = 'line-through';
        }
    });
});
