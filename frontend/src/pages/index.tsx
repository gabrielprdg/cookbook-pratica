import { GetServerSideProps } from 'next'
import { api } from '../../services/api'
import styles from './styles.module.scss'
import SideBar from '@/components/SideBar'

export type ImageData = {
  id: string
  name: string
  size: number
  key: string
  url: string
}

export type RecipeData = {
  name: string
  weight: number
  assemblyIngradients: string
  operatingInstructions: string
  image: ImageData
  entryTemperature: string
}

export type RecipeListProps = {
  recipes: RecipeData[]
}

export default function Landing() {

  return (
    <div className={styles.landingContainer}>
      <SideBar/>
    </div>
  )
}


