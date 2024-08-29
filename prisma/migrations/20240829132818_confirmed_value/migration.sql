/*
  Warnings:

  - Added the required column `confirmed_value` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "confirmed_value" BOOLEAN NOT NULL;
