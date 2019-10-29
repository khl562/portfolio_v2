import React from 'react';
import './about.css';
import 'animate.css';
import 'aos/dist/aos.css';
import { IconContext } from 'react-icons';
import { TiCodeOutline } from 'react-icons/ti';
import { TiCloudStorageOutline} from 'react-icons/ti';
import { TiGroupOutline } from 'react-icons/ti';

class About extends React.Component {
    render() {
        return (
            <div className="about">
                <h3 className="about-head" data-aos="fade-right" data-aos-once="true">W H O   I   A M</h3>
                <div className="about-body" data-aos="fade-right" data-aos-delay="100" data-aos-once="true">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus fringilla vestibulum vehicula. Ut quis erat ac nisi auctor accumsan nec et ex. Sed massa nunc, posuere eu imperdiet gravida, 
                mattis quis orci. Nulla ex lacus, tempor sit amet consectetur et, faucibus id mauris. Pellentesque eros turpis, convallis ac posuere et, 
                malesuada eu libero. Aliquam elementum purus aliquam massa rutrum, vel congue augue tristique. Mauris tincidunt id nibh in maximus. Sed 
                quis urna vitae eros faucibus interdum. Quisque in porttitor neque. Ut vel ante lacus. Etiam a porttitor turpis, commodo dapibus ipsum.

                Aenean convallis dolor purus, nec tincidunt mauris bibendum sit amet. Vestibulum volutpat pellentesque condimentum. Donec lobortis elementum 
                urna. Aliquam varius mattis dolor, feugiat gravida tellus tristique at. Etiam non convallis est. Sed vitae magna volutpat, mattis dolor pulvinar, 
                sodales dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</div>

                <div className="what-do row">
                    <h3 className="what-head" data-aos="fade-right" data-aos-once="true">WHAT I LOVE TO DO</h3>
                    <div className="col box-item shadow blue" data-aos="fade-up" data-aos-delay="50" data-aos-once="true">
                        <div className="box-item">
                            <span className="box-icon"><IconContext.Provider value={{ className: 'browser-icon desc-icons' }}>
          <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true"><a href="google.com"><TiCodeOutline /></a></div>
          </IconContext.Provider></span>
                            <div className="desc">
                                <h3>Front End Development</h3>
                                <div className="desc-text">HTML5, CSS3, SASS, Javascript, jQuery, Bootstrap, SEO</div>
                            </div>
                        </div>
                    </div>
                    <div className="col box-item shadow yellow"  data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
                    <div className="box-item">
                            <span className="box-icon"><IconContext.Provider value={{ className: 'server-icon desc-icons' }}>
          <div data-aos="fade-up" data-aos-delay="150" data-aos-once="true"><a href="google.com"><TiCloudStorageOutline /></a></div>
          </IconContext.Provider></span>
                            <div className="desc">
                                <h3>Databases &amp; Server Side Development</h3>
                                <div className="desc-text">MySQL, MongoDB, Firebase, AWS, Node,js, Express.js</div>
                            </div>
                        </div>
                    </div>
                    <div className="col box-item shadow green"  data-aos="fade-up" data-aos-delay="150" data-aos-once="true">
                    <div className="box-item">
                            <span className="box-icon"><IconContext.Provider value={{ className: 'manage-icon desc-icons' }}>
          <div data-aos="fade-up" data-aos-delay="200" data-aos-once="true"><a href="google.com"><TiGroupOutline /></a></div>
          </IconContext.Provider></span>
                            <div className="desc">
                                <h3>Managerial Skils</h3>
                                <div className="desc-text">Front &amp; Back End Development, UI/UX Development, Documentation, Project Management, CRM</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;