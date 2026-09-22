import {
  ChevronDown,
  ChevronUp,
  Lock,
  Pause,
  Play,
  Repeat,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

import VideoTemplate, {
  SCENE_DURATIONS,
} from './VideoTemplate';
import { useSceneControls } from './useSceneControls';

const SCENE_DETAILS: Record<string, { title: string; filePath: string }> = {
  silicon: {
    title: 'The Silicon',
    filePath: 'src/components/video/video_scenes/Scene1.tsx',
  },
  arrives: {
    title: 'CHEK Arrives',
    filePath: 'src/components/video/video_scenes/Scene2.tsx',
  },
  hardware: {
    title: 'System to Hardware',
    filePath: 'src/components/video/video_scenes/Scene3.tsx',
  },
  hardRule: {
    title: 'The Hard Rule',
    filePath: 'src/components/video/video_scenes/Scene4.tsx',
  },
  checker: {
    title: 'Check the Checker',
    filePath: 'src/components/video/video_scenes/Scene5.tsx',
  },
  verified: {
    title: 'Verified',
    filePath: 'src/components/video/video_scenes/Scene6.tsx',
  },
};

function announceSceneSelection(index: number, sceneKeys: string[]) {
  const key = sceneKeys[index];
  const details = SCENE_DETAILS[key];
  if (!details?.filePath) return;
  window.parent.postMessage(
    {
      type: 'REPLIT_VIDEO_SCENE_SELECTED',
      payload: {
        sceneIndex: index,
        sceneCount: sceneKeys.length,
        sceneTitle: details.title || key,
        filePath: details.filePath,
        lineNumber: 1,
      },
    },
    '*',
  );
}

const PROGRESS_TICK_MS = 60;

export default function VideoWithControls() {
  const isIframed =
    typeof window !== 'undefined' && window.self !== window.top;
  const controls = useSceneControls(SCENE_DURATIONS);
  const [muted, setMuted] = useState(false);
  const {
    sceneKeys,
    activeIndex,
    locked,
    paused,
    mountKey,
    tick,
    durations,
    activeDuration,
    activeStartTime,
    totalDuration,
    onSceneChange,
    jumpTo,
    toggleLock,
    togglePause,
  } = controls;

  const [collapsed, setCollapsed] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [tapPinned, setTapPinned] = useState(false);
  const sensorRef = useRef<HTMLDivElement | null>(null);

  const handleJumpTo = useCallback(
    (index: number) => {
      jumpTo(index);
      announceSceneSelection(index, sceneKeys);
    },
    [jumpTo, sceneKeys],
  );

  useEffect(() => {
    if (!paused) return;
    const frozen = document
      .getAnimations()
      .filter((animation) => animation.playState === 'running');
    frozen.forEach((animation) => animation.pause());
    return () => frozen.forEach((animation) => animation.play());
  }, [paused]);

  useEffect(() => {
    if (!(collapsed && tapPinned)) return;
    const onDocPointerDown = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') return;
      const sensor = sensorRef.current;
      if (sensor && !sensor.contains(event.target as Node)) setTapPinned(false);
    };
    document.addEventListener('pointerdown', onDocPointerDown);
    return () => document.removeEventListener('pointerdown', onDocPointerDown);
  }, [collapsed, tapPinned]);

  const handleToggleCollapsed = useCallback(() => {
    setCollapsed((value) => {
      if (!value) {
        setHovering(false);
        setTapPinned(false);
      }
      return !value;
    });
  }, []);

  if (!isIframed) return <VideoTemplate />;

  const barVisible = !collapsed || hovering || tapPinned;

  return (
    <div className="relative h-screen w-full">
      <VideoTemplate
        key={mountKey}
        durations={durations}
        loop
        paused={paused}
        muted={muted}
        onSceneChange={onSceneChange}
      />
      <div
        ref={sensorRef}
        className="absolute bottom-0 left-0 right-0 z-50 flex flex-col justify-end"
        style={{ height: '25%' }}
        onPointerEnter={(event) => {
          if (event.pointerType === 'mouse') setHovering(true);
        }}
        onPointerLeave={(event) => {
          if (event.pointerType === 'mouse') setHovering(false);
        }}
        onPointerDown={(event) => {
          if (event.pointerType !== 'mouse' && collapsed) setTapPinned(true);
        }}
      >
        <div className="flex-1 w-full" aria-hidden="true" />
        <ControlBar
          visible={barVisible}
          collapsed={collapsed}
          locked={locked}
          paused={paused}
          muted={muted}
          sceneKeys={sceneKeys}
          activeIndex={activeIndex}
          activeDuration={activeDuration}
          activeStartTime={activeStartTime}
          totalDuration={totalDuration}
          tick={tick}
          onTogglePause={togglePause}
          onToggleLock={toggleLock}
          onToggleMute={() => setMuted((value) => !value)}
          onJumpTo={handleJumpTo}
          onToggleCollapsed={handleToggleCollapsed}
        />
      </div>
    </div>
  );
}

interface ControlBarProps {
  visible: boolean;
  collapsed: boolean;
  locked: boolean;
  paused: boolean;
  muted: boolean;
  sceneKeys: string[];
  activeIndex: number;
  activeDuration: number;
  activeStartTime: number;
  totalDuration: number;
  tick: number;
  onTogglePause: () => void;
  onToggleLock: () => void;
  onToggleMute: () => void;
  onJumpTo: (index: number) => void;
  onToggleCollapsed: () => void;
}

