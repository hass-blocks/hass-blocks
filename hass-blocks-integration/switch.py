"""Switch platform for Hass Blocks Integration."""
import logging
from typing import Any, Callable, Dict, List, Optional

from homeassistant.components.switch import SwitchEntity
from homeassistant.core import HomeAssistant, Event, callback
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.typing import ConfigType, DiscoveryInfoType

from . import DOMAIN, ENTITY_TYPE_SWITCH

_LOGGER = logging.getLogger(__name__)


class HassBlocksSwitch(SwitchEntity):
    """Representation of a Hass Blocks dynamic switch."""

    def __init__(self, hass: HomeAssistant, entity_id: str, entity_data: Dict[str, Any]) -> None:
        """Initialize the switch."""
        self.hass = hass
        self._entity_id = entity_id
        self._name = entity_data["name"]
        self._is_on = entity_data.get("state", False)
        self._attributes = entity_data.get("attributes", {})
        
        self._attr_unique_id = entity_id
        self._attr_has_entity_name = True
        self._attr_name = self._name
        
    @property
    def is_on(self) -> bool:
        """Return true if the switch is on."""
        return self._is_on
        
    @property
    def extra_state_attributes(self) -> Dict[str, Any]:
        """Return entity specific state attributes."""
        return self._attributes
        
    async def async_turn_on(self, **kwargs: Any) -> None:
        """Turn the switch on."""
        self._is_on = True
        self.async_write_ha_state()
        
        if self._entity_id in self.hass.data[DOMAIN]["entities"]:
            self.hass.data[DOMAIN]["entities"][self._entity_id]["state"] = True
            
    async def async_turn_off(self, **kwargs: Any) -> None:
        """Turn the switch off."""
        self._is_on = False
        self.async_write_ha_state()
        
        if self._entity_id in self.hass.data[DOMAIN]["entities"]:
            self.hass.data[DOMAIN]["entities"][self._entity_id]["state"] = False
            
    @callback
    def update_from_data(self, entity_data: Dict[str, Any]) -> None:
        """Update the switch from stored data."""
        self._name = entity_data["name"]
        self._is_on = entity_data.get("state", False)
        self._attributes = entity_data.get("attributes", {})
        self._attr_name = self._name
        self.async_write_ha_state()


class DynamicSwitchManager:
    """Manages dynamic switches for Hass Blocks."""
    
    def __init__(self, hass: HomeAssistant, async_add_entities: AddEntitiesCallback) -> None:
        """Initialize the manager."""
        self.hass = hass
        self.async_add_entities = async_add_entities
        self.switches: Dict[str, HassBlocksSwitch] = {}
        
    async def setup(self) -> None:
        """Set up event listeners and existing entities."""
        entities = self.hass.data[DOMAIN]["entities"]
        switches_to_add = []
        
        for entity_id, entity_data in entities.items():
            if entity_data["type"] == ENTITY_TYPE_SWITCH:
                switch = HassBlocksSwitch(self.hass, entity_id, entity_data)
                self.switches[entity_id] = switch
                switches_to_add.append(switch)
                
        if switches_to_add:
            self.async_add_entities(switches_to_add)
            
        self.hass.bus.async_listen(f"{DOMAIN}_switch_added", self.handle_switch_added)
        self.hass.bus.async_listen(f"{DOMAIN}_switch_updated", self.handle_switch_updated)
        self.hass.bus.async_listen(f"{DOMAIN}_switch_removed", self.handle_switch_removed)
        
    @callback
    def handle_switch_added(self, event: Event) -> None:
        """Handle switch addition."""
        entity_id = event.data["entity_id"]
        
        if entity_id in self.switches:
            _LOGGER.warning("Switch %s already exists", entity_id)
            return
            
        entity_data = self.hass.data[DOMAIN]["entities"].get(entity_id)
        if not entity_data:
            _LOGGER.error("No data found for switch %s", entity_id)
            return
            
        switch = HassBlocksSwitch(self.hass, entity_id, entity_data)
        self.switches[entity_id] = switch
        self.async_add_entities([switch])
        
    @callback
    def handle_switch_updated(self, event: Event) -> None:
        """Handle switch update."""
        entity_id = event.data["entity_id"]
        
        if entity_id not in self.switches:
            _LOGGER.warning("Switch %s not found for update", entity_id)
            return
            
        entity_data = self.hass.data[DOMAIN]["entities"].get(entity_id)
        if not entity_data:
            _LOGGER.error("No data found for switch %s", entity_id)
            return
            
        self.switches[entity_id].update_from_data(entity_data)
        
    @callback
    def handle_switch_removed(self, event: Event) -> None:
        """Handle switch removal."""
        entity_id = event.data["entity_id"]
        
        if entity_id not in self.switches:
            _LOGGER.warning("Switch %s not found for removal", entity_id)
            return
            
        switch = self.switches.pop(entity_id)
        self.hass.async_create_task(switch.async_remove())


async def async_setup_platform(
    hass: HomeAssistant,
    config: ConfigType,
    async_add_entities: AddEntitiesCallback,
    discovery_info: Optional[DiscoveryInfoType] = None,
) -> None:
    """Set up the Hass Blocks switch platform."""
    manager = DynamicSwitchManager(hass, async_add_entities)
    await manager.setup()