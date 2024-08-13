import React from 'react'
import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard'
import freshBurger from '../../assets/fresh-burger.png'
import hipster from '../../assets/hipsster.png'
import fitlift from '../../assets/fitlift.png'
function Projects(){
  return (
    <section id='projects' className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          src={viberr}
          link = "https://github.com/Ade-mir/company-landing-page-2"
          h3='Viberr'
          p="Streamming App"
        />
        <ProjectCard
          src={freshBurger}
          link = "https://github.com/Ade-mir/company-landing-page-2"
          h3='Fresh Burger'
          p="Hamburger Restaurant"
        />
        <ProjectCard
          src={hipster}
          link = "https://github.com/Ade-mir/company-landing-page-2"
          h3='Hipsster'
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitlift}
          link = "https://github.com/Ade-mir/company-landing-page-2"
          h3='Fitlift'
          p="Fitness App"
        />
      </div>
    </section>
  )
}

export default Projects