import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { RecipeModel } from '../../../../domain/model/recipe'
import { TypeOrmImage } from './typeorm-image'

@Entity('recipe')
export class TypeOrmRecipe implements RecipeModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  weight: number

  @Column()
  assemblyIngradients: string

  @Column()
  operatingInstructions: string

  @Column()
  entryTemperature: string

  @OneToOne(() => TypeOrmImage)
  @JoinColumn()
  image: TypeOrmImage

  @CreateDateColumn()
  created_at: Date
}
