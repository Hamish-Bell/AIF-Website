import './interests.css'
import soccer from '../assets/soccer.png'
import skyline from '../assets/skyline.png'
import tech from '../assets/tech.jpg'
import dog from '../assets/dog.jpg'

function Interests() {
    return (
        <>
            <div className='body'>

                <div className='interest1'>
                    <div className='text-container'>
                        <h1 className='title'>Soccer</h1>
                        <p className='info'>
                            Soccer has been one of my main interests for many years.
                            I enjoy playing with my teammates, improving my skills,
                            and challenging myself during games. Being part of a team
                            has also helped me develop communication, teamwork and discipline.
                        </p>
                    </div>

                    <img
                        src={soccer}
                        alt="PHK Team photo"
                        className='team-photo'
                    />
                </div>

                <div className='interest2'>
                    <div className='text-container'>
                        <h1 className='title'>Cars</hh1>
                        <p className='info'>
                            Cars have always been an interest of mine, especially
                            Japanese performance cars. My favourite car is the Nissan
                            Skyline R34, which I like for its iconic design, performance,
                            and history.
                        </p>
                    </div>

                    <img
                        src={skyline}
                        alt="Nissan Skyline R34"
                        className='car-photo'
                    />
                </div>

                <div className='interest3'>
                    <div className='text-container'>
                        <h1 className='title'>Technology</h1>
                        <p className='info'>
                            Technology is another major interest of mine, especially
                            programming and web development.
                        </p>
                    </div>

                    <img 
                        src={tech}
                        alt="tech-image"
                        className='tech-image'
                    />
                </div>

                <div className='interest4'>
                    <div className='text-container'>
                        <h1 className='title'>Pets</h1>
                        <p className='info'>
                            Pets have always been an important part of my life, especially my dog. I enjoy spending time with my dog and appreciate the companionship and happiness she brings.
                        </p>
                    </div>

                    <img 
                        src={dog}
                        alt="dog-image"
                        className='dog-image'
                    />
                </div>

            </div>
        </>
    )
}

export default Interests
