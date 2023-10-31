import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

import React from 'react';

function Home() {
    return(
        <>
        <h1 className="text-center py-16 text-4xl text-red-500">
            Welcome to Event Bookie
        </h1>
        <h3 className="text-center py-4 text-xl text-orange-500">
            Where you can find events you'll love!
        </h3>
        <div className="flex justify-center items-center py-8">
            <div className="flex justify-center border rounded-lg overflow-hidden w-1/2">
                <input
                type="text"
                placeholder="Search for events near you"
                className="search-input flex-grow px-4 py-2 text-center"
                />
                <button className="search-button bg-red-500 text-white px-4 py-4 hover:bg-blue-600">
                Search
                </button>
            </div>
        </div>
        <h1 className="text-red-500 text-4xl text-center py-24">
            Top events in your area
        </h1>
        <div className = "bg-red-50 m-0">
            <div className="flex justify-center items-center space-x-12 mb-8">
                {" "}
                {/* I've added mb-8 here */}
                <div className="w-1/4 relative">
                    <img
                    className="w-full h-64 object-cover"
                    src="/images/drake.jpeg"
                    alt="image of Drake"
                    />
                    <div className="bg-orange-300 p-2 text-center rounded-md">
                    Event Name <br />
                    Event Date <br />
                    Location <br />
                    Price-Range
                    </div>
                </div>
                <div className="w-1/4 relative">
                    <img
                    className="w-full h-64 object-cover"
                    src="/images/lil uzi.jpeg"
                    alt="image of lil uzi"
                    />
                        <div className="bg-orange-300 p-2 text-center rounded-md">
                        Event Name <br />
                        Event Date <br />
                        Location <br />
                        Price-Range
                        </div>
                </div>
                <div className="w-1/4 relative">
                    <img
                    className="w-full h-64 object-cover"
                    src="/images/070 shake.jpeg"
                    alt="image of 070 shake"
                    />
                    <div className="bg-orange-300 p-2 text-center rounded-md">
                        Event Name <br />
                        Event Date <br />
                        Location <br />
                        Price-Range
                    </div>
                </div>
  </div>
            
        </div>
        </>
    );

}

export default Home;