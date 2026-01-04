import { Building2, Calendar } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  tech?: string[];
  delay?: number;
}

const ExperienceCard = ({ 
  company, 
  role, 
  location, 
  period, 
  description, 
  tech,
  delay = 0 
}: ExperienceCardProps) => {
  return (
    <div 
      className="group relative p-6 md:p-8 rounded-2xl bg-gradient-card border border-border shadow-card hover:border-primary/30 transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${delay}s`, opacity: 0 }}
    >
      {/* Accent line */}
      <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-1">{role}</h3>
          <div className="flex items-center gap-2 text-primary">
            <Building2 className="w-4 h-4" />
            <span className="font-medium">{company}</span>
            <span className="text-muted-foreground">— {location}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono bg-secondary px-3 py-1.5 rounded-full">
          <Calendar className="w-3.5 h-3.5" />
          {period}
        </div>
      </div>

      <ul className="space-y-2 mb-6">
        {description.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-muted-foreground">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {tech && tech.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span 
              key={item}
              className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-md border border-border"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
