import ContactForm from './components/ContactForm/ContactForm';
import AnimatedScrollDownArrow from './components/AnimatedScrollDownArrow/AnimatedScrollDownArrow';
import SideElement from './components/SideElement/SideElement';
import Button from './components/Button/Button';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { Sky, Buildings } from './components/CityScape';

export default function Home() {
  return (
    <main>
      <SideElement side='left'>
        <Button as='link' href='https://github.com/oplevan' variation='icon-button' size='lg' icon={<FiGithub />} externalLink />
        <Button as='link' href='https://www.linkedin.com/in/oleg-plevan-626076134' variation='icon-button' size='lg' icon={<FiLinkedin />} externalLink />
        <Button as='link' href='https://www.instagram.com/o_plevan/' variation='icon-button' size='lg' icon={<FiInstagram />} externalLink />
      </SideElement>
      <SideElement side='right'>
        <a
          href='mailto:oleg.plevan@gmail.com'
          className='easy-in-out duration-300 [writing-mode:vertical-rl] font-mono leading-none hover:-translate-y-1 p-3 -m-3 block hover:text-primary hover:dark:text-dark-primary'
        >
          oleg.plevan@gmail.com
        </a>
      </SideElement>
      <Sky id='intro'>
        <div className='content intro-content'>
          <div className='text-primary dark:text-dark-primary mb-6'>Hi, my name is</div>
          <div className='heading-1'>Oleg Plevan.</div>
          <div className='heading-2 leading-thin mb-6'>
            Transforming ideas into seamless <br className='hidden lg:block' /> Web and App Solutions.
          </div>
          <p className='lg:max-w-xl'>
            I&apos;m a software engineer with a passion for creating seamless digital experiences that leave a lasting impact. From elegant web applications
            to&nbsp;intuitive mobile apps, I thrive on transforming ideas into reality with cutting&#8209;edge solutions.
          </p>
          <AnimatedScrollDownArrow />
        </div>
      </Sky>
      <Buildings id='about'>
        <div className='content about-content'>
          <div className='heading-2'>About me</div>
        </div>
      </Buildings>
      {/* <section id='work'>Work</section>
      <section id='experience'>Experience</section>
      <section id='contact' className='text-center pb-14'>
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
      </section> */}
    </main>
  );
}
