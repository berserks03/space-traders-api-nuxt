import type { paths, components } from '~/openapi/spacetraders/spacetraders';

export type System = components['schemas']['System'];

export type Waypoint = components['schemas']['SystemWaypoint'];

export type SystemType = components['schemas']['System']['type'];


// examples
//
type MyType = components['schemas']['Agent'];
//

//
type EndpointParams = paths['/systems/{systemSymbol}/waypoints/{waypointSymbol}/jump-gate']['get']['parameters']['path'];
//

//
type validUrls = keyof paths;

const url: validUrls = `/agents`;
//

//
type response = paths['/']['get']['responses']['200']['content']['application/json'];
//
