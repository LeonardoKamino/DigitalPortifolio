import ReactImg from "../Media/Skills/React.png";
import BootstrapImg from "../Media/Skills/Bootstrap.png";
import Bulma from "../Media/Skills/Bulma.png";
import Python from "../Media/Skills/Python.png";
import Html from "../Media/Skills/Html.png";
import Css from "../Media/Skills/CSS3.png";
import C from "../Media/Skills/C.png";
import Javascript from "../Media/Skills/Javascript.png";
import Typescript from "../Media/Skills/Typescript.png";
import Git from "../Media/Skills/Git.png";
import Linux from "../Media/Skills/Linux.png";
import Sass from "../Media/Skills/Sass.png";
import Java from "../Media/Skills/Java.png";
import ARM from "../Media/Skills/ARM.jpg";
import Verilog from "../Media/Skills/Verilog.png";
import Drupal from "../Media/Skills/Drupal.png";
import Wordpress from "../Media/Skills/Wordpress.png";
import RubyOnRails from "../Media/Skills/RubyOnRails.png";
import Ruby from "../Media/Skills/Ruby.png";

const SkillsList: any = [
	{
		sectionTitle: "Web Development",
		list: [
			{ name: "React", logo: ReactImg },
			{ name: "Ruby on Rails", logo: RubyOnRails},
			{ name: "Sass", logo: Sass },
			{ name: "Bootstrap", logo: BootstrapImg },
			{ name: "Bulma", logo: Bulma },
			{ name: "HTML5", logo: Html },
			{ name: "CSS3", logo: Css },
		],
	},
	{
		sectionTitle: "Languages",
		list: [
			{ name: "Javascript", logo: Javascript },
			{ name: "Typescript", logo: Typescript },
			{ name: "Ruby", logo: Ruby },
			{ name: "Python", logo: Python },
			{ name: "C/C++", logo: C },
			{ name: "Java", logo: Java},
			{ name: "ARM", logo: ARM},
			{ name: "Verilog", logo: Verilog}
		],
	},
	{
		sectionTitle: "Tools",
		list: [
			{ name: "Git", logo: Git },
			{ name: "Linux", logo: Linux },
			{ name: "Wordpress", logo: Wordpress },
			{ name: "Drupal", logo: Drupal }
		],
	},
];

export default SkillsList;
