import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class TypeOrmImage {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  size: number

  @Column()
  key: string

  @Column()
  url: string
}
