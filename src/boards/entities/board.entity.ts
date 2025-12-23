import { BaseEntity } from '../../shared/entities/base.entity';
import { Column, Entity, Index, ManyToOne } from 'typeorm';
import { Workspace } from '../../workspaces/entities/workspace.entity';
import { User } from '../../users/entities/user.entity';
@Entity()
@Index('idx_board_workspace', ['workspace'])
export class Board extends BaseEntity {
  @ManyToOne(() => Workspace)
  workspace!: Workspace;
  @Column()
  name!: string;
  @Column()
  description!: string;
  @Column({ type: 'simple-array', nullable: true })
  background?: string[];
  @ManyToOne(() => User)
  created_by!: User;
}
