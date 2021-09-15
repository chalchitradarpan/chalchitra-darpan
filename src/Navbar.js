import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <a className={styles.home} href="/chalchitra-darpan">
        <img src="2.png" alt="Chalchitra Darpan" className={styles.navbar__logo} ></img> 
      </a> 
      <div
        className={styles.navbar__menu}
        onClick={() => setOpen(!open)}
      >
        <IconButton edge="start" color="secondary" aria-label="menu">
          {open ? (
            <CloseRoundedIcon style={{ fontSize: 50 }} />
          ) : (
            <MenuRoundedIcon style={{ fontSize: 50 }} />
          )}
        </IconButton>
      </div>
      <section
        className={`${styles.navbar__buttonbar} ${open ? styles.active : ''} `}
      >
        <ul>
					<a href="/chalchitra-darpan#About" className={styles.navbar__buttonLink} onClick={() => setOpen(false)}>
						<li className={styles.navbar__button}>
							About
						</li>
					</a>
          <a href="/chalchitra-darpan#theteam" className={styles.navbar__buttonLink} onClick={() => setOpen(false)}>
						<li className={styles.navbar__button}>
             Editorial Board
            </li>
					</a>
					<Link to="/chalchitra-darpan/archives" className={styles.navbar__buttonLink} onClick={() => setOpen(false)}>
						<li className={styles.navbar__button}>
             Archives
            </li>
					</Link>
          <Link to="/chalchitra-darpan/callforpapers" className={styles.navbar__buttonLink} onClick={() => setOpen(false)}>
						<li className={styles.navbar__button}>
             Call For Papers<br/> 21-22
            </li>
					</Link>
					<a href="/chalchitra-darpan#contactus" className={styles.navbar__buttonLink} onClick={() => setOpen(false)}>
						<li className={styles.navbar__button}>
             Contact Us
            </li>
					</a>
        </ul>
      </section>
    </nav>
  )
}

export default Navbar
