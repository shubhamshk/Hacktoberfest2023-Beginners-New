<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Todo List App</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f4f4f4;
    }

    #app {
      width: 300px;
      background-color: white;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      padding: 8px 0;
    }

    input[type="text"] {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      margin-bottom: 10px;
    }

    button {
      padding: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div id="app">
    <h2>Todo List</h2>
    <input type="text" id="todoInput" placeholder="Add a new todo">
    <ul id="todoList"></ul>
    <button onclick="addTodo()">Add Todo</button>
  </div>

  <script>
    function addTodo() {
      const todoInput = document.getElementById('todoInput');
      const todoList = document.getElementById('todoList');

      if (todoInput.value.trim() === '') {
        alert('Please enter a todo.');
        return;
      }

      const li = document.createElement('li');
      li.innerHTML = `
        <span>${todoInput.value}</span>
        <button onclick="removeTodo(this)">Remove</button>
      `;

      todoList.appendChild(li);
      todoInput.value = '';
    }

    function removeTodo(button) {
      const todoList = document.getElementById('todoList');
      const li = button.parentNode;
      todoList.removeChild(li);
    }
  </script>
</body>
</html>
