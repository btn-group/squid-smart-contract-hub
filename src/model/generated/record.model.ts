import {
  Entity as Entity_,
  Column as Column_,
  PrimaryColumn as PrimaryColumn_,
  Index as Index_,
} from "typeorm";

@Entity_()
export class Record {
  constructor(props?: Partial<Record>) {
    Object.assign(this, props);
  }

  @PrimaryColumn_()
  id!: string;

  @Index_()
  @Column_("text", { nullable: false })
  smartContractAddress!: string;

  @Column_("text", { nullable: false })
  url!: string;

  @Column_("int4", { nullable: false })
  environment!: number;

  @Column_("int4", { nullable: false })
  likes!: number;

  @Column_("int4", { nullable: false })
  dislikes!: number;

  @Index_()
  @Column_("text", { nullable: false })
  submitter!: string;

  @Column_("bool", { nullable: false })
  enabled!: boolean;

  @Column_("timestamp with time zone", { nullable: false })
  timestamp!: Date;

  @Column_("int4", { nullable: false })
  block!: number;
}
