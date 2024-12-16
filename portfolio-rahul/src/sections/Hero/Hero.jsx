import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterIconLight from '../../assets/twitter-light.svg'
import twitterIconDark from '../../assets/twitter-dark.svg'
import githubIconLight from '../../assets/github-light.svg'
import githubIconDark from '../../assets/github-dark.svg'
import linkedinIconLight from '../../assets/linkedin-light.svg'
import linkedinIconDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext';
import { useEffect } from 'react';
import { gsap } from 'gsap';
function Hero() {
    const { theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light'? sun : moon;
    const twitterIcon = theme === 'light'? twitterIconLight : twitterIconDark;
    const githubIcon = theme === 'light'? githubIconLight : githubIconDark;
    const linkedinIcon = theme === 'light'? linkedinIconLight : linkedinIconDark;
    useEffect(() => {
      gsap.to('#hero', {
        opacity: 1,
        duration: 3,
        ease:'power1.inOut',
        x:0,
      });
      
      
      gsap.from('#hero', {
        x: '-100%',
        duration: 1,
        opacity:0,
      });

      


    }, []);

  return (
    <section id = 'hero' className={styles.container}>
      
      
      
      <div className={`${styles.colorModeContainer} hero`}>
        <img className={styles.hero} src = {heroImg} alt= 'Rambhatla Rahul'/>
        <img className={`${styles.colorMode}`} src = {themeIcon} alt= 'Theme Icon'
        onClick={toggleTheme} id='theme-btn'
        />
      </div>

      <div className={styles.info}>
        <h1>
        Rambhatla
        <br/>
        Rahul
        </h1>

        <h2>Frontend ReactJS Developer.</h2>
        <span>
            <a href='https://x.com/' target='_blank'>
            <img src={twitterIcon} alt='Twitter Icon'/>
            </a>

            <a href='https://github.com/' target='_blank'>
            <img src={githubIcon} alt='Github Icon'/>
            </a>

            <a href='https://linkedin.com/' target='_blank'>
            <img src={linkedinIcon} alt='Linkedin Icon'/>
            </a>
        </span>
        <p className={styles.description}>Creating Fun and Interactive
            <br/>
             modern React web apps
             <br/>
              as projects.
        </p>
        <a href={CV} target='blank_'>
            <button className='hover' download>
                Resume
            </button>

        </a>
      </div>
    
    
    
    
    </section>
  )
}

export default Hero
