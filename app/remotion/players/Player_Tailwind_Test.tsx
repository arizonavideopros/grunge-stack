import { Player } from '@remotion/player';

import { TailwindComp } from '~/remotion/Composition';



export const TailwindPlayer: React.FC = () => {



  return (
    <div 
      style={{
        backgroundColor: 'transparent',
      }}
    
      >
      <div className="VideoContainer">
        < Player
          style={{ maxWidth: '900px', width: "100%" }}
          component={TailwindComp}
          compositionWidth={1280}
          compositionHeight={720}
          durationInFrames={2600}
          fps={30}
          controls
        />
      </div>

      <div>
							<p>Enter your name for a custom video:</p>
							<fetcher.Form method="post">
								<input
									type="text"
									onChange={onNameChange}
									value={personalizedName}
								/>
								<br></br>
								<button type="submit" onClick={onClick}>
									Render a video
								</button>
							</fetcher.Form>
						</div>


  );
};
