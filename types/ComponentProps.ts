import type { Announcements, Description, Links, ServerStatusResponse } from './ServerStatusResponse';
import type { Contract } from '~/types/Contract';

export interface FeatureProps {
    icon: string;
    title: string;
    description: string;
}

// export type FooterProps = Pick<ServerStatusResponse, 'description' | 'announcements' | 'links'>; //Too complex for Pick
export interface FooterProps {
    description: Description;
    announcements: Announcements;
    links: Links;
}

export interface ServerStatusProps {
    data: ServerStatusResponse;
}

export interface ConractCardProps {
    contract: Contract;
    fulfillContract: (id: string) => void;
    deliverContract: (id: string, shipSymbol: string, tradeSymbol: string, amount: number) => void;
    acceptContract: (id: string) => void;
}
