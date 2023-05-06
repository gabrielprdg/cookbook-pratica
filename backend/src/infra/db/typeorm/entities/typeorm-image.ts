import { ImageModel } from '../../../../domain/model/image'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class TypeOrmImage implements ImageModel {
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
