import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm'
import { RecipeModel } from '../../../../domain/model/recipe'

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

  @CreateDateColumn()
  created_at: Date
}
