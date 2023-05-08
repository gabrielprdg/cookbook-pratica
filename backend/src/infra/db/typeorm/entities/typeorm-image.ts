import { ImageModel } from '../../../../domain/model/image'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('image')
export class TypeOrmImage implements ImageModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  size: number

  @Column()
  key: string

  @Column()
  url: string
}
