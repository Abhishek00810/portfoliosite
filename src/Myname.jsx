import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Myname()
{
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <section class="bgimage" id="home">
        <div  class="container-fluid">
            <div class="row">
                <h2  data-aos="fade-up" data-aos-duration="2000" class="hero_title">Hi, it's me</h2>
                <h2 data-aos="fade-up" data-aos-duration="2200" class="hero_name">Abhishek.</h2>
                <p  data-aos="fade-up" data-aos-duration="2500" class="hero_desc">I'm a student, engineer.</p>     
                <div data-aos="fade-up" data-aos-duration="2700" >
            <a data-aos="fade-up" data-aos-duration="2500" id = "port_hero" href="#projects">View Portfolio</a> 
            </div>
            
            </div>
        </div>
    </section>
    )
}
export default Myname