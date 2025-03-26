import type { ApiResponse } from './ApiResponse';
import type ErrorResponse from './ErrorResponse';

export type Result = SuccessResult | ErrorResult;

interface SuccessResult {
    data: ApiResponse;
    error?: never;
}

interface ErrorResult {
    data?: never;
    error: ErrorResponse;
}
