import styles from './styles.module.scss'
import Image from 'next/image'
import PraticaLogo from '../../../public/praticalogo.png'
import MenuLogo from '../../../public/menu.svg'
import SettingsLogo from '../../../public/settings.svg'
import LogoutLogo from '../../../public/logout.svg'
import Menu2Logo from '../../../public/menu2.svg'

export default function SideBar() {
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.topItems}>
        <div className={styles.praticaLogo}>
          <Image alt="logo" src={PraticaLogo} width={130} height={35}></Image>
        </div>
        
        <li>
          <ul>
            <div>
              <Image alt='menu' src={MenuLogo}/>
            </div>
            <div> My menus </div>
          </ul>
          <ul>
            <div>
              <Image alt='menu' src={MenuLogo}/>
            </div>
            <div> Cookbook </div> 
          </ul>
          <ul>
            <div>
              <Image alt='menu' src={Menu2Logo}/>
            </div>
            <div> Equipment </div>
          </ul>
          <ul>
            <div>
              <Image alt='menu' src={SettingsLogo}/>
            </div>
            <div> Settings </div> 
          </ul>
          <ul>
            <div>
              <Image alt='menu' src={LogoutLogo}/>
            </div>
            <div> Logout </div> 
          </ul>
        </li>
      </div>

      <div className={styles.bottomItems}>

      </div>
    </div>
  )
}