import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-black p-2'>
      <ul className='text-2xl font-medium text-neutral-50 flex justify-around'>
        <li className='hover:text-amber-400'><Link to='/'>Home</Link></li>
        <li className='hover:text-amber-400'><Link to='/about'>About</Link></li>
        <li className='hover:text-amber-400'><Link to='/services'>Services</Link></li>
        <li className='hover:text-amber-400'><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
