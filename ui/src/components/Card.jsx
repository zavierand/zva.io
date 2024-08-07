import React from 'react';

const Card = ({ data }) => {
    return (
        <div className="relative">
            <svg width="1160" height="763" viewBox="0 0 1160 763" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="-133" y="242.489" width="910" height="387" fill="#be475c"/>
                <path d="M965.898 241.29C989.849 241.214 1004.83 267.17 992.793 287.875L803.109 614.035C791.134 634.626 761.375 634.579 749.464 613.95L561.843 288.981C549.933 268.352 564.772 242.557 588.592 242.481L965.898 241.29Z" fill="#be475c"/>
            </svg>
            <div className="text-[#f1ecea] absolute top-[57%] left-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <h1 className="text-2xl font-['Eurostile']">
                    {data}
                </h1>
            </div>
        </div>
    );
};

export default Card;
