import SideBar from '@/components/SideBar'
import Image from 'next/image'
import styles from './styles.module.scss'
import BackLogo from '../../../public/left.svg'
import { RecipeData } from '@/components/RecipeList'
import EditingIcon from '../../../public/editing.svg'
import DeleteIcon from '../../../public/close2.svg'
import Link from 'next/link'

type RecipeDetailsProps = {
  recipe: RecipeData
}

export default function RecipeDetails({ recipe }: RecipeDetailsProps) {
  return (
    <div className={styles.recipeDetailsContainer}>
      <SideBar/>


      <div className={styles.asideContent}>
        <div className={styles.recipeHeader}>
          <div className={styles.titles}>
            <Link href='/'>
              <Image alt='back' src={BackLogo}/>
            </Link>
            <div>
              <h2>recipe</h2>
              <span> FIT Express</span>
            </div>
          </div>   

          <div className={styles.actions}>
            <div className={styles.edit}>
              <Image alt='edit' src={EditingIcon}/>
              <button>Edit</button>
            </div>
            
            <div className={styles.delete}>
              <Image alt='delete' src={DeleteIcon}/>
              <button>Delete</button>
            </div>
            
          </div>      
        </div>
        
        <div className={styles.recipeDetails}>
          <div className={styles.det}>Details</div>

          <div className={styles.infos}>
            <div className={styles.gramsAndTemp}>
              <div className={styles.weight}>
                <div> Weight(grams) </div> 
                <span> 200 </span>
              </div>
              <div className={styles.temp}>
                <div>Entry temp.(ºC) </div>
                <span>23ºC</span>
              </div>
            </div>

            <div className={styles.assemblyIngradients}>
              <div className={styles.assemblyTitle}> Assembly Ingradients: </div>
              <p>x</p>
            </div>
            <div className={styles.operatingInstructions}>
              <div className={styles.operatingTitle}> Operating Instructions: </div>
              <p>oi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


