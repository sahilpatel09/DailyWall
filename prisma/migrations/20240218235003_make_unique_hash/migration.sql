-- CreateTable
CREATE TABLE "wallpapers" (
    "id" SERIAL NOT NULL,
    "startdate" DATE,
    "enddate" DATE,
    "url" VARCHAR(255),
    "copyright" TEXT,
    "copyrightlink" VARCHAR(255),
    "title" VARCHAR(255),
    "quiz" VARCHAR(255),
    "hsh" VARCHAR(255),

    CONSTRAINT "wallpapers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "wallpapers_hsh_key" ON "wallpapers"("hsh");
