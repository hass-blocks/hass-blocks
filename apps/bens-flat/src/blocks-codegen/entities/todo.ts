import { entity, type IEntity } from '@hass-blocks/core';

declare global {
  /**
   * Inbox
   */
  var inboxTodo: IEntity<`todo.inbox`>;
  /**
   * Personal
   */
  var personalTodo: IEntity<`todo.personal`>;
  /**
   * Work
   */
  var workTodo: IEntity<`todo.work`>;
  /**
   * Domestic
   */
  var errandsTodo: IEntity<`todo.errands`>;
  /**
   * Wishlist
   */
  var shoppingTodo: IEntity<`todo.shopping`>;
  /**
   * Movies to watch
   */
  var moviesToWatchTodo: IEntity<`todo.movies_to_watch`>;
  /**
   * Stay in touch
   */
  var stayInTouchTodo: IEntity<`todo.stay_in_touch`>;
  /**
   * Fitness
   */
  var fitnessTodo: IEntity<`todo.fitness`>;
  /**
   * Self care
   */
  var selfCareTodo: IEntity<`todo.self_care`>;
  /**
   * Admin
   */
  var adminTodo: IEntity<`todo.admin`>;
  /**
   * Health
   */
  var healthTodo: IEntity<`todo.health`>;
  /**
   * Automation
   */
  var automationTodo: IEntity<`todo.automation`>;
  /**
   * Social
   */
  var socialTodo: IEntity<`todo.social`>;
}

globalThis.inboxTodo = entity('todo.inbox', 'Inbox');
globalThis.personalTodo = entity('todo.personal', 'Personal');
globalThis.workTodo = entity('todo.work', 'Work');
globalThis.errandsTodo = entity('todo.errands', 'Domestic');
globalThis.shoppingTodo = entity('todo.shopping', 'Wishlist');
globalThis.moviesToWatchTodo = entity(
  'todo.movies_to_watch',
  'Movies to watch',
);
globalThis.stayInTouchTodo = entity('todo.stay_in_touch', 'Stay in touch');
globalThis.fitnessTodo = entity('todo.fitness', 'Fitness');
globalThis.selfCareTodo = entity('todo.self_care', 'Self care');
globalThis.adminTodo = entity('todo.admin', 'Admin');
globalThis.healthTodo = entity('todo.health', 'Health');
globalThis.automationTodo = entity('todo.automation', 'Automation');
globalThis.socialTodo = entity('todo.social', 'Social');
