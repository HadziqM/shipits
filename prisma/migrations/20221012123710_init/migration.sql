/*
  Warnings:

  - You are about to alter the column `distance` on the `senses` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "senses" ALTER COLUMN "distance" SET DATA TYPE INTEGER;
