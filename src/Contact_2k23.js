import React from 'react'
import Grid from '@material-ui/core/Grid';
import styles from './Contact.module.css'
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import BookIcon from '@material-ui/icons/Book';
import CopyrightIcon from '@material-ui/icons/Copyright';
import IconButton from '@material-ui/core/IconButton';

const About2k23 = () => {
	return (
    <div className={styles.root} id="contactus">
			<Grid container xs={12} className={styles.container}>
				<Grid item xs={12} className={styles.logobar}>
					<img className={styles.logo} src="1.png" alt="logo"></img>
					<img className={styles.logo} src="celluloid.png" alt="logo"></img>
				</Grid>
				<Grid item xs={12} className={styles.footer__block}>
					<span>
						<CopyrightIcon style={{ fontSize: 20 }}/> 2021 Chalchitra Darpan
					</span>
				</Grid>
				<Grid item xs={12} xl={6} className={styles.footer__block}>
					<span className={styles.name}>
						Akshika Goel, Chief Editor
					</span>
					<span className={styles.mail}>
						<MailIcon fontSize="40"/>
						<a className={styles.mailLink} href="mailto:chalchitradarpan@gmail.com">
							chalchitradarpan@gmail.com
						</a>
					</span>
					<span>
						+91-9971407914
					</span>
				</Grid>
				<Grid item xs={12} xl={6} className={styles.footer__block}>
					<span className={styles.name}>
						Anushka Joshi, Chief Editor
					</span>
					<span className={styles.mail}>
						<MailIcon fontSize="40"/>
						<a className={styles.mailLink} href="mailto:anushkajoshi2001@gmail.com">
							anushkajoshi2001@gmail.com
						</a>
					</span>
					<span>
					+91-9871063725
					</span>
				</Grid>
				<Grid item xs={12} md={12} xl={12} className={styles.footer__block}>
					<span>
						Find our society, Celluloid on social media:
					</span>
					<span>
						<IconButton color="primary" disableFocusRipple onClick={() => {
							window.open('https://in.linkedin.com/company/celluloid-the-film-club-of-miranda-house')
						}}>
							<LinkedInIcon style={{ fontSize: 50, color: '#000000' }} />
						</IconButton>
						<IconButton color="primary" disableFocusRipple onClick={() => {
							window.open('https://instagram.com/celluloid.mhfilmclub')
						}}>
							<InstagramIcon style={{ fontSize: 50, color: '#000000' }}/>
						</IconButton>
						<IconButton color="primary" disableFocusRipple onClick={() => {
							window.open('https://celluloidblogsite.wordpress.com')
						}}>
							<BookIcon style={{ fontSize: 50, color: '#000000' }}/>
						</IconButton>
					</span>
				</Grid>
			</Grid>
    </div>
  )
}

export default About2k23