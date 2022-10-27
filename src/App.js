import profilePic from './assets/profile__img.png'
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
        <img src={profilePic} alt="" />
        <div className='absolute right-6 top-[-20px] md:hidden'>
    <img src={dots} alt="" />
    </div>
    </div>
    
    <div className='hidden md:block'>
    <img src={arrow} alt="" />
    </div>
    <p className='font-bold'>Annette Black</p>
    <div>
        {datas.map((data, index)=>{
            const {id, name, link} = data;
            return <div className='bg-[#EAECF0] w-[90%] md:w-[80%] mx-auto py-4 my-4 rounded-lg text-sm' key={index}>
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
