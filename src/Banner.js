import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './Banner.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

const Navbar = () => {
	const classes = useStyles();

  return (
    <div className={classes.root}>
			<Grid container xs={12} className={styles.banner}>
				<Grid container xs={9} className={styles.banner__text}>
					<Grid container xs={12}>
						<Grid item xs={12} className={styles.banner__title}>
							CHALCHITRA DARPAN
						</Grid>
						<Grid item xs={12} className={styles.banner__subtext}>
							The Undergraduate Film Journal
						</Grid>
						<Grid item xs={3} className={styles.banner__reelgrid}>
							<img src="reel.png" alt="reel" className={styles.banner__reel}></img>
						</Grid>
						<Grid item xs={6} className={styles.banner__subtext}>
							<i>Celluloid</i>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={3} className={styles.banner__spotlightGrid}>
					<img src="spotlight.png" alt="a spotlight" className={styles.banner__spotlight}></img>
				</Grid>
			</Grid>
    </div>
  )
}

export default Navbar
