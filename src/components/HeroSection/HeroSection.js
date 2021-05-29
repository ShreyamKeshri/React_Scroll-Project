import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import {
    HeroContainer, 
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroBtnWrapper,
    ArrowForward,
    HeroP,
    ArrowRight} from './HeroSectionElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign Up for a new account today and
                    recieve $50 credit towards your 
                    next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to = 'sign-up' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
