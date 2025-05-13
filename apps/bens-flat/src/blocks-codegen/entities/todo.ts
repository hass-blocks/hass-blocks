import { entity, IEntity } from '@hass-blocks/core';

declare global {
  var inboxTodo: IEntity<`todo.${string}`>;
  var personalTodo: IEntity<`todo.${string}`>;
  var workTodo: IEntity<`todo.${string}`>;
  var errandsTodo: IEntity<`todo.${string}`>;
  var shoppingTodo: IEntity<`todo.${string}`>;
  var moviesToWatchTodo: IEntity<`todo.${string}`>;
  var stayInTouchTodo: IEntity<`todo.${string}`>;
  var fitnessTodo: IEntity<`todo.${string}`>;
  var selfCareTodo: IEntity<`todo.${string}`>;
  var adminTodo: IEntity<`todo.${string}`>;
  var healthTodo: IEntity<`todo.${string}`>;
  var automationTodo: IEntity<`todo.${string}`>;
  var socialTodo: IEntity<`todo.${string}`>;
}

globalThis.inboxTodo = entity('todo.inbox');
globalThis.personalTodo = entity('todo.personal');
globalThis.workTodo = entity('todo.work');
globalThis.errandsTodo = entity('todo.errands');
globalThis.shoppingTodo = entity('todo.shopping');
globalThis.moviesToWatchTodo = entity('todo.movies_to_watch');
globalThis.stayInTouchTodo = entity('todo.stay_in_touch');
globalThis.fitnessTodo = entity('todo.fitness');
globalThis.selfCareTodo = entity('todo.self_care');
globalThis.adminTodo = entity('todo.admin');
globalThis.healthTodo = entity('todo.health');
globalThis.automationTodo = entity('todo.automation');
globalThis.socialTodo = entity('todo.social');
