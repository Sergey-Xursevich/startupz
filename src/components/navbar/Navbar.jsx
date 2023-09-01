import { ReactComponent as Logo } from '../../assets/images/logo.svg'

const Navbar = () => {
  return (
    <nav className='flex justify-between mb-[155px]'>
      <Logo className='w-[200px] h-12' />
      <ul className='flex justify-between items-center w-3/10 text-lg text-black-light'>
        <li><a href="/" className='hover:opacity-50'>Startups</a></li>
        <li><a href="/" className='hover:opacity-50'>Contact</a></li>
        <li className='py-2 px-9 border rounded-[35px] text-alba hover:opacity-50'><a href="/">Work with us!</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;