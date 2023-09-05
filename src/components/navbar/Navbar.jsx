import { ReactComponent as Logo } from '../../assets/images/icons/logo.svg'

const Navbar = () => {
  return (
    <nav className='flex justify-between mb-[50px] lg:mb-[155px]'>
      <a href="/"><Logo className='w-[150px] md:w-[200px] h-12' /></a>
      <ul className='flex justify-between items-center w-5/10 lg:w-4/10 xl:w-3/10 text-lg text-black-light'>
        <li><a href="#whoAreWe" className='hover:opacity-50'>Startups</a></li>
        <li><a href="#contact" className='hover:opacity-50'>Contact</a></li>
        <li className='py-2 px-3 md:px-8 border rounded-[35px] text-alba hover:opacity-50'><a href="#readyToBoard">Work with us!</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;