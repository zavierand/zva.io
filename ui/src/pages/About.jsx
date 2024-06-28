import React, { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';

export default function About() {
    const apiUrl = process.env.REACT_APP_ABOUT; // Corrected environment variable access

    const [data, setData] = useState(null);
    const [slideOut, setSlideOut] = useState(false); // Added state for slideOut

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl); // Fetch data from API
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json(); // Parse JSON response
                setData(result); // Update state with fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [apiUrl]);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            if (!aboutSection) return;

            const aboutSectionTop = aboutSection.offsetTop;
            const scrollY = window.scrollY;
            const windowInnerHeight = window.innerHeight;

            if (scrollY > aboutSectionTop - windowInnerHeight / 2) {
                setSlideOut(false);
            } else {
                setSlideOut(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="w-full h-screen bg-[#CDE3F4] relative" id="about">
            <div className="py-[250px] ml-[90px] text-[#376096] text-8xl font-normal font-['Eurostile']">
                00 [ABOUT]
            </div>
            <div className="absolute top-[120px] left-0 flex items-center justify-center">
                <Card data={data} slideOut={slideOut} />
            </div>
        </div>
    );
};

