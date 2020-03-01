import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as fromTodo from '../todo.actions'

@Component({
  selector: 'app-todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.css']
})
export class TodosAddComponent implements OnInit {

  txtInput: FormControl;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.txtInput = new FormControl('', Validators.required);
  }

  agregarTodo(){
    if(this.txtInput.invalid){
      return;
    }

    const accion = new fromTodo.AgregarTodoAction(this.txtInput.value);
    this.store.dispatch(accion)
    this.txtInput.setValue('');
  }

}
