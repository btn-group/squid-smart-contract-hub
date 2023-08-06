import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import {Record} from "./record.model"
import {Account} from "./account.model"

@Index_(["record", "user"], {unique: true})
@Entity_()
export class Rating {
    constructor(props?: Partial<Rating>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @ManyToOne_(() => Record, {nullable: true})
    record!: Record

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    user!: Account

    @Column_("int4", {nullable: false})
    rating!: number
}
