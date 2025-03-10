import { Link } from "react-router-dom";
import { Button } from "./Button";

export default function SocialButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Button variant='ghost' size='icon' asChild className='rounded-full'>
      <Link to={href} target='_blank' rel='noopener noreferrer'>
        {icon}
        <span className='sr-only'>{label}</span>
      </Link>
    </Button>
  );
}
