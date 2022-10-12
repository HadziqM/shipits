/*
  Warnings:

  - You are about to drop the column `shipname` on the `senses` table. All the data in the column will be lost.
  - Added the required column `shipid` to the `senses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "senses" DROP CONSTRAINT "senses_shipname_fkey";

-- AlterTable
ALTER TABLE "senses" DROP COLUMN "shipname",
ADD COLUMN     "shipid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "senses" ADD CONSTRAINT "senses_shipid_fkey" FOREIGN KEY ("shipid") REFERENCES "kapals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
