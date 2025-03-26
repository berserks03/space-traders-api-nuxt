import type { ServerStatusResponse } from './ServerStatusResponse';

export interface FeatureProps {
    icon: string;
    title: string;
    description: string;
}

interface Announcement {
    title: string;
    body: string;
}

interface Link {
    name: string;
    url: string;
}

export interface FooterProps {
    description: string;
    announcements: Announcement[];
    links: Link[];
}

export interface ServerStatusProps {
    data: ServerStatusResponse;
}
