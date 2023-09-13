import 'tw-elements/dist/css/tw-elements.min.css';
import './styles/globals.scss';
import Navigation from './components/Navigation/Navigation';
import SideElement from './components/SideElement/SideElement';
import Button from './components/Button/Button';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { AOSInit } from './utils/aos';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <AOSInit />
      <body>
        <Navigation />
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
          {children}
        </main>
        <footer className='text-center pb-5 px-16'>
          <small>
            Copyright &copy; 2023 Oleg Plevan. <span className='whitespace-nowrap'>All rights reserved.</span>
          </small>
        </footer>
      </body>
    </html>
  );
}
