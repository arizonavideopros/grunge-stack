import Lottie3 from '~/components/demopage/Lottie_LandingPage';
import Card_simple from '~/components/elements/card_simple';
// import { TestPlayer } from '~/remotion/players/Test_player';



export default function DesertNorthDemo() {
	
	return (
		<><section className="relative" style={{ background: 'linear-gradient(rgba(0,85,255,.07) 0,rgba(0,85,255,.05) 100%)' }}>

			<section className="relative pt-36 pb-24">
				<div className="container">
					<div className="grid lg:grid-cols-7 grid-cols-1 gap-16 items-center">

						<div className="lg:col-span-4" data-aos="fade-right">
							<div className="relative 2xl:-ml-64 lg:-ml-28 2xl:min-w-[130%] lg:w-[113%] w-full opacity-5">
								<img src="https://cdn.leonardo.ai/users/2624086e-2a5b-4b85-b9a3-6d8397cf29d5/generations/a674b6c9-ec97-42f2-87fd-7d851bf19806/Paper_art_style_2_A_clean_paper_art_style_illustration_of_0.jpg" alt="marketing-img" />
							</div>
						</div>

						<div className="lg:col-span-3" data-aos="fade-left">
							<div className="text-center sm:text-start">
								<h1 className="text-3xl/snug sm:text-4xl/snug xl:text-5xl/snug font-semibold mb-7">Personalized & Interactive 
									<span className="relative after:bg-green-500/50 after:-z-10 after:absolute after:h-6 after:w-full after:bottom-0 after:end-0">Videos </span> that are
									<span className="relative after:bg-green-500/50 after:-z-10 after:absolute after:h-6 after:w-full after:bottom-0 after:end-0">easy </span> to use
								</h1>
								<p className="text-base/relaxed text-gray-500">Experience landing pages with personalized & interactive videos</p>
								<div className="flex sm:flex-row flex-col gap-2 mt-10">
									<input type="email" className="sm:w-[75%] text-sm border-gray-300 focus:border-gray-200 focus:ring-0 rounded-md bg-white py-3" id="Email" aria-describedby="emailHelp" placeholder="Enter Your Email" />
									<button className="bg-primary text-white rounded-md text-sm font-semibold flex-none shadow-lg shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 px-8 py-3">Start Free Trial</button>
								</div>
								<p className="text-gray-400 text-xs mt-2">* No Credit Card Required</p>
							</div>
						</div>

					</div>
				</div>
			</section>

			<div className="absolute bottom-0 inset-x-0 hidden sm:block">
				<img src="https://cdn.leonardo.ai/users/2624086e-2a5b-4b85-b9a3-6d8397cf29d5/generations/a674b6c9-ec97-42f2-87fd-7d851bf19806/Paper_art_style_2_A_clean_paper_art_style_illustration_of_0.jpg" alt="white-wave-svg" className="w-full scale-x-100 scale-y-100 opacity-50" />
			</div>

		</section>
		
		<Lottie3 />
		
		<section className="py-16 lg:py-32 mx-auto">

				<div className="py-10 bg-slate-200">
					<div className="container bg-pink-300 mx-auto">

						<div className="text-center">
							<span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">Features</span>
							<h1 className="text-3xl font-medium mt-3 mb-4">Use Cases</h1>
							<p className="text-gray-500">Start working with <span className="text-primary"> Prompt</span> to manage your marketing better.</p>
						</div>


					</div>
				</div>

				<div className="py-16 lg:py-32 overflow-x-hidden mx-auto" data-aos="fade-up">
					<div className="container flex-auto mx-auto">
						<div className="row-auto flex mx-auto" >
					<div className="col-span-1 px-10"><Card_simple 
						title="Personalized Videos & Landing Pages"
						body="Create amazing landing pages that feature a personalized video with your clients name right in video."
						/></div>
					<div className="col-span-1 px-10">
						<Card_simple
						title="Interactive Videos"
						body="Ask your viewers interactive questions during the video, and dynamically change the video based on their responses."
						/></div>
											
					<div className="col-span-1 px-10"><Card_simple
						title="Dynamic Video Ads"
						body="With digital marketing, you can retarget customers who visit competitor's products, and serve them an add comparing it against your own product."
					/></div>

					<div className="col-span-1 px-10"><Card_simple
						title="Internal Communications"
					body="Explain employee benefits to your team, with each person's video containing plan details based on their previous selections"
					/></div>
						</div>
					</div>
				</div>



			</section></>

	);
}
