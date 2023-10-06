import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import {Group} from "./group.model"

@Entity_()
export class SmartContract {
    constructor(props?: Partial<SmartContract>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: false})
    address!: string

    @Column_("int4", {nullable: false})
    chain!: number

    @Index_()
    @Column_("text", {nullable: false})
    caller!: string

    @Column_("bool", {nullable: false})
    enabled!: boolean

    @Index_()
    @Column_("text", {nullable: false})
    azeroId!: string

    @Column_("text", {nullable: false})
    abiUrl!: string

    @Column_("text", {nullable: true})
    contractUrl!: string | undefined | null

    @Column_("text", {nullable: true})
    wasmUrl!: string | undefined | null

    @Column_("text", {nullable: true})
    auditUrl!: string | undefined | null

    @Index_()
    @ManyToOne_(() => Group, {nullable: true})
    group!: Group | undefined | null

    @Column_("text", {nullable: true})
    projectName!: string | undefined | null

    @Column_("text", {nullable: true})
    projectWebsite!: string | undefined | null

    @Column_("text", {nullable: true})
    github!: string | undefined | null
}
