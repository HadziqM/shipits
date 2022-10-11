-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ships" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "ships_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kapals" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "maxfuel" INTEGER NOT NULL DEFAULT 3500,
    "maxstg" INTEGER NOT NULL DEFAULT 2000,
    "maxstt" INTEGER NOT NULL DEFAULT 1000,
    "maxsrv" INTEGER NOT NULL DEFAULT 500,
    "maxrpm" INTEGER NOT NULL DEFAULT 5000,
    "maxoil" INTEGER NOT NULL DEFAULT 400,
    "maxtemp" INTEGER NOT NULL DEFAULT 1000,
    "maxvib" INTEGER NOT NULL DEFAULT 1000,

    CONSTRAINT "kapals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "senses" (
    "id" SERIAL NOT NULL,
    "shipname" TEXT NOT NULL,
    "gps_n" DOUBLE PRECISION NOT NULL,
    "gps_w" DOUBLE PRECISION NOT NULL,
    "distance" BIGINT NOT NULL,
    "fuel" INTEGER NOT NULL,
    "stg" INTEGER NOT NULL,
    "stt" INTEGER NOT NULL,
    "srv" INTEGER NOT NULL,
    "oil" INTEGER NOT NULL,
    "temp" INTEGER NOT NULL,
    "rpm" INTEGER NOT NULL,
    "vib" INTEGER NOT NULL,
    "slantx" INTEGER NOT NULL,
    "slanty" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "gsm" BOOLEAN NOT NULL DEFAULT false,
    "internet" BOOLEAN NOT NULL DEFAULT true,
    "satelit" BOOLEAN NOT NULL DEFAULT false,
    "flow" BOOLEAN NOT NULL DEFAULT true,
    "level" BOOLEAN NOT NULL DEFAULT true,
    "rpmsense" BOOLEAN NOT NULL DEFAULT true,
    "vibsense" BOOLEAN NOT NULL DEFAULT true,
    "oilsense" BOOLEAN NOT NULL DEFAULT true,
    "tempsense" BOOLEAN NOT NULL DEFAULT true,
    "slantsense" BOOLEAN NOT NULL DEFAULT true,
    "gps" BOOLEAN NOT NULL DEFAULT true,
    "camera" BOOLEAN NOT NULL DEFAULT true,
    "updated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "senses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "kapals_brand_key" ON "kapals"("brand");

-- AddForeignKey
ALTER TABLE "ships" ADD CONSTRAINT "ships_brand_fkey" FOREIGN KEY ("brand") REFERENCES "kapals"("brand") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "senses" ADD CONSTRAINT "senses_shipname_fkey" FOREIGN KEY ("shipname") REFERENCES "kapals"("brand") ON DELETE RESTRICT ON UPDATE CASCADE;
