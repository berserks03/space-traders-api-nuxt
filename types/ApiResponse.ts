import type RegisterResponse from './RegisterResponse';
import type { ServerStatusResponse } from './ServerStatusResponse';

export type ApiResponse = ServerStatusResponse | RegisterResponse;
