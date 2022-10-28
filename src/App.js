import profilePic from './assets/circlePic.png'
import { datas } from './data';
import slack from './assets/slack.svg'
import github from './assets/github.svg'
import Footer from './Footer';
import arrow from './assets/arrow.svg'
import dots from './assets/dots.svg'

function App() {
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
            const {id, name, link} = data;
            return <div className='bg-[#EAECF0] w-[90%] md:w-[80%] mx-auto py-5 my-5 rounded-lg text-sm' key={index}>
                <a target='_blank' href={link} id={id}>{name}</a>
            </div>
        })}
    </div>
    <div className='flex justify-center space-x-6 mt-12'>
        <img src={slack} alt="" />
        <img src={github} alt="" />
    </div>

    <Footer />
    </section>
 )
}

export default App;
