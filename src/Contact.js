import React from 'react'
import Grid from '@material-ui/core/Grid';
import styles from './Contact.module.css'
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import BookIcon from '@material-ui/icons/Book';
import CopyrightIcon from '@material-ui/icons/Copyright';
import IconButton from '@material-ui/core/IconButton';

const About = () => {
	return (
    <div className={styles.root} id="contact__us">
			<Grid container xs={12} className={styles.container}>
				<Grid item xs={12} className={styles.logobar}>
					<img className={styles.logo} src="1.png" alt="logo"></img>
					<img className={styles.logo} src="celluloid.png" alt="logo"></img>
				</Grid>
				<Grid item xs={12} md={6} xl={4} className={styles.footer__block}>
					<span>
						<CopyrightIcon style={{ fontSiz: 40 }}/> 2021 Chalchitra Darpan
					</span>
					<span>
						Website designed by Ashray Sinha
					</span>
				</Grid>
				<Grid item xs={12} md={6} xl={4} className={styles.footer__block}>
					<span className={styles.name}>
						Faaria Hilaly, Chief Editor
					</span>
					<span className={styles.mail}>
						<MailIcon fontSize="40"/>
						<a className={styles.mailLink} href="mailto:chalchitradarpan@gmail.com">
							chalchitradarpan@gmail.com
						</a>
					</span>
					<span>
						08753008135
					</span>
				</Grid>
				<Grid item xs={12} md={12} xl={4} className={styles.footer__block}>
					<span>
						Find our society, Celluloid on social media:
					</span>
					<span>
						<IconButton color="primary" disableFocusRipple onClick={() => {
							window.open('https://in.linkedin.com/company/celluloid-the-film-club-of-miranda-house')
						}}>
							<LinkedInIcon style={{ fontSize: 50 }}/>
						</IconButton>
						<IconButton color="primary" disableFocusRipple onClick={() => {
							window.open('https://instagram.com/celluloid.mhfilmclub')
						}}>
							<InstagramIcon style={{ fontSize: 50 }}/>
						</IconButton>
						<IconButton color="primary" disableFocusRipple onClick={() => {
							window.open('https://celluloidblogsite.wordpress.com')
						}}>
							<BookIcon style={{ fontSize: 50 }}/>
						</IconButton>
					</span>
				</Grid>
			</Grid>
    </div>
  )
}

export default About