export default function ContactInfo({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className='flex items-center gap-4 md:ml-0 ml-2'>
      <div className='bg-primary/10 p-3 rounded-full'>{icon}</div>
      <div>
        <h3 className='font-medium'>{label}</h3>
        <p className='text-muted-foreground md:text-base text-sm'>{value}</p>
      </div>
    </div>
  );
}
