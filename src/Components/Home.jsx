import React from "react";
import Card from "./Card";
import banner1 from "../assets/Banner1.png"
import banner2 from "../assets/Banner2.png"
import card1 from "../assets/card1.webp"
import card2 from "../assets/card2.jpg"
import card3 from "../assets/card3.jpg"
import card4 from "../assets/card 4.jpg"
import card5 from "../assets/card5.jpg"
import card6 from "../assets/card6.jpeg"
import BookNowButton from "./BooknowButton";

// const buttonIsClicked= ()=>{
//     alert('book now button is clicked');
// }

export default function Home() {
    return (
        <div className="mx-auto w-full  max-w-7xl">
        
            {/* <div className="relative w-full">
                <img
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover "
                    src={banner1}
                    alt="banner1"
                />
            </div> */}
            <div className="relative w-full">
                <img
                    className="w-full  md:h-[400px] lg:h-[520px] object-cover sm:h-auto"
                    src={banner1}
                    alt="banner1"
                />
                {/* <button   className="absolute mb-20 bottom-10 right-20 mr-20
                bg-yellow-400 text-white font-semibold  
                 px-6 py-3 rounded-md focus:outline-none max-lg:hidden"
 
                  onClick={()=>buttonIsClicked()}
                      >
                    Book Tour
                    <br/>
                    <span className="text-sm text-gray-400 mt-1">info@cogrowpk.com</span>
                </button> */}
                <BookNowButton
                    className="absolute mb-20 bottom-10 right-20 mr-20
                bg-yellow-400 text-white font-semibold  
                 px-6 py-3 rounded-md focus:outline-none max-lg:hidden"
                />
                
            </div>

            <section
                id="services"
            >
                <h1

                    className="text-gray-700 text-center   text-xl sm:text-5xl py-10 font-semibold mt-6 ">
                    Packages and Services
                </h1>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
                    <Card
                        Heading="Daily"
                        description={[
                            "Flexible seat",
                            "12 Hours",
                            "Day/Night",
                            "High Speed Internet",
                            "Unlimited Tea/Coffee",
                        ]}
                        imgURL={card1}
                    />
                    <Card
                        Heading="Flexible Desk"
                        description={[
                            "Flexible Seat",
                            "12 hours Monday to Saturday",
                            "Day/Night",
                            "High Speed Internet",
                            "Unlimited Tea/Coffee",
                            "Meeting Room Access",
                        ]}
                        imgURL={card2}
                    />
                    <Card
                        Heading="Dedicated Desk"
                        description={[
                            "Dedicated Seat",
                            "9 AM to 9 PM Monday to Saturday",
                            "Day/Night",
                            "High Speed Internet",
                            "Unlimited Tea/Coffee",
                            "Meeting Room Access",
                        ]}
                        imgURL={card3}
                    />
                    <Card
                        Heading="Meeting Room"
                        description={[
                            "Meeting Room for 4-6 Persons",
                            "9 AM TO 9 PM Monday to Friday",
                            "10 AM TO 6 PM Monday to Saturday",
                            "High Speed Internet",
                            "Unlimited Tea/Coffee",
                        ]}
                        imgURL={card4}
                    />
                    <Card
                        Heading="Dedicated Office"
                        description={[
                            "4-10 Persons Private Offices",
                            "9 AM to 9 PM Monday to Friday",
                            "10 AM to 6 PM Saturday",
                            "High Speed Internet",
                            "Unlimited Tea/Coffee",
                            "Meeting Room Access",
                        ]}
                        imgURL={card5}
                    />
                    <Card
                        Heading="Conference Spaces"
                        description={[
                            "Conference Space for 20-50 People",
                            "8-hours booking",
                            "Freshments",
                        ]}
                        imgURL={card6}
                    />
                </div>
            </section>
            <div className="relative w-full my-8  rounded-2xl mb-10">
                <img
                    className="w-full lg:h-[600px] md:h-[400px] sm:h-auto  object-cover"
                    src={banner2}
                    alt="banner2"
                />
            </div>
        </div>
    );
}
