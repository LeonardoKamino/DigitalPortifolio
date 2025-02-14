"use client";
import React, { useState } from "react";
import Slide from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

import "../styles/ProjectCard.scss";

function ProjectCard(props: any) {
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
	const project = props.project;
	const navigate = useNavigate();

	
	// useEffect(() => {
	// 	window.addEventListener("resize", () => {
	// 		setWindowWidth(window.innerWidth);
	// 	});
	// });

	function RenderSkillsMobile() {
		if (windowWidth < 900) {
			return (
				<div className="skills-mobile">
					{project.skills.map((skill: string, index: number) => (
						<p className="skill-item" key={index}>
							{skill}
						</p>
					))}
				</div>
			);
		}
	}

	function RenderSkillsDesktop() {
		if (windowWidth > 900) {
			return (
				<div className="middle">
					{project.skills.map((skill: string, index: number) => (
						<p className="skill-item" key={index}>
							{skill}
						</p>
					))}
				</div>
			);
		}
	}

	const handleCardClick = () => {
		navigate(`/projects/${project.id}`);
	};

	return (
		<div className=" col-md-6 col-lg-4  my-4">
			<Slide >
				<div className="card project-card" onClick={handleCardClick} >
					<div className="card-header">
						<div className="columns">
							<div className="row">
								<div className="col icon-section" style={{flex: 1}}>
									<div className="circle-icon bg-red"></div>
									<div className="circle-icon bg-yellow"></div>
									<div className="circle-icon bg-green"></div>
								</div>
								<div className="col  project-name" style={{flex: 2}}>{project.title}</div>
							</div>
						</div>
					</div>
					<div className="image-container">
						<img src={project.image} className="card-img-top image" alt="..." />
						{RenderSkillsDesktop()}
					</div>
					<div className="card-body">
						<p className="card-text">{project.summary}</p>
						{RenderSkillsMobile()}
					</div>
				</div>
			</Slide>
		</div>
	);
}

export default ProjectCard;
