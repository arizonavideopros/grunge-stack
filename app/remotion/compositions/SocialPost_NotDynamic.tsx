import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, Img, staticFile, Sequence, spring } from 'remotion';
import { TitleCard } from '../components/TitleCard';




const SocialPostVideo = ({ text, color, opacity, closing, }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Calculate scale value based on the current frame (0 to 1 and back to 0)

  const agentInfoScale = spring({
    fps,
    frame: frame - 7120,
    from: 1,
    to: 2,
    config: {
      damping: 50,
    },
    durationInFrames: 40,
  });

   
  const scale = interpolate(
    frame,
    [0, 220],
    [1, 1.3]
  );

  return (
    <>


    <sequence from={0}>
      <AbsoluteFill
        style={{
          backgroundColor: 'white',
        }}></AbsoluteFill>
    </sequence>
    <Sequence from={90}>

      <AbsoluteFill
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: color,
            }}
          >
            <div>
            </div>
        </AbsoluteFill>

        <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <Img
          src={staticFile('Sample_Photo.png')}
          alt="background image test"
          style={{
            position: 'absolute',
            objectFit: 'cover',
            objectPosition: 'center',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            transform: `scale(${scale})`,
            opacity: opacity,

          }}
        />
      </div>


        
    
      <AbsoluteFill
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 100,
          color: 'white',
          wordWrap: 'break-word',
        }}
      >
        <div
          style={{
            fontWeight: '700',
            marginLeft: '1rem',
            marginRight: '1rem',
            textShadow: '0px 0px 15px rgba(0,0,0,0.5)',
            lineHeight: 1,
          }}
        >
          {text}
        </div>
      </AbsoluteFill>
      <AbsoluteFill
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',

          }}
        >
        <div className='center' style={{backgroundColor: color}}>
              <div className='row auto-scale-text-med color-white' style={{textAlign:'left', marginInlineStart:'2rem', marginBottom:'0rem'}}> 
              1234 Easy Street
              </div>
              <div className='row auto-scale-text-med color-white' style={{textAlign:'left', marginInlineStart:'2rem', marginTop:'-1rem'}}> 
              Anytown, USA 12345
              </div>
        </div>
      </AbsoluteFill>
      </Sequence>
      
      <Sequence from={0}>
        <TitleCard title={text} BGcolor={color} GraphicDuration="150"/>
      </Sequence>
      
      
    

  </>
  );
};

export default SocialPostVideo;
