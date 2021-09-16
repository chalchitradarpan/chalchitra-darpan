import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import styles from './Archives.module.css'

const Archives = () => {
	useEffect(() => {
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	},[])

	return (
    <React.Fragment>
			<div className={styles.root}>
				<h1>
					Archives
				</h1>
				<Grid container xs={12} className={styles.container}>
					<Grid item xs={12} md={6} xl={4} className={styles.cover}>
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
				</Grid>
			</div>
		</React.Fragment>
  )
}

export default Archives
