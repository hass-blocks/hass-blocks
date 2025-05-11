import { serviceCall } from '@hass-blocks/core';

export interface SequenceBrowserModProps {
  browser_id?: never;
  /**
   * List of services to run
   */
  sequence?: never;
}

/**
 * Run a sequence of services
 */
export const sequenceBrowserMod = (params?: SequenceBrowserModProps) =>
  serviceCall({
    name: `Call browser_mod.sequence`,
    params: {
      domain: 'browser_mod',
      service: 'sequence',
      service_data: params,
    },
  });

export interface DelayBrowserModProps {
  browser_id?: never;
  /**
   * Time to wait (ms)
   */
  time?: number;
}

/**
 * Wait for a time
 */
export const delayBrowserMod = (params?: DelayBrowserModProps) =>
  serviceCall({
    name: `Call browser_mod.delay`,
    params: {
      domain: 'browser_mod',
      service: 'delay',
      service_data: params,
    },
  });

export interface PopupBrowserModProps {
  browser_id?: never;
  /**
   * Popup title
   */
  title?: string;
  /**
   * Popup content (Test or lovelace card configuration)
   */
  content: never;
  size?: never;
  /**
   * Text of the right button
   */
  right_button?: string;
  /**
   * Action to perform when the right button is pressed
   */
  right_button_action?: never;
  /**
   * Text of the left button
   */
  left_button?: string;
  /**
   * Action to perform when left button is pressed
   */
  left_button_action?: never;
  /**
   * Whether the popup can be closed by the user without action
   */
  dismissable?: boolean;
  /**
   * Action to perform when popup is dismissed
   */
  dismiss_action?: never;
  /**
   * Close the popup automatically on mouse, pointer or keyboard activity
   */
  autoclose?: boolean;
  /**
   * Time before closing (ms)
   */
  timeout?: number;
  /**
   * Action to perform when popup is closed by timeout
   */
  timeout_action?: never;
  /**
   * CSS code to apply to the popup window
   */
  style?: string;
}

/**
 * Display a popup
 */
export const popupBrowserMod = (params: PopupBrowserModProps) =>
  serviceCall({
    name: `Call browser_mod.popup`,
    params: {
      domain: 'browser_mod',
      service: 'popup',
      service_data: params,
    },
  });

export interface MoreInfoBrowserModProps {
  browser_id?: never;
  entity: string;
  large?: boolean;
  ignore_popup_card?: boolean;
}

/**
 * Show more-info dialog
 */
export const moreInfoBrowserMod = (params: MoreInfoBrowserModProps) =>
  serviceCall({
    name: `Call browser_mod.more_info`,
    params: {
      domain: 'browser_mod',
      service: 'more_info',
      service_data: params,
    },
  });

export interface ClosePopupBrowserModProps {
  browser_id?: never;
}

/**
 * Close a popup
 */
export const closePopupBrowserMod = (params?: ClosePopupBrowserModProps) =>
  serviceCall({
    name: `Call browser_mod.close_popup`,
    params: {
      domain: 'browser_mod',
      service: 'close_popup',
      service_data: params,
    },
  });

export interface NotificationBrowserModProps {
  browser_id?: never;
  /**
   * Message to display
   */
  message: string;
  /**
   * Time before closing (ms)
   */
  duration?: number;
  /**
   * Text of optional action button
   */
  action_text?: string;
  /**
   * Action to perform when the action button is pressed
   */
  action?: never;
}

/**
 * Display a short notification
 */
export const notificationBrowserMod = (params: NotificationBrowserModProps) =>
  serviceCall({
    name: `Call browser_mod.notification`,
    params: {
      domain: 'browser_mod',
      service: 'notification',
      service_data: params,
    },
  });

export interface NavigateBrowserModProps {
  browser_id?: never;
  /**
   * Target path
   */
  path?: string;
}

/**
 * Navigate browser to a different page
 */
export const navigateBrowserMod = (params?: NavigateBrowserModProps) =>
  serviceCall({
    name: `Call browser_mod.navigate`,
    params: {
      domain: 'browser_mod',
      service: 'navigate',
      service_data: params,
    },
  });

export interface RefreshBrowserModProps {
  browser_id?: never;
}

/**
 * Refresh page
 */
export const refreshBrowserMod = (params?: RefreshBrowserModProps) =>
  serviceCall({
    name: `Call browser_mod.refresh`,
    params: {
      domain: 'browser_mod',
      service: 'refresh',
      service_data: params,
    },
  });

export interface SetThemeBrowserModProps {
  browser_id?: never;
  /**
   * Name of theme or 'auto'
   */
  theme?: string;
  /**
   * Dark/light mode
   */
  dark?: never;
  /**
   * Primary theme color
   */
  primaryColor?: never;
  /**
   * Accent theme color
   */
  accentColor?: never;
}

/**
 * Change the current theme
 */
export const setThemeBrowserMod = (params?: SetThemeBrowserModProps) =>
  serviceCall({
    name: `Call browser_mod.set_theme`,
    params: {
      domain: 'browser_mod',
      service: 'set_theme',
      service_data: params,
    },
  });

export interface ConsoleBrowserModProps {
  browser_id?: never;
  /**
   * Text to print
   */
  message?: string;
}

/**
 * Print text to browser console
 */
export const consoleBrowserMod = (params?: ConsoleBrowserModProps) =>
  serviceCall({
    name: `Call browser_mod.console`,
    params: {
      domain: 'browser_mod',
      service: 'console',
      service_data: params,
    },
  });

export interface JavascriptBrowserModProps {
  browser_id?: never;
  /**
   * JavaScript code to run
   */
  code?: never;
}

/**
 * Run arbitrary JavaScript code
 */
export const javascriptBrowserMod = (params?: JavascriptBrowserModProps) =>
  serviceCall({
    name: `Call browser_mod.javascript`,
    params: {
      domain: 'browser_mod',
      service: 'javascript',
      service_data: params,
    },
  });
