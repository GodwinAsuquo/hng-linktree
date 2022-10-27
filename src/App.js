import profilePic from './assets/profile__img.png'
import { datas } from './data';

function App() {
 return (
    <section className='text-center'>
    <div className='flex justify-center' id='profile__img'>
        <img src={profilePic} alt="" />
    </div>
    <p>Annette Black</p>
    <div>
        {datas.map((data, index)=>{
            const {id, name, link} = data;
            return <div className='bg-[#EAECF0] w-[90%] md:w-[80%] mx-auto py-4 my-4 rounded-lg text-sm' key={index}>
                <a href={link} id={id}>{name}</a>
            </div>
        })}
    </div>
    </section>
 )
}

export default App;
