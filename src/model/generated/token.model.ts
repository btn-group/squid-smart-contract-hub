import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Entity_()
export class Token {
    constructor(props?: Partial<Token>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: false})
    simpleDexStateId!: string

    @Column_("timestamp with time zone", {nullable: false})
    balanceUpdatedTimestamp!: Date

    @Column_("int4", {nullable: false})
    balanceUpdatedBlock!: number
}
