import {
  VideoCanvas,
  type VideoAspectRatio,
  VideoPausedContext,
  useVideoPlayer,
} from '@/lib/video';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';

import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';
import { Scene6 } from './video_scenes/Scene6';

export const SCENE_DURATIONS = {
  silicon: 5000,
  arrives: 4000,
  hardware: 5000,
  hardRule: 5000,
  checker: 5000,
  verified: 6000,
};

const VIDEO_ASPECT_RATIO: VideoAspectRatio = '16:9';

const SCENE_COMPONENTS = {
  silicon: Scene1,
  arrives: Scene2,
  hardware: Scene3,
  hardRule: Scene4,
  checker: Scene5,
  verified: Scene6,
} as const;

const SCENE_START_SEC: Record<string, number> = (() => {
  const out: Record<string, number> = {};
  let cumulativeMs = 0;
  for (const [key, ms] of Object.entries(SCENE_DURATIONS)) {
    out[key] = cumulativeMs / 1000;
    cumulativeMs += ms;
  }
  return out;
})();

interface VideoTemplateProps {
  durations?: Record<string, number>;
  loop?: boolean;
  paused?: boolean;
  muted?: boolean;
  onSceneChange?: (sceneKey: string) => void;
}

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  paused = false,
  muted = false,
  onSceneChange,
}: VideoTemplateProps = {}) {
  const { currentSceneKey } = useVideoPlayer({ durations, loop, paused });
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastSceneKeyRef = useRef<string | null>(null);
  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '');
  const SceneComponent =
    SCENE_COMPONENTS[baseSceneKey as keyof typeof SCENE_COMPONENTS];

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.45;
    if (paused) {
      audio.pause();
      return;
    }
    if (lastSceneKeyRef.current !== currentSceneKey) {
      lastSceneKeyRef.current = currentSceneKey;
      const targetTime = SCENE_START_SEC[baseSceneKey] ?? 0;
      if (Math.abs(audio.currentTime - targetTime) > 0.18) {
        audio.currentTime = targetTime;
      }
    }
    audio.play().catch(() => {});
  }, [baseSceneKey, currentSceneKey, muted, paused]);

  return (
    <VideoPausedContext.Provider value={paused}>
      <VideoCanvas
        aspectRatio={VIDEO_ASPECT_RATIO}
        className="commercial-root"
        style={{ backgroundColor: 'var(--color-bg-light)' }}
      >
        <div className="pointer-events-none absolute inset-0 z-20">
          <div className="absolute left-[5vw] top-[4.2vh] flex items-center gap-[0.65vw]">
            <div className="h-[0.36vw] w-[0.36vw] rotate-45 border border-[#d4bd7a]/75" />
            <span className="font-[var(--font-mono)] text-[0.56vw] tracking-[0.22em] text-[#bbb6a7]">
              CHEK / FIELD RECORD
            </span>
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
          {SceneComponent && <SceneComponent key={currentSceneKey} />}
        </AnimatePresence>
        <audio
          ref={audioRef}
          src={`${import.meta.env.BASE_URL}audio/bg_music.mp3`}
          preload="auto"
          autoPlay
          muted={muted}
        />
      </VideoCanvas>
    </VideoPausedContext.Provider>
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
