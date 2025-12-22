import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  // Define user properties here
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  username!: string;
  @Column()
  password!: string;
}
