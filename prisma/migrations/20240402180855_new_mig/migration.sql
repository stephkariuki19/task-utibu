-- CreateTable
CREATE TABLE `User` (
    `patient_id` VARCHAR(191) NOT NULL,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `hashed_password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_patient_id_key`(`patient_id`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`patient_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `order_id` VARCHAR(191) NOT NULL,
    `patient_id` VARCHAR(191) NOT NULL,
    `med_id` VARCHAR(191) NOT NULL,
    `order_date` DATETIME(3) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `payment_complete` BOOLEAN NOT NULL,

    UNIQUE INDEX `Order_order_id_key`(`order_id`),
    PRIMARY KEY (`order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `payment_id` VARCHAR(191) NOT NULL,
    `order_id` VARCHAR(191) NOT NULL,
    `amount` INTEGER NOT NULL,
    `payment_date` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Payment_payment_id_key`(`payment_id`),
    PRIMARY KEY (`payment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MedicineStock` (
    `med_id` VARCHAR(191) NOT NULL,
    `unit_price` INTEGER NOT NULL,
    `med_name` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,

    UNIQUE INDEX `MedicineStock_med_id_key`(`med_id`),
    PRIMARY KEY (`med_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_patient_id_fkey` FOREIGN KEY (`patient_id`) REFERENCES `User`(`patient_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_med_id_fkey` FOREIGN KEY (`med_id`) REFERENCES `MedicineStock`(`med_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `Order`(`order_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
