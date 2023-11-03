import Image from 'next/image'
import {Button} from '@nextui-org/button'; 
import NavBar from '../../component/navbar';
import ABOUT_ME from '../../component/about_me';

export default function Home() {
  return (
    
    <div>
      <NavBar/>
      <ABOUT_ME/>
    </div>
  )
}
