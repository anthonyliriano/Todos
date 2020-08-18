import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './redux/reducer';
import { AddTodo, ActionTypes } from './redux/actions';
import { ITodo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private rowsBeingEdited : Array<number> = [2870010566];

  constructor(private ngRedux: NgRedux<IAppState>) {}
  
  title = 'todos';

  public get todos(){
    return Array.from(this.ngRedux.getState().todos);
  }

  addTodo(desc){
    let t : ITodo = {
      id : 5,
      description : desc,
      isCompleted : false
    }
    this.ngRedux.dispatch({type : ActionTypes.Add, todo : t})
  }

  updateState(todo){
    if(todo.isCompleted === true)
      todo.isCompleted = false;
    else
      todo.isCompleted = true;

    this.ngRedux.dispatch({type : ActionTypes.Update, todo : todo})
  }



  updateTodoDescription(id, description){
    let index : number = this.todos.findIndex(t => t.id === id);
    let todo = this.todos[index];
    if(todo)
      todo.description = description;

    this.ngRedux.dispatch({type : ActionTypes.Update, todo : todo})
    this.rowsBeingEdited = [];
  }

  deleteTodo(todo){
    this.ngRedux.dispatch({type : ActionTypes.Remove, todo : todo})
  }

  isEditMode(id){
    if(this.rowsBeingEdited.indexOf(id) > -1)
      return true
    else
      return false;
  }

  editTodo(todo){
    if(document.getElementById('4048130224'))
      console.log(document.getElementById('4048130224'))  
    this.rowsBeingEdited = [todo.id];
  }

}
