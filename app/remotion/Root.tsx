import { Composition } from 'remotion';

import { HomepageComp } from './compositions/Homepage';
import {TailwindComp, myCompSchema} from './Composition'
import './style.css';

import {
	COMPOSITION_DURATION_IN_FRAMES,
	COMPOSITION_FPS,
	COMPOSITION_HEIGHT,
	COMPOSITION_ID,
	COMPOSITION_WIDTH,
} from './constants';
import { LogoAnimation } from './logo-animation';

export const RemotionRoot = () => {
	return (
		<>
			<Composition
				id={COMPOSITION_ID}
				component={LogoAnimation}
				durationInFrames={COMPOSITION_DURATION_IN_FRAMES}
				fps={COMPOSITION_FPS}
				width={COMPOSITION_WIDTH}
				height={COMPOSITION_HEIGHT}
				defaultProps={{ 
					personalizedName: 'stranger'
				 }}
			/>
			<Composition
				id="TailwindTest"
				component={TailwindComp}
				durationInFrames={240}
				fps={30}
				width={1280}
				height={720}
				schema={myCompSchema}
				defaultProps={{
					titleText: 'Welcome to Remotion with Tailwind CSS',
					titleColor: '#000000',
					logoColor: '#00bfff',
				}}
			/>
			<Composition
				id="HomepageComp"
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				component={HomepageComp}
				defaultProps={{ 
					Name: "Somebody",
					Age: 100,
				 }}
				/>



		</>
	);
};
