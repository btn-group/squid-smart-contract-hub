import {
  Entity as Entity_,
  Column as Column_,
  PrimaryColumn as PrimaryColumn_,
} from "typeorm";

@Entity_()
export class Rating {
  constructor(props?: Partial<Rating>) {
    Object.assign(this, props);
  }

  @PrimaryColumn_()
  id!: string;

  @Column_("text", { nullable: false })
  recordId!: string;

  @Column_("text", { nullable: false })
  user!: string;

  @Column_("int4", { nullable: false })
  rating!: number;
}
