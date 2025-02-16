/*
  Warnings:

  - You are about to drop the column `packId` on the `Card` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Card" (
    "cardId" TEXT NOT NULL PRIMARY KEY,
    "cardName" TEXT,
    "cardText" TEXT,
    "cardType" TEXT,
    "cardImage" TEXT,
    CONSTRAINT "Card_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Pack" ("packId") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Card" ("cardId", "cardImage", "cardName", "cardText", "cardType") SELECT "cardId", "cardImage", "cardName", "cardText", "cardType" FROM "Card";
DROP TABLE "Card";
ALTER TABLE "new_Card" RENAME TO "Card";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
