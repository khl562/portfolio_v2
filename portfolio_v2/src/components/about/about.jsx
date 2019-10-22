import React from 'react';
import './about.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <div className="about-head" data-aos="fade-right">W H O   I   A M</div>
                <div className="about-body" data-aos="fade-right" data-aos-delay="100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus fringilla vestibulum vehicula. Ut quis erat ac nisi auctor accumsan nec et ex. Sed massa nunc, posuere eu imperdiet gravida, 
                mattis quis orci. Nulla ex lacus, tempor sit amet consectetur et, faucibus id mauris. Pellentesque eros turpis, convallis ac posuere et, 
                malesuada eu libero. Aliquam elementum purus aliquam massa rutrum, vel congue augue tristique. Mauris tincidunt id nibh in maximus. Sed 
                quis urna vitae eros faucibus interdum. Quisque in porttitor neque. Ut vel ante lacus. Etiam a porttitor turpis, commodo dapibus ipsum.

                Aenean convallis dolor purus, nec tincidunt mauris bibendum sit amet. Vestibulum volutpat pellentesque condimentum. Donec lobortis elementum 
                urna. Aliquam varius mattis dolor, feugiat gravida tellus tristique at. Etiam non convallis est. Sed vitae magna volutpat, mattis dolor pulvinar, 
                sodales dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>

                <div className="what-do row">
                    <div class="col">fdsafasd</div>
                    <div class="col">asdfasdf</div>
                    <div class="col">adsfasdf</div>
                </div>
            </div>
        )
    }
}

export default About;