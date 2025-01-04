import React from 'react'
import styles from './TheTeam.module.css'
import Grid from '@material-ui/core/Grid';

const TheTeam2k24 = () => {
	return (
    <div className={styles.root} id="theteam">
			<h1 className={styles.heading}>
				Editorial Board
			</h1>
			<Grid container xs={12} className={styles.container} spacing={8}>
				<Grid item xs={12} md={6} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="sahaanaramesh.jpg" alt="Sahaana"></img>
					</span>
					<span className={styles.name}>
						Sahaana
					</span>
					<span className={styles.position}>
						(Editor-in-Chief)
					</span>
				</Grid>
				<Grid item xs={12} md={6} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="deevyadeo.jpg" alt="Deevya"></img>
					</span>
					<span className={styles.name}>
						Deevya
					</span>
					<span className={styles.position}>
						(Editor-in-Chief)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="aarushi.jpg" alt="Aarushi"></img>
					</span>
					<span className={styles.name}>
						Aarushi
					</span>
					<span className={styles.position}>
						(Editor)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="prernasrirajsi.jpg" alt="Prerna"></img>
					</span>
					<span className={styles.name}>
						Prerna
					</span>
					<span className={styles.position}>
						(Editor)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="rohasidhu.jpg" alt="Roha"></img>
					</span>
					<span className={styles.name}>
						Roha
					</span>
					<span className={styles.position}>
						(Editor)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="isha.jpg" alt="Isha"></img>
					</span>
					<span className={styles.name}>
						Isha
					</span>
					<span className={styles.position}>
						(Editor)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="aiyesha.jpg" alt="Aiyesha"></img>
					</span>
					<span className={styles.name}>
						Aiyesha
					</span>
					<span className={styles.position}>
						(Editor)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="diyadeepu.jpg" alt="Diya"></img>
					</span>
					<span className={styles.name}>
						Diya
					</span>
					<span className={styles.position}>
						(Journal Designer)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="devananda.jpg" alt="Devananda"></img>
					</span>
					<span className={styles.name}>
						Devananda
					</span>
					<span className={styles.position}>
						(Illustrator)
					</span>
				</Grid>
			</Grid>
    </div>
  )
}

export default TheTeam2k24