/*
  Warnings:

  - You are about to drop the column `payment_complete` on the `order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `payment_complete`;
