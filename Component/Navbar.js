import Image from 'next/image';
import apya from '../Images/APYAINDUSTRY.png';
const Navbar = () => (
  <nav class="navbarcontainer">
    <ul class="navbarcontainer_nav">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">Company</a>
      </li>
      <li>
        <a href="/shop">Shop</a>
      </li>
      <li>
        <a href="/">Safety</a>
      </li>
      <li class="logo">
        <Image src={apya} alt="Logo" class="header__logo" />
      </li>
      <li class="Push">
        <a href="/#">sell</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
