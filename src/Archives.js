import React from 'react'
import Grid from '@material-ui/core/Grid';
import styles from './Archives.module.css'

const Archives = () => {
	return (
    <React.Fragment>
			<div className={styles.root}>
				<h1>
					Archives
				</h1>
				<Grid container xs={12} className={styles.container}>
					<Grid item xs={12} sm={12} md={6} xl={4} className={styles.cover}>
						<span className={styles.image__block} >
							<img className={styles.image} src="edition19-20.png" alt="First edition" onClick={() => {
								window.open('chalchitra-darpan-19-20.pdf')
							}}>
							</img>
						</span>
						<span className={styles.name}>
							First Edition (2019-20)
						</span>
					</Grid>
					<Grid item xs={12} sm={12} md={6} xl={4} className={styles.cover}>
						<span className={styles.image__block} >
							<img className={styles.image} src="edition21-22.png" alt="Second edition" onClick={() => {
								window.open('Chalchitra Darpan(21-22)- Sex & Horror.pdf')
							}}>
							</img>
						</span>
						<span className={styles.name}>
							Second Edition (2021-22)
						</span>
					</Grid>
                    <Grid item xs={12} sm={12} md={6} xl={4} className={styles.cover}>
						<span className={styles.image__block} >
							<img className={styles.image} src="edition22-23.png" alt="Third edition" onClick={() => {
								window.open('Chalchitra Darpan(22-23)- Cinema in Crisis.pdf')
							}}>
							</img>
						</span>
						<span className={styles.name}>
							Third Edition (2022-23)
						</span>
					</Grid>
				</Grid>
			</div>
		</React.Fragment>
  )
}

export default Archives
