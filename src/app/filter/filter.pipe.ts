import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import * as fromFiltro from './filter.action'

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro:fromFiltro.filtrosValidos): Todo[] {
    switch(filtro){

      case 'completed':
        return todos.filter(todo => todo.completado);
      
      case 'actived':
        return todos.filter(todos => !todos.completado);

      default:
        return todos

    }
    return todos;
  }

}
