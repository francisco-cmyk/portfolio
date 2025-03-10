import { Badge } from "./Badge";

export default function SkillCategory({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div className='space-y-4'>
      <h3 className='md:text-xl text-base font-semibold'>{title}</h3>
      <div className='flex flex-wrap gap-2'>
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant='secondary'
            className='md:text-sm text-xs py-1 px-3 rounded-full transition-colors hover:bg-primary hover:text-primary-foreground'
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
