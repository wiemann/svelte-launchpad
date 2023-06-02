ALTER TABLE "Waitinglist" RENAME TO "waitinglist";
ALTER TABLE "waitinglist" ALTER COLUMN "createdAt" DROP NOT NULL;