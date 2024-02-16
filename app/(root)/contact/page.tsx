import ContactForm from '@/components/ContactForm/ContactForm';
import PageWrapper from '@/components/page-wrapper';

export default function Contact() {
  return (
    <PageWrapper className='text-center flex flex-col justify-center'>
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
    </PageWrapper>
  );
}
