-- AlterTable
ALTER TABLE "waitinglist" RENAME CONSTRAINT "Waitinglist_pkey" TO "waitinglist_pkey";

-- RenameIndex
ALTER INDEX "Waitinglist_email_key" RENAME TO "waitinglist_email_key";
