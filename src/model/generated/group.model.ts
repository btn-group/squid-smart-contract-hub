import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

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
}
