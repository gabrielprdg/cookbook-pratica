import { DataSource } from 'typeorm'
import { TypeOrmRecipe } from '../entities/typeorm-recipe'
import { TypeOrmImage } from '../entities/typeorm-image'

export class AppDataSource {
  private static instance: DataSource
  static getInstance (): DataSource {
    if (this.instance) return this.instance
    this.instance = new DataSource({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
      entities: [TypeOrmRecipe, TypeOrmImage],
      subscribers: [],
      migrations: []
    })

    return this.instance
  }
}
