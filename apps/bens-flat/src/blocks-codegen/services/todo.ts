import { serviceCall, ITarget } from '@hass-blocks/core';

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

/**
 * Adds a new to-do list item.
 */
export const addItemTodo = (target: ITarget, params: AddItemTodoProps) =>
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

/**
 * Updates an existing to-do list item based on its name or UID.
 */
export const updateItemTodo = (target: ITarget, params: UpdateItemTodoProps) =>
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

/**
 * Removes an existing to-do list item by its name or UID.
 */
export const removeItemTodo = (target: ITarget, params: RemoveItemTodoProps) =>
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

/**
 * Gets items on a to-do list.
 */
export const getItemsTodo = (target: ITarget, params?: GetItemsTodoProps) =>
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

/**
 * Removes all to-do list items that have been completed.
 */
export const removeCompletedItemsTodo = (
  target: ITarget,
  params?: RemoveCompletedItemsTodoProps,
) =>
  serviceCall({
    name: `Call todo.remove_completed_items`,
    params: {
      domain: 'todo',
      service: 'remove_completed_items',
      service_data: params,
    },
    target,
  });
