-- CreateTable
CREATE TABLE "Waitinglist" (
    "uid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,

    CONSTRAINT "Waitinglist_pkey" PRIMARY KEY ("uid")
);
