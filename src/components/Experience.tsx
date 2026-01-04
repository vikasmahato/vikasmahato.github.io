import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    company: "Expedia Group",
    role: "Data Engineer",
    location: "Gurugram",
    period: "Jan 2021 – Present",
    description: [
      "Designed and built scalable batch and streaming data pipelines in the Competitive Intelligence team",
      "Processed large-scale datasets using Apache Spark (Scala)",
      "Implemented real-time data ingestion and streaming with Apache Kafka",
      "Optimized Spark jobs for performance, stability, and cost efficiency",
      "Worked on distributed systems handling high data volume and velocity",
      "Delivered data platforms enabling analytics and insights at scale",
    ],
    tech: ["Scala", "Apache Spark", "Apache Kafka", "Big Data", "Distributed Systems"],
  },
  {
    company: "Nucleus Software Exports Ltd.",
    role: "Software Developer",
    location: "Noida",
    period: "Jul 2018 – Jan 2021",
    description: [
      "Developed enterprise applications using Spring and Hibernate",
      "Implemented complex business logic for core banking/enterprise workflows",
      "Improved application performance through code and query optimization",
      "Tuned and optimized SQL queries for large relational databases",
      "Gained hands-on experience with Java enterprise architecture",
    ],
    tech: ["Java", "Spring", "Hibernate", "SQL", "Enterprise Architecture"],
  },
  {
    company: "Google Summer of Code — LibreOffice",
    role: "Student Contributor",
    location: "Remote",
    period: "Apr 2018 – Aug 2018",
    description: [
      "Selected as GSoC student contributor for LibreOffice",
      "Added data import support to LibreOffice Calc",
      "Implemented import from XML, HTML, CSV, and SQL sources",
      "Worked with a large, complex, long-lived open-source C++ codebase",
      "Collaborated with global open-source community and mentors",
    ],
    tech: ["C++", "Open Source", "LibreOffice", "XML", "SQL"],
  },
  {
    company: "Youngman India Private Ltd.",
    role: "Software Developer",
    location: "India",
    period: "May 2017 – Dec 2017",
    description: [
      "Built a custom web application to manage business operations",
      "Designed software to handle the full business lifecycle",
      "Migrated company workflows from Tally to a GST-compliant system",
      "Improved operational efficiency, reduced latency, and increased revenue",
    ],
    tech: ["Web Development", "GST Compliance", "Business Software"],
  },
  {
    company: "Delhi Police — South East District",
    role: "Software Developer",
    location: "New Delhi",
    period: "Oct 2016 – Jan 2017",
    description: [
      "Identified inefficiencies in government medical claim processing",
      "Designed and built a system to streamline medical claim workflows",
      "Deployed and ran the solution on an Ubuntu server",
      "System actively used at the Jasola branch",
    ],
    tech: ["Ubuntu", "Web Development", "Government Systems"],
  },
  {
    company: "Safety First (Startup)",
    role: "Co-Founder & Developer",
    location: "India",
    period: "May 2016 – Aug 2017",
    description: [
      "Co-founded a startup focused on HSE knowledge sharing",
      "Built an Android application for safety officers",
      "Implemented backend using Firebase",
      "Learned Android development and mobile app architecture",
    ],
    tech: ["Android", "Firebase", "Mobile Development", "Startup"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-subtle">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 animate-slide-up" style={{ opacity: 0 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A journey through data engineering, enterprise software, and open source contributions.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.company + exp.period}
                {...exp}
                delay={0.1 + index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
