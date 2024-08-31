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
    throw new AppError("Leitura do mês já realizada", 409, "DOUBLE_REPORT")
}

export function invalidData() {
    throw new AppError("Tipo de medição não permitida", 400, "INVALID_TYPE")
}

export function notFoundReading() {
    throw new AppError("Nenhuma leitura encontrada", 404, "MEASURE_NOT_FOUND")
}

export function readingAlreadyConfirmed() {
    throw new AppError("Leitura do mês já confirmada", 409, "CONFIRMATION_DUPLICATE")
}