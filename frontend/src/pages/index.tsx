import { GetServerSideProps } from 'next'
import { api } from '../../services/api'
import styles from './styles.module.scss'
import SideBar from '@/components/SideBar'
import RecipeList, { RecipeData, RecipeListProps } from '@/components/RecipeList'
import { FiPlus } from 'react-icons/fi'
import { 
  Button,
  Dialog,
  DialogActions,
  DialogContent, 
  DialogTitle, 
  TextField 
} from '@material-ui/core'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'


export default function Landing({ recipes } : RecipeListProps) {
  const [ name, setName ] = useState('')
  const [ weight, setWeight ] = useState<number>()
  const [ assemblyIngradients, setAssemblyIngradients ] = useState('')
  const [ operatingInstructions, setOperatingInstructions ] = useState('')
  const [ entryTemperature, setEntryTemperature ] = useState('')
  const [ recipesWrapper, setRecipesWrapper] = useState<RecipeData[]>(recipes)
  const { register,handleSubmit, reset} = useForm()
  const [ file, setFile ] = useState<File>()
  const [ image, setImage ] = useState()
  const [ open, setOpen ] = useState(false)
  const [ previewImage, setPreviewImage ] = useState<string>()

  useEffect(() => {
    async function fetchRecipes() {
      const response = await api.get('recipes')
      setRecipesWrapper(response.data)
    }
    
    fetchRecipes()
  }, [recipesWrapper])
  

  const handleSelectedImage = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files?.[0]

    if (!selectedImage) {
      return;
    }

    setFile(selectedImage)

    const selectedImagePreview = URL.createObjectURL(selectedImage)

    setPreviewImage(selectedImagePreview)
  }

  const handleSaveRecipe = async (event:FormEvent) => {
    event.preventDefault()

    const data = new FormData()
    data.append('name',name)
    data.append('weight', String(weight))
    data.append('assemblyIngradients', assemblyIngradients)
    data.append('operatingInstructions', operatingInstructions)
    data.append('entryTemperature', entryTemperature)
    if (file instanceof Blob) {
      data.append('file', file);
    } else {
      console.error('O arquivo não é válido');
    }
    
    const res = await api.post('recipe',data)

    if(res.status === 204) {
      toast.success('Recipe successfully registered!')
      handleClose()
    }else {
      toast.error('Required field not filled in!')
    }
    
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.landingContainer}>
      <SideBar/>
      <div className={styles.sideContent}>
        <div className={styles.sideHeader}>
          <div className={styles.top}>
            <h2>CookBook</h2>
            <button 
              className={styles.createRecipe}
              onClick={() => handleClickOpen()}
            >
              + Create recipe
            </button>
          </div>

          <input 
            type="search"
            name="srecipe"
            id="srecipe"
            placeholder='Search recipe'
            className={styles.searchRecipe}
          />
        </div>
        
        <RecipeList recipes={recipesWrapper}/>

        <Dialog open={open} onClose={handleClose} className={styles.dialogContainer}>
          <div className={styles.formHeader}>
            <DialogTitle>
              <div className={styles.cr}>
                Create Recipe
              </div> 
            </DialogTitle>
          </div>
          
          <DialogContent>
            <form className={styles.formContainer} onSubmit={handleSaveRecipe}>
              <div className={styles.topForm}>
                <div className={styles.name}>
                  <label htmlFor="name">Name</label>
                  <input
                    type='text'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              
                <div className={styles.weight}>
                  <label htmlFor="">Weight</label>
                  <input
                    type='number'
                    id='weight'
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                  />
                </div>

              </div>

              <div className={styles.middleForm}>
                <div className={styles.assemblyIng}>
                  <label htmlFor="">Assembly Ing</label>
                  <textarea
                    maxLength={300}
                    id="assemblyIngradients"
                    value={assemblyIngradients}
                    onChange={(e) => setAssemblyIngradients(e.target.value)}
                  />
                </div>

                <div className={styles.operatinIns}>
                  <label htmlFor="">Op. Instructions</label>
                  <textarea 
                    maxLength={300}
                    id='operatingInstructions'
                    value={operatingInstructions}
                    onChange={(e) => setOperatingInstructions(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.upload}>
                {previewImage ? (
                  <img src={previewImage} alt='img'/>
                ): (<div></div>)}
                
                <label htmlFor="uprecipe" className={styles.newImage}>      
                  <FiPlus size={24} color='#6F48C9'/>
                </label>
                <input
                  onChange={handleSelectedImage} 
                  type="file" 
                  name="uprecipe" 
                  id="uprecipe" 
                />

                <div className={styles.entryTemperature}>
                  <label htmlFor="">Entry temp. (ºC)</label>
                  <input
                    type='string'
                    id='entryTemperature'
                    value={entryTemperature}
                    onChange={(e) => setEntryTemperature(e.target.value)}
                  />
                </div>
              </div>
              <DialogActions>
                <Button onClick={handleClose} color="secondary">
                  Cancel
                </Button>
                <Button type='submit' color='primary'>
                  Save
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
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
