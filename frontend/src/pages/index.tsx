import { GetServerSideProps } from 'next'
import { api } from '../../services/api'
import styles from './styles.module.scss'
import SideBar from '@/components/SideBar'
import RecipeList, { RecipeListProps } from '@/components/RecipeList'


export default function Landing({ recipes } : RecipeListProps) {

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
        
        <RecipeList recipes={recipes}/>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const recipesData = await api.get('recipes')
  

  const recipes = recipesData.data

  return {
    props: {
      recipes
    }
  }
}
