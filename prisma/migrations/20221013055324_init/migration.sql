-- AlterTable
ALTER TABLE "senses" ADD COLUMN     "compas" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "updated" SET DATA TYPE TIMESTAMPTZ(3);
