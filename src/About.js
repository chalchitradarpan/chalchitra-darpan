import React from 'react'
import Grid from '@material-ui/core/Grid';
import styles from './About.module.css'

const About = () => {
	return (
    <div className={styles.root} id="About">
			<h1 className={styles.heading}>
				About
			</h1>
			<Grid container xs={12} className={styles.container}>
				<p className={styles.paragraph}>
					<b><i>Chalchitra Darpan</i></b> (translation: Cinematic Review) is an undergraduate film journal by Celluloid, the Film Society of
					Miranda House, University of Delhi. The inaugural edition (2019-20), Delhi University's only undergraduate film journal, was introduced with the vision of building a
					student community of future film scholars around it. The journal aims to provide an
					academic space for undergraduates interested in film and media, who wish to explore and
					engage in film academia.
				</p>

				<p className={styles.paragraph}>
					{/* A year ago, the entire world came to a standstill that broke us all- financially, mentally,
					physically, and in every other imaginable way. Unsurprisingly, <b><i>Chalchitra Darpan's </i></b>
					publication process was also halted. However, the opening edition’s Editors-in-Chief, Oli
					Chatterjee and Giitanjali made sure to see it through to the end- including the formation of a
					new team, thus ensuring the continuance of the platform for undergraduate research and
					scholarship in cinema. Less than a year after the opening edition on “Urban Spaces”, the
					second edition of <b><i>Chalchitra Darpan</i></b> (2021-22) is officially underway. */}
					Owing to the COVID-19 crisis, the entire world came to a standstill that broke us all- financially,
					mentally, physically, and in every other imaginable way. Unsurprisingly, <b><i>Chalchitra Darpan's </i></b>
					publication process was also halted. However, the opening edition’s Editors-in-Chief, Oli Chatterjee and Giitanjali
					made sure to see it through to the end- including the formation of a new team, thus ensuring the continuation
					of the platform for undergraduate research and scholarship in cinema. A year after the opening edition on
					“Urban Spaces”, the second edition of <b><i>Chalchitra Darpan</i></b> (2021-22) "Sex and Horror", was successfully delivered
					in September 2022.
				</p>
			</Grid>
    </div>
  )
}

export default About