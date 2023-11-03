import Image from 'next/image'
import {Button} from '@nextui-org/button'; 
import NavBar from '../../component/navbar';
import ABOUT_ME from '../../component/about_me';

export default function Home() {
  return (
    
    <div>
      <NavBar/>
      <div>
        “The thing that you can control is your thoughts”
      </div>
      <ABOUT_ME/>
    </div>
  )
}
