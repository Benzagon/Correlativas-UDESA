import React from 'react'
import "./Home.css"
import AbsoluteButtons from './AbsoluteButtons'
import CourseNode from './CourseNode'

const Home = () => {
  return (
    <div className='home'>
        <div className='titulo-carreras-wrapper'>
            <h1>Accedé a tu plan de estudios</h1>
            <div className='carreras-wrapper'>
                <a href='/diseño'>
                    <CourseNode data={{
                        label: "Licenciatura en Diseño",
                        foreground: "#fff",
                        background: "#7B035A",
                    }
                } /></a>
            </div>
        </div>
        <AbsoluteButtons label="" url={"https://www.utdt.edu/"}/>
    </div>
  )
}

export default Home