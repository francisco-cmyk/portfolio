import { Button } from "./components/Button";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ChevronDown,
  Sun,
  Menu,
  Moon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { experiences } from "./lib/resumeData";
import ContactInfo from "./components/ContactInfo";
import ExperienceItem from "./components/ExperienceItem";
import ProjectCard from "./components/ProjectCard";
import SectionHeader from "./components/SectionHeader";
import SkillCategory from "./components/SkillCategory";
import SocialButton from "./components/SocialButton";
import { useTheme } from "./context/theme";
import { scrollToSection } from "./lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./components/Popover";

export default function Portfolio() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const navTitles = ["About", "Skills", "Projects", "Experience", "Contact"];
  const navItems = navTitles.map((item) => ({
    label: item,
    value: item.toLowerCase(),
  }));

  return (
    <div className='min-h-screen bg-gradient-to-br from-background via-background to-secondary/10 cursor-default'>
      {/* Header/Navigation */}
      <header className='fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-primary/10'>
        <div className='container flex h-16 items-center justify-between'>
          <div className='font-bold text-xl'>
            <Link to='/'>
              <span className='text-gradient-primary'>FVN</span>
            </Link>
          </div>
          <nav className='hidden md:flex gap-6'>
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={``}
                onClick={() => scrollToSection(item.value)}
                className='text-muted-foreground hover:text-foreground transition-colors relative group'
              >
                {item.label}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full'></span>
              </Link>
            ))}
          </nav>
          <div className='md:hidden flex'>
            <Popover>
              <PopoverTrigger>
                <Menu />
              </PopoverTrigger>
              <PopoverContent className='flex flex-col space-y-3 mr-2'>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={``}
                    onClick={() => scrollToSection(item.value)}
                    className='text-muted-foreground hover:text-foreground transition-colors relative group'
                  >
                    {item.label}
                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full'></span>
                  </Link>
                ))}
              </PopoverContent>
            </Popover>
            <Button
              size='icon'
              variant='ghost'
              className='ml-1'
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? (
                <Sun className='h-4 w-4' />
              ) : (
                <Moon className='h-4 w-4' />
              )}
            </Button>
          </div>
          <div className='hidden md:flex items-center gap-2'>
            <SocialButton
              href='https://github.com/francisco-cmyk'
              icon={<Github className='h-4 w-4' />}
              label='GitHub'
            />
            <SocialButton
              href='https://linkedin.com/in/fveranicola'
              icon={<Linkedin className='h-4 w-4' />}
              label='LinkedIn'
            />
            <SocialButton
              href='mailto:fveranicola@gmail.com'
              icon={<Mail className='h-4 w-4' />}
              label='Email'
            />
            <Button
              size='icon'
              variant='ghost'
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              {isDarkMode ? (
                <Sun className='h-4 w-4' />
              ) : (
                <Moon className='h-4 w-4' />
              )}
            </Button>
          </div>
        </div>
      </header>

      <main className='container py-16 space-y-32'>
        {/* Hero Section */}
        <section className='md:h-[700px] h-[450px] flex flex-col justify-center items-center text-center relative overflow-hidden'>
          <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>
          <div className='relative z-10 space-y-6'>
            <h1 className='text-4xl sm:text-7xl md:text-8xl font-extrabold tracking-tight'>
              <span className='text-gradient-primary'>Francisco Vera</span>
            </h1>
            <h2 className='text-2xl sm:text-4xl text-muted-foreground font-light'>
              Software Engineer
            </h2>
            <p className='text-muted-foreground md:w-[600px] w-[250px] mx-auto break-words md:text-lg text-sm'>
              Crafting intuitive and performant web experiences with modern
              technologies. Passionate about clean code and user-centric design.
            </p>
            <div className='flex md:flex-row flex-col gap-4 justify-center pt-8'>
              <Button size='lg' onClick={() => scrollToSection("projects")}>
                View My Work
              </Button>
              <Button variant='outline' size='lg' asChild>
                <a
                  href='/Francisco_Vera_Nicola_Resume.pdf'
                  download
                  className='md:text-base text-sm'
                >
                  <Download className='mr-2 h-4 w-4' /> Download Resume
                </a>
              </Button>
            </div>
          </div>
          <div className='absolute sm:bottom-10 bottom-2 sm:left-1/2 transform -translate-x-1/2 animate-bounce'>
            <ChevronDown className='h-8 w-8 text-muted-foreground' />
          </div>
        </section>

        {/* About Section */}
        <section id='about' className='scroll-mt-16 relative'>
          <div className='absolute inset-0 bg-primary/5 -skew-y-3'></div>
          <div className='relative py-16'>
            <SectionHeader>About Me</SectionHeader>
            <div className='max-w-3xl mx-auto space-y-6 md:text-center px-3'>
              <p className='md:text-xl text-sm leading-relaxed'>
                As a Software Engineer based in Miami, FL, I blend a humanities
                background with strong analytical and technical skills, bringing
                a unique perspective to full-stack development. My passion lies
                in crafting intuitive, efficient, and accessible applications
                that deliver meaningful user experiences.
              </p>
              <p className='md:text-xl text-sm  leading-relaxed'>
                With a keen eye for detail and a problem-solving mindset, I
                specialize in building solutions that are not only functional
                but also user-centric and inclusive. As a heritage Spanish
                speaker, I approach development with a multicultural lens,
                ensuring the applications I create are globally minded and
                accessible to diverse audiences. My journey in software
                engineering is driven by a commitment to innovation, thoughtful
                design, and impactful problem-solving.
              </p>
              <div className='pt-8 space-y-4'>
                <h3 className='md:text-2xl text-xl font-semibold'>Education</h3>
                <div className='flex flex-col md:flex-row justify-center gap-6'>
                  <div className='bg-background p-4 rounded-lg shadow-md'>
                    <p className='font-semibold sm:text-base text-sm'>
                      Bachelor of Arts (BA)
                    </p>
                    <p className='text-muted-foreground sm:text-base text-xs'>
                      Providence College, May 2020
                    </p>
                  </div>
                  <div className='bg-background p-4 rounded-lg shadow-md'>
                    <p className='font-semibold sm:text-base text-sm'>
                      Advanced Software Engineering Immersive Program
                    </p>
                    <p className='text-muted-foreground sm:text-base text-xs'>
                      Galvanize - Hack Reactor, September 2021
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id='skills' className='scroll-mt-16 relative'>
          <div className='absolute inset-0 bg-secondary/20 skew-y-3'></div>
          <div className='relative md:py-16'>
            <SectionHeader>Skills & Technologies</SectionHeader>
            <div className='grid grid-cols-2 justify-items-center md:grid-cols-4 gap-8 '>
              <SkillCategory
                title='Frontend'
                skills={["JavaScript", "TypeScript", "React.js", "HTML", "CSS"]}
              />
              <SkillCategory
                title='Backend'
                skills={["Node.js", "Express", "API Development", "SQL"]}
              />
              <SkillCategory
                title='Tools & Methodologies'
                skills={["Git", "Agile", "Collaboration", "Adaptability"]}
              />
              <SkillCategory
                title='Languages'
                skills={["English", "Spanish"]}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id='projects' className='scroll-mt-16 relative'>
          <div className='absolute inset-0 bg-primary/5 -skew-y-3'></div>
          <div className='relative py-16'>
            <SectionHeader>Featured Projects</SectionHeader>
            <div className='grid md:grid-cols-2 gap-8 px-4'>
              <ProjectCard
                title='Munch Hunt'
                description='A web application that helps users discover and track local restaurants. Features include user authentication, restaurant search, and personalized recommendations.'
                image='/munchHunt.png'
                tags={[
                  "React",
                  "Typescript",
                  "TailwindCSS",
                  "GSAP",
                  "React Query",
                ]}
                demoLink='https://munchhunt.xyz/'
                codeLink='https://github.com/francisco-cmyk/munchHunt2'
              />
              <ProjectCard
                title='La Argentina Caffe'
                description='A single-page application for a newly inaugurated restaurant/cafeteria in Miami. Features a responsive design, menu display, and contact information.'
                image='/laArgentinaCaffe.png'
                tags={["React", "Typescript", "TailwindCSS"]}
                demoLink='https://laargentinacaffe.com/'
                codeLink='https://github.com/francisco-cmyk/laargentinacaffe'
              />
            </div>
            <div className='text-center mt-12'>
              <Button asChild variant='outline' size='lg'>
                <Link
                  to='https://github.com/francisco-cmyk'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github className='mr-2 h-4 w-4' /> See More on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id='experience' className='scroll-mt-16 relative'>
          <div className='absolute inset-0 bg-secondary/20 skew-y-3'></div>
          <div className='relative md:py-16'>
            <SectionHeader>Work Experience</SectionHeader>
            <div className='space-y-12'>
              {experiences.map((experience, index) => (
                <ExperienceItem key={index} {...experience} />
              ))}
            </div>
            <div className='text-center mt-12'>
              <Button asChild size='lg'>
                <a
                  href='/Francisco_Vera_Nicola_Resume.pdf'
                  download
                  className='md:text-base text-sm'
                >
                  <Download className='mr-2 h-4 w-4' /> Download Full Resume
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id='contact' className='scroll-mt-16 relative'>
          <div className='absolute inset-0 bg-primary/5 -skew-y-3'></div>
          <div className='relative py-16'>
            <SectionHeader>Get In Touch</SectionHeader>
            <div className='flex justify-center'>
              <div className='space-y-6'>
                <p className='md:text-lg md:text-left text-center text-muted-foreground'>
                  Have a project in mind or want to discuss potential
                  opportunities? Feel free to reach out!
                </p>
                <div className='space-y-6 flex md:flex-row flex-col space-x-3'>
                  <ContactInfo
                    icon={<Mail className='h-6 w-6' />}
                    label='Email'
                    value='fveranicola@gmail.com'
                  />
                  <ContactInfo
                    icon={<Linkedin className='h-6 w-6' />}
                    label='LinkedIn'
                    value='linkedin.com/in/fveranicola'
                  />
                  <ContactInfo
                    icon={<Github className='h-6 w-6' />}
                    label='GitHub'
                    value='github.com/francisco-cmyk'
                  />
                </div>
              </div>
              {/* <ContactForm /> */}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className='border-t py-8 mt-32'>
        <div className='container flex flex-col md:flex-row justify-between items-center'>
          <p className='text-muted-foreground'>
            © {new Date().getFullYear()} Francisco Vera. All rights reserved.
          </p>
          <div className='flex gap-4 mt-4 md:mt-0'>
            <SocialButton
              href='https://github.com/francisco-cmyk'
              icon={<Github className='h-4 w-4' />}
              label='GitHub'
            />
            <SocialButton
              href='https://linkedin.com/in/fveranicola'
              icon={<Linkedin className='h-4 w-4' />}
              label='LinkedIn'
            />
            <SocialButton
              href='mailto:fveranicola@gmail.com'
              icon={<Mail className='h-4 w-4' />}
              label='Email'
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
