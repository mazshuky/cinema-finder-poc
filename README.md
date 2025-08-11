# cinema-finder-poc
For Datacom Software Development Job Simulation @ Forage

## Fixes
### UI/UX Improvements
- **fix: prevent content from showing behind sticky header in cinema list**
    - Move FranchiseHeader outside scrollable List container in BaseCinemaList
    - Add flexbox layout to separate fixed header from scrollable content
    - Remove sticky positioning from ListSubheader as it's now properly positioned
    - Fixes issue where cinema list items were visible behind transparent header

### Map Functionality
- **fix(MaplibreMap): correct coordinate order for flyTo method**
    - Change center parameter from [lat, lng] to [lng, lat] to match MapLibre's expected coordinate format and resolve navigation errors

- **fix(LeafletMap): replace discontinued Stamen tiles with OpenStreetMap**
    - Update tile layer from defunct Stamen terrain service to OpenStreetMap to resolve blank map display issue

- **feat(Maps): restrict map panning to Australia/New Zealand bounds**
    - Add maxBounds property to both MaplibreMap and LeafletMap components to prevent users from navigating outside the valid regions

### Bug Fixes
- Fixed boundary box issue
- Fixed map navigation issue on Maplibre where marker was not displaying correctly