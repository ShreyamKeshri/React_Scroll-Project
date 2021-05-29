import React, {useState} from 'react'
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Info from '../components/InfoSection/Info';
import Navbar from '../components/Navbar/Navbar'
import Services from '../components/Services/Services';
import Sidebar from '../components/Sidebar/Sidebar'


const HomePage = () => {

    const [isOpen , setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
            <HeroSection></HeroSection>
            <Info {...homeObjOne}/>
            <Info {...homeObjTwo}/>
            <Services />
            <Info {...homeObjThree}/>
            <Footer/>
        </>
    )
}

export default HomePage
