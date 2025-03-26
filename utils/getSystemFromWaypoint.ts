type SystemPart = `${Uppercase<string>}${Uppercase<string>}${number}${number}`;
type WaypointPart = `${Uppercase<string> | number}${Uppercase<string> | number}${Uppercase<string> | number}${Uppercase<string> | number}`;
type WaypointAddress = `X1-${SystemPart}-${WaypointPart}`;
type SystemAddress = `X1-${SystemPart}`;

export const getSystemFromWaypoint = (waypoint: WaypointAddress): SystemAddress => {
    const parts = waypoint.split('-');
    return `${parts[0]}-${parts[1]}` as SystemAddress;
};

export const isValidWaypoint = (waypoint: string): waypoint is WaypointAddress => {
    return /^X1-[A-Z]{2}[0-9]{2}-[A-Z0-9]{4}$/.test(waypoint);
};
