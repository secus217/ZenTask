import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../shared/entities/base.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Workspace extends BaseEntity {
  @Column()
  name!: string;
  @Column()
  description!: string;
  @ManyToOne(() => User)
  owner!: User;
  @ManyToOne(() => User)
  creator!: User;
}
