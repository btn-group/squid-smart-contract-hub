module.exports = class Data1691295678794 {
  name = "Data1691295678794";

  async up(db) {
    await db.query(
      `CREATE TABLE "record" ("id" character varying NOT NULL, "smart_contract_address" text NOT NULL, "url" text NOT NULL, "environment" integer NOT NULL, "likes" integer NOT NULL, "dislikes" integer NOT NULL, "submitter" text NOT NULL, "enabled" boolean NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block" integer NOT NULL, CONSTRAINT "PK_5cb1f4d1aff275cf9001f4343b9" PRIMARY KEY ("id"))`,
    );
    await db.query(
      `CREATE INDEX "IDX_10510cef385f57efb243fc9e89" ON "record" ("smart_contract_address") `,
    );
    await db.query(
      `CREATE INDEX "IDX_afe02822514380c8162ede31c8" ON "record" ("submitter") `,
    );
    await db.query(
      `CREATE TABLE "rating" ("id" character varying NOT NULL, "record_id" text NOT NULL, "user" text NOT NULL, "rating" integer NOT NULL, CONSTRAINT "PK_ecda8ad32645327e4765b43649e" PRIMARY KEY ("id"))`,
    );
  }

  async down(db) {
    await db.query(`DROP TABLE "record"`);
    await db.query(`DROP INDEX "public"."IDX_10510cef385f57efb243fc9e89"`);
    await db.query(`DROP INDEX "public"."IDX_afe02822514380c8162ede31c8"`);
    await db.query(`DROP TABLE "rating"`);
  }
};
