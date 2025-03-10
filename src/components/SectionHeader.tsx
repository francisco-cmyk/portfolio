export default function SectionHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='space-y-4 text-center mb-12'>
      <h2 className='md:text-4xl text-2xl font-semibold tracking-tight'>
        {children}
      </h2>
      <div className='w-24 h-1 bg-primary mx-auto rounded-full'></div>
    </div>
  );
}
