import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.action'
import * as fromTodo from '../todo.actions'
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styleUrls: ['./todos-footer.component.css']
})
export class TodosFooterComponent implements OnInit {

  filtrosValidos: fromFiltro.filtrosValidos[] = ['all', 'completed', 'actived'];
  filtroActual: fromFiltro.filtrosValidos;
  pendientes: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.contarPendiente(state.todos)
    })
  }

  cambiarFiltro(nuevoFiltro: fromFiltro.filtrosValidos){
    const accion = new fromFiltro.SetFiltroAction(nuevoFiltro);
    this.store.dispatch(accion)
  }

  contarPendiente(todos: Todo[]){
    this.pendientes = todos.filter(todo => !todo.completado).length

  }

  clean(){
    const accion = new fromTodo.LimpiarTodoAction();

    this.store.dispatch(accion);
  }

}
