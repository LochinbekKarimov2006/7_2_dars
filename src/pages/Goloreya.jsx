import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

function Goloreya() {
    const [machines, setMachines] = useState([]);
    const [qoshish, setQoshish] = useState(30);
    const [qoshish1, setQoshish1] = useState(1);
    const [miqdor, setMiqdor] = useState(1);

    useEffect(() => {
        fetch(`http://localhost:3000/machines?page=${qoshish1}&limit=${qoshish}`)
            .then(response => response.json())
            .then(data => setMachines(data.results))
            .catch(error => console.error('Error fetching machines:', error));
    }, [qoshish, qoshish1]);

    function qosh() {
        if (qoshish1 <= 1) {
            setQoshish1(1);
        }
        if (qoshish <= 30) {
            setQoshish(30);
        }
        if (miqdor <= 1) {
            setMiqdor(1);
        }
    }

    function qoshish3() {
        setMiqdor(prevMiqdor => prevMiqdor + 1);
        setQoshish(30);
        setQoshish1(prevQoshish1 => prevQoshish1 + 1);
    }

    function ayrish() {
        if (qoshish1 > 1) {
            setMiqdor(prevMiqdor => prevMiqdor - 1);
            setQoshish(30);
            setQoshish1(prevQoshish1 => prevQoshish1 - 1);
        }
    }

    return (
        <div className='max-w-[1232px] mx-auto mt-[60px]'>
            <section className="bg-base-300 rounded-[10px]">
                <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-base-300 h-auto md:h-full flex flex-col">
                            <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img 
                                    src="https://www.fonstola.ru/images/201405/fonstola.ru_145776.jpg" 
                                    alt="Wines" 
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            </a>
                        </div>
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-base-300">
                            <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                                <img 
                                    src="https://avatars.mds.yandex.net/i?id=1c3477ff3c5065f7905062161afaf9c6_l-5597410-images-thumbs&ref=rim&n=13&w=2048&h=1147" 
                                    alt="Gin" 
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            </a>
                            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                                <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img 
                                        src="https://get.wallhere.com/photo/ocean-California-car-night-Monterey-f1-exotic-McLaren-ave-carmel-pebblebeach-week-supercar-carmelbythesea-spoiler-mclarenf1-downforce-hdk-carweek-montereycarweek2014-953273.jpg" 
                                        alt="Whiskey" 
                                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                </a>
                                <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img 
                                        src="//avatars.mds.yandex.net/i?id=f987504a15f9879ea5ac6d55181b46b2_l-5243585-images-thumbs&ref=rim&n=13&w=1080&h=717" 
                                        alt="Vodka" 
                                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-span-2 sm:col-span-1 md:col-span-1 h-auto md:h-full flex flex-col">
                            <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img 
                                    src="https://i.ytimg.com/vi/i4xGmKgjWhA/maxresdefault.jpg" 
                                    alt="Brandy" 
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="p-5 sm:p-8">
                <div className="div-1 my-[50px]">
                    {machines.map((data, id) => (
                        <Card key={id} className="bg-base-300 shadow-lg">
                            <CardHeader floated={false} color="blue-gray">
                                <img src={data.image} alt={data.title} />
                                <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
                                <IconButton
                                    size="sm"
                                    color="red"
                                    variant="text"
                                    className="!absolute top-4 right-4 rounded-full"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                    </svg>
                                </IconButton>
                            </CardHeader>
                            <CardBody>
                                <div className="mb-3 flex items-center justify-between">
                                    <Typography variant="h5" color="blue-gray" className="font-medium">
                                        {data.title}
                                    </Typography>
                                    <Typography color="blue-gray" className="flex items-center gap-1.5 font-normal">
                                        {data.start_production}
                                    </Typography>
                                </div>
                                <Typography color="gray">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolor minus nulla unde fugiat saepe ullam doloremque illum impedit!
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-3">
                                <Button size="lg" fullWidth={true}>
                                    Reserve
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
            <div className='w-full flex justify-center mb-[30px]'>
                <div className="join">
                    <button onClick={ayrish} className="join-item btn text-[20px]">«</button>
                    <button className="join-item btn text-[20px]">Page {miqdor}</button>
                    <button onClick={qoshish3} className="join-item btn text-[20px]">»</button>
                </div>
            </div>
        </div>
    );
}

export default Goloreya;
