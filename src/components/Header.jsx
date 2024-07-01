import Button from './UI/Button';
import logoImg from '../assets/logo.jpg';

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A food app" />
        <h1>Food Order App</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
}
