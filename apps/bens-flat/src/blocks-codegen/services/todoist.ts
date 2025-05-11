import { serviceCall } from '@hass-blocks/core';

export interface NewTaskTodoistProps {
  /**
   * The name of the task.
   */
  content: string;
  /**
   * A description for the task.
   */
  description?: string;
  /**
   * The name of the project this task should belong to.
   */
  project?: string;
  /**
   * The name of a section within the project to add the task to.
   */
  section?: string;
  /**
   * Any labels that you want to apply to this task, separated by a comma.
   */
  labels?: string;
  /**
   * The username of a shared project's member to assign this task to.
   */
  assignee?: string;
  /**
   * The priority of this task, from 1 (normal) to 4 (urgent).
   */
  priority?: number;
  /**
   * The time this task is due, in natural language.
   */
  due_date_string?: string;
  /**
   * The language of 'Due date string'.
   */
  due_date_lang?: never;
  /**
   * The time this task is due, in format YYYY-MM-DD or YYYY-MM-DDTHH:MM:SS, in UTC timezone.
   */
  due_date?: string;
  /**
   * When the user should be reminded of this task, in natural language.
   */
  reminder_date_string?: string;
  /**
   * The language of 'Reminder date string'.
   */
  reminder_date_lang?: never;
  /**
   * When the user should be reminded of this task, in format YYYY-MM-DDTHH:MM:SS, in UTC timezone.
   */
  reminder_date?: string;
}

/**
 * Creates a new task and add it to a project.
 */
export const newTaskTodoist = (params: NewTaskTodoistProps) =>
  serviceCall({
    name: `Call todoist.new_task`,
    params: {
      domain: 'todoist',
      service: 'new_task',
      service_data: params,
    },
  });
