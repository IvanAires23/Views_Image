import { notFoundReading, readingAlreadyConfirmed } from "../errors";
import readingRepository from "../repository/readingRepository";

async function confirmValue(measure_uuid: string, confirmed_value: number) {
    const existingReading = await readingRepository.findMeasureUUID(measure_uuid)

    if (existingReading.length == 0) notFoundReading()
    else if (existingReading[0].confirmed_value) readingAlreadyConfirmed()

    await readingRepository.updateReading(confirmed_value, measure_uuid)

    return { success: true }

}

const confirmService = { confirmValue }

export default confirmService