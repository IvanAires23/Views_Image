import { notFoundReading, readingAlreadyConfirmed } from "../errors";
import readingsDatabase from "../utils/readingDatabase";

async function confirmValue(measure_uuid: string, confirmed_value: number) {
    const existingReading = readingsDatabase[`${measure_uuid}`];

    if (!existingReading) throw notFoundReading()
    else if (existingReading.confirmed_value) throw new Error("")

    existingReading.confirmed_value = true
    existingReading.measure_value = confirmed_value

    return { success: true }

}

const confirmService = { confirmValue }

export default confirmService