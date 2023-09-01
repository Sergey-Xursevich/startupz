import Logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
    <nav className='flex justify-between mb-28'>
      <img src={Logo} alt="Logo" />
      <ul className='flex justify-between items-center text-lg w-3/10'>
        <li><a href="/">Startups</a></li>
        <li><a href="/">Contact</a></li>
        <li className='py-2 px-5 border rounded-2xl text-alba'><a href="/">Work with us!</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;