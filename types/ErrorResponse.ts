export default interface ErrorResponse {
    message: string;
    code: number;
    data?: Record<string, string | string[]>;
};
