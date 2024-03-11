import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateOrder1710126323129 implements MigrationInterface {
  name = 'CreateOrder1710126323129';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TYPE "public"."order_status_enum" AS ENUM(
                'AWAITING_PAYMENT',
                'AWAITING_SHIPMENT',
                'ALMOST_SHIPPING',
                'SHIPPED',
                'IN_TRANSIT',
                'COMPLETE',
                'CANCELED'
            )
        `);
    await queryRunner.query(`
            CREATE TABLE "order" (
                "id" SERIAL NOT NULL,
                "status" "public"."order_status_enum" NOT NULL DEFAULT 'AWAITING_PAYMENT',
                "customerId" integer NOT NULL,
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updateAt" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id")
            )
        `);
    await queryRunner.query(`
            ALTER TABLE "order"
            ADD CONSTRAINT "FK_124456e637cca7a415897dce659" FOREIGN KEY ("customerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE "order" DROP CONSTRAINT "FK_124456e637cca7a415897dce659"
        `);
    await queryRunner.query(`
            DROP TABLE "order"
        `);
    await queryRunner.query(`
            DROP TYPE "public"."order_status_enum"
        `);
  }
}
