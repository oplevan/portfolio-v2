import Image from 'next/image';
import ContactForm from '../components/ContactForm/ContactForm';
import AnimatedScrollDownArrow from '../components/AnimatedScrollDownArrow/AnimatedScrollDownArrow';
import Button from '../components/Button/Button';
import Card from '../components/Project/Card/Card';
import allProjects from '@/public/data/projects';
import HeadShot from '@/public/assets/images/head-shot.jpeg';
import Experience from '../components/Experience/Experience';

export default function Home() {
  return (
    <>
      <section id='intro'>
        <div className='text-primary mb-4' data-aos='fade-up' data-aos-delay='900'>
          Hi, my name is
        </div>
        <div className='heading-1' data-aos='fade-up' data-aos-delay='1000'>
          Oleg Plevan.
        </div>
        <div className='heading-2 leading-thin mb-4' data-aos='fade-up' data-aos-delay='1100'>
          Transforming ideas into seamless <br className='hidden lg:block' /> Web and App Solutions.
        </div>
        <p className='lg:max-w-xl' data-aos='fade-up' data-aos-delay='1200'>
          I&apos;m a software engineer with a passion for creating seamless digital experiences that leave a lasting impact. From elegant web applications
          to&nbsp;intuitive mobile apps, I thrive on transforming ideas into reality with cutting&#8209;edge solutions.
        </p>
        <AnimatedScrollDownArrow />
      </section>
      <section id='about' data-aos='fade-up'>
        <div className='section-title'>About me</div>
        <div className='flex gap-10 items-start flex-col-reverse lg:flex-row lg:items-start' data-aos='fade-up' data-aos-delay='400'>
          <div className='flex flex-col gap-3 flex-1'>
            <p>
              Hey there, I&apos;m Oleg, a dedicated software developer with a strong skill set honed through years of hands-on experience. My journey as a
              developer has been shaped by a commitment to pushing the boundaries of what&apos;s possible. I specialize in architecting and developing robust
              applications that seamlessly marry functionality and design. My proficiency extends to AWS services, enabling me to build scalable and reliable
              systems that adapt to the demands of the digital landscape.
            </p>
            <p>
              What excites me most is the transformative potential of technology. Whether it&apos;s crafting intuitive user interfaces, optimizing performance
              for exceptional user experiences, or diving into collaborative cross-functional projects, I thrive on the challenges that come with turning
              concepts into reality.
            </p>
            <p>My expertise lies in the following technologies that empower me to create dynamic, user&#8209;centric digital solutions:</p>
            <ul className='skills-list'>
              <li>JavaScript(ES5+)</li>
              <li>HTML</li>
              <li>CSS(SCSS/SASS)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>React Native</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>AWS</li>
            </ul>
            <p>
              If you&apos;re looking for a developer who&apos;s not only passionate about coding but also dedicated to producing impactful digital solutions,
              I&apos;m here to collaborate and bring your ideas to life. Let&apos;s harness the full potential of technology together.
            </p>
          </div>
          <div className='max-w-[199px] lg:max-w-[300px] rounded-full border-[5px] border-slate-700 dark:border-slate-600 drop-shadow-xl m-auto lg:m-0'>
            <Image src={HeadShot} className='rounded-full overflow-hidden w-auto h-auto max-w-full max-h-full radius' alt='Head shot' />
          </div>
        </div>
      </section>
      <section id='projects'>
        <div className='section-title' data-aos='fade-up'>
          Projects
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {allProjects.slice(0, 3).map((project, index) => (
            <Card
              key={project.id}
              slug={project.slug}
              title={project.title}
              links={project.links}
              shortDescription={project.description.short}
              thumbnail={project.thumbnail}
              techList={project.techList}
              animationDelay={index % 3 === 0 ? 100 : index % 3 === 1 ? 200 : 300}
            />
          ))}
        </div>
        <div className='mt-10 flex justify-center'>
          <Button as='link' href='/projects' variant='primary' size='md'>
            View all projects
          </Button>
        </div>
      </section>
      <Experience />
      <section id='contact' data-aos='fade-up'>
        <div className='heading-3'>Get In Touch</div>
        <p>
          Want to get in touch or talk about a project? <br /> Feel free to contact me via email at{' '}
          <a href='mailto:oleg.plevan@gmail.com' className='fancy'>
            oleg.plevan@gmail.com
            <span />
            <span />
          </a>
          <br /> or drop a line in the form below and I&apos;ll get back to you as soon as possible.
        </p>
        <ContactForm />
      </section>
    </>
  );
}
