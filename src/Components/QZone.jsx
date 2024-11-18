import image1 from '../assets/class.png'
import image2 from '../assets/swimming.png'
import image3 from '../assets/playground.png'
import image4 from '../assets/bg.png'

const QZone = () => {
    return (
        <div className='bg-[#F3F3F3] p-2 '>
            <h1 className='text-2xl font-medium my-4 text-start'>Q-Zone</h1>
            <div className=' flex flex-col items-center gap-6'>
                <img className='p-6  border-dotted border-2 ' src={image1} alt="" />
                <img className='p-6 border-dotted border-2' src={image2} alt="" />
                <img className='p-6 border-dotted border-2' src={image3} alt="" />
            </div>
            <img className='my-6' src={image4} alt="" />
        </div>
    );
};

export default QZone;