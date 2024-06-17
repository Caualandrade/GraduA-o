document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskAboutInput = document.getElementById('taskAboutInput');
    const taskDate = document.getElementById('taskDate');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        const taskAboutText = taskAboutInput.value.trim();
        const taskDueDate = taskDate.value;
        if (taskText && taskDueDate && taskAboutInput) {
            const li = document.createElement('li');
            li.innerHTML = `<em>${taskDueDate}</em> <b>${taskText}</b> ${taskAboutText} <button class="completeBtn">Concluir</button>`;
            taskList.appendChild(li);
            taskInput.value = '';
            taskAboutInput.value = '';
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
