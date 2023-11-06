import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import headerImage from "~/components/assets/HeaderImage_small.png";
import VideoIcon from '~/components/assets/video_icon.svg';
import CardBasic from "~/components/elements/card_basic";
import CardIcon from "~/components/elements/card_icon";
import { HomepagePlayer } from '~/remotion/players/homepage';
import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  const user = useOptionalUser();
  return (

    <main className="relative w-full min-h-screen bg-red sm:mx-0 sm:flex sm:items-center sm:justify-center">




      <div className="relative sm:pb-16 sm:pt-0">
        




        <div className="mx-auto w-full sm:px-0 lg:px-0">
          <div className="relative shadow-xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={headerImage}
                alt="Nirvana playing on stage with Kurt's jagstang guitar"
              />
              <div className="absolute inset-0 bg-[color:rgba(56,56,56,0.5)] mix-blend-multiply" />
            </div>
            <div className="relative px-4 pb-8 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-20 lg:pt-32">
              <h1 className="text-center text-3xl font-extrabold tracking-tight sm:text-8xl lg:text-5xl">
                <span className="block uppercase text-white drop-shadow-md">
                  PERSONALIZED VIDEO WORKFLOWS CREATED FOR YOUR SPECIFIC BUSINESS NEEDS.
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                Check the README.md file for instructions on how to get this
                project deployed.
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                {user ? (
                  <Link
                    to="/notes"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-red-700 shadow-sm hover:bg-red-50 sm:px-8"
                  >
                    View Notes for {user.email}
                  </Link>
                ) : (
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <Link
                      to="/join"
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-red-700 shadow-sm hover:bg-red-50 sm:px-8"
                    >
                      Sign up
                    </Link>
                    <Link
                      to="/login"
                      className="flex items-center justify-center rounded-md bg-red-500 px-4 py-3 font-medium text-white hover:bg-red-600"
                    >
                      Log In
                    </Link>
                  </div>
                )}
              </div>
              <a href="https://remix.run">
                <img
                  src="https://user-images.githubusercontent.com/1500684/158298926-e45dafff-3544-4b69-96d6-d3bcc33fc76a.svg"
                  alt="Remix"
                  className="mx-auto mt-16 w-full max-w-[12rem] md:max-w-[16rem]"
                />
              </a>
            </div>
          </div>
        </div>

        <div>
          player
        <HomepagePlayer />

        </div>

        <div className="flex flex-wrap">
                <div className="flex flex-grow w-full p-2">
                    <div className="w-1/2">
                      <div className={`flex items-center h-24`}>
                          <img src={ VideoIcon } alt="Customers love to interact with our videos" className="mr-4 w-10 h-10" />  {/* Updated this line */}
                          <div>
                            <h3 className="text-lg font-semibold">Interactive</h3>
                            <p className="text-sm">Customers can interact with your video, allowing for a more personalized experience and higher engagement.</p>
                          </div>
                        </div>
                    </div>
                    <div className="w-1/2 p-3 bg-slate-400">
                            <CardBasic 
                                imageSrc={ headerImage } 
                                title="Title" 
                                description="Description stuff here"
                                btntext="Demo"
                                link="/demo"
                                color="bg-white"
                            />
                    </div>
                </div>                
            </div>

        <section className="pt-36 pb-24 relative">
        <div className="container mx-auto">

          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-5">
              We are on a mission to
              <span className="relative z-0 after:bg-primary/30 after:-z-10 after:absolute md:after:h-6 sm:after:h-5 after:h-4 after:w-full after:bottom-0 after:end-0">revolutionize</span> the web
            </h1>
            <p className="text-lg text-gray-500">We are a full-stack web development studio, run by people who are very passionate about making the web more beautiful</p>
          </div>

        </div>
      </section>

      <div className="mx-auto py-5 px-0 bg-gray-100">
        <h1 className="text-4xl font-bold text-center my-10">Use Cases</h1>
        <div className="px-6 grid grid-cols-1 md:grid-cols-3 gap-3">

                      <CardBasic 
                          imageSrc={ headerImage } 
                          title="Title" 
                          description="Description stuff here"
                          btntext="Demo"
                          link="/demo"
                          color="bg-white text-black"
                      />

                      <CardBasic 
                          imageSrc={ headerImage } 
                          title="Title" 
                          description="Description stuff here"
                          btntext="Demo"
                          link="/demo"
                          color="bg-white"
                      />

                      <CardBasic 
                          imageSrc={ headerImage } 
                          title="Title" 
                          description="Description stuff here"
                          btntext="Demo"
                          link="/demo"
                          color="bg-white"
                      />
          



        </div>

  </div>


  <div className="mx-auto p-0">
        <h1 className="text-4xl font-bold text-center my-10">Why Personalization Matters</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <CardIcon
            iconSrc={VideoIcon}
            title="Personalized Video"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            bgColor="bg-green-500 text-white"
          />
          <CardIcon
            iconSrc={VideoIcon}
            title="Personalized Landing Pages"
            description="Engage with live Q&A and polls."
            bgColor="bg-blue-500 text-white"
          />
          <CardIcon
            iconSrc={VideoIcon}
            title="Video Production"
            description="Access recordings anytime, anywhere. Broadcast in real-time to a global audience."
            bgColor="bg-red-500 text-white"
          />
          <CardIcon
            iconSrc={VideoIcon}
            title="Consultation"
            description="Broadcast in real-time to a global audience. Broadcast in real-time to a global audience. Broadcast in real-time to a global audience. Broadcast in real-time to a global audience. Broadcast in real-time to a global audience. Broadcast in real-time to a global audience."
            bgColor="bg-purple-500 text-white"
          />
          <CardIcon
            iconSrc={VideoIcon}
            title="Interactive Sessions"
            description="Engage with live Q&A and polls."
            bgColor="bg-orange-500 text-white"
          />
          <CardIcon
            iconSrc={VideoIcon}
            title="On-Demand Content"
            description="Access recordings anytime, anywhere. Broadcast in real-time to a global audience."
            bgColor="bg-yellow-500 text-white"
          />
        </div>

  </div>





      <section>
        <div className="flex justify-center items-center relative z-20 translate-y-1/2">
          <div className="bg-red-500 text-white rounded-md text-sm font-semibold flex-none shadow cursor-pointer hover:shadow-lg focus:outline-none uppercase px-16 py-3">Stuff goes here</div>
        </div>

        <div className="flex items-center md:py-80 py-44" style={{ backgroundImage: "url('https://connectingscottsdalenorth.com/wp-content/uploads/2019/12/CSN_Header2-1024x576.jpg')", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}></div>
      </section>

      <section className="lg:py-24 py-16">
        <div className="container mx-auto" data-aos="fade-up">

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
            <div className="flex flex-col items-center lg:items-start">
              <div className="border-t-2 border-gray-300 w-1/5 mb-7"></div>
              <h1 className="text-3xl">About Us</h1>
            </div>

            <div>
              <p className="text-sm tracking-wider text-gray-600">
                Temporibus autem quibusdam et aut as officiis debitis aut rerum necessitatibus saepe eveniet voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus reiciendis.
              </p>
            </div>

            <div>
              <p className="text-sm tracking-wider text-gray-600">
                Temporibus autem quibusdam et aut as officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus reiciendis.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
              <div></div>

              <div className="col-span-2">
                <p className="text-sm tracking-wider text-gray-600">
                  Temporibus autem quibusdam et aut as officiis debitis aut rerum necessitatibus saepe eveniet voluptates repudiandae sint et molestiae non recusandae itaque earum rerum hic tenetur a sapiente delectus reiciendis.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      


      </div>
    </main>
  );
}