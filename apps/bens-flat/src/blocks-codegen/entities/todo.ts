import { entity, ITarget } from '@hass-blocks/core';

declare global {
  var inboxTodo: ITarget;
  var personalTodo: ITarget;
  var workTodo: ITarget;
  var errandsTodo: ITarget;
  var shoppingTodo: ITarget;
  var moviesToWatchTodo: ITarget;
  var stayInTouchTodo: ITarget;
  var fitnessTodo: ITarget;
  var selfCareTodo: ITarget;
  var adminTodo: ITarget;
  var healthTodo: ITarget;
  var automationTodo: ITarget;
  var socialTodo: ITarget;
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
