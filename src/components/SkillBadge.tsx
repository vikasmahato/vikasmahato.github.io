interface SkillBadgeProps {
  name: string;
  category: "language" | "framework" | "tool" | "database" | "cloud" | "concept";
}

const categoryStyles = {
  language: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 hover:border-blue-500/50",
  framework: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 hover:border-purple-500/50",
  tool: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 hover:border-green-500/50",
  database: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20 hover:border-orange-500/50",
  cloud: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20 hover:border-cyan-500/50",
  concept: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20 hover:border-pink-500/50",
};

const SkillBadge = ({ name, category }: SkillBadgeProps) => {
  return (
    <span
      className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 hover:scale-105 cursor-default ${categoryStyles[category]}`}
    >
      {name}
    </span>
  );
};

export default SkillBadge;
