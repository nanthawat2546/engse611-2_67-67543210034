// Function to handle tab switching
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', function () {
      // Remove active class from all tabs and tab contents
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));

      // Add active class to clicked tab and corresponding tab content
      this.classList.add('active');
      const tabContent = document.getElementById(this.getAttribute('data-tab'));
      tabContent.classList.add('active');
  });
});

// Function to add a new todo item
function addTodo(tab) {
  // Correcting the way to reference the input and list elements
  const todoInput = document.getElementById(`new-todo-${tab}`);
  const todoText = todoInput.value.trim();

  if (todoText) {
      const ul = document.getElementById(`todo-list-${tab}`);
      const li = document.createElement('li');
      li.textContent = todoText;
      ul.appendChild(li);
      todoInput.value = ''; // Clear the input field
  }
}
