import type { paths } from '~/openapi/spacetraders/spacetraders';

export type FulfillContractResponse = paths['/my/contracts/{contractId}/fulfill']['post']['responses']['200']['content']['application/json'];

export type getMyAgentResponse = paths['/my/agent']['get']['responses']['200']['content']['application/json'];
