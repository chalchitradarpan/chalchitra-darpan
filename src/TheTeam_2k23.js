import React from 'react'
import styles from './TheTeam.module.css'
import Grid from '@material-ui/core/Grid';

const TheTeam2k23 = () => {
	return (
    <div className={styles.root} id="theteam">
			<h1 className={styles.heading}>
				Editorial Board
			</h1>
			<Grid container xs={12} className={styles.container} spacing={8}>
				<Grid item xs={12} md={6} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="akshika_goel.jpeg" alt="Akshika Goel"></img>
					</span>
					<span className={styles.name}>
						Akshika Goel
					</span>
					<span className={styles.position}>
						(Editor-in-Chief)
					</span>
				</Grid>
				<Grid item xs={12} md={6} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="anushka_joshi.jpg" alt="Anushka Joshi"></img>
					</span>
					<span className={styles.name}>
						Anushka Joshi
					</span>
					<span className={styles.position}>
						(Editor-in-Chief)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="adrijaa_chakraborty.jpeg" alt="Adrijaa Chakraborty"></img>
					</span>
					<span className={styles.name}>
						Adrijaa Chakraborty
					</span>
					<span className={styles.position}>
						(Editor)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="isha_kazmi.jpeg" alt="Isha Kazmi"></img>
					</span>
					<span className={styles.name}>
						Isha Kazmi
					</span>
					<span className={styles.position}>
						(Editor)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="shagun_das.jpeg" alt="Shagun Das"></img>
					</span>
					<span className={styles.name}>
						Shagun Das
					</span>
					<span className={styles.position}>
						(Editor)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="alekhya_singh.jpeg" alt="Alekhya Singh"></img>
					</span>
					<span className={styles.name}>
						Alekhya Singh
					</span>
					<span className={styles.position}>
						(Editor)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="karizma_ahmed.jpeg" alt="Karizma Ahmed"></img>
					</span>
					<span className={styles.name}>
						Karizma Ahmed
					</span>
					<span className={styles.position}>
						(Editor)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="anjali.jpg" alt="Anjali"></img>
					</span>
					<span className={styles.name}>
						Anjali
					</span>
					<span className={styles.position}>
						(Journal Designer)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="asra_malik.jpeg" alt="Asra Malik"></img>
					</span>
					<span className={styles.name}>
						Asra Malik
					</span>
					<span className={styles.position}>
						(Journal Designer)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="amrit.jpeg" alt="Amrit"></img>
					</span>
					<span className={styles.name}>
						Amrit
					</span>
					<span className={styles.position}>
						(Illustrator)
					</span>
				</Grid>
			</Grid>
    </div>
  )
}

export default TheTeam2k23