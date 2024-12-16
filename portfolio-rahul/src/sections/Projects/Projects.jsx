import React from 'react'
import styles from './ProjectStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import ProjectList from '../../common/ProjectList';



function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className='sectionTitle'>Projects.</h1>
      <>
      <div className={styles.projectsContainer}>
        {/* <ProjectCard src={viber} link={'https://youtube.com'} h3={'Viberr'} p={'A Streaming App.'}/>
        <ProjectCard src={hipsster} link={'https://youtube.com'} h3={'Viberr'} p={'A Streaming App.'}/>
        <ProjectCard src={viber} link={'https://youtube.com'} h3={'Viberr'} p={'A Streaming App.'}/>
        <ProjectCard src={viber} link={'https://youtube.com'} h3={'Viberr'} p={'A Streaming App.'}/> */}
        {
          ProjectList.map(({src,link,h3,p}) => {
            return(
              <ProjectCard src={src} link={link} h3={h3} p={p} key = {src}/>
            )
          })
        }
        
      </div>
      </>
    </section>
  )
}

export default Projects
