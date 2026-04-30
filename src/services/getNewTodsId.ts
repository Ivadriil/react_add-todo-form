import { Todos } from '../types/Todo';

export function getNewTodsId(todos: Todos[]) {
  const maxId = Math.max(...todos.map(todo => todo.id));

  return maxId + 1;
}
