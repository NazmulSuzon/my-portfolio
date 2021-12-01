import React, { useEffect } from 'react';
import BlogsData from './BlogsData';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blogs = () => {
    useEffect(()=>{
		AOS.init({duration:1100});
	},[])
    return (
        <section  id="blogs" style={{zIndex:'1'}}>
            <div className="container pt-5">
            <h3 data-aos="fade-down" className="text-center mt-4 ">BLOGS</h3>
            <div data-aos="zoom-in" className="devider"></div>
            <div data-aos="fade-up" className="d-flex justify-content-around align-items-center mt-3">
                {
                    BlogsData.map(data=><div style={{width:'300px'}}  className="d-flex flex-column align-items-center justify-content-center p-3">
                        <img className="w-100" src={data.blogImg} alt="" />
                        <div className="mt-2 text-center">
                        <a className="text-center" href="https://medium.com/@nazmulsuzon100/learning-web-development-at-programming-hero-58ff45a35c2b" target="_blank" rel="noreferrer">{data.blogTitle}</a>
                        </div>
                        
                    </div>)
                }
            </div>
            </div>
            
            
        </section>
    );
};

export default Blogs;