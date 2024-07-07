import React, { useState, useEffect } from 'react';
import Card from '../components/Card.jsx';
import EightBitStanding from '../components/EightBitStanding.jsx';

export default function About() {
    const apiURL = process.env.REACT_APP_ABOUT;
    const [blurb, setBlurb] = useState('My name is Zavier Andrianarivo and I\'m a rising senior studying computer science at NYU');

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log('API URL:', apiURL); // Log the API URL
                const response = await fetch(apiURL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('API Response:', data); // Log the entire response

                if (data.length > 0 && data[0].blurb) {
                    setBlurb(data[0].blurb); // Update state with fetched data
                    console.log('Blurb:', data[0].blurb); // Log blurb after setting state
                } else {
                    console.error('key does not exist in the response:', data);
                }
            } catch (err) {
                console.error('Error fetching:', err);
            }
        };

        fetchData();
    }, [apiURL]);

    const [slideOut, setSlideOut] = useState(false); // Added state for slideOut

    // handle scrolling animation
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
        <div className="w-full h-screen bg-gradient-to-b from-[#12171d] to-[#30363d] relative" id="about">
            <div className="py-[250px] ml-[90px] text-[#f1ecea] text-8xl font-normal font-['Eurostile']">
                00 [ABOUT]
            </div>
            <div className="absolute top-[120px] left-0 flex items-center justify-center">
                <Card data={blurb} slideOut={slideOut} />
            </div>
            <div className="mt-[-212px] mx-[1050px]">
                <EightBitStanding />
            </div>
        </div>
    );
}
