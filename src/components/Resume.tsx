import { resumeData } from "@/data/resumeData";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ResumeProps {
  onDownload?: () => void;
}

const Resume = ({ onDownload }: ResumeProps) => {
  return (
    <div className="max-w-4xl mx-auto bg-background p-8 md:p-12">
      {/* Header */}
      <div className="mb-8 border-b border-border pb-6">
        <h1 className="text-4xl font-bold mb-2">{resumeData.personal.name}</h1>
        <p className="text-xl text-muted-foreground mb-4">{resumeData.personal.title}</p>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span>{resumeData.personal.location}</span>
          <span>•</span>
          <a href={`mailto:${resumeData.personal.email}`} className="hover:text-foreground">
            {resumeData.personal.email}
          </a>
          <span>•</span>
          <a href={resumeData.personal.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <span>•</span>
          <a href={resumeData.personal.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            GitHub
          </a>
        </div>
      </div>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-border pb-2">Summary</h2>
        <p className="text-muted-foreground leading-relaxed">{resumeData.personal.summary}</p>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-border pb-2">Education</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Education Institute/School</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>Percentage/CGPA</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {resumeData.education.map((edu, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <div>
                    <div className="font-semibold">{edu.degree}</div>
                    <div className="text-sm text-muted-foreground">{edu.institution}</div>
                  </div>
                </TableCell>
                <TableCell>{edu.period}</TableCell>
                <TableCell>{edu.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-border pb-2">Experience</h2>
        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="text-sm text-muted-foreground mt-1 md:mt-0">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="mt-2 flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-secondary rounded border border-border text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Open Source Contributions */}
      {resumeData.openSource && resumeData.openSource.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 border-b border-border pb-2">Open Source Contributions</h2>
          <div className="space-y-4">
            {resumeData.openSource.map((org, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold mb-2">{org.organization}</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                  {org.contributions.map((contribution, i) => (
                    <li key={i}>{contribution}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 border-b border-border pb-2">Technical Skills</h2>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 bg-secondary rounded border border-border text-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Download Button */}
      {onDownload && (
        <div className="mt-8 pt-6 border-t border-border">
          <Button onClick={onDownload} className="w-full md:w-auto">
            <Download className="w-4 h-4 mr-2" />
            Download ATS-Compliant PDF
          </Button>
        </div>
      )}
    </div>
  );
};

export default Resume;

