import prisma from "../config/database";

function uploadImage(customer_code: string, measure_datetime: Date, measure_type: string, measure_value: number, measure_uuid: string, image_url: string) {
    return prisma.user.create({
        data: {
            customer_code,
            measure_datetime,
            measure_type,
            measure_value,
            measure_uuid,
            confirmed_value: false,
            image_url
        }
    })
}

function findCustomerCode(customer_code: string) {
    return prisma.user.findMany({
        where: {
            customer_code
        }
    })
}

function findMeasureUUID(measure_uuid: string) {
    return prisma.user.findMany({
        where: {
            measure_uuid
        }
    })
}

function updateReading(measure_value: number, measure_uuid: string) {
    return prisma.user.updateMany({
        data: {
            confirmed_value: true,
            measure_value
        },
        where: {
            measure_uuid
        }
    })
}

function findReadingByMeasureType(customer_code: string, measure_type: string) {
    return prisma.user.findMany({
        where: {
            customer_code,
            measure_type
        }
    })
}

const readingRepository = { uploadImage, findCustomerCode, findMeasureUUID, updateReading, findReadingByMeasureType }

export default readingRepository