import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../shared/entities/base.entity';
import { Board } from '../../boards/entities/board.entity';
import { User } from '../../users/entities/user.entity';
export enum BoardRole{
  ADMIN="admin",
  MEMBER="member"
}
@Entity()
export class BoardMember extends BaseEntity{
  @ManyToOne(()=>Board)
  board!: Board;
  @ManyToOne(()=>User)
  member!: User;
  @Column({type:"enum",enum:BoardRole,default:BoardRole.MEMBER})
  role!:BoardRole;
}
