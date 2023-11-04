import React from "react";
import { Image } from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";

export default function ABOUT_ME() {
  return (
    <div className="m-5 p-2 flex flex-col justify-center">
        <Image
          isBlurred
          width={300}
          src="https://i.pinimg.com/564x/e3/73/c9/e373c99f3c4b1897f70f51983a14ce8e.jpg"
          alt="Adisorn Picture"
          className="m-5 p-2 rounded-sm justify-center"
        />


        <div id="about_me" className="m-5 p-2">
            <h1 className="text-xl text-bold">About Me</h1>
            <h2>
                Name: Adisorn Parama <br />
                Birth: 06 AUG. 2004's
            </h2>
        </div>




        <div id="contact" className="m-5 p-2">
            <h1 className="text-xl text-bold">CONTACTS</h1>
            <div>
                Tel: 0908936684 <br />
                Line: 0908936684 <br />
                Email: adisorn.safe01@gmail.com <br />
                Facebook: Adisorn Parama <br />
                Instragram: p._.adisorn
            </div>
        </div>




        <div id="skills" className="m-5 p-2">
            <h1 className="text-xl text-bold">Skills</h1>
            <p>
                Compettitive Programming <br />
                Game Developer <br />
                Robotic <br />
                UX/UI designer (beginner) <br />
            </p>
        </div>


        <div id="project" className="m-5 p-2">
            <h1 className="text-xl text-bold">Project</h1>
            <div className="flex flex-wrap gap-4 items-center m-5 p-2">
                <Button color="default" >
                    <a href="https://github.com/DarkTouiZ/Game-Aided-for-Learning-Celestial-Sphere-VR">2022: Game Development</a>
                </Button>
            </div>
            
        </div>

        <div id="programing_language" className="m-5 p-2"> 
            <h1 className="text-xl text-bold">Programming Languages</h1>
            <p>
                C <br />
                C++ <br />
                C# <br />
                CSS <br />
                HTML <br />
                Python <br />
                Javascript
            </p>
        </div>



        <div id="education" className="m-5 p-2">
            <h1 className="text-xl text-bold">Education</h1>
                2010-2016: Anuban Dongmahawan School <br />
                2016-2022: Princess Chulabhron Science High School Chiangrai <br />
                2023-Now: CPE KMUTT
        </div>
    </div>
  );
}
