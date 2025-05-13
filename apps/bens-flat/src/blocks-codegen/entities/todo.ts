import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  var inboxTodo: IEntity<`todo.inbox`>;
  var personalTodo: IEntity<`todo.personal`>;
  var workTodo: IEntity<`todo.work`>;
  var errandsTodo: IEntity<`todo.errands`>;
  var shoppingTodo: IEntity<`todo.shopping`>;
  var moviesToWatchTodo: IEntity<`todo.movies_to_watch`>;
  var stayInTouchTodo: IEntity<`todo.stay_in_touch`>;
  var fitnessTodo: IEntity<`todo.fitness`>;
  var selfCareTodo: IEntity<`todo.self_care`>;
  var adminTodo: IEntity<`todo.admin`>;
  var healthTodo: IEntity<`todo.health`>;
  var automationTodo: IEntity<`todo.automation`>;
  var socialTodo: IEntity<`todo.social`>;
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
