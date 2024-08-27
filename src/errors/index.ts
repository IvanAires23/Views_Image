export function readingAlreadyDone() {
    return { error_code: 'DOUBLE_REPORT', error_description: "Leitura do mês já realizada" }
}

export function invalidData() {
    return { error_code: 'badRequest', error_description: 'Formato Base64 inválido' }
}