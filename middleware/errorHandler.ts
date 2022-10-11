
export function getErrorMessage(error: unknown): any {
    if (error instanceof Error) return error.message;
    return String(error)
}