function ControlBar({
  visible,
  collapsed,
  locked,
  paused,
  muted,
  sceneKeys,
  activeIndex,
  activeDuration,
  activeStartTime,
  totalDuration,
  tick,
  onTogglePause,
  onToggleLock,
  onToggleMute,
  onJumpTo,
  onToggleCollapsed,
}: ControlBarProps) {
  return (
    <div
      className={`flex items-center gap-3 bg-black/50 px-5 py-4 backdrop-blur-sm transition-all duration-200 ease-out ${
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-full opacity-0'
      }`}
      aria-hidden={!visible}
    >
      <ControlButton
        label={paused ? 'Play' : 'Pause'}
        onClick={onTogglePause}
      >
        {paused ? <Play className="h-8 w-8" /> : <Pause className="h-8 w-8" />}
      </ControlButton>
      <ControlButton
        label={locked ? 'Loop current scene: on' : 'Loop current scene: off'}
        active={locked}
        onClick={onToggleLock}
      >
        {locked ? <Lock className="h-7 w-7" /> : <Repeat className="h-8 w-8" />}
      </ControlButton>
      <ControlButton
        label={muted ? 'Unmute audio' : 'Mute audio'}
        onClick={onToggleMute}
      >
        {muted ? <VolumeX className="h-8 w-8" /> : <Volume2 className="h-8 w-8" />}
      </ControlButton>
      <div className="w-px self-stretch bg-white/15" aria-hidden="true" />
      <PlaybackStatus
        sceneKeys={sceneKeys}
        activeIndex={activeIndex}
        activeDuration={activeDuration}
        activeStartTime={activeStartTime}
        totalDuration={totalDuration}
        tick={tick}
        paused={paused}
        onJumpTo={onJumpTo}
      />
      <ControlButton
        label={collapsed ? 'Show controls' : 'Hide controls'}
        onClick={onToggleCollapsed}
      >
        {collapsed ? (
          <ChevronUp className="h-10 w-10" />
        ) : (
          <ChevronDown className="h-10 w-10" />
        )}
      </ControlButton>
    </div>
  );
}

function ControlButton({
  label,
  active = false,
  onClick,
  children,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg transition-colors ${
        active
          ? 'bg-white/15 text-white hover:bg-white/25'
          : 'text-white/60 hover:bg-white/10 hover:text-white'
      }`}
      title={label}
      aria-label={label}
      aria-pressed={active || undefined}
    >
      {children}
    </button>
  );
}

function PlaybackStatus({
  sceneKeys,
  activeIndex,
  activeDuration,
  activeStartTime,
  totalDuration,
  tick,
  paused,
  onJumpTo,
}: {
  sceneKeys: string[];
  activeIndex: number;
  activeDuration: number;
  activeStartTime: number;
  totalDuration: number;
  tick: number;
  paused: boolean;
  onJumpTo: (index: number) => void;
}) {
  const [elapsed, setElapsed] = useState(0);
  const elapsedBaseRef = useRef(0);

  useEffect(() => {
    setElapsed(0);
    elapsedBaseRef.current = 0;
  }, [tick]);

  useEffect(() => {
    if (paused) return;
    const startedAt = performance.now();
    const id = window.setInterval(() => {
      setElapsed(elapsedBaseRef.current + performance.now() - startedAt);
    }, PROGRESS_TICK_MS);
    return () => {
      window.clearInterval(id);
      elapsedBaseRef.current += performance.now() - startedAt;
    };
  }, [paused, tick]);

  const progress =
    activeDuration > 0 ? Math.min(1, elapsed / activeDuration) : 0;
  const totalElapsed = Math.min(
    totalDuration,
    activeStartTime + Math.min(elapsed, activeDuration),
  );

  return (
    <>
      <div className="flex flex-1 items-center gap-1.5">
        {sceneKeys.map((key, index) => (
          <button
            key={key}
            type="button"
            onClick={() => onJumpTo(index)}
            className="relative min-h-[12px] flex-1 cursor-pointer overflow-hidden rounded-full bg-white/20 transition-all hover:h-4"
            style={{ height: '0.75rem' }}
            aria-label={`Jump to scene ${index + 1}`}
            aria-current={index === activeIndex ? 'true' : undefined}
          >
            <span
              className="absolute inset-y-0 left-0 rounded-full bg-white/90 transition-[width] duration-100"
              style={{
                width: `${index === activeIndex ? progress * 100 : 0}%`,
              }}
            />
          </button>
        ))}
      </div>
      <div className="shrink-0 font-mono text-xl tabular-nums text-white/60">
        {activeIndex + 1}/{sceneKeys.length}
      </div>
      <div
        className="min-w-[11ch] shrink-0 text-right font-mono text-xl tabular-nums text-white/80"
        role="timer"
        aria-label={`Playback time ${formatPlaybackTime(totalElapsed)} of ${formatPlaybackTime(totalDuration)}`}
      >
        {formatPlaybackTime(totalElapsed)} / {formatPlaybackTime(totalDuration)}
      </div>
    </>
  );
}

function formatPlaybackTime(durationMs: number): string {
  const totalSeconds = Math.max(0, Math.floor(durationMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}