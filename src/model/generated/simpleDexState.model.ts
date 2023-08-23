import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class SimpleDexState {
    constructor(props?: Partial<SimpleDexState>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("int4", {nullable: false})
    swapFeePercentage!: number

    @Column_("bool", {nullable: false})
    halted!: boolean
}
