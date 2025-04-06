import { ERROR_MESSAGES } from "~/constants/constants";

export const getErrorText = (code: number): string =>
    ERROR_MESSAGES[code] || 'NoCoFoEr';
