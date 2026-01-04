import SkillBadge from "./SkillBadge";
import { 
  Code, Database, Cloud, Cpu, Layers, Workflow, 
  Bot, Brain, Server, Globe, Smartphone, Zap,
  FileCode, Settings, Terminal, GitBranch, Box, Network,
  BarChart3, FileJson, Container, Cog
} from "lucide-react";
import { 
  SiScala, SiApachespark, SiApachekafka, SiPython,
  SiSpring, SiHibernate, SiFirebase, SiReact, SiNextdotjs,
  SiRedux, SiTypescript, SiPostgresql, SiMysql,
  SiMongodb, SiOpenai, SiLangchain, SiN8n,
  SiCplusplus, SiGit, SiLinux, SiAndroid, SiDocker, SiOdoo
} from "@icons-pack/react-simple-icons";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Scala", category: "language" as const, Icon: SiScala },
      { name: "Java", category: "language" as const, Icon: Code },
      { name: "Python", category: "language" as const, Icon: SiPython },
      { name: "TypeScript", category: "language" as const, Icon: SiTypescript },
      { name: "C++", category: "language" as const, Icon: SiCplusplus },
      { name: "SQL", category: "language" as const, Icon: Database },
    ],
  },
  {
    title: "GenAI & ML",
    skills: [
      { name: "LLM Integration", category: "ai" as const, Icon: SiOpenai },
      { name: "LangChain", category: "ai" as const, Icon: SiLangchain },
      { name: "RAG Systems", category: "ai" as const, Icon: Brain },
      { name: "AI Agents", category: "ai" as const, Icon: Bot },
      { name: "n8n Workflows", category: "ai" as const, Icon: SiN8n },
      { name: "Vector Databases", category: "ai" as const, Icon: Database },
      { name: "Prompt Engineering", category: "ai" as const, Icon: Terminal },
    ],
  },
  {
    title: "Big Data & Streaming",
    skills: [
      { name: "Apache Spark", category: "framework" as const, Icon: SiApachespark },
      { name: "Apache Kafka", category: "framework" as const, Icon: SiApachekafka },
      { name: "Hadoop", category: "framework" as const, Icon: Server },
      { name: "Data Pipelines", category: "concept" as const, Icon: Workflow },
      { name: "ETL", category: "concept" as const, Icon: Layers },
      { name: "Real-time Streaming", category: "concept" as const, Icon: Zap },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", category: "framework" as const, Icon: SiReact },
      { name: "Next.js", category: "framework" as const, Icon: SiNextdotjs },
      { name: "Redux", category: "framework" as const, Icon: SiRedux },
    ],
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "Spring", category: "framework" as const, Icon: SiSpring },
      { name: "Hibernate", category: "framework" as const, Icon: SiHibernate },
      { name: "Odoo", category: "framework" as const, Icon: SiOdoo },
      { name: "Firebase", category: "cloud" as const, Icon: SiFirebase },
      { name: "Android SDK", category: "framework" as const, Icon: SiAndroid },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", category: "database" as const, Icon: SiPostgresql },
      { name: "MySQL", category: "database" as const, Icon: SiMysql },
      { name: "Oracle", category: "database" as const, Icon: Database },
      { name: "MongoDB", category: "database" as const, Icon: SiMongodb },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", category: "tool" as const, Icon: SiGit },
      { name: "Docker", category: "tool" as const, Icon: SiDocker },
      { name: "Linux", category: "tool" as const, Icon: SiLinux },
    ],
  },
  {
    title: "Concepts & Architecture",
    skills: [
      { name: "Distributed Systems", category: "concept" as const, Icon: Network },
      { name: "Microservices", category: "concept" as const, Icon: Container },
      { name: "Enterprise Architecture", category: "concept" as const, Icon: Box },
      { name: "Performance Optimization", category: "concept" as const, Icon: BarChart3 },
      { name: "Open Source", category: "concept" as const, Icon: GitBranch },
      { name: "Agile", category: "concept" as const, Icon: Cog },
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
                      Icon={skill.Icon}
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
