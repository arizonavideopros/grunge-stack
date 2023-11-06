import {zColor} from '@remotion/zod-types';
import {AbsoluteFill} from 'remotion';
import {z} from 'zod';

import {Logo} from './Logo';
import {Subtitle} from './Subtitle';
import {Title} from './Title';


export const myCompSchema = z.object({
	titleText: z.string(),
	titleColor: zColor(),
	logoColor: zColor(),
});

export const TailwindComp: React.FC<z.infer<typeof myCompSchema>> = ({
	titleText: propOne,
	titleColor: propTwo,
	logoColor: propThree,
}) => {
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<div className="m-10" />
			<Logo logoColor={propThree} />
			<div className="m-3" />
			<Title titleText={propOne} titleColor={propTwo} />
			<Subtitle />
		</AbsoluteFill>
	);
};
