import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './components/header-navigation';
import './components/skip-content';
import './components/hero-section';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
