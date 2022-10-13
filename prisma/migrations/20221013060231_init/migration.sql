/*
  Warnings:

  - The `updated` column on the `senses` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "senses" DROP COLUMN "updated",
ADD COLUMN     "updated" INTEGER NOT NULL DEFAULT 0;
