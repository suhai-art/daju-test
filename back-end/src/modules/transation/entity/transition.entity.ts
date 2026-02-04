import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn
} from "typeorm";

@Entity("transactions")
export class TransactionEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ name: "nr_dctoorigem", type: "integer" })
    invoice!: number;

    @Column({ name: "cd_produto", type: "integer" })
    product!: number;

    @Column({ name: "cd_empresa", type: "integer" })
    company!: number;

    @Column({ name: "round", type: "decimal", precision: 10, scale: 2 })
    value!: number;

    @Column({
        name: "in_estorno",
        type: "boolean",
        default: false
    })
    isReversal!: boolean;
}
