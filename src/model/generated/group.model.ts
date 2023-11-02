import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import {GroupUser} from "./groupUser.model"

@Entity_()
export class Group {
    constructor(props?: Partial<Group>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    name!: string

    @Column_("bool", {nullable: false})
    enabled!: boolean

    @OneToMany_(() => GroupUser, e => e.group)
    groupUsers!: GroupUser[]

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date
}
