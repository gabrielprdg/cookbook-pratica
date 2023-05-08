import { ImageModel } from '../../../../domain/model/image'
import { AddImageParams, AddImageRepository } from '../../../../data/protocols/image/add-image-repository'
import { TypeOrmImage } from '../entities/typeorm-image'
import { AppDataSource } from '../helper/app-data-source'

export class TypeOrmImageRepository implements AddImageRepository {
  async add (imageData: AddImageParams): Promise<ImageModel> {
    const image = new TypeOrmImage()

    image.name = imageData.name
    image.key = imageData.key
    image.size = imageData.size
    image.url = imageData.url

    const result = await AppDataSource.getInstance()
      .getRepository(TypeOrmImage)
      .save(image)

    return result
  }
}
