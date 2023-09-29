module.exports = class Data1695950286980 {
    name = 'Data1695950286980'

    async up(db) {
        await db.query(`CREATE TABLE "group" ("id" character varying NOT NULL, "name" text NOT NULL, "enabled" boolean NOT NULL, CONSTRAINT "PK_256aa0fda9b1de1a73ee0b7106b" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "group_user" ("id" character varying NOT NULL, "account_id" text NOT NULL, "role" text NOT NULL, "group_id" character varying, CONSTRAINT "PK_c637f43a6f0d7891fec59f4d7a7" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_d339f18d53e39b898da78bbabb" ON "group_user" ("group_id") `)
        await db.query(`CREATE INDEX "IDX_813edd80a219ffee7b38103c31" ON "group_user" ("account_id") `)
        await db.query(`ALTER TABLE "group_user" ADD CONSTRAINT "FK_d339f18d53e39b898da78bbabba" FOREIGN KEY ("group_id") REFERENCES "group"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "group"`)
        await db.query(`DROP TABLE "group_user"`)
        await db.query(`DROP INDEX "public"."IDX_d339f18d53e39b898da78bbabb"`)
        await db.query(`DROP INDEX "public"."IDX_813edd80a219ffee7b38103c31"`)
        await db.query(`ALTER TABLE "group_user" DROP CONSTRAINT "FK_d339f18d53e39b898da78bbabba"`)
    }
}
