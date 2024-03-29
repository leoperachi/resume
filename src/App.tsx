import { FaUserPen } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdWorkHistory } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { motion } from 'framer-motion';
import { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { BsMailboxFlag } from "react-icons/bs";
import { TiPhoneOutline } from "react-icons/ti";
import { MdAlternateEmail } from "react-icons/md";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
export default function App() {
  const [showPanel, setShowPanel] = useState(1);

  const submenuVariants = {
    open: {
      opacity: 1,
      x: 0,
      scroll: false,
    },
    closed: {
      opacity: 0,
      x: -300,
      scroll: false
    },
  }

  function clickBtnSideBar(e: any): void {
    var length = e.target.id.toString().length;
    var id = '';

    if(length > 0){
      id = e.target.id;
    }
    else{
      length = e.target.parentNode.id.length;
      if(length > 0){
        id = e.target.parentNode.id;
      }
      else{
        id = e.target.parentNode.parentNode.id;
      }

      switch (id){
        case 'btnPersonal':
          console.log(id);
          setShowPanel(1);
          break;
        case 'btnEducation':
          console.log(id);
          setShowPanel(2);
          break;
        case 'btnLocation':
          console.log(id);
          setShowPanel(3);
          break;
        case 'btnProfXp':
          console.log(id);
          setShowPanel(4);
          break;
      }
    }
  }


  return (
    <div className="flex h-screen justify-center items-center" style={{ backgroundImage: 'url("./resume_bg-image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'  }}>
      <div className="home-tab-nav" style={{height: '86vh', width: '53px', backgroundColor: 'rgb(31 31 31)' }}>
        <button id='btnPersonal' className='btnIcon' 
          onClick={clickBtnSideBar}><FaUserPen className='iconButton' />
        </button>
        <button id='btnEducation' className='btnIcon' 
          onClick={clickBtnSideBar}><PiStudentFill className='iconButton'/>
        </button>
        <button id='btnLocation' className='btnIcon' 
          onClick={clickBtnSideBar}><IoLocationSharp className='iconButton'/>
        </button>
        <button id='btnProfXp' className='btnIcon'
          onClick={clickBtnSideBar}><MdWorkHistory className='iconButton'/>
        </button>
      </div>
      <div className="displayNone md:flex" style={{height: '90vh', width: '400px', backgroundImage: 'url("./leo-prof.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>

      </div>
      <div>
        <motion.div className="w-fit" hidden={showPanel !== 1} variants={submenuVariants} animate={showPanel === 1 ? 'open' : 'closed'}>
          <div className="wFull md:w-full" style={{height: '86vh', backgroundColor: 'rgb(31 31 31)', color: '#fff', display: 'flex' }}>
            <div className="content-center" style={{marginTop: '3px', marginBottom: '2px'}}>
              <div className="p-5 justify-center items-center" style={{backgroundColor: '#1f1f1f'}}>
                <div className="flex justify-center items-center">
                  <img src="./leo-prof.jpg" alt="teste" className="imgSm" style={{height: '40vh', width: '250px', backgroundImage: 'url("./leo-prof.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius:'15px', marginBottom: '15px' }}></img>
                </div>
                <div className="flex"><VscAccount size={25} style={{marginTop: '18px'}}/><h1 className="p-3 text-md lg:text-2xl">Leonardo A. Perachi</h1></div>
                <div className="flex"><BsMailboxFlag style={{marginTop: '18px'}}/><p className="p-3 text-md lg:text-lg">Rua Burum 94 - Bairro: Vila Assunção</p></div>
                <div className="flex"><BsMailboxFlag style={{marginTop: '18px'}}/><p className="p-3 text-md lg:text-lg">Porto Alegre - Brazil CEP: 91900-170</p></div>
                <div className="flex"><TiPhoneOutline style={{marginTop: '18px'}}/><a href="https://wa.me/5551996974708" className="p-3 text-md lg:text-lg">+55 51 996974708</a></div>
                <div className="flex"><MdAlternateEmail style={{marginTop: '18px'}}/><a href="mailto:leoperachi@gmail.com" className="p-3 text-md lg:text-lg">leoperachi@gmail.com</a></div>
                <div className="flex"><SiLinkedin style={{marginTop: '18px'}}/><a href="https://linkedin.com/in/leonardoperachi" className="p-3 text-md lg:text-lg">www.linkedin.com/in/leonardoperachi</a></div>
                <div className="flex"><FaGithub style={{marginTop: '18px'}}/><a href="https://github.com/leoperachi" className="p-3 text-md lg:text-lg">https://github.com/leoperachi</a></div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className="w-fit" hidden={showPanel !== 2} variants={submenuVariants} animate={showPanel === 2 ? 'open' : 'closed'}>
          <div className="wFull md:w-96" style={{height: '86vh', backgroundColor: 'rgb(31 31 31)', color: '#fff', display: 'flex' }}>
            <div className="content-center overflow-auto" style={{marginTop: '3px', marginBottom: '2px'}}>
              <div className="p-5" style={{backgroundColor: '#1f1f1f'}}>
                <div className="flex flex-wrap">
                  <div className="flex-none w-64 mr-5">
                    <img src="/puc.jpg" alt={"leo"} width={100} height={100} style={{borderRadius:'75px'}}></img>
                    <h2 className="text-xl">Bachelors Computer Science</h2>
                    <p>Pontifícia Universidade Católica do Rio Grande do Sul</p>
                    <p>2006-2011</p>
                    <h2 className="text-xl">Developing Apps with Android</h2>
                    <p>2014</p>
                  </div>
                  <div className="flex-initial w-64  mr-5">
                    <img src="/senac.png" alt={"leo"} width={100} height={100} style={{borderRadius:'25px'}}></img>
                    <h2 className="text-xl">Assembly and Maintenance of Computers</h2>
                    <p>SENACRS</p>
                    <p>05/2008</p>
                  </div>
                  <div className="flex-initial w-64">
                    <img src="/ih.png" alt={"leo"} width={150} height={150} style={{borderRadius:'25px', marginBottom: 40}}></img>
                    <h2 className="text-xl">Advanced English Commnication</h2>
                    <p>International House Sydney</p>
                    <p>08/2008</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div hidden={showPanel !== 3} variants={submenuVariants} animate={showPanel === 3 ? 'open' : 'closed'}>
          <div className="wFull md:w-full" style={{height: '86vh', backgroundColor: '#232323' }}>
            <div className="content-center overflow-auto" style={{backgroundColor: '#181818', marginTop: '3px', marginBottom: '2px'}}>
              3
            </div>
          </div>
        </motion.div>
        <motion.div hidden={showPanel !== 4} variants={submenuVariants} animate={showPanel === 4 ? 'open' : 'closed'}>
          <div className="wFull md:w-full" style={{height: '86vh', backgroundColor: '#232323', color: '#fff', display: 'flex' }}>
            <div className="content-center" style={{marginTop: '3px', marginBottom: '2px'}}>
              <div className="p-3" style={{backgroundColor: '#232323'}}>
                <h2 className="text-xl flex"><FaComputer style={{marginTop:'5px', marginRight: '5px'}} />NT Consult</h2>
                <p>08/2014 - 05/2015</p>
                <p>Developer & Analist</p>
                <p>Government system designed to manage purchases made by the state</p>
                <p>government of Rio Grande do Sul.</p>
                <p>Asp.net MVC / JQuery / rest api / entity framework / SQL Server</p>
                <br></br>
                <h2 className="text-xl flex"><FaComputer style={{marginTop:'5px', marginRight: '5px'}} />Compuletra</h2>
                <p>10/2013 - 04/2014</p>
                <p>Developer</p>
                <p>Developing both backend and frontend vehicle inspection system. Government</p>
                <p>system with Asp.net (classic), windows forms, rest apis, Entity Framework and SQL Server.</p>
                <br></br>
                <h2 className="text-xl flex"><FaComputer style={{marginTop:'5px', marginRight: '5px'}} />Invest Insurance</h2>
                <p>11/2012 - 10/2013</p>
                <p>Developer & Analist</p>
                <p>Development and analysis focused for the insurance area. Using</p>
                <p>.net framework 4.5: Asp.net MVC, Entity Framework, Knockout, crystal reports. SQL Server for database.</p>
                <br></br>
                <h2 className="text-xl flex"><FaComputer style={{marginTop:'5px', marginRight: '5px'}} />Célebre Informática</h2>
                <p>08/2010 - 08/2012</p>
                <p>Developer</p>
                <p>Development of platform-based systems with .net 4. Using asp.net (classic),</p>
                <p>crystal reports, javascript, api rest. Database: oracle, sql server. Truck fleet management system</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}