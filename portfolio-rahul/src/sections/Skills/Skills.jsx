import styles from './SkillsStyles.module.css'
import SkillsList from '../../common/SkillsList';
import { useEffect } from 'react';
import { animateWithGsap } from '../../utils/animation';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import webSkills, {frameWorkSkills,extraSkills} from '../../common/SkillsArr';
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import { useTheme } from '../../common/ThemeContext';


gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const { theme, toggleTheme} = useTheme();
  const checkMarkIcon = theme === 'light'? checkMarkIconLight:checkMarkIconDark;
    
    useEffect(() => {
      animateWithGsap(document.getElementById('skills'),{y:0,opacity:1,duration:2})
    }, []);
  
  return (
    <section id = 'skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills.</h1>
      <div className={styles.skillList}>
        {
          webSkills.map(({title}) => {
            return(
            <SkillsList src = {checkMarkIcon} skill = {title}/>
          )
          })
          
        }
        
        
        

      </div>
      <hr/>
      <div className={styles.skillList}>
        {
          frameWorkSkills.map(({title}) => {
            return(
            <SkillsList src = {checkMarkIcon} skill = {title}/>
          )
          })
          
        }

      </div>
      <hr/>
      <div className={styles.skillList}>
        {
          extraSkills.map(({title}) => {
            return(
            <SkillsList src = {checkMarkIcon} skill = {title}/>
          )
          })
          
        }

      </div>
      <hr/>
    </section>
  )
}

export default Skills
