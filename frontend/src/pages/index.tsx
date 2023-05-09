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
      <div className={styles.sideContent}>
        <div className={styles.sideHeader}>
          <div className={styles.top}>
            <h2>CookBook</h2>
            <button className={styles.createRecipe}>+ Create recipe</button>
          </div>

          <input 
            type="search"
            name="srecipe"
            id="srecipe"
            placeholder='Search recipe'
            className={styles.searchRecipe}
          />
        </div>
        

      </div>
    </div>
  )
}


