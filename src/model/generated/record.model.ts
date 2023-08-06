import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"

@Entity_()
export class Record {
    constructor(props?: Partial<Record>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: false})
    smartContractAddress!: string

    @Column_("text", {nullable: false})
    url!: string

    @Column_("int4", {nullable: false})
    likes!: number

    @Column_("int4", {nullable: false})
    dislikes!: number

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    submitter!: Account

    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    block!: bigint
}
