/*
  Warnings:

  - You are about to drop the column `packId` on the `Card` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_CardToPack" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CardToPack_A_fkey" FOREIGN KEY ("A") REFERENCES "Card" ("cardId") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CardToPack_B_fkey" FOREIGN KEY ("B") REFERENCES "Pack" ("packId") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Card" (
    "cardId" TEXT NOT NULL PRIMARY KEY,
    "cardName" TEXT,
    "cardText" TEXT,
    "cardType" TEXT,
    "cardImage" TEXT
);
INSERT INTO "new_Card" ("cardId", "cardImage", "cardName", "cardText", "cardType") SELECT "cardId", "cardImage", "cardName", "cardText", "cardType" FROM "Card";
DROP TABLE "Card";
ALTER TABLE "new_Card" RENAME TO "Card";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_CardToPack_AB_unique" ON "_CardToPack"("A", "B");

-- CreateIndex
CREATE INDEX "_CardToPack_B_index" ON "_CardToPack"("B");
