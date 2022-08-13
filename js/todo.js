const todoForm = document.getElementById('todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';
let todos = [];

const saveTodos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

const deleteTodo = (e) => {
  const li = e.target.parentElement;
  todos = todos.filter((item) => item.id !== Number(li.id));
  li.remove();
  saveTodos();
};

const paintTodo = (todoObj) => {
  const li = document.createElement('li');
  li.id = todoObj.id;
  const span = document.createElement('span');
  const button = document.createElement('button');
  button.textContent = '❌';
  button.addEventListener('click', deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  span.textContent = todoObj.text;
  todoList.appendChild(li);
};

const handleTodoSubmit = (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };

  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
};

todoForm.addEventListener('submit', handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
