import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Group} from "./group.model"

@Entity_()
export class GroupUser {
    constructor(props?: Partial<GroupUser>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Group, {nullable: true})
    group!: Group

    @Index_()
    @Column_("text", {nullable: false})
    accountId!: string

    @Column_("text", {nullable: false})
    role!: string
}
