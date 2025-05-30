import {
  serviceCall,
  type Block,
  type ServiceCallArgs,
} from '@hass-blocks/core';

declare global {
  interface SequenceBrowserModProps {
    browser_id?: never;
    user_id?: string[];
    /**
     * List of services to run
     */
    sequence?: Record<string, unknown>;
  }

  /**
   * Run a sequence of services
   */
  var sequenceBrowserMod: (
    params?: SequenceBrowserModProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface DelayBrowserModProps {
    browser_id?: never;
    user_id?: string[];
    /**
     * Time to wait (ms)
     */
    time?: number;
  }

  /**
   * Wait for a time
   */
  var delayBrowserMod: (
    params?: DelayBrowserModProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface PopupBrowserModProps {
    browser_id?: never;
    user_id?: string[];
    /**
     * Popup title
     */
    title?: string;
    /**
     * Popup content (Test or lovelace card configuration)
     */
    content: Record<string, unknown>;
    size?: never;
    /**
     * Text of the right button
     */
    right_button?: string;
    /**
     * Action to perform when the right button is pressed
     */
    right_button_action?: Record<string, unknown>;
    /**
     * Text of the left button
     */
    left_button?: string;
    /**
     * Action to perform when left button is pressed
     */
    left_button_action?: Record<string, unknown>;
    /**
     * Whether the popup can be closed by the user without action
     */
    dismissable?: boolean;
    /**
     * Action to perform when popup is dismissed
     */
    dismiss_action?: Record<string, unknown>;
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
    timeout_action?: Record<string, unknown>;
    /**
     * Hide timeout progress bar
     */
    timeout_hide_progress?: boolean;
    /**
     * Allow nested more-info dialogs to be opened from this popup
     */
    allow_nested_more_info?: boolean;
    /**
     * CSS code to apply to the popup window
     */
    style?: string;
  }

  /**
   * Display a popup
   */
  var popupBrowserMod: (
    params: PopupBrowserModProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface MoreInfoBrowserModProps {
    browser_id?: never;
    user_id?: string[];
    entity: string;
    large?: boolean;
    ignore_popup_card?: boolean;
  }

  /**
   * Show more-info dialog
   */
  var moreInfoBrowserMod: (
    params: MoreInfoBrowserModProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface ClosePopupBrowserModProps {
    browser_id?: never;
    user_id?: string[];
  }

  /**
   * Close a popup
   */
  var closePopupBrowserMod: (
    params?: ClosePopupBrowserModProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface NotificationBrowserModProps {
    browser_id?: never;
    user_id?: string[];
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
    action?: Record<string, unknown>;
  }

  /**
   * Display a short notification
   */
  var notificationBrowserMod: (
    params: NotificationBrowserModProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface NavigateBrowserModProps {
    browser_id?: never;
    user_id?: string[];
    /**
     * Target path
     */
    path?: string;
  }

  /**
   * Navigate browser to a different page
   */
  var navigateBrowserMod: (
    params?: NavigateBrowserModProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface RefreshBrowserModProps {
    browser_id?: never;
    user_id?: string[];
  }

  /**
   * Refresh page
   */
  var refreshBrowserMod: (
    params?: RefreshBrowserModProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface SetThemeBrowserModProps {
    browser_id?: never;
    user_id?: string[];
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
  var setThemeBrowserMod: (
    params?: SetThemeBrowserModProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface ConsoleBrowserModProps {
    browser_id?: never;
    user_id?: string[];
    /**
     * Text to print
     */
    message?: string;
  }

  /**
   * Print text to browser console
   */
  var consoleBrowserMod: (
    params?: ConsoleBrowserModProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface JavascriptBrowserModProps {
    browser_id?: never;
    user_id?: string[];
    /**
     * JavaScript code to run
     */
    code?: Record<string, unknown>;
  }

  /**
   * Run arbitrary JavaScript code
   */
  var javascriptBrowserMod: (
    params?: JavascriptBrowserModProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;

  interface DeregisterBrowserBrowserModProps {
    browser_id?: never;
    /**
     * Exclude browser from deregister
     */
    browser_id_exclude?: never;
    /**
     * Exclude browsers in area from deregister
     */
    area_id_exclude?: never;
  }

  /**
   * Deregister a browser. Include at leaset one paremeter. Calling wiith either exclude parameter will deregister all browsers except those excluded.
   */
  var deregisterBrowserBrowserMod: (
    params?: DeregisterBrowserBrowserModProps,
  ) => Block<Partial<ServiceCallArgs<unknown>> | undefined, void>;
}

globalThis.sequenceBrowserMod = (params) =>
  serviceCall({
    name: `Call browser_mod.sequence`,
    params: {
      domain: 'browser_mod',
      service: 'sequence',
      service_data: params,
    },
  });

globalThis.delayBrowserMod = (params) =>
  serviceCall({
    name: `Call browser_mod.delay`,
    params: {
      domain: 'browser_mod',
      service: 'delay',
      service_data: params,
    },
  });

globalThis.popupBrowserMod = (params) =>
  serviceCall({
    name: `Call browser_mod.popup`,
    params: {
      domain: 'browser_mod',
      service: 'popup',
      service_data: params,
    },
  });

globalThis.moreInfoBrowserMod = (params) =>
  serviceCall({
    name: `Call browser_mod.more_info`,
    params: {
      domain: 'browser_mod',
      service: 'more_info',
      service_data: params,
    },
  });

globalThis.closePopupBrowserMod = (params) =>
  serviceCall({
    name: `Call browser_mod.close_popup`,
    params: {
      domain: 'browser_mod',
      service: 'close_popup',
      service_data: params,
    },
  });

globalThis.notificationBrowserMod = (params) =>
  serviceCall({
    name: `Call browser_mod.notification`,
    params: {
      domain: 'browser_mod',
      service: 'notification',
      service_data: params,
    },
  });

globalThis.navigateBrowserMod = (params) =>
  serviceCall({
    name: `Call browser_mod.navigate`,
    params: {
      domain: 'browser_mod',
      service: 'navigate',
      service_data: params,
    },
  });

globalThis.refreshBrowserMod = (params) =>
  serviceCall({
    name: `Call browser_mod.refresh`,
    params: {
      domain: 'browser_mod',
      service: 'refresh',
      service_data: params,
    },
  });

globalThis.setThemeBrowserMod = (params) =>
  serviceCall({
    name: `Call browser_mod.set_theme`,
    params: {
      domain: 'browser_mod',
      service: 'set_theme',
      service_data: params,
    },
  });

globalThis.consoleBrowserMod = (params) =>
  serviceCall({
    name: `Call browser_mod.console`,
    params: {
      domain: 'browser_mod',
      service: 'console',
      service_data: params,
    },
  });

globalThis.javascriptBrowserMod = (params) =>
  serviceCall({
    name: `Call browser_mod.javascript`,
    params: {
      domain: 'browser_mod',
      service: 'javascript',
      service_data: params,
    },
  });

globalThis.deregisterBrowserBrowserMod = (params) =>
  serviceCall({
    name: `Call browser_mod.deregister_browser`,
    params: {
      domain: 'browser_mod',
      service: 'deregister_browser',
      service_data: params,
    },
  });
