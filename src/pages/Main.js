import profilePic from '../assets/circlePic.png'
import { datas } from '../data';
import slack from '../assets/slack.svg'
import github from '../assets/github.svg'
import arrow from '../assets/arrow.svg'
import dots from '../assets/dots.svg'
import ReactTooltip from 'react-tooltip';
import { Link } from 'react-router-dom';

const Main = () => {
 return (
    <section className='text-center mt-14'>
    <div className='relative flex justify-center' id='profile__img'>
        <img className='w-[20%] md:w-[8%]' src={profilePic} alt="" />
    <div className='absolute right-6 top-[-20px] md:hidden'>
    <img src={dots} alt="" />
    </div>

    {/* slack username available in code but hidden in webpage  */}
    <p className='hidden' id='slack'>Godwin Edet Asuquo</p>

    <div className='hidden absolute right-[22%] top-[-20px] md:block'>
    <img src={arrow} alt="" />
    </div>
    </div>
    <p className='font-bold mt-6 mb-14'>Godwin Asuquo</p>
    <div>
        {datas.map((data, index)=>{
            const {id, name, link, subtext} = data;
            return (
            <>
            <div data-tip={subtext} className='bg-[#EAECF0] w-[90%] md:w-[80%] mx-auto py-5 my-5 rounded-lg text-sm hover:bg-gray-300 hover:shadow-xl' key={index} >
                <a target='_blank' rel="noreferrer" href={link} id={id} >{name}</a>
            </div>
        <ReactTooltip place='top' effect='solid'/>
            </>
            )
        })}
    </div>
        <Link to='/contact'>
        <button className='bg-[#EAECF0] w-[90%] md:w-[80%] mx-auto py-5 rounded-lg text-sm hover:bg-gray-300 hover:shadow-xl'>
            Contact Me
        </button>
        </Link>
    
    <div className='flex justify-center space-x-6 mt-12'>
        <img src={slack} alt="" />
        <img src={github} alt="" />
    </div>

    </section>
 )
}

export default Main