import LaunchPadLogo from "../Media/LaunchpadLogo.png";
import LoadingGear from "../Media/LoadingGear.gif";
import UBCEngineeringLogo from "../Media/UBCEngineeringLogo.png";
import ChangeHealthcareLogo from "../Media/ChangeHealthcareLogo.jpg";
import MotorolaLogo from "../Media/Motorola.jpg";
import ECELogo from "../Media/ECE.png"

const ExperienceList = [
	{
		company: "Motorola Solutions - Avigilon",
		role: "Software Engineer Intern",
		duration: "Jan - Aug 2023, May - Aug 2024",
		description: 
		<><ul>
			<li>Developed features and fixed bugs using MVC design in Ruby on Rails and React, deploying solutions to production.</li>
			<li>Built an automated Selenium web scraper to detect broken links and HTML issues in Avigilon’s system, integrating it into Bamboo CI for automated weekly reports.</li>
			<li>Consolidated 10+ search functionalities into a reusable React component, streamlining the Ruby on Rails codebase.</li>
			<li>Played a key role in the validation processof release candidates, identifying and reporting multiple critical bugs to ensure product readiness.</li>
		</ul></>,
		skills: ["Ruby on Rails", "React", "Selenium", "Rspec", "Bamboo"],
		logo: MotorolaLogo,
	},
	{
		company: "UBC Faculty of Applied Science",
		role: "Web Developer (Part-time)",
		duration: "Sep 2021 - Apr 2022, Sep 2023 - Present",
		description:
		<><ul>
			<li>Led the revamp of 10+ UBC websites, collaborating closely with stakeholders to translate high-level concepts into fully functional web platforms, enhancing UBC’s online presence and credibility.</li>
			<li>Diagnosed and resolved bugs, developed new pages, and implemented features across UBC APSC and ENG websites, ensuring optimal performance and a seamless user experience for over 6,000 weekly visitors.</li>
			<li>Drove a 70% improvement in Search Engine Optimization (SEO) health for the UBC Applied Science website, increasing SEO scores from 25% to 95%.</li>
		</ul></>,
		skills: ["HTML", "CSS", "WordPress", "Drupal", "SEO"],
		logo: UBCEngineeringLogo,
	},
	{
		company: "UBC Computer Engineering Department",
		role: "Teaching Assistant - CPEN 221 Software Construction",
		duration: "Sep - Dec 2023",
		description: 
		<><ul>
			<li>Led weekly lab sessions for 40+ students, clarifying software construction concepts and addressing technical questions.</li>
			<li>Provided one-on-one support during office hours, assisting with project implementation and course content.</li>
			<li>Graded assignments, ensuring code quality and adherence to best practices.</li>
		</ul></>,
		skills: ["Java", "Mentorship", "Teaching", "Software Construction"],
		logo: ECELogo,
	},
	{
		company: "Change Healthcare (Optum)",
		role: "Software Development Engineer Intern",
		duration: "May - Dec 2022",
		description: 
		<><ul>
			<li>Enhanced an internal web tool, semi-automating the Program Temporary Fix Packaging process, reducing packaging time and increasing reliability.</li>
			<li>Mentored new co-ops, providing onboarding support and conducting weekly check-ins to address challenges.</li>
			<li>Conducted thorough sanity testing on software patches for medical devices, ensuring compliance with stringent quality standards.</li>
		</ul></>,
		skills: ["Angular", "Python", "Stakeholder Management", "Sanity Testing"],
		logo: ChangeHealthcareLogo,
	},
	{
		company: "UBC Launch Pad (Student Design Team)",
		role: "Front-End Developer",
		duration: "Sep 2020 - Sep 2021",
		description:
		<><ul>
			<li>Developed an application to streamline the recruitment process for student clubs.</li>
			<li>Responsible for implementing the views of the application using React.</li>
			<li>Conducted peer code reviews to guarantee best practices and functionality.</li>
		</ul></>,
		skills: ["TypeScript", "React", "Bulma"],
		logo: LaunchPadLogo,
	},
	{
		company: "Looking for Full-Time Positions",
		role: "Graduating in May 2025",
		duration: "Current",
		description:
			"I am actively looking for full-time positions in software engineering upon my graduation in May 2025. If you are hiring software engineers or have exciting projects, please reach out.",
		skills: ["Communication", "Proactive", "Problem Solving"],
		logo: LoadingGear,
	},
];

export default ExperienceList;
