'use client'

import {useEffect, useState} from 'react'
import {PrismicRichText} from '@prismicio/react'
import Image from 'next/image'
import {createClient} from '../../../prismicio'

import styles from './projects.module.css'

/**
 * @typedef {import('@prismicio/client').Content.ProjectsSlice} ProjectsSlice
 * @typedef {import('@prismicio/react').SliceComponentProps<ProjectsSlice>} ProjectsProps
 * @param {ProjectsProps}
 */
const Projects = ({slice}) => {
  const [projects, setProjects] = useState([{
    data: {
      loading: true,
      illustration: {
        url: '',
        alt: ''
      },
      city: '',
      date: '',
      description: ''
    }
  }])
  useEffect(() => {
    ;(async () => {
      const client = createClient()
      setProjects(await client.getAllByIDs(slice.items.map((item) => item.project.id)))
    })()
  }, [slice])
  return (
    <section className={styles.container} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className={styles.content}>
        <h2 className={styles.title}>{slice.primary.title}</h2>
        <div className={styles.scroll}></div>
      </div>
      <div className={styles.overflow}>
        <div className={styles.projects}>
          {projects.map((project, index) => {
            return (<div className={styles.projectCard} key={'project-card__' + index}>
              <Image src={project.data.illustration.url} alt={project.data.illustration.alt || ''} width="272" height="160" aria-hidden={true}/>
              <h4>{project.data.title}</h4>
              <div className={styles.info}>
                <div className={styles.location}>{project.data.city}</div>
                <div className={styles.date}>{project.data.date}</div>
              </div>
              <PrismicRichText
                field={project.data.description}
                components={{
                  paragraph: ({children}) => <p className={styles.paragraph}>{children}</p>,
                }}
              />
            </div>)
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
