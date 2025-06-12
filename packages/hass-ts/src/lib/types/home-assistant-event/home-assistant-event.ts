import type { StateChangedEvent } from './state-changed-event.ts';
import type { CallServiceEvent } from './call-service-event.ts';
import type { ComponentLoadedEvent } from './component-loaded-event.ts';
import type { CoreConfigUpdatedEvent } from './core-config-updated-event.ts';
import type { DataFlowProgressedEvent } from './data-flow-progressed-event.ts';
import type { HomeAssistantStartedEvent } from './home-assistant-started-event.ts';
import type { HomeAssistantStartEvent } from './home-assistant-start-event.ts';
import type { HomeAssistantStopEvent } from './home-assistant-stop-event.ts';
import type { HomeAssistantFinalWriteEvent } from './home-assistant-final-write-event.ts';
import type { HomeAssistantCloseEvent } from './home-assistant-close-event.ts';
import type { ServiceRemovedEvent } from './service-removed-event.ts';
import type { ServiceRegisteredEvent } from './service-registered-event.ts';
import type { LogbookEntryEvent } from './logbook-entry-event.ts';
import type { ThemesUpdatedEvent } from './themes-updated-event.ts';
import type { UserAddedEvent } from './user-added-event.ts';
import type { UserRemovedEvent } from './user-removed-event.ts';
import type { AutomationReloadedEvent } from './automation-reloaded-event.ts';
import type { AutomationTriggeredEvent } from './automation-triggered-event.ts';
import type { SceneReloadedEvent } from './scene-reloaded-event.ts';
import type { ScriptStartedEvent } from './script-started-event.ts';

/**
 * An event fired on the Home Assistant Event bus
 *
 * @public
 */
export type HomeAssistantEvent =
  | CallServiceEvent
  | StateChangedEvent
  | ComponentLoadedEvent
  | CoreConfigUpdatedEvent
  | DataFlowProgressedEvent
  | HomeAssistantStartEvent
  | HomeAssistantStartedEvent
  | HomeAssistantStopEvent
  | HomeAssistantFinalWriteEvent
  | HomeAssistantCloseEvent
  | ServiceRemovedEvent
  | ServiceRegisteredEvent
  | LogbookEntryEvent
  | ThemesUpdatedEvent
  | UserAddedEvent
  | UserRemovedEvent
  | AutomationReloadedEvent
  | AutomationTriggeredEvent
  | SceneReloadedEvent
  | ScriptStartedEvent;
