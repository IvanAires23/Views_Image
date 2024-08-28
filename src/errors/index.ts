export function readingAlreadyDone() {
    return { error_code: 'DOUBLE_REPORT', error_description: "Leitura do mês já realizada" }
}

export function invalidData() {
    return { error_code: 'badRequest', error_description: 'Formato Base64 inválido' }
}

export function notFoundReading() {
    return {
        error_code: 'MEASURE_NOT_FOUND', error_description: 'Leitura não encontrada'
    }
}

export function readingAlreadyConfirmed() {
    return {
        error_code: "CONFIRMATION_DUPLICATE", error_description: "Leitura do mês já realizada"
    }
}