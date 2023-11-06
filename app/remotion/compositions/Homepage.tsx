import { AbsoluteFill, useVideoConfig, useCurrentFrame  } from "remotion";
import { PropComponent } from "~/remotion/components/PropComponent";

export const HomepageComp = () => {
  const { fps, durationInFrames, width, height } = useVideoConfig();
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontSize: 60,
        backgroundColor: "white",
      }}
    >
      This {width}x{height}px video is {durationInFrames / fps} seconds long.

      <PropComponent Name="Michael" Age="35"/>
    </AbsoluteFill>
  );
};