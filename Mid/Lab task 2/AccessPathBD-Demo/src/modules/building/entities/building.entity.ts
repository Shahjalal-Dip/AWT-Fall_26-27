import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Review } from "../../review/entities/review.entity";

@Entity("buildings")
export class Building {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 150 })
  name!: string;

  @Column({ length: 255 })
  address!: string;

  @Column({ length: 100 })
  city!: string;

  @Column({ name: "accessibility_features", type: "text" })
  accessibilityFeatures!: string;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt!: Date;

  @OneToMany(() => Review, (review) => review.building)
  reviews!: Review[];
}
