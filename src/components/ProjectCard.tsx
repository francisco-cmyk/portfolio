import { Link } from "react-router-dom";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Card, CardContent } from "./Card";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  demoLink,
  codeLink,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}) {
  return (
    <Card className='overflow-hidden group'>
      <div className='relative md:h-48 h-36 overflow-hidden'>
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className='object-cover h-full md:h-auto w-full transition-transform group-hover:scale-105'
        />
      </div>
      <CardContent className='p-6'>
        <h3 className='md:text-2xl text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-muted-foreground mb-4 md:text-base text-sm'>
          {description}
        </p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {tags.map((tag) => (
            <Badge key={tag} variant='outline' className='text-xs'>
              {tag}
            </Badge>
          ))}
        </div>
        <div className='md:flex hidden gap-2'>
          <Button size='sm' variant='outline' asChild>
            <Link to={demoLink} target='_blank' rel='noopener noreferrer'>
              <ExternalLink className='mr-2 h-3 w-3' /> Live Demo
            </Link>
          </Button>
          <Button size='sm' variant='outline' asChild>
            <Link to={codeLink} target='_blank' rel='noopener noreferrer'>
              <Github className='mr-2 h-3 w-3' /> Code
            </Link>
          </Button>
        </div>
        <div className='md:hidden flex gap-2'>
          <Button size='icon' variant='outline' asChild>
            <Link to={demoLink} target='_blank' rel='noopener noreferrer'>
              <ExternalLink className='h-5 w-4' />
            </Link>
          </Button>
          <Button size='icon' variant='outline' asChild>
            <Link to={codeLink} target='_blank' rel='noopener noreferrer'>
              <Github className='h-5 w-4' />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
