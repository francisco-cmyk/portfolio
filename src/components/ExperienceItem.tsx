export default function ExperienceItem({
  title,
  company,
  location,
  period,
  description,
  responsibilities,
}: {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
}) {
  return (
    <div className='relative pl-8 pb-8 border-l-2 border-primary/30 last:border-l-transparent'>
      <div className='absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary'></div>
      <div className='space-y-2'>
        <h3 className='md:text-2xl text-xl font-semibold'>{title}</h3>
        <p className='font-medium text-muted-foreground md:text-base text-sm'>
          {company} | {location}
        </p>
        <p className='md:text-sm text-xs text-muted-foreground'>{period}</p>
        <p className='text-muted-foreground md:text-base text-sm'>
          {description}
        </p>
        <ul className='list-disc list-inside space-y-1 text-muted-foreground  md:text-base text-sm'>
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
