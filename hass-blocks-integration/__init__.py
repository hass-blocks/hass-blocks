"""Hass Blocks Integration - Dynamic entity management for the Hass Blocks framework."""
import logging
from typing import Any, Dict

from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant, Event
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers.typing import ConfigType

_LOGGER = logging.getLogger(__name__)
_LOGGER.info("Hass Blocks Integration module loaded - SYMLINK TEST SUCCESSFUL")

DOMAIN = "hass_blocks"
PLATFORMS = [Platform.SWITCH]

EVENT_CREATE_ENTITY = f"{DOMAIN}_create_entity"
EVENT_UPDATE_ENTITY = f"{DOMAIN}_update_entity"
EVENT_DELETE_ENTITY = f"{DOMAIN}_delete_entity"

ATTR_ENTITY_ID = "entity_id"
ATTR_ENTITY_TYPE = "entity_type"
ATTR_NAME = "name"
ATTR_STATE = "state"
ATTR_ATTRIBUTES = "attributes"

ENTITY_TYPE_SWITCH = "switch"
ENTITY_TYPE_SENSOR = "sensor"
ENTITY_TYPE_BINARY_SENSOR = "binary_sensor"
ENTITY_TYPE_LIGHT = "light"


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Set up the Hass Blocks integration."""
    _LOGGER.info("Setting up Hass Blocks integration")
    hass.data.setdefault(DOMAIN, {})
    hass.data[DOMAIN]["entities"] = {}
    
    async def handle_create_entity(event: Event) -> None:
        """Handle entity creation event."""
        data = event.data
        entity_id = data.get(ATTR_ENTITY_ID)
        entity_type = data.get(ATTR_ENTITY_TYPE)
        name = data.get(ATTR_NAME)
        
        if not entity_id or not entity_type or not name:
            _LOGGER.error(
                "Missing required fields for entity creation: entity_id=%s, entity_type=%s, name=%s",
                entity_id, entity_type, name
            )
            return
            
        if entity_type not in [ENTITY_TYPE_SWITCH]:
            _LOGGER.warning("Unsupported entity type: %s", entity_type)
            return
            
        _LOGGER.info("Creating %s entity: %s with name: %s", entity_type, entity_id, name)
        
        hass.data[DOMAIN]["entities"][entity_id] = {
            "type": entity_type,
            "name": name,
            "state": data.get(ATTR_STATE, False if entity_type == ENTITY_TYPE_SWITCH else None),
            "attributes": data.get(ATTR_ATTRIBUTES, {}),
        }
        
        hass.bus.async_fire(f"{DOMAIN}_{entity_type}_added", {"entity_id": entity_id})
    
    async def handle_update_entity(event: Event) -> None:
        """Handle entity update event."""
        data = event.data
        entity_id = data.get(ATTR_ENTITY_ID)
        
        if not entity_id:
            _LOGGER.error("Missing entity_id for entity update")
            return
            
        if entity_id not in hass.data[DOMAIN]["entities"]:
            _LOGGER.warning("Attempting to update non-existent entity: %s", entity_id)
            return
            
        entity_data = hass.data[DOMAIN]["entities"][entity_id]
        entity_type = entity_data["type"]
        
        _LOGGER.info("Updating %s entity: %s", entity_type, entity_id)
        
        if ATTR_NAME in data:
            entity_data["name"] = data[ATTR_NAME]
        if ATTR_STATE in data:
            entity_data["state"] = data[ATTR_STATE]
        if ATTR_ATTRIBUTES in data:
            entity_data["attributes"].update(data[ATTR_ATTRIBUTES])
            
        hass.bus.async_fire(f"{DOMAIN}_{entity_type}_updated", {"entity_id": entity_id})
    
    async def handle_delete_entity(event: Event) -> None:
        """Handle entity deletion event."""
        data = event.data
        entity_id = data.get(ATTR_ENTITY_ID)
        
        if not entity_id:
            _LOGGER.error("Missing entity_id for entity deletion")
            return
            
        if entity_id not in hass.data[DOMAIN]["entities"]:
            _LOGGER.warning("Attempting to delete non-existent entity: %s", entity_id)
            return
            
        entity_type = hass.data[DOMAIN]["entities"][entity_id]["type"]
        _LOGGER.info("Deleting %s entity: %s", entity_type, entity_id)
        
        del hass.data[DOMAIN]["entities"][entity_id]
        
        hass.bus.async_fire(f"{DOMAIN}_{entity_type}_removed", {"entity_id": entity_id})
    
    hass.bus.async_listen(EVENT_CREATE_ENTITY, handle_create_entity)
    hass.bus.async_listen(EVENT_UPDATE_ENTITY, handle_update_entity)
    hass.bus.async_listen(EVENT_DELETE_ENTITY, handle_delete_entity)
    
    from homeassistant.helpers import discovery
    for platform in PLATFORMS:
        hass.async_create_task(
            discovery.async_load_platform(hass, platform, DOMAIN, {}, config)
        )
    
    _LOGGER.info("Hass Blocks integration setup complete")
    return True