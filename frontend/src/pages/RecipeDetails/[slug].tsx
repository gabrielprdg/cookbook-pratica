import SideBar from '@/components/SideBar'
import Image from 'next/image'
import styles from './styles.module.scss'
import BackLogo from '../../../public/left.svg'
import { RecipeData } from '@/components/RecipeList'
import EditingIcon from '../../../public/editing.svg'
import DeleteIcon from '../../../public/close2.svg'
import Link from 'next/link'
import { api } from '../../../services/api'
import { GetServerSideProps } from 'next'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Dialog from '@material-ui/core/Dialog'
import { FormEvent, useState } from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import { DialogContentText } from '@material-ui/core'
import { toast } from 'react-toastify'
import Router from 'next/router'
import { useForm } from 'react-hook-form'

type RecipeDetailsProps = {
  slug: string
  recipe: RecipeData
}

export default function RecipeDetails({ slug, recipe }: RecipeDetailsProps) {
  const [ name, setName ] = useState(recipe.name)
  const [ weight, setWeight ] = useState<number>(recipe.weight)
  const [ assemblyIngradients, setAssemblyIngradients ] = useState(recipe.assemblyIngradients)
  const [ operatingInstructions, setOperatingInstructions ] = useState(recipe.operatingInstructions)
  const [ entryTemperature, setEntryTemperature ] = useState(recipe.entryTemperature)
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const {handleSubmit, register} = useForm()
  const [recipeData, setRecipeData] = useState(recipe)

  async function handleDelete(id: string) {
    try {
      const res = await api.delete(`recipe/${id}`)

      if(res.status === 204) {
        toast.success('Recipe deleted successfuly!')
        Router.push('/');;
      } else if (res.status===500){
        toast.error('Erro no servidor!')
      }
    }catch (err) {
      toast.error(`${err}`);
    }
  }

  async function handleUpdateRecipe(data:any) {

    try {
      const res = await api.patch(`recipe/${slug}`, data)
      console.log('',res)
      if(res.status === 204) {
        toast.success('Successfully updated recipe')
      } else if (res.status===500){
        toast.error('Server error')
      }
    }catch(err) {
      toast.error(`${err}`);
    }
  }

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.recipeDetailsContainer}>
      <SideBar/>

      { recipe?.name ? (
        <div className={styles.asideContent}>
        <div className={styles.recipeHeader}>
          <div className={styles.titles}>
            <Link href='/'>
              <Image alt='back' src={BackLogo}/>
            </Link>
            <div>
              <h2>{recipe.name}</h2>
              <span> FIT Express</span>
            </div>
          </div>   

          <div className={styles.actions}>
            <div className={styles.edit} onClick={() => handleClickOpenEdit()}>
              <Image alt='edit' src={EditingIcon}/>
              <button>Edit</button>
            </div>
            
            <div className={styles.delete} onClick={() => handleClickOpen()}>
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
                <span> {recipe.weight} </span>
              </div>
              <div className={styles.temp}>
                <div>Entry temp.(ºC) </div>
                <span>{recipe.entryTemperature}</span>
              </div>
            </div>

            <div className={styles.assemblyIngradients}>
              <div className={styles.assemblyTitle}> Assembly Ingradients: </div>
              <p>{recipe.assemblyIngradients}</p>
            </div>
            <div className={styles.operatingInstructions}>
              <div className={styles.operatingTitle}> Operating Instructions: </div>
              <p>{recipe.operatingInstructions}</p>
            </div>
          </div>
        </div>

        <Dialog open={openEdit} onClose={handleCloseEdit} className={styles.dialogContainer}>
          <div className={styles.formHeader}>
            <DialogTitle>
              <div className={styles.cr}>
                Update Recipe
              </div> 
            </DialogTitle>
          </div>
          
          <DialogContent>
            <form className={styles.formContainer} onSubmit={handleSubmit(handleUpdateRecipe)}>
              <div className={styles.topForm}>
                <div className={styles.name}>
                  <label htmlFor="name">Name</label>
                  <input
                   {...register('name')}
                    type='text'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              
                <div className={styles.weight}>
                  <label htmlFor="">Weight</label>
                  <input
                   {...register('weight')}
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
                   {...register('assemblyIngradients')}
                    maxLength={300}
                    id="assemblyIngradients"
                    value={assemblyIngradients}
                    onChange={(e) => setAssemblyIngradients(e.target.value)}
                  />
                </div>

                <div className={styles.operatinIns}>
                  <label htmlFor="">Op. Instructions</label>
                  <textarea 
                   {...register('operatingInstructions')}
                    maxLength={300}
                    id='operatingInstructions'
                    value={operatingInstructions}
                    onChange={(e) => setOperatingInstructions(e.target.value)}
                  />
                </div>

                <div className={styles.entryTemperature}>
                  <label htmlFor="">Entry temp. (ºC)</label>
                  <input
                   {...register('entryTemperature')}
                    type='string'
                    id='entryTemperature'
                    value={entryTemperature}
                    onChange={(e) => setEntryTemperature(e.target.value)}
                  />
                </div>
              </div>

              <DialogActions>
                <Button onClick={handleCloseEdit} color="secondary">
                  Cancel
                </Button>
                <Button type='submit' color='primary'>
                  Save
                </Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Deletar carro</DialogTitle>
          <DialogContent>
              <DialogContentText>
                Tem certeza que quer deletar?
              </DialogContentText>
          </DialogContent>
          <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={() => {
                  handleDelete(recipe.id);
                  handleClose();
              }} color="secondary">
                  Deletar
              </Button>
          </DialogActions>
        </Dialog>
      </div>
      ): ''}
      
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ params }: Params) => {
  const { slug } = params

  const recipeData = await api.get(`recipe/${slug}`)
  const recipe = recipeData.data 

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    props: {
      slug,
      recipe
    }
  }
}