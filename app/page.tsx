import ContactForm from './components/ContactForm/ContactForm';

export default function Home() {
  return (
    <main>
      <section id='about'>About</section>
      <section id='work'>Work</section>
      <section id='experience'>Experience</section>
      <section id='contact' className='text-center pb-14'>
        <div className='custom-h1'>Get In Touch</div>
        <p>
          Want to get in touch or talk about a project? <br /> Feel free to contact me via email at{' '}
          <a href='mailto:oleg.plevan@gmail.com' className='fancy'>
            <span>oleg.plevan@gmail.com</span>
          </a>
          <br /> or drop a line in the form below and I&apos;ll get back to you as soon as possible.
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
