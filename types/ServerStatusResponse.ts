import type { paths } from '~/openapi/spacetraders/spacetraders';

export type ServerStatusResponse = paths['/']['get']['responses']['200']['content']['application/json'];

export type Description = ServerStatusResponse['description'];

export type Announcements = ServerStatusResponse['announcements'];

export type Links = ServerStatusResponse['links'];
