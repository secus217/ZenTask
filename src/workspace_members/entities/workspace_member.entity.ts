import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../shared/entities/base.entity';
import { Workspace } from '../../workspaces/entities/workspace.entity';
import { User } from '../../users/entities/user.entity';
export enum Role {
  ADMIN = 'admin',
  MEMBER = 'member',
}
@Entity()
export class WorkspaceMember extends BaseEntity {
  @ManyToOne(() => Workspace)
  workspace!: Workspace;
  @ManyToMany(() => User)
  user!: User;
  @Column({ type: 'enum', enum: Role, default: Role.MEMBER })
  role!: Role;
}
