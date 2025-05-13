import { serviceCall, Block, IEntity, IArea } from '@hass-blocks/core';
declare global {
  /**
   * Adds a new to-do list item.
   */
  var addItemTodo: (
    target: IEntity<`todo.${string}`> | IArea,
    params: AddItemTodoProps,
  ) => Block;
  /**
   * Updates an existing to-do list item based on its name or UID.
   */
  var updateItemTodo: (
    target: IEntity<`todo.${string}`> | IArea,
    params: UpdateItemTodoProps,
  ) => Block;
  /**
   * Removes an existing to-do list item by its name or UID.
   */
  var removeItemTodo: (
    target: IEntity<`todo.${string}`> | IArea,
    params: RemoveItemTodoProps,
  ) => Block;
  /**
   * Gets items on a to-do list.
   */
  var getItemsTodo: (
    target: IEntity<`todo.${string}`> | IArea,
    params?: GetItemsTodoProps,
  ) => Block;
  /**
   * Removes all to-do list items that have been completed.
   */
  var removeCompletedItemsTodo: (
    target: IEntity<`todo.${string}`> | IArea,
    params?: RemoveCompletedItemsTodoProps,
  ) => Block;
}

export interface AddItemTodoProps {
  /**
   * The name that represents the to-do item.
   */
  item: string;
  /**
   * The date the to-do item is expected to be completed.
   */
  due_date?: never;
  /**
   * The date and time the to-do item is expected to be completed.
   */
  due_datetime?: never;
  /**
   * A more complete description of the to-do item than provided by the item name.
   */
  description?: string;
}

globalThis.addItemTodo = (target, params) =>
  serviceCall({
    name: `Call todo.add_item`,
    params: {
      domain: 'todo',
      service: 'add_item',
      service_data: params,
    },
    target,
  });

export interface UpdateItemTodoProps {
  /**
   * The name/summary of the to-do item. If you have items with duplicate names, you can reference specific ones using their UID instead.
   */
  item: string;
  /**
   * The new name for the to-do item
   */
  rename?: string;
  /**
   * A status or confirmation of the to-do item.
   */
  status?: never;
  /**
   * The date the to-do item is expected to be completed.
   */
  due_date?: never;
  /**
   * The date and time the to-do item is expected to be completed.
   */
  due_datetime?: never;
  /**
   * A more complete description of the to-do item than provided by the item name.
   */
  description?: string;
}

globalThis.updateItemTodo = (target, params) =>
  serviceCall({
    name: `Call todo.update_item`,
    params: {
      domain: 'todo',
      service: 'update_item',
      service_data: params,
    },
    target,
  });

export interface RemoveItemTodoProps {
  /**
   * The name/summary of the to-do item. If you have items with duplicate names, you can reference specific ones using their UID instead.
   */
  item: string;
}

globalThis.removeItemTodo = (target, params) =>
  serviceCall({
    name: `Call todo.remove_item`,
    params: {
      domain: 'todo',
      service: 'remove_item',
      service_data: params,
    },
    target,
  });

export interface GetItemsTodoProps {
  /**
   * Only return to-do items with the specified statuses. Returns not completed actions by default.
   */
  status?: never;
}

globalThis.getItemsTodo = (target, params) =>
  serviceCall({
    name: `Call todo.get_items`,
    params: {
      domain: 'todo',
      service: 'get_items',
      service_data: params,
    },
    target,
  });

export interface RemoveCompletedItemsTodoProps {}

globalThis.removeCompletedItemsTodo = (target, params) =>
  serviceCall({
    name: `Call todo.remove_completed_items`,
    params: {
      domain: 'todo',
      service: 'remove_completed_items',
      service_data: params,
    },
    target,
  });
