import { Column, Entity, Index, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../shared/entities/base.entity';
import { Board } from '../../boards/entities/board.entity';
import { Min } from 'class-validator';

@Entity()
@Index('idx_position', ['position'])
export class List extends BaseEntity {
  @ManyToOne(() => Board)
  board!: Board;
  @Column()
  name!: string;
  @Column()
  @Min(1)
  position!: number;
}
