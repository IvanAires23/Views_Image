/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "readings" (
    "id" SERIAL NOT NULL,
    "measure_type" TEXT NOT NULL,
    "measure_datetime" TIMESTAMP(3) NOT NULL,
    "customer_code" TEXT NOT NULL,
    "measure_value" INTEGER NOT NULL,
    "measure_uuid" TEXT NOT NULL,
    "confirmed_value" BOOLEAN NOT NULL,
    "image_url" TEXT NOT NULL,

    CONSTRAINT "readings_pkey" PRIMARY KEY ("id")
);
