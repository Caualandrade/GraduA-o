document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    const subjectInput = document.getElementById('subjectInput');
    const professorInput = document.getElementById('professorInput');
    const feedbackInput = document.getElementById('feedbackInput');
    const feedbackList = document.getElementById('feedbackList');

    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const subject = subjectInput.value.trim();
        const professor = professorInput.value.trim();
        const feedback = feedbackInput.value.trim();
        if (subject && professor && feedback) {
            const li = document.createElement('li');
            li.textContent = `${subject} - ${professor}: "${feedback}"`;
            feedbackList.appendChild(li);
            subjectInput.value = '';
            professorInput.value = '';
            feedbackInput.value = '';
        }
    });
});
