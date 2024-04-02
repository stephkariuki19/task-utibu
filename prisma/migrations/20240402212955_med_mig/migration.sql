/*
  Warnings:

  - The primary key for the `medicinestock` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `med_id` on the `medicinestock` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `med_id` on the `order` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_med_id_fkey`;

-- DropIndex
DROP INDEX `MedicineStock_med_id_key` ON `medicinestock`;

-- AlterTable
ALTER TABLE `medicinestock` DROP PRIMARY KEY,
    MODIFY `med_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`med_id`);

-- AlterTable
ALTER TABLE `order` MODIFY `med_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_med_id_fkey` FOREIGN KEY (`med_id`) REFERENCES `MedicineStock`(`med_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
