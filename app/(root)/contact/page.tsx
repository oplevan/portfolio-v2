import ContactForm from '@/components/ContactForm/ContactForm';
import PageWrapper from '@/components/page-wrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact me | Oleg Plevan - Software Developer',
  description: "I'm a dedicated software developer with a strong skill set honed through years of hands-on experience.",
};

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
