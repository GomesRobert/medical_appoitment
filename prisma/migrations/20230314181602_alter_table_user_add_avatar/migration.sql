-- AlterTable
ALTER TABLE "appointments" ALTER COLUMN "note" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "avatar" TEXT;
