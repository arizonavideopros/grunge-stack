import { Player } from "@remotion/player";

import {HomepageComp} from "~/remotion/compositions/Homepage";

export const HomepagePlayer: React.FC = () => {
  return (
    <Player
      component={HomepageComp}
      durationInFrames={900}
      compositionWidth={640}
      compositionHeight={360}
      fps={30}
      controls={true}
    />
  );
};