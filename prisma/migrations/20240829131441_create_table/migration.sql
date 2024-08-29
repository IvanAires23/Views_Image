-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "measure_type" TEXT NOT NULL,
    "measure_datetime" TIMESTAMP(3) NOT NULL,
    "customer_code" TEXT NOT NULL,
    "measure_value" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
