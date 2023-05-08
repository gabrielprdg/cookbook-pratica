import { ImageModel } from '../../../domain/model/image'

export type AddImageParams = Omit<ImageModel, 'id'>

export interface AddImageRepository {
  add: (ImageData: AddImageParams) => Promise<ImageModel>
}
