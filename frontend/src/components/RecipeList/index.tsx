import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'

export type ImageData = {
  id: string
  name: string
  size: number
  key: string
  url: string
}

export type RecipeData = {
  id: string
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

export default function RecipeList({recipes}: RecipeListProps) {
  return (
    <div className={styles.recipeListContainer}>
      <div className={styles.recipesWrapper}>
        {recipes.map((recipe, index) => {
          return (
            <Link className={styles.linkRecipeDetails} key={index} href={`/RecipeDetails/${recipe.id}`}>
              <div className={styles.recipeCard}>

                {recipe.image?.url && (
                  <div className={styles.recipeImage}>
                    <img src={recipe.image?.url} alt="recipe" />
                  </div>
                )}

              <div className={styles.recipeName}>{recipe.name}</div>
              <span>FIT EXPRESS</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
} 