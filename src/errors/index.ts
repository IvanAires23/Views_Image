export class AppError extends Error {
    public status: number;
    public error_code: any;

    constructor(message: string, status: number, error_code: any) {
        super(message);
        this.status = status;
        this.error_code = error_code;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export function readingAlreadyDone() {
    throw new AppError("Leitura do mês já realizada", 400, "DOUBLE_REPORT")
}

export function invalidData() {
    return { error_code: 'badRequest', error_description: 'Formato Base64 inválido' }
}

export function notFoundReading() {
    throw new AppError("Leitura não encontrada", 404, "MEASURE_NOT_FOUND")
}

export function readingAlreadyConfirmed() {
    throw new AppError("Leitura do mês já confirmada", 409, "CONFIRMATION_DUPLICATE")
}