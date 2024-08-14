import React, { useEffect, useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
function Home() {
  const [machines, setMachines] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/machines?page=1&limit=3`)
        .then(response => response.json())
        .then(data => setMachines(data.results))
        .catch(error => console.error('Error fetching machines:', error));
}, []);
  return (
    <div className='max-w-[1232px] mx-auto'>
      
<div class="relative overflow-hidden">
    <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div class="sm:max-w-lg">
          <h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">This machine is very good.</h1>
          <p class="mt-4 text-xl text-gray-500">These versatile machines are capable of handling a wide range of tasks, making them a valuable asset in any operation.</p>
        </div>
        <div>
          <div class="mt-10">
            <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
              <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div class="flex items-center space-x-6 lg:space-x-8">
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <img src="https://i.pinimg.com/736x/98/7f/2c/987f2c08537c0d889a97ecd1004ad14c.jpg" class="h-full w-full object-cover object-center"/>
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="//avatars.mds.yandex.net/i?id=083246521c6ef7dfa95ca7c859752556_l-5632212-images-thumbs&ref=rim&n=13&w=1080&h=1349" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="//avatars.mds.yandex.net/i?id=d125dccb41da62c26bff656af5000321_l-5667262-images-thumbs&ref=rim&n=13&w=1080&h=1350" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://pbs.twimg.com/media/ECRa9kgXYAIgfZh.jpg" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="//avatars.mds.yandex.net/i?id=811206f4a27658181fe98097d35d6aca_l-8800190-images-thumbs&ref=rim&n=13&w=1080&h=1350" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                  <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="https://avatars.mds.yandex.net/i?id=19ede02c9456ac1107a577d6f4d830df_l-4909631-images-thumbs&ref=rim&n=13&w=1658&h=2048" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                    <div class="h-64 w-44 overflow-hidden rounded-lg">
                      <img src="//avatars.mds.yandex.net/i?id=5e5a76ceeab7096eb2382fe434cc0ddc_l-9205558-images-thumbs&ref=rim&n=13&w=1080&h=1350" alt="" class="h-full w-full object-cover object-center"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" class="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">Svelte Signals</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap items-center justify-between mb-8 mt-[50px]">
        <h2 class="mr-10 text-4xl font-bold leading-none md:text-5xl">
        Automobile / Car
        </h2>
        <a href="#"
            class="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">
            Go to insights -
        </a>
    </div>
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
  )
}

export default Home