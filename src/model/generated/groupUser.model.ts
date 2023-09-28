import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"

@Entity_()
export class GroupUser {
    constructor(props?: Partial<GroupUser>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: false})
    groupId!: string

    @Index_()
    @Column_("text", {nullable: false})
    accountId!: string

    @Column_("text", {nullable: false})
    role!: string
}
