import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-6 gap-3'>
            <img className='w-[300px]' src={logo} alt="" />
            <h1 className='text-gray-400 text-lg '>Journalism Without Fear or Favour</h1>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;