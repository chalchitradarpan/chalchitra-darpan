import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <nav className={styles.navbar}>
        <img src="2.png" className={styles.navbar__logo} alt="Chalchitra Darpan"></img>
      <div
        className={styles.navbar__menu}
        onClick={handleClick}
      >
        <IconButton edge="start" color="secondary" aria-label="menu">
          {click ? (
            <CloseRoundedIcon style={{ fontSize: 50 }} />
          ) : (
            <MenuRoundedIcon style={{ fontSize: 50 }} />
          )}
        </IconButton>
      </div>
      <section
        className={`${styles.navbar__buttonbar} ${click ? styles.active : ''} `}
      >
        <ul>
					<Link to="/servicelist" className={styles.navbar__buttonLink}>
						<li className={styles.navbar__button}>
							About
						</li>
					</Link>
          <Link to="/servicetable" className={styles.navbar__buttonLink}>
						<li className={styles.navbar__button}>
             Editorial Board
            </li>
					</Link>
					<Link to="/servicetable" className={styles.navbar__buttonLink}>
						<li className={styles.navbar__button}>
             Archives
            </li>
					</Link>
          <Link to="/servicetable" className={styles.navbar__buttonLink}>
						<li className={styles.navbar__button}>
             Call For Papers<br/> 21-22
            </li>
					</Link>
					<Link to="/servicetable" className={styles.navbar__buttonLink}>
						<li className={styles.navbar__button}>
             Contact Us
            </li>
					</Link>
        </ul>
      </section>
    </nav>
  )
}

export default Navbar
