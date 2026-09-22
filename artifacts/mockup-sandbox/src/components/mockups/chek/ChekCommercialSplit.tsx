import {
  Check,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Lock,
  Pause,
  Play,
  RotateCcw,
  ShieldCheck,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Scene = {
  key: string;
  index: string;
  title: string;
  kicker: string;
  body: string;
  signal: string;
  accent: string;
};

const scenes: Scene[] = [
  {
    key: "silicon",
    index: "01",
    title: "The Silicon",
    kicker: "Physical root of trust",
    body: "Every claim starts with a piece of hardware that can be inspected.",
    signal: "SILICON / 01",
    accent: "#cfb570",
  },
  {
    key: "arrives",
    index: "02",
    title: "CHEK Arrives",
    kicker: "Independent verification",
    body: "CHEK arrives outside the system it is asked to evaluate.",
    signal: "INGRESS / 02",
    accent: "#a9c4b1",
  },
  {
    key: "hardware",
    index: "03",
    title: "System to Hardware",
    kicker: "Traceable evidence",
    body: "A declared system becomes a chain of facts, from software to silicon.",
    signal: "TRACE / 03",
    accent: "#c8b7a4",
  },
  {
    key: "hardRule",
    index: "04",
    title: "The Hard Rule",
    kicker: "No self-attestation",
    body: "The checker cannot check itself. The boundary is the point.",
    signal: "BOUNDARY / 04",
    accent: "#d0a37f",
  },
  {
    key: "checker",
    index: "05",
    title: "Check the Checker",
    kicker: "Governance in public",
    body: "The verification path is exposed, repeatable, and independently observed.",
    signal: "REVIEW / 05",
    accent: "#b6c9a8",
  },
  {
    key: "verified",
    index: "06",
    title: "Verified",
    kicker: "A preserved result",
    body: "A signed result survives the moment of inspection.",
    signal: "VERIFIED / 06",
    accent: "#d8c68b",
  },
];

function formatClock(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
}

function SignalMap({ activeIndex }: { activeIndex: number }) {
  const nodes = [
    { x: 80, y: 58, label: "FACTS" },
    { x: 180, y: 136, label: "CHEK" },
    { x: 305, y: 76, label: "RULE" },
    { x: 418, y: 168, label: "RESULT" },
  ];

  return (
    <svg
      className="chek-map"
      viewBox="0 0 500 225"
      role="img"
      aria-label="Verification chain diagram"
    >
      <defs>
        <linearGradient id="chek-trace" x1="0%" x2="100%">
          <stop offset="0%" stopColor="#8e7d55" stopOpacity=".1" />
          <stop offset="50%" stopColor="#e1c97e" stopOpacity=".95" />
          <stop offset="100%" stopColor="#8e7d55" stopOpacity=".12" />
        </linearGradient>
        <filter id="chek-soft-glow">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
      <path className="chek-map-grid" d="M0 28H500M0 98H500M0 168H500M45 0V225M145 0V225M245 0V225M345 0V225M445 0V225" />
      <path className="chek-map-trace" d="M80 58 L180 136 L305 76 L418 168" />
      <path className="chek-map-trace chek-map-trace-ghost" d="M80 58 L180 136 L305 76 L418 168" />
      {nodes.map((node, index) => {
        const isActive = index <= Math.min(activeIndex, 3);
        return (
          <g key={node.label} className={isActive ? "chek-map-node is-live" : "chek-map-node"}>
            {isActive && <circle cx={node.x} cy={node.y} r="14" className="chek-node-halo" />}
            <circle cx={node.x} cy={node.y} r="5.5" />
            <circle cx={node.x} cy={node.y} r="2" className="chek-node-core" />
            <text x={node.x + 12} y={node.y - 12}>{node.label}</text>
          </g>
        );
      })}
      <text className="chek-map-caption" x="8" y="215">EVIDENCE PATH / LIVE SIGNAL</text>
    </svg>
  );
}

function SmallButton({
  label,
  onClick,
  active = false,
  children,
}: {
  label: string;
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={`chek-icon-button ${active ? "is-active" : ""}`}
      aria-label={label}
      title={label}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function ChekCommercialSplit() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);
  const [locked, setLocked] = useState(false);
  const [progress, setProgress] = useState(36);
  const [manifestOpen, setManifestOpen] = useState(false);
  const activeScene = scenes[activeIndex];
  const elapsed = useMemo(() => Math.round((progress / 100) * 17), [progress]);
  const totalElapsed = activeIndex * 17 + elapsed;

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          if (locked) return 0;
          setActiveIndex((index) => (index + 1) % scenes.length);
          return 0;
        }
        return current + 0.9;
      });
    }, 120);
    return () => window.clearInterval(timer);
  }, [locked, paused]);

  const selectScene = (index: number) => {
    setActiveIndex(index);
    setProgress(index === activeIndex ? progress : 12);
  };

  const goToScene = (offset: number) => {
    setActiveIndex((current) => (current + offset + scenes.length) % scenes.length);
    setProgress(8);
  };

  return (
    <main className="chek-commercial-variant">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        .chek-commercial-variant {
          --ink: #e9e3d5;
          --ink-dim: #9c9d92;
          --ink-faint: #626760;
          --panel: #111310;
          --panel-soft: #171916;
          --edge: rgba(219, 205, 171, .16);
          --gold: #cfb570;
          min-height: 100dvh;
          width: 100%;
          overflow: hidden;
          color: var(--ink);
          background:
            radial-gradient(circle at 65% 34%, rgba(196, 165, 93, .11), transparent 29rem),
            radial-gradient(circle at 6% 88%, rgba(106, 124, 108, .12), transparent 22rem),
            #090b09;
          font-family: "DM Sans", system-ui, sans-serif;
          position: relative;
          isolation: isolate;
        }
        .chek-commercial-variant::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: .12;
          z-index: 20;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.72' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='.25'/%3E%3C/svg%3E");
          mix-blend-mode: soft-light;
        }
        .chek-shell {
          display: grid;
          grid-template-columns: 244px minmax(0, 1fr) 278px;
          grid-template-rows: 78px minmax(0, 1fr);
          min-height: 100dvh;
          position: relative;
          z-index: 1;
        }
        .chek-topbar {
          grid-column: 1 / -1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 28px;
          border-bottom: 1px solid var(--edge);
          background: rgba(9, 11, 9, .76);
          backdrop-filter: blur(18px);
        }
        .chek-brand {
          display: flex;
          align-items: center;
          gap: 13px;
          letter-spacing: .2em;
          font-family: "Space Grotesk", sans-serif;
          font-size: 13px;
          font-weight: 600;
        }
        .chek-brand-mark {
          width: 25px;
          height: 25px;
          border: 1px solid rgba(221, 205, 159, .76);
          border-radius: 50%;
          position: relative;
        }
        .chek-brand-mark::before,
        .chek-brand-mark::after {
          content: "";
          position: absolute;
          background: var(--gold);
        }
        .chek-brand-mark::before { width: 9px; height: 1px; top: 11px; left: 7px; }
        .chek-brand-mark::after { width: 1px; height: 9px; top: 7px; left: 11px; }
        .chek-top-status {
          display: flex;
          align-items: center;
          gap: 20px;
          color: var(--ink-dim);
          font-family: "IBM Plex Mono", monospace;
          font-size: 10px;
          letter-spacing: .13em;
          text-transform: uppercase;
        }
        .chek-live-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          margin-right: 8px;
          border-radius: 50%;
          background: #92b89f;
          box-shadow: 0 0 0 4px rgba(146, 184, 159, .11);
          animation: chek-breathe 2.8s ease-in-out infinite;
        }
        .chek-rail {
          border-right: 1px solid var(--edge);
          padding: 31px 20px 24px;
          display: flex;
          flex-direction: column;
          min-height: 0;
          background: linear-gradient(180deg, rgba(17,19,16,.56), rgba(9,11,9,.2));
        }
        .chek-rail-heading,
        .chek-inspector-heading {
          color: var(--ink-faint);
          font-family: "IBM Plex Mono", monospace;
          font-size: 9px;
          letter-spacing: .18em;
          text-transform: uppercase;
        }
        .chek-rail-heading { margin: 0 0 20px 9px; }
        .chek-scene-list {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .chek-scene-button {
          border: 1px solid transparent;
          color: var(--ink-dim);
          display: grid;
          grid-template-columns: 28px 1fr auto;
          gap: 10px;
          align-items: center;
          width: 100%;
          min-height: 58px;
          padding: 10px 9px;
          text-align: left;
          background: transparent;
          cursor: pointer;
          transition: background-color .2s ease, border-color .2s ease, color .2s ease;
        }
        .chek-scene-button:hover { border-color: rgba(219,205,171,.19); color: var(--ink); }
        .chek-scene-button.is-selected {
          border-color: rgba(207,181,112,.38);
          background: linear-gradient(90deg, rgba(207,181,112,.13), rgba(207,181,112,.025));
          color: var(--ink);
        }
        .chek-scene-no {
          color: var(--ink-faint);
          font: 10px "IBM Plex Mono", monospace;
        }
        .chek-scene-button.is-selected .chek-scene-no { color: var(--gold); }
        .chek-scene-title {
          font: 500 12px "Space Grotesk", sans-serif;
          letter-spacing: .01em;
        }
        .chek-scene-type {
          display: block;
          margin-top: 4px;
          color: var(--ink-faint);
          font: 9px "IBM Plex Mono", monospace;
          letter-spacing: .05em;
          text-transform: uppercase;
        }
        .chek-scene-mark {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          border: 1px solid currentColor;
          opacity: .46;
        }
        .is-selected .chek-scene-mark { opacity: 1; background: var(--gold); border-color: var(--gold); box-shadow: 0 0 0 4px rgba(207,181,112,.1); }
        .chek-rail-footer {
          margin-top: auto;
          border-top: 1px solid var(--edge);
          padding: 18px 9px 0;
          color: var(--ink-faint);
          font: 10px/1.6 "IBM Plex Mono", monospace;
          text-transform: uppercase;
          letter-spacing: .09em;
        }
        .chek-rail-footer strong { display: block; color: var(--ink-dim); font-weight: 400; }
        .chek-workspace {
          min-width: 0;
          min-height: 0;
          display: flex;
          flex-direction: column;
          padding: 34px clamp(24px, 4vw, 62px) 28px;
        }
        .chek-crumbs {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 28px;
        }
        .chek-eyebrow {
          color: var(--gold);
          font: 10px "IBM Plex Mono", monospace;
          letter-spacing: .17em;
          text-transform: uppercase;
        }
        .chek-frame-id {
          color: var(--ink-faint);
          font: 10px "IBM Plex Mono", monospace;
          letter-spacing: .1em;
        }
        .chek-stage {
          flex: 1;
          min-height: 390px;
          border: 1px solid rgba(218,205,175,.2);
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(135deg, rgba(20,22,18,.96), rgba(11,13,11,.93)),
            #111310;
          box-shadow: 0 24px 64px rgba(0,0,0,.26), inset 0 0 0 1px rgba(255,255,255,.025);
        }
        .chek-stage::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(217,204,172,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(217,204,172,.045) 1px, transparent 1px);
          background-size: 55px 55px;
          mask-image: linear-gradient(90deg, transparent, black 20%, black 75%, transparent);
          pointer-events: none;
        }
        .chek-stage-noise {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 40%, rgba(198,171,102,.13), transparent 19%), radial-gradient(circle at 85% 90%, rgba(119,146,128,.13), transparent 28%);
          pointer-events: none;
        }
        .chek-stage-head {
          position: absolute;
          left: 26px;
          right: 26px;
          top: 22px;
          display: flex;
          justify-content: space-between;
          color: var(--ink-faint);
          font: 9px "IBM Plex Mono", monospace;
          letter-spacing: .13em;
          text-transform: uppercase;
        }
        .chek-stage-content {
          position: relative;
          display: flex;
          height: 100%;
          min-height: 390px;
          flex-direction: column;
          justify-content: center;
          padding: 72px 8% 54px;
        }
        .chek-stage-kicker {
          color: var(--ink-dim);
          font: 11px "IBM Plex Mono", monospace;
          letter-spacing: .16em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .chek-stage-title {
          max-width: 570px;
          margin: 0;
          color: #ebe5d8;
          font: 600 clamp(39px, 5vw, 77px)/.94 "Space Grotesk", sans-serif;
          letter-spacing: -.065em;
        }
        .chek-stage-copy {
          max-width: 392px;
          margin: 22px 0 0;
          color: #acaea3;
          font: 14px/1.6 "DM Sans", sans-serif;
        }
        .chek-stage-seal {
          position: absolute;
          right: 11%;
          top: 50%;
          display: grid;
          width: 178px;
          height: 178px;
          border: 1px solid rgba(211,185,114,.36);
          border-radius: 50%;
          place-items: center;
          transform: translateY(-43%);
          color: rgba(217,197,145,.72);
          font: 9px "IBM Plex Mono", monospace;
          letter-spacing: .16em;
          text-align: center;
          text-transform: uppercase;
        }
        .chek-stage-seal::before,
        .chek-stage-seal::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(211,185,114,.17);
          border-radius: 50%;
        }
        .chek-stage-seal::before { inset: 15px; }
        .chek-stage-seal::after { inset: 31px; border-color: rgba(211,185,114,.28); }
        .chek-stage-seal-check { position: relative; z-index: 1; width: 35px; height: 35px; border: 1px solid currentColor; border-radius: 50%; display: grid; place-items: center; }
        .chek-stage-seal-check svg { width: 15px; }
        .chek-stage-signal {
          position: absolute;
          bottom: 20px;
          left: 26px;
          color: var(--ink-faint);
          font: 9px "IBM Plex Mono", monospace;
          letter-spacing: .14em;
        }
        .chek-stage-signal::before { content: ""; display: inline-block; width: 21px; height: 1px; margin-right: 10px; vertical-align: middle; background: var(--gold); }
        .chek-transport {
          display: flex;
          align-items: center;
          gap: 16px;
          border-bottom: 1px solid var(--edge);
          padding: 19px 3px 16px;
        }
        .chek-icon-button {
          display: grid;
          flex: 0 0 auto;
          width: 34px;
          height: 34px;
          padding: 0;
          place-items: center;
          border: 1px solid transparent;
          border-radius: 50%;
          color: var(--ink-dim);
          background: transparent;
          cursor: pointer;
          transition: background-color .2s ease, border-color .2s ease, color .2s ease;
        }
        .chek-icon-button:hover, .chek-icon-button.is-active { border-color: rgba(210,184,113,.42); background: rgba(207,181,112,.12); color: var(--ink); }
        .chek-icon-button svg { width: 15px; height: 15px; }
        .chek-play {
          width: 43px;
          height: 43px;
          border-color: rgba(218,198,147,.48);
          color: var(--ink);
        }
        .chek-play svg { width: 18px; height: 18px; }
        .chek-time {
          min-width: 91px;
          color: var(--ink-dim);
          font: 10px "IBM Plex Mono", monospace;
          letter-spacing: .08em;
        }
        .chek-progress {
          flex: 1;
          height: 3px;
          overflow: hidden;
          background: rgba(227,216,190,.14);
          cursor: pointer;
        }
        .chek-progress-fill { height: 100%; background: linear-gradient(90deg, #887144, #e4c878); transition: width .15s linear; }
        .chek-transport-label {
          min-width: 80px;
          color: var(--ink-faint);
          font: 9px "IBM Plex Mono", monospace;
          letter-spacing: .12em;
          text-align: right;
          text-transform: uppercase;
        }
        .chek-inspector {
          border-left: 1px solid var(--edge);
          padding: 34px 23px 24px;
          background: rgba(15,17,14,.5);
        }
        .chek-inspector-heading { margin: 0 0 23px; }
        .chek-inspector-card {
          border-top: 1px solid rgba(219,205,171,.2);
          padding: 17px 0 20px;
        }
        .chek-inspector-card:last-child { border-bottom: 1px solid rgba(219,205,171,.2); }
        .chek-meta-label {
          color: var(--ink-faint);
          font: 9px "IBM Plex Mono", monospace;
          letter-spacing: .14em;
          text-transform: uppercase;
        }
        .chek-meta-value { margin-top: 9px; color: var(--ink); font: 500 15px "Space Grotesk", sans-serif; }
        .chek-meta-value.is-gold { color: var(--gold); }
        .chek-meta-row { display: flex; justify-content: space-between; gap: 12px; margin-top: 14px; color: var(--ink-dim); font: 10px "IBM Plex Mono", monospace; }
        .chek-meta-row strong { color: var(--ink); font-weight: 400; }
        .chek-map { display: block; width: 100%; height: auto; margin: 5px 0 0; overflow: visible; }
        .chek-map-grid { stroke: rgba(219,205,171,.075); stroke-width: 1; fill: none; }
        .chek-map-trace { stroke: url(#chek-trace); stroke-width: 1.1; fill: none; }
        .chek-map-trace-ghost { stroke: rgba(206,182,115,.14); stroke-width: 7; filter: url(#chek-soft-glow); }
        .chek-map-node circle:first-of-type { fill: #161a16; stroke: rgba(222,206,165,.28); stroke-width: 1; }
        .chek-map-node .chek-node-core { fill: rgba(214,191,123,.38); }
        .chek-map-node.is-live circle:first-of-type { stroke: rgba(222,198,127,.8); }
        .chek-map-node.is-live .chek-node-core { fill: #e0c676; }
        .chek-node-halo { fill: rgba(213,184,105,.1) !important; stroke: none !important; animation: chek-breathe 2.4s ease-in-out infinite; }
        .chek-map-node text { fill: #777b72; font: 8px "IBM Plex Mono", monospace; letter-spacing: .1em; }
        .chek-map-caption { fill: #5f655d; font: 8px "IBM Plex Mono", monospace; letter-spacing: .12em; }
        .chek-inspector-actions { display: flex; gap: 8px; margin-top: 18px; }
        .chek-small-cta {
          border: 1px solid rgba(218,203,167,.22);
          padding: 10px 12px;
          color: var(--ink-dim);
          background: transparent;
          cursor: pointer;
          font: 9px "IBM Plex Mono", monospace;
          letter-spacing: .1em;
          text-transform: uppercase;
          transition: color .2s ease, border-color .2s ease, background-color .2s ease;
        }
        .chek-small-cta:hover { border-color: rgba(218,203,167,.55); background: rgba(207,181,112,.08); color: var(--ink); }
        .chek-manifest {
          position: fixed;
          z-index: 30;
          inset: 0;
          display: grid;
          place-items: center;
          padding: 24px;
          background: rgba(6,8,6,.74);
          backdrop-filter: blur(14px);
        }
        .chek-manifest-panel {
          width: min(520px, 100%);
          border: 1px solid rgba(220,204,163,.3);
          background: #10130f;
          box-shadow: 0 24px 70px rgba(0,0,0,.52);
          padding: 25px;
        }
        .chek-manifest-top { display: flex; align-items: flex-start; justify-content: space-between; }
        .chek-manifest-title { margin: 0; font: 500 20px "Space Grotesk", sans-serif; }
        .chek-manifest-copy { color: var(--ink-dim); font: 12px/1.6 "DM Sans", sans-serif; }
        .chek-manifest-code { margin: 20px 0 0; padding: 15px; color: #bfc6ad; background: rgba(0,0,0,.24); font: 10px/1.8 "IBM Plex Mono", monospace; }
        @keyframes chek-breathe { 0%, 100% { opacity: .55; transform: scale(.97); } 50% { opacity: 1; transform: scale(1.03); } }
        @media (max-width: 1040px) {
          .chek-shell { grid-template-columns: 205px minmax(0, 1fr); }
          .chek-inspector { display: none; }
          .chek-stage-seal { right: 8%; width: 145px; height: 145px; }
        }
        @media (max-width: 720px) {
          .chek-commercial-variant { overflow: auto; }
          .chek-shell { display: block; min-height: 100dvh; }
          .chek-topbar { height: 64px; padding: 0 17px; }
          .chek-top-status span:not(.chek-live-dot) { display: none; }
          .chek-rail { border-right: 0; border-bottom: 1px solid var(--edge); padding: 17px; }
          .chek-rail-heading { margin-bottom: 11px; }
          .chek-scene-list { display: grid; grid-template-columns: repeat(2, 1fr); }
          .chek-scene-button { min-height: 48px; }
          .chek-rail-footer { display: none; }
          .chek-workspace { padding: 24px 17px 20px; }
          .chek-crumbs { margin-bottom: 17px; }
          .chek-frame-id { display: none; }
          .chek-stage, .chek-stage-content { min-height: 440px; }
          .chek-stage-content { padding: 75px 25px 52px; justify-content: flex-start; }
          .chek-stage-title { font-size: clamp(43px, 13vw, 68px); }
          .chek-stage-copy { font-size: 13px; }
          .chek-stage-seal { right: 23px; top: auto; bottom: 45px; width: 105px; height: 105px; transform: none; font-size: 7px; }
          .chek-stage-seal::before { inset: 10px; }
          .chek-stage-seal::after { inset: 22px; }
          .chek-transport { gap: 9px; }
          .chek-transport-label { display: none; }
          .chek-time { min-width: 73px; font-size: 9px; }
        }
      `}</style>

      <div className="chek-shell">
        <header className="chek-topbar">
          <div className="chek-brand">
            <span className="chek-brand-mark" aria-hidden="true" />
            <span>CHEK / SYSTEMS</span>
          </div>
          <div className="chek-top-status">
            <span><span className="chek-live-dot" />Session active</span>
            <span>Film 01 — Independent governance</span>
          </div>
        </header>

        <nav className="chek-rail" aria-label="Commercial scenes">
          <p className="chek-rail-heading">Sequence / 06 scenes</p>
          <div className="chek-scene-list">
            {scenes.map((scene, index) => (
              <button
                className={`chek-scene-button ${index === activeIndex ? "is-selected" : ""}`}
                type="button"
                key={scene.key}
                onClick={() => selectScene(index)}
              >
                <span className="chek-scene-no">{scene.index}</span>
                <span>
                  <span className="chek-scene-title">{scene.title}</span>
                  <span className="chek-scene-type">{scene.kicker}</span>
                </span>
                <span className="chek-scene-mark" style={{ color: scene.accent }} />
              </button>
            ))}
          </div>
          <div className="chek-rail-footer">
            <strong>Independent by design</strong>
            Verification is a boundary,<br />not a brand promise.
          </div>
        </nav>

        <section className="chek-workspace">
          <div className="chek-crumbs">
            <span className="chek-eyebrow">Control room / playback</span>
            <span className="chek-frame-id">FRAME {activeScene.index} / 06 · 4K MASTER</span>
          </div>

          <section className="chek-stage" aria-label={`${activeScene.title} scene`}>
            <div className="chek-stage-noise" />
            <div className="chek-stage-head">
              <span>{activeScene.signal}</span>
              <span>NO SELF-ATTESTATION</span>
            </div>
            <div className="chek-stage-content">
              <span className="chek-stage-kicker">{activeScene.kicker}</span>
              <h1 className="chek-stage-title">{activeScene.title}</h1>
              <p className="chek-stage-copy">{activeScene.body}</p>
            </div>
            <div className="chek-stage-seal">
              <span className="chek-stage-seal-check"><Check /></span>
              Evidence<br />preserved
            </div>
            <span className="chek-stage-signal">LIVE SIGNAL / {String(activeIndex + 1).padStart(2, "0")}</span>
          </section>

          <div className="chek-transport" aria-label="Playback controls">
            <SmallButton
              label={paused ? "Play" : "Pause"}
              active={!paused}
              onClick={() => setPaused((value) => !value)}
            >
              {paused ? <Play /> : <Pause />}
            </SmallButton>
            <SmallButton label="Previous scene" onClick={() => goToScene(-1)}><ChevronLeft /></SmallButton>
            <SmallButton label="Next scene" onClick={() => goToScene(1)}><ChevronRight /></SmallButton>
            <div className="chek-time">{formatClock(totalElapsed)} / 01:42</div>
            <button
              type="button"
              className="chek-progress"
              aria-label="Seek in current scene"
              onClick={() => setProgress((value) => value >= 90 ? 0 : value + 10)}
            >
              <div className="chek-progress-fill" style={{ width: `${progress}%` }} />
            </button>
            <span className="chek-transport-label">{paused ? "Paused" : "Playing"}</span>
            <SmallButton
              label={muted ? "Unmute" : "Mute"}
              active={muted}
              onClick={() => setMuted((value) => !value)}
            >
              {muted ? <VolumeX /> : <Volume2 />}
            </SmallButton>
            <SmallButton label={locked ? "Unlock sequence loop" : "Loop current scene"} active={locked} onClick={() => setLocked((value) => !value)}>
              {locked ? <Lock /> : <RotateCcw />}
            </SmallButton>
          </div>
        </section>

        <aside className="chek-inspector">
          <p className="chek-inspector-heading">Verification readout</p>
          <div className="chek-inspector-card">
            <div className="chek-meta-label">Current scene</div>
            <div className="chek-meta-value">{activeScene.index} / {activeScene.title}</div>
            <div className="chek-meta-row"><span>State</span><strong><CircleDot size={9} style={{ display: "inline", marginRight: 5, color: activeScene.accent }} /> {paused ? "HOLD" : "LIVE"}</strong></div>
            <div className="chek-meta-row"><span>Integrity</span><strong className="chek-meta-value is-gold" style={{ marginTop: 0 }}>verified</strong></div>
          </div>
          <div className="chek-inspector-card">
            <div className="chek-meta-label">Evidence path</div>
            <SignalMap activeIndex={activeIndex} />
          </div>
          <div className="chek-inspector-card">
            <div className="chek-meta-label">Session controls</div>
            <div className="chek-meta-row"><span>Audio</span><strong>{muted ? "MUTED" : "ON"}</strong></div>
            <div className="chek-meta-row"><span>Mode</span><strong>{locked ? "SCENE LOOP" : "SEQUENCE"}</strong></div>
            <div className="chek-inspector-actions">
              <button type="button" className="chek-small-cta" onClick={() => setManifestOpen(true)}>View manifest</button>
              <button type="button" className="chek-small-cta" onClick={() => { setActiveIndex(0); setProgress(0); }}>Restart</button>
            </div>
          </div>
        </aside>
      </div>

      {manifestOpen && (
        <div className="chek-manifest" role="dialog" aria-modal="true" aria-label="Session manifest" onClick={() => setManifestOpen(false)}>
          <div className="chek-manifest-panel" onClick={(event) => event.stopPropagation()}>
            <div className="chek-manifest-top">
              <div>
                <div className="chek-meta-label">Preserved record / 01</div>
                <h2 className="chek-manifest-title">Session manifest</h2>
              </div>
              <SmallButton label="Close manifest" onClick={() => setManifestOpen(false)}><X /></SmallButton>
            </div>
            <p className="chek-manifest-copy">An observable playback sequence showing how declared system facts become an independent, preserved result.</p>
            <div className="chek-manifest-code">
              RECORD_ID&nbsp;&nbsp;CHK-01-VERIFIED<br />
              PATH&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FACTS → CHEK → RULE → RESULT<br />
              SCOPE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INDEPENDENT GOVERNANCE<br />
              STATUS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SIGNED / PRESERVED
            </div>
          </div>
        </div>
      )}
    </main>
  );
}