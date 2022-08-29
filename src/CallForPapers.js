import React from 'react'
import Grid from '@material-ui/core/Grid';
import styles from './CallForPapers.module.css'

const CallForPapers = () => {
	return (
    <React.Fragment>
			<div className={styles.root}>
				<h1>
					Chalchitra Darpan (2021-22)
				</h1>
				{/* <h3 className={styles.chalchitraDarpanTopic}>
					Sex & Horror
				</h3> */}
				<Grid container xs={12} className={styles.container1}>
					<Grid item xs={12} md={6} xl={4} className={styles.cover}>
						<span className={styles.image__block} >
							<img className={styles.image} src="edition21-22.png" alt="Latest edition" onClick={() => {
								window.open('https://drive.google.com/file/d/1DFCZZAJOGJ--66zsoJMnCYr2Q2v4XebS/view')
							}}>
							</img>
						</span>
						<span className={styles.name}>
							Sex & Horror
						</span>
					</Grid>
				</Grid>
			</div>
			{/* <Grid container xs={12} className={styles.imageBlock}>
				<Grid item xs={4}>
					<img src="papers_1.png" alt="call for papers 1st" className={styles.image}></img>
				</Grid>
				<Grid item xs={4}>
					<img src="papers_2.png" alt="call for papers 2nd" className={styles.image}></img>
				</Grid>
				<Grid item xs={4}>
					<img src="papers_3.png" alt="call for papers 3rd" className={styles.image}></img>
				</Grid>	
			</Grid>
			<div className={styles.root}>
				<h2>
					Theme: Sex & Horror
				</h2>
				<Grid container xs={12} className={`${styles.container} ${styles.column}`}>
					<p className={styles.paragraph}>
						The employment of human sexuality and gendered human subjectivity have been
						irrefutable tools for horror cinema, since the inception of the genre. Much of horror
						cinema, about human monsters or non-human ones <i>(the other)</i>, about vengeful spirits
						from the past or demonic possession in the present, breeds on irrationality, which in
						psychoanalytic terms, is always sexual in origin and nature. The concept of sexual
						awakening- from the carnal kind (vampirism and cannibalism) which we first saw in
						1931 <i>(Dracula)</i> to ‘sex equals death’- has more often than not been one of the main
						features of most of horror’s sub-genres. The slasher film, a sub-genre of horror, is filled
						right to the brim with sexual connotation to the extent that it encroaches dangerously on
						the pornographic— the key to the genre being the “final girl” trope. Likewise, we find
						unwarranted depictions and stereotypes of gender and sexuality cloaked in a <i>general
						formula</i> found within plots in all sub-genres of horror cinema.
					</p>
					<p className={styles.paragraph}>
						Different places breed different horrors- the term &quot;horror&quot; itself is informed and
						perceived differently, depending on the attitudes and the understanding of not only sex,
						sexuality and gender, but also class, race and caste. The spectre&#39;s hauntings are a product
						of historicity. Horror externalizes the intimate and fragile realms of human sensibilities,
						magnifying terror, fear, and desire to a brash crescendo. What does horror&#39;s treatment of
						sexuality, sex and gender say, if anything at all, about the genre as a product of its time,
						place, and audience? Is there a difference between low brow and artisanal horror
						specifically in how they approach sex as an act, sex as violence, or the gendered body as
						the site of horror?
					</p>
					<p className={styles.paragraph}>
						<span>
								Topics to discuss and analyse sex and horror may include, but are certainly not limited to:
						</span>
						<ul className={styles.listmain}>
							<li>The female body as object</li>
							<li>Gendered tropes and patterns in horror</li>
							<li>Horror as the realisation of revenge fantasy</li>
							<li>Queer narratives in horror</li>
							<li>Some aspects of body horror</li>
							<li>Gothic masculinity</li>
							<li>Consumption in, and of, horror- vampirism, cannibalism, et al.</li>
							<li>Trans-horror narratives</li>
							<li>Psychological horror</li>
							<li>Gendered agency and survival in horror</li>
							<li>Fetishism</li>
							<li>Voyeurism</li>
							<li>Nudity and sexual excess</li>
							<li>Sex, sexuality and gender in cross-cultural encounters vis-à-vis horror</li>
							<li>Queer monstrosity: The &quot;otherisation&quot; of the spectre</li>
							<li>B-grade horror, with reference to the Ramsay films</li>
							<li>Sex and sexuality in the slasher film</li>
							<li>Psychoanalysis in, and of, horror</li>
						</ul>
					</p>
					<p className={styles.paragraph}>
						These are but a few sub-themes that we have in mind, but we do look forward to
						explorations of the theme beyond what we’ve already talked about. We in fact, urge
						everyone to examine the theme from various perspectives!
					</p>
				</Grid>
				<Grid container xs={12} className={styles.container}>
					<h3>
						<u>Abstract Submission</u>
					</h3>
					<p className={styles.paragraph}>
						Proposal abstracts should be limited to 250 words and must be accompanied by an
						indicative bibliography. A brief biography of the author of approx. 150 words should be
						provided along with the abstract. Abstracts should be sent through as <u>Word Documents</u>
						<span> and titled</span>
						<span className={styles.bold}> “For consideration: Author First name Author Surname” </span>
						(e.g. For consideration: Mary Poppins).
					</p>
					<p className={styles.paragraph}>
						Please mail your proposal to - 
						<span className={styles.italic}> <u>chalchitradarpan@gmail.com</u></span>
					</p>
				</Grid>
				<Grid container xs={12} className={styles.container}>
					<h3>
						<u>Research Paper Submission</u>
					</h3>
					<ol className={`${styles.listmain}`}>
						<span className={`${styles.bold} ${styles.italic}`}>
							Chalchitra Darpan 
						</span> accepts a variety of written pieces for submission, such as:
						<li>
							<u>Essays for our ‘Features’ section, which should be between 5,000-7,000 words</u> (including footnotes, excluding bibliography)
						</li>
						<li>
							<u>Shorter articles of approximately 1,000-3,000 words</u> (including footnotes, excluding bibliography).
						</li>
						<li>
							<u>Book Reviews,</u> which are essays that provide a scholarly critique of texts in the
									field. The text choice may range from the theoretical and the practical to the
									pedagogical and the historical. They are typically 1,000 words (including
									footnotes, excluding bibliography).
						</li>
						<li><u>Interview, with no more than 10 questions.</u></li>
					</ol>
					<p className={styles.paragraph}>
						While this is largely an undergraduate journal, we do encourage some expert comments
						or articles from researchers working in the field.
					</p>
					<p className={`${styles.bold} ${styles.paragraph}`}>
						All submissions should not be under consideration elsewhere, and should be original
	and previously unpublished.
					</p>
				</Grid>
				<Grid container xs={12} className={`${styles.container} ${styles.column}`}>
					<h3>
						<u>Tentative time-table*:</u>
					</h3>
					<ul className={`${styles.listempty}`}>
						<li>
							Abstract Submission Deadline: 15th October, 2021
						</li>
						<li>
							Abstract Decision Announcement: 25th October, 2021
						</li>
						<li>
							First Draft Deadline: 30th December, 2021
						</li>
						<li>
							Final Draft Deadline: 20th January, 2022
						</li>
						<li>
						Final Draft with Corrections: 30th January, 2022
						</li>
					</ul>
					<p className={`${styles.paragraph} ${styles.italic}`}>
						(*subject to change)
					</p>
				</Grid>
				<Grid container xs={12} className={styles.container}>
					<h3>	
						<u>Compiled Resources/Samples to help writing:</u>
					</h3>
					<p className={styles.paragraph}>
						<a href="https://drive.google.com/drive/folders/1QwDc7X95NVj3bpDDmyBxesCZfdYZg94A" className={styles.link} target="_blank" rel="noreferrer">https://drive.google.com/drive/folders/1QwDc7X95NVj3bpDDmyBxesCZfdYZg94A</a>
					</p>
				</Grid>
				<Grid container xs={12} className={`${styles.container} ${styles.containerspace}`}>
					<p className={styles.paragraph}>
					Please feel free to contact us for further queries.
					</p>
				</Grid>
			</div> */}
		</React.Fragment>
  )
}

export default CallForPapers