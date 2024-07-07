import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Frame from '../components/Frame.jsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Projects() {
    const [projectsArr, setProjects] = useState([]);
    const apiURL = process.env.REACT_APP_PROJECTS;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(apiURL);
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const projects = await res.json();
                setProjects(projects);
            } catch (err) {
                console.error('Error retrieving projects:', err);
            }
        };

        fetchData();
    }, [apiURL]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="w-full h-screen bg-gradient-to-b from-[#30363d] to-[#647471] flex flex-col items-center justify-center text-center pt-32" id="projects">
            <div className="mb-8 text-[#f1ecea] text-8xl font-normal font-['Eurostile']">
                01 [PROJECTS]
            </div>
            <div className="w-full max-w-[800px] px-4 mt-4">
                <Slider {...settings}>
                    {projectsArr.map((project, index) => (
                        <Frame key={index} data={project} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};
