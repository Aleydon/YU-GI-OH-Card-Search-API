-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Pack" (
    "packId" TEXT NOT NULL PRIMARY KEY,
    "packName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Card" (
    "cardId" TEXT NOT NULL PRIMARY KEY,
    "cardName" TEXT,
    "cardText" TEXT,
    "cardType" TEXT
);

-- CreateTable
CREATE TABLE "_GameToPack" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_GameToPack_A_fkey" FOREIGN KEY ("A") REFERENCES "Game" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_GameToPack_B_fkey" FOREIGN KEY ("B") REFERENCES "Pack" ("packId") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_CardToPack" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CardToPack_A_fkey" FOREIGN KEY ("A") REFERENCES "Card" ("cardId") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CardToPack_B_fkey" FOREIGN KEY ("B") REFERENCES "Pack" ("packId") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_GameToPack_AB_unique" ON "_GameToPack"("A", "B");

-- CreateIndex
CREATE INDEX "_GameToPack_B_index" ON "_GameToPack"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CardToPack_AB_unique" ON "_CardToPack"("A", "B");

-- CreateIndex
CREATE INDEX "_CardToPack_B_index" ON "_CardToPack"("B");
