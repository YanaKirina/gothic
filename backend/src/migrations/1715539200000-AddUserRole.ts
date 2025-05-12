import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserRole1715539200000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Check if the enum type exists
    const enumExists = await queryRunner.query(`
      SELECT EXISTS (
        SELECT 1 FROM pg_type 
        WHERE typname = 'user_role_enum'
      );
    `);

    // Only create the enum if it doesn't exist
    if (!enumExists[0].exists) {
      await queryRunner.query(`
        CREATE TYPE "public"."user_role_enum" AS ENUM ('ADMIN', 'USER');
      `);
    }

    // Add the role column if it doesn't exist
    const columnExists = await queryRunner.query(`
      SELECT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'users' 
        AND column_name = 'role'
      );
    `);

    if (!columnExists[0].exists) {
      await queryRunner.query(`
        ALTER TABLE "users" ADD COLUMN "role" "public"."user_role_enum" NOT NULL DEFAULT 'USER';
      `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove the role column
    await queryRunner.query(`
      ALTER TABLE "users" DROP COLUMN "role";
    `);

    // Drop the enum type if it exists
    await queryRunner.query(`
      DROP TYPE IF EXISTS "public"."user_role_enum";
    `);
  }
} 