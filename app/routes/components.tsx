import VideoIcon from '~/components/assets/video_icon.svg';
import Button from "~/components/elements/button";
import CardBasic from "~/components/elements/card_basic";
import CardHorizontal from "~/components/elements/card_horizontal";
import CardIcon from "~/components/elements/card_icon";
import CardProfile from "~/components/elements/card_profile";
import CardSimple from "~/components/elements/card_simple";
import CheckmarkIcon from "~/components/elements/checkmark_item";
import Header from "~/components/elements/header";
import MainNavigation from "~/components/ui/MainNavigation";

function MyRoute() {
  return (
    <>
        <div>
            <div>Nav Bars</div>
            <div>
                <MainNavigation />
            </div>

            <div>
                <Header 
                    title="My Awesome App" 
                    links={[
                    { name: "Home", href: "/" },
                    { name: "About", href: "/about" },
                    { name: "Contact", href: "/contact" }
                    ]}
                />

            </div>
            
        </div>

        <div>
            <div>Buttons</div>
            <div>
                <Button variant="primary">PRIMARY</Button>
                <Button variant="secondary">SECONDARY</Button>
            </div>
        </div>



        <div>
            <div>CONTAINERS</div>
            <div className="min-h-screen bg-gray-100">
                <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold">Basic Bold Title</h1>
                <h1 className="text-2xl font-semibold border-b-2 border-gray-300">Underlined title</h1>
                <h1 className="text-2xl font-bold bg-yellow-200 px-2">Hightlighted Title</h1>
                <h1 className="text-2xl font-bold text-shadow-lg">Shadowed Title</h1>
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                    Gradient Title
                    </h1>
                <h1 className="text-2xl font-bold text-transparent bg-clip-text border border-blue-500 p-2">
                    Outlined Title
                    </h1>
                
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-1">Your Title Here</h1>
                    <h2 className="text-lg text-gray-500">Your Subtitle Here</h2>
                </div>

                <span className="bg-blue-500 px-2 py-1 text-2xl font-bold text-white">Your Text Here</span>

                




                </div>
            </div>
            
    
            
        </div>


        <div>
            <div>CARD OPTIONS</div>


            <div className="flex flex-wrap">
                <div className="flex flex-grow w-full p-2">
                    <div className="w-32">
                            <CardBasic 
                                imageSrc="https://fakeimg.pl/600x400" 
                                title="Basic w-32 Card" 
                                description="It's 384px wide at a set width." 
                            />
                    </div>
                    <div className="w-64">
                            <CardBasic 
                                imageSrc="https://fakeimg.pl/600x400" 
                                title="Basic w-64 Card" 
                                description="It's 128px wide at a set width." 
                            />
                    </div>
                </div>                
            </div>

             



            <div className="space-y-4">
                <div className="flex-auto space-x-4 mx-auto">
                    <div className="row-auto flex mx-auto" >

                        <div className="p-4 w-1/4 col-span-1">
                            <CardBasic 
                                imageSrc="https://fakeimg.pl/600x400" 
                                title="Basic w-1/4 Card" 
                                description="This is a basic card with an image, title, and description." 
                            />
                        </div>

                        <div className="p-4 w-1/2 col-span-1">
                            <CardBasic 
                                imageSrc="https://fakeimg.pl/600x400" 
                                title="Basic w-1/2 Card" 
                                description="This is a basic card with an image, title, and description." 
                            />
                        </div>
                        <CardIcon
                            iconSrc={VideoIcon}
                            title="Sample Card"
                            description="This is a simple description."
                            bgColor="bg-blue-500 text-white"
                            />
                    </div>
                </div>

            <div className="p-4 w-4/5">
                <CardHorizontal 
                    imageSrc="https://fakeimg.pl/600x300" 
                    title="Horizontal Card" 
                    description="This card has an image on the left and content on the right." 
                />
                </div>
                
                <CardProfile 
                    avatarSrc="https://fakeimg.pl/300x300/cccccc/2e2e2e"
                    name="Jane Doe"
                    position="Software Developer"
                    bio="Jane is a passionate software developer with over 5 years of experience in the tech industry."
                />
            </div>

            <div className="py-16 lg:py-32 overflow-x-hidden mx-auto" data-aos="fade-up">
					<div className="container flex-auto mx-auto">
						<div className="row-auto flex mx-auto" >
					<div className="col-span-1 px-10"><CardSimple 
						title="Personalized Videos & Landing Pages"
						body="Create amazing landing pages that feature a personalized video with your clients name right in video."
						/></div>
					<div className="col-span-1 px-10">
						<CardSimple
						title="Interactive Videos"
						body="Ask your viewers interactive questions during the video, and dynamically change the video based on their responses."
						/></div>
											
					<div className="col-span-1 px-10"><CardSimple
						title="Dynamic Video Ads"
						body="With digital marketing, you can retarget customers who visit competitor's products, and serve them an add comparing it against your own product."
					/></div>

					<div className="col-span-1 px-10"><CardSimple
						title="Internal Communications"
					body="Explain employee benefits to your team, with each person's video containing plan details based on their previous selections"
					/></div>
						</div>
					</div>
				</div>



            C


  <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-10">Unmatched Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CardIcon
            iconSrc={VideoIcon}
            title="Live Streaming"
            description="Broadcast in real-time to a global audience."
            bgColor="bg-green-500 text-white"
          />
          <CardIcon
            iconSrc={CheckmarkIcon}
            title="Interactive Sessions"
            description="Engage with live Q&A and polls."
            bgColor="bg-blue-500 text-white"
          />
          <CardIcon
            iconSrc={VideoIcon}
            title="On-Demand Content"
            description="Access recordings anytime, anywhere."
            bgColor="bg-red-500 text-white"
          />
        </div>
        <div className="flex justify-center my-8">
          <Button variant="primary">Discover More</Button>
        </div>
  </div>

  <div className={`flex items-center p-4 h-24 ${bgColor}`}>
        <img src={iconSrc} alt={title} className="mr-4 w-10 h-10" />  {/* Updated this line */}
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>



  <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold text-center my-10">Meet the Experts</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <CardProfile
        avatarSrc="https://fakeimg.pl/300x300/ffcc00/000"
        name="John Doe"
        position="Lead Developer"
        bio="John leads our software development and brings over a decade of experience."
      />
      <CardProfile
        avatarSrc="https://fakeimg.pl/300x300/dddddd/000"
        name="Jane Smith"
        position="UX Designer"
        bio="Jane is a creative thinker and a master of user experience design."
      />
      {/* Repeat for other team members */}
    </div>
  </div>



  <div className="bg-gray-200">
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold text-center py-5">Why Choose Our Product?</h1>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <CardSimple
            title="Easy Integration"
            body="Our product easily integrates with your existing workflow and tools."
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <CardSimple
            title="Scalable Solutions"
            body="Grow your business with our scalable software that meets your needs."
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <CardSimple
            title="24/7 Support"
            body="Our dedicated support team is here for you around the clock."
          />
        </div>
      </div>
    </div>
  </div>

            
    
            
        </div>



    
    </>
  );
}

export default MyRoute;
