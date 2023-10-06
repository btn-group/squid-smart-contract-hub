module.exports = class Data1696552438098 {
    name = 'Data1696552438098'

    async up(db) {
        await db.query(`CREATE TABLE "group" ("id" character varying NOT NULL, "name" text NOT NULL, "enabled" boolean NOT NULL, CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "group_user" ("id" character varying NOT NULL, "account_id" text NOT NULL, "role" text NOT NULL, "group_id" character varying, CONSTRAINT "PK_c637f43a6f0d7891fec59f4d7a7" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_d339f18d53e39b898da78bbabb" ON "group_user" ("group_id") `)
        await db.query(`CREATE INDEX "IDX_813edd80a219ffee7b38103c31" ON "group_user" ("account_id") `)
        await db.query(`CREATE TABLE "smart_contract" ("id" character varying NOT NULL, "address" text NOT NULL, "chain" integer NOT NULL, "caller" text NOT NULL, "enabled" boolean NOT NULL, "azero_id" text NOT NULL, "abi_url" text NOT NULL, "contract_url" text, "wasm_url" text, "audit_url" text, "project_name" text, "project_website" text, "github" text, "group_id" character varying, CONSTRAINT "PK_27627aca2eebd2eb72f26f6399a" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_1f2f899cc57aa4ab9dc042c68f" ON "smart_contract" ("address") `)
        await db.query(`CREATE INDEX "IDX_23e08edcdb253cd2dfc3b51ad2" ON "smart_contract" ("caller") `)
        await db.query(`CREATE INDEX "IDX_56e74eb092566c5896b0c730fe" ON "smart_contract" ("azero_id") `)
        await db.query(`CREATE INDEX "IDX_5c2fbd2a15bc881b4d95005599" ON "smart_contract" ("group_id") `)
        await db.query(`ALTER TABLE "group_user" ADD CONSTRAINT "FK_d339f18d53e39b898da78bbabba" FOREIGN KEY ("group_id") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "smart_contract" ADD CONSTRAINT "FK_5c2fbd2a15bc881b4d950055993" FOREIGN KEY ("group_id") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "group"`)
        await db.query(`DROP TABLE "group_user"`)
        await db.query(`DROP INDEX "public"."IDX_d339f18d53e39b898da78bbabb"`)
        await db.query(`DROP INDEX "public"."IDX_813edd80a219ffee7b38103c31"`)
        await db.query(`DROP TABLE "smart_contract"`)
        await db.query(`DROP INDEX "public"."IDX_1f2f899cc57aa4ab9dc042c68f"`)
        await db.query(`DROP INDEX "public"."IDX_23e08edcdb253cd2dfc3b51ad2"`)
        await db.query(`DROP INDEX "public"."IDX_56e74eb092566c5896b0c730fe"`)
        await db.query(`DROP INDEX "public"."IDX_5c2fbd2a15bc881b4d95005599"`)
        await db.query(`ALTER TABLE "group_user" DROP CONSTRAINT "FK_d339f18d53e39b898da78bbabba"`)
        await db.query(`ALTER TABLE "smart_contract" DROP CONSTRAINT "FK_5c2fbd2a15bc881b4d950055993"`)
    }
}
