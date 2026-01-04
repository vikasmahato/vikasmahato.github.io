import React, { Component } from 'react'
import './skills.css'

export default class Skills extends Component {
  render() {
    const programmingLanguages = [
      { name: 'C', color: '00599C', logo: 'c' },
      { name: 'C++', color: '00599C', logo: 'c%2B%2B' },
      { name: 'Java', color: 'ED8B00', logo: 'openjdk' },
      { name: 'Python', color: '3670A0', logo: 'python' },
      { name: 'JavaScript', color: '323330', logo: 'javascript' },
      { name: 'TypeScript', color: '007ACC', logo: 'typescript' },
      { name: 'Scala', color: 'DC322F', logo: 'scala' },
      { name: 'Kotlin', color: '7F52FF', logo: 'kotlin' },
      { name: 'PHP', color: '777BB4', logo: 'php' }
    ];

    const frontendTech = [
      { name: 'React', color: '61DAFB', logo: 'react' },
      { name: 'Redux', color: '593d88', logo: 'redux' },
      { name: 'HTML5', color: 'E34F26', logo: 'html5' },
      { name: 'jQuery', color: '0769AD', logo: 'jquery' },
      { name: 'Chakra UI', color: '4ED1C5', logo: 'chakraui' },
      { name: 'Thymeleaf', color: '005C0F', logo: 'thymeleaf' }
    ];

    const backendTech = [
      { name: 'Spring', color: '6DB33F', logo: 'spring' },
      { name: 'Laravel', color: 'FF2D20', logo: 'laravel' },
      { name: 'JWT', color: '000000', logo: 'json%20web%20tokens' },
      { name: 'Apache Tomcat', color: 'F8DC75', logo: 'apache%20tomcat' },
      { name: 'Nginx', color: '009639', logo: 'nginx' }
    ];

    const databases = [
      { name: 'MySQL', color: '4479A1', logo: 'mysql' },
      { name: 'Redis', color: 'DD0031', logo: 'redis' },
      { name: 'Apache Cassandra', color: '1287B1', logo: 'apache%20cassandra' },
      { name: 'Firebase', color: '039BE5', logo: 'firebase' }
    ];

    const cloudDevOps = [
      { name: 'AWS', color: 'FF9900', logo: 'amazon-aws' },
      { name: 'Apache Spark', color: 'FDEE21', logo: 'apachespark' },
      { name: 'Apache Kafka', color: '000000', logo: 'apachekafka' },
      { name: 'GitHub Actions', color: '2671E5', logo: 'githubactions' },
      { name: 'Git', color: 'F05033', logo: 'git' },
      { name: 'Docker', color: '2496ED', logo: 'docker' }
    ];

    const tools = [
      { name: 'Arduino', color: '00979D', logo: 'arduino' },
      { name: 'Raspberry Pi', color: 'C51A4A', logo: 'raspberry-pi' },
      { name: 'Gradle', color: '02303A', logo: 'gradle' },
      { name: 'Maven', color: 'C71A36', logo: 'apache%20maven' },
      { name: 'Splunk', color: '000000', logo: 'splunk' }
    ];

    const SkillCategory = ({ title, skills }) => (
      <div className="skill-category">
        <h3 className="skill-category-title">{title}</h3>
        <div className="skill-badges">
          {skills.map((skill, index) => {
            // Create badge URL using shields.io format
            const badgeName = skill.name.replace(/\s+/g, '%20');
            const badgeUrl = `https://img.shields.io/badge/${badgeName}-${skill.color}?style=flat&logo=${skill.logo}&logoColor=white`;
            
            return (
              <img
                key={index}
                src={badgeUrl}
                alt={skill.name}
                className="skill-badge-img"
                title={skill.name}
              />
            );
          })}
        </div>
      </div>
    );

    return (
      <div>
        <section className="colorlib-skills" data-section="skills">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                <span className="heading-meta">My Expertise</span>
                <h2 className="colorlib-heading animate-box fadeInUp animated">Tech Stack</h2>
                <p style={{marginTop: '20px', fontSize: '16px'}}>A comprehensive toolkit for building scalable, modern applications</p>
              </div>
            </div>
            <div className="skills-container">
              <SkillCategory title="Programming Languages" skills={programmingLanguages} />
              <SkillCategory title="Frontend Technologies" skills={frontendTech} />
              <SkillCategory title="Backend Frameworks" skills={backendTech} />
              <SkillCategory title="Databases & Storage" skills={databases} />
              <SkillCategory title="Cloud & DevOps" skills={cloudDevOps} />
              <SkillCategory title="Tools & Platforms" skills={tools} />
            </div>
          </div>
        </section>
      </div>
    )
  }
}
