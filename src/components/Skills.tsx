import SkillBadge from "./SkillBadge";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Scala", category: "language" as const },
      { name: "Java", category: "language" as const },
      { name: "C++", category: "language" as const },
      { name: "SQL", category: "language" as const },
      { name: "Python", category: "language" as const },
    ],
  },
  {
    title: "Big Data & Streaming",
    skills: [
      { name: "Apache Spark", category: "framework" as const },
      { name: "Apache Kafka", category: "framework" as const },
      { name: "Hadoop", category: "framework" as const },
      { name: "Data Pipelines", category: "concept" as const },
      { name: "ETL", category: "concept" as const },
      { name: "Real-time Streaming", category: "concept" as const },
    ],
  },
  {
    title: "Frameworks & Tools",
    skills: [
      { name: "Spring", category: "framework" as const },
      { name: "Hibernate", category: "framework" as const },
      { name: "Android SDK", category: "framework" as const },
      { name: "Firebase", category: "cloud" as const },
      { name: "Git", category: "tool" as const },
      { name: "Ubuntu/Linux", category: "tool" as const },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", category: "database" as const },
      { name: "MySQL", category: "database" as const },
      { name: "Oracle", category: "database" as const },
      { name: "NoSQL", category: "database" as const },
    ],
  },
  {
    title: "Concepts & Architecture",
    skills: [
      { name: "Distributed Systems", category: "concept" as const },
      { name: "Microservices", category: "concept" as const },
      { name: "Enterprise Architecture", category: "concept" as const },
      { name: "Performance Optimization", category: "concept" as const },
      { name: "Open Source", category: "concept" as const },
      { name: "Agile", category: "concept" as const },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-slide-up" style={{ opacity: 0 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Technologies and concepts I've worked with throughout my career.
            </p>
          </div>

          <div className="space-y-10">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className="animate-slide-up"
                style={{ animationDelay: `${0.1 + categoryIndex * 0.1}s`, opacity: 0 }}
              >
                <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-primary" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <SkillBadge 
                      key={skill.name} 
                      name={skill.name} 
                      category={skill.category} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
