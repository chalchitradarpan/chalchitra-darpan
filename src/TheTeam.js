import React from 'react'
import styles from './TheTeam.module.css'
import Grid from '@material-ui/core/Grid';

const TheTeam = () => {
	return (
    <div className={styles.root} id="theteam">
			<h1 className={styles.heading}>
				Editorial Board
			</h1>
			<Grid container xs={12} className={styles.container} spacing={8}>
				<Grid item xs={12} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="faaria_hilaly.jpeg" alt="Faaria Hilaly"></img>
					</span>
					<span className={styles.name}>
						Faaria Hilaly
					</span>
					<span className={styles.position}>
						(Editor-in-Chief)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="akshika.jpeg" alt="Akshika Goel"></img>
					</span>
					<span className={styles.name}>
						Akshika Goel
						</span>
					<span className={styles.position}>
						(Editor)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="anushka.jpeg" alt="Anushka"></img>
					</span>
					<span className={styles.name}>
						Anushka</span>
					<span className={styles.position}>
						(Editor)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="aryama.jpeg" alt="Aryama Ghosh"></img>
					</span>
					<span className={styles.name}>
						Aryama Ghosh</span>
					<span className={styles.position}>
						(Editor)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="asra.jpeg" alt="Asra Malik"></img>
					</span>
					<span className={styles.name}>
						Asra Malik</span>
					<span className={styles.position}>
						(Editor/Journal Designer)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="sejal.jpeg" alt="Sejal Maheshwari"></img>
					</span>
					<span className={styles.name}>
						Sejal Maheshwari
					</span>
					<span className={styles.position}>
						(Journal Designer)
					</span>
				</Grid>
				<Grid item xs={12} md={6} lg={4} className={styles.person}>
					<span className={styles.image__block} >
						<img className={styles.image} src="kizhakoot.jpeg" alt="Kizhakoot Gopika Babu"></img>
					</span>
					<span className={styles.name}>
						Kizhakoot Gopika Babu
					</span>
					<span className={styles.position}>
						(Illustrator)
					</span>
				</Grid>

			</Grid>
    </div>
  )
}

export default TheTeam