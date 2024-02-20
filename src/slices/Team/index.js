'use client'

import styles from './team.module.css'
import Image from "next/image";
import { useMemo } from "react";

/**
 * @typedef {import("@prismicio/client").Content.TeamSlice} TeamSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeamSlice>} TeamProps
 * @param {TeamProps}
 */
const Team = ({slice}) => {
  return (
    <section className={styles.container} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className={styles.content}>
        <h2 className={styles.title}>{slice.primary.title}</h2>
        <div className={styles.members}>
          {slice.items.map((item, index) => {
              return (
                <div key={item.key} className={styles.member} data-index={index}>
                  <Image className={styles.picture} src={item.picture.url} alt={item.picture.alt || ''} aria-hidden={true} width="140" height="140"/>
                  <div className={styles.info}>
                    <h4 className={styles.name}>{item.name}</h4>
                    <h5 className={styles.jobTitle}>{item.job_title}</h5>
                    {item.presentation && <p className={styles.presentation}>{item.presentation}</p>}
                    <div className={styles.contactInfo}>
                      {item.phone_number && <div className={styles.contactPhone}><a href={`tel:+33${item.phone_number.substring(1).replaceAll(' ', '')}`}>{item.phone_number}</a></div>}
                      <div className={styles.contactEmail}><a href={"mailto:" + item.email}>{item.email}</a></div>
                    </div>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
