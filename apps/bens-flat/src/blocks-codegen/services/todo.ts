import {
  serviceCall,
  type Block,
  type IEntity,
  type IArea,
} from '@hass-blocks/core';

declare global {
  interface AddItemTodo {
    /**
     * The name that represents the to-do item
     */
    item: string;
    /**
     * The date the to-do item is expected to be completed
     */
    due_date?: never;
    /**
     * The date and time the to-do item is expected to be completed
     */
    due_datetime?: never;
    /**
     * A more complete description of the to-do item than provided by the item name
     */
    description?: string;
  }

  /**
   * Adds a new to-do list item
   */
  var addItemTodo: (
    target: IEntity<`todo.${string}`> | IArea<string>,
    params: AddItemTodo,
  ) => Block<Partial<AddItemTodo> | undefined, void>;

  interface UpdateItemTodo {
    /**
     * The name/summary of the to-do item. If you have items with duplicate names, you can reference specific ones using their UID instead
     */
    item: string;
    /**
     * The new name for the to-do item
     */
    rename?: string;
    /**
     * A status or confirmation of the to-do item
     */
    status?: never;
    /**
     * The date the to-do item is expected to be completed
     */
    due_date?: never;
    /**
     * The date and time the to-do item is expected to be completed
     */
    due_datetime?: never;
    /**
     * A more complete description of the to-do item than provided by the item name
     */
    description?: string;
  }

  /**
   * Updates an existing to-do list item based on its name or UID
   */
  var updateItemTodo: (
    target: IEntity<`todo.${string}`> | IArea<string>,
    params: UpdateItemTodo,
  ) => Block<Partial<UpdateItemTodo> | undefined, void>;

  interface RemoveItemTodo {
    /**
     * The name/summary of the to-do item. If you have items with duplicate names, you can reference specific ones using their UID instead
     */
    item: string;
  }

  /**
   * Removes an existing to-do list item by its name or UID
   */
  var removeItemTodo: (
    target: IEntity<`todo.${string}`> | IArea<string>,
    params: RemoveItemTodo,
  ) => Block<Partial<RemoveItemTodo> | undefined, void>;

  interface GetItemsTodo {
    /**
     * Only return to-do items with the specified statuses. Returns not completed actions by default
     */
    status?: never;
  }

  /**
   * Gets items on a to-do list
   */
  var getItemsTodo: (
    target: IEntity<`todo.${string}`> | IArea<string>,
    params?: GetItemsTodo,
  ) => Block<Partial<GetItemsTodo> | undefined, void>;

  /**
   * Removes all to-do list items that have been completed
   */
  var removeCompletedItemsTodo: (
    target: IEntity<`todo.${string}`> | IArea<string>,
  ) => Block<Partial<unknown> | undefined, void>;
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

globalThis.removeCompletedItemsTodo = (target) =>
  serviceCall({
    name: `Call todo.remove_completed_items`,
    params: {
      domain: 'todo',
      service: 'remove_completed_items',
    },
    target,
  });
