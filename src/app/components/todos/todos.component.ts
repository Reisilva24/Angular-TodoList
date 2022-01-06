import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] | undefined;
  inputTodo:string ="";

  constructor(private service: TodoService) { 
    this.todos = [];
  }

  ngOnInit(): void {
  }

  toggleDone(id: number) {
    this.todos?.map((e,i) => {
      if( i == id) e.completed = !e.completed;

      return e;
    })
  }

  deleteTodo(id: number) {
    this.todos = this.todos?.filter((e, i) => i!== id);
  }

  addTodo(){
    if(this.inputTodo != ""){
      this.todos?.push({
        content: this.inputTodo,
        completed: false
      });
  
      this.inputTodo = "";
    }
  }

  addRandomInfo() {

   //TODO: Limit the elements of the array and insert into todos.
   this.service.getInfo().subscribe(data => { 
    console.log(data);
    });
  }
}
