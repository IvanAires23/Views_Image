import { notFoundReading } from "../errors";
import readingRepository from "../repository/readingRepository";

type ReadingModel = {
    measure_uuid: string,
    measure_datetime: Date,
    measure_type: string,
    has_confirmed: boolean,
    image_url: string
}

async function getListReadings(customer_code: string, measure_type?: any) {
    const existingReading = measure_type ?
        await readingRepository.findReadingByMeasureType(customer_code, measure_type) :
        await readingRepository.findCustomerCode(customer_code)

    if (existingReading.length == 0) notFoundReading()

    const measure: ReadingModel[] = []

    existingReading.map(reading => {
        measure.push({
            has_confirmed: reading.confirmed_value,
            image_url: reading.image_url,
            measure_datetime: reading.measure_datetime,
            measure_type: reading.measure_type,
            measure_uuid: reading.measure_uuid
        })
    })

    return {
        customer_code,
        measure
    }
}

const listService = { getListReadings }

export default listService