module.exports = class Data1692771524942 {
    name = 'Data1692771524942'

    async up(db) {
        await db.query(`CREATE TABLE "simple_dex_state" ("id" character varying NOT NULL, "swap_fee_percentage" integer NOT NULL, "halted" boolean NOT NULL, CONSTRAINT "PK_7df89df806f1f3d19494a816c3f" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "swap_pair" ("id" character varying NOT NULL, "simple_dex_state_id" text NOT NULL, "from" text NOT NULL, "to" text NOT NULL, "enabled" boolean, CONSTRAINT "PK_3571ab1dad7640a6b93c705b8f7" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_d41e4f21d14b884c6f45d46361" ON "swap_pair" ("simple_dex_state_id") `)
        await db.query(`CREATE TABLE "token" ("id" character varying NOT NULL, "simple_dex_state_id" text NOT NULL, "balance_updated_timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "balance_updated_block" integer NOT NULL, CONSTRAINT "PK_82fae97f905930df5d62a702fc9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_87c203410baf43d49cf645096c" ON "token" ("simple_dex_state_id") `)
    }

    async down(db) {
        await db.query(`DROP TABLE "simple_dex_state"`)
        await db.query(`DROP TABLE "swap_pair"`)
        await db.query(`DROP INDEX "public"."IDX_d41e4f21d14b884c6f45d46361"`)
        await db.query(`DROP TABLE "token"`)
        await db.query(`DROP INDEX "public"."IDX_87c203410baf43d49cf645096c"`)
    }
}
