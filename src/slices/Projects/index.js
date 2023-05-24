'use client'

import {useEffect, useRef, useState} from 'react'
import {PrismicRichText} from '@prismicio/react'
import Image from 'next/image'
import {createClient} from '../../../prismicio'

import styles from './projects.module.css'

const PreviousIcon = ({enabled}) => {
  return (<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#245F8D" fillOpacity={enabled ? '0.15' : '0.05'}/>
    <g clipPath="url(#arrow)">
      <path d="M27.4099 19.41L22.8299 24L27.4099 28.59L25.9999 30L19.9999 24L25.9999 18L27.4099 19.41Z" fill="#245F8D"
            fillOpacity={enabled ? '1' : '0.33'}/>
    </g>
    <defs>
      <clipPath id="arrow">
        <rect width="24" height="24" fill="white" transform="translate(36 12) rotate(90)"/>
      </clipPath>
    </defs>
  </svg>)
}

const NextIcon = ({enabled}) => {
  return (<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#245F8D" fillOpacity={enabled ? '0.15' : '0.05'}/>
    <g clipPath="url(#arrow)">
      <path d="M20.5901 28.59L25.1701 24L20.5901 19.41L22.0001 18L28.0001 24L22.0001 30L20.5901 28.59Z" fill="#245F8D"
            fillOpacity={enabled ? '1' : '0.33'}/>
    </g>
    <defs>
      <clipPath id="arrow">
        <rect width="24" height="24" fill="white" transform="translate(12 36) rotate(-90)"/>
      </clipPath>
    </defs>
  </svg>)
}
/**
 * @typedef {import('@prismicio/client').Content.ProjectsSlice} ProjectsSlice
 * @typedef {import('@prismicio/react').SliceComponentProps<ProjectsSlice>} ProjectsProps
 * @param {ProjectsProps}
 */
const Projects = ({slice}) => {
  const [projects, setProjects] = useState([])
  const [previousEnabled, setPreviousEnabled] = useState(false)
  const [nextEnabled, setNextEnabled] = useState(true)
  const projectsRef = useRef()
  const lastProjectRef = useRef()
  useEffect(() => {
    ;(async () => {
      const client = createClient()
      setProjects(await client.getAllByIDs(slice.items.map((item) => item.project.id)))
    })()
  }, [slice])
  return (
    <section className={styles.container} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className={styles.header}>
        <h2 className={styles.title}>{slice.primary.title}</h2>
        <div className={styles.nav}>
          <a onClick={() => {
            projectsRef.current.scrollLeft -= 160
            const {right} = lastProjectRef.current.getBoundingClientRect()
            const containerRect = projectsRef.current.getBoundingClientRect()
            const x = containerRect.x > 0 ? containerRect : 0
            setNextEnabled((containerRect.width + x) < right)
            setPreviousEnabled(projectsRef.current.scrollLeft > 0)
          }}><PreviousIcon enabled={previousEnabled}/></a>
          <a onClick={() => {
            projectsRef.current.scrollLeft += 160
            const {right} = lastProjectRef.current.getBoundingClientRect()
            const containerRect = projectsRef.current.getBoundingClientRect()
            const x = containerRect.x > 0 ? containerRect : 0
            setNextEnabled((containerRect.width + x) < right)
            setPreviousEnabled(projectsRef.current.scrollLeft > 0)
          }}><NextIcon enabled={nextEnabled}/> </a>
        </div>
      </div>
      <div className={styles.overflow} ref={projectsRef}>
        <div className={styles.projects}>
          {projects.map((project, index) => {
            return (<div className={styles.projectCard} key={'project-card__' + index} ref={lastProjectRef}>
              <div className={styles.illustration}>
                <Image src={project.data.illustration.url} alt={project.data.illustration.alt || ''} width="272" height="160" aria-hidden={true}/>
                <div className={styles.label}>{project.data.type}</div>
              </div>
              <h4 className={styles.projectTitle}>{project.data.title}</h4>
              <div className={styles.projectInfo}>
                <div className={styles.location}>{project.data.city}</div>
                <div className={styles.date}>{project.data.date}</div>
              </div>
              <div className={styles.description}>
                <PrismicRichText
                  field={project.data.description}
                  components={{
                    paragraph: ({children}) => <p className={styles.paragraph}>{children}</p>,
                  }}
                />
              </div>
            </div>)
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
