import Navigation from './components/Navigation/Navigation';
import './styles/globals.scss';
import 'tw-elements/dist/css/tw-elements.min.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        <main>{children}</main>
        <footer className='text-center pb-5 px-16'>
          <small>
            Copyright &copy; 2023 Oleg Plevan. <span className='whitespace-nowrap'>All rights reserved.</span>
          </small>
        </footer>
      </body>
    </html>
  );
}
