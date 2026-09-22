import {
  VideoCanvas,
  type VideoAspectRatio,
  useVideoPlayer,
} from '@/lib/video';
import { AnimatePresence } from 'framer-motion';

import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';
import { Scene6 } from './video_scenes/Scene6';

const SCENE_DURATIONS = {
  silicon: 5000,
  arrives: 4000,
  hardware: 5000,
  hardRule: 5000,
  checker: 5000,
  verified: 6000,
};

const VIDEO_ASPECT_RATIO: VideoAspectRatio = '16:9';

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({
    durations: SCENE_DURATIONS,
  });

  return (
    <VideoCanvas
      aspectRatio={VIDEO_ASPECT_RATIO}
      className="commercial-root"
      style={{ backgroundColor: 'var(--color-bg-light)' }}
    >
      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="absolute left-[5vw] top-[4.2vh] flex items-center gap-[0.65vw]">
          <div className="h-[0.36vw] w-[0.36vw] rotate-45 border border-[#d4bd7a]/75" />
          <span className="font-[var(--font-mono)] text-[0.56vw] tracking-[0.22em] text-[#bbb6a7]">CHEK / FIELD RECORD</span>
        </div>
        <div className="absolute right-[5vw] top-[4.2vh] font-[var(--font-mono)] text-[0.54vw] tracking-[0.18em] text-[#74766e]">
          00:00 — 00:30
        </div>
        <div className="scan-line absolute left-0 right-0 top-[-5%] h-[18vh] bg-gradient-to-b from-transparent via-[#d6bc78]/[0.035] to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_48%,rgba(0,0,0,.48)_120%)]" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 opacity-55">
        <MotionAmbient />
      </div>
      <AnimatePresence mode="sync" initial={false}>
        {currentScene === 0 && <Scene1 key="silicon" />}
        {currentScene === 1 && <Scene2 key="arrives" />}
        {currentScene === 2 && <Scene3 key="hardware" />}
        {currentScene === 3 && <Scene4 key="hard-rule" />}
        {currentScene === 4 && <Scene5 key="checker" />}
        {currentScene === 5 && <Scene6 key="verified" />}
      </AnimatePresence>
    </VideoCanvas>
  );
}

function MotionAmbient() {
  return (
    <>
      <div className="drift absolute left-[18vw] top-[18vh] h-[14vw] w-[14vw] rounded-full bg-[#b8954c]/[0.035] blur-[4vw]" />
      <div className="drift absolute bottom-[5vh] right-[18vw] h-[10vw] w-[10vw] rounded-full bg-[#a8afa0]/[0.035] blur-[3vw]" />
    </>
  );
}
