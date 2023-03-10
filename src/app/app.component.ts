import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ITodoProps {
  value: string;
  onEdit: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todos: ITodoProps[] = [];

  ngOnInit() {
    const existingTodos = localStorage.getItem('todos');
    this.todos = JSON.parse(existingTodos as string) || [];
  }

  addTodo(form: NgForm, todoInput: HTMLInputElement) {
    if (form.value.todoInput !== '') {
      const todo: ITodoProps = { value: form.value.todoInput, onEdit: false };
      this.todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(this.todos));
      todoInput.value = '';
      todoInput.focus();
    }
  }

  editTodo(i: number) {
    this.todos[i].onEdit = true;
  }

  confirmEdit(todoText: string, i: number) {
    this.todos[i].value = todoText;
    this.todos[i].onEdit = false;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  cancelEdit(textarea: HTMLTextAreaElement, i: number) {
    textarea.value = this.todos[i].value;
    this.todos[i].onEdit = false;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  deleteTodo(i: number) {
    this.todos.splice(i, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
