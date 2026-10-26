import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Building } from "../../building/entities/building.entity";
import { User } from "../../user/entities/user.entity";

@Entity("reviews")
export class Review {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "integer" })
  rating!: number;

  @Column({ type: "text" })
  comment!: string;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt!: Date;

  @ManyToOne(() => User, (user) => user.reviews, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user!: User;

  @ManyToOne(() => Building, (building) => building.reviews, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "building_id" })
  building!: Building;
}
