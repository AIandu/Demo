import { motion } from 'framer-motion';

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;

export function Scene1() {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-[#090a09]" />
      <motion.img
        src={asset('silicon-macro.png')}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.18, opacity: 0.08 }}
        animate={{ scale: 1.02, opacity: 0.7 }}
        exit={{ scale: 1.35, opacity: 0 }}
        transition={{ duration: 5.8, ease: [0.22, 0.74, 0.21, 1] }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_64%_45%,rgba(215,175,84,.18),transparent_27%),linear-gradient(90deg,rgba(8,9,8,.95)_5%,rgba(8,9,8,.16)_68%,rgba(8,9,8,.68)_100%)]" />
      <div className="scene-grid absolute inset-[-5%] opacity-30" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1600 900" aria-hidden="true">
        <path className="circuit-line-dim" d="M0 632h236l48-48h272l72-73h252l51-52h208l79-78h380" />
        <path className="circuit-line" d="M0 660h254l53-53h210l64-64h294l59-59h232l65-66h369" />
        <path className="circuit-line-dim" d="M148 900V745l96-95h188l74-74h184l63-63h241l52-52h365" />
        <motion.circle className="pulse-dot" cx="411" cy="660" r="4" fill="#d6b966"
          initial={{ opacity: 0, cx: 150 }} animate={{ opacity: [0, 1, 0.9], cx: 1235 }}
          transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatDelay: 0.7 }} />
        <motion.circle className="pulse-dot" cx="411" cy="660" r="2.5" fill="#f3e8c9"
          initial={{ opacity: 0, cx: 80 }} animate={{ opacity: [0, 0.8, 0], cx: 1050 }}
          transition={{ duration: 1.8, delay: 1.7, repeat: Infinity, repeatDelay: 1.2 }} />
      </svg>

      <motion.div
        className="absolute left-[7.3vw] top-[13.5vh] w-[31vw]"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.85 }}
      >
        <div className="micro-label mb-[1.6vh]">01 / THE SILICON</div>
        <h1 className="m-0 font-[var(--font-display)] text-[4.55vw] font-medium leading-[0.96] tracking-[-0.065em] text-[#eee8dc]">
          AI GOVERNANCE
          <br />
          <span className="metal-text">SHOULDN&apos;T STOP</span>
          <br />
          AT THE MODEL.
        </h1>
      </motion.div>

      <motion.div
        className="absolute bottom-[12.5vh] left-[7.4vw] flex items-center gap-[1vw]"
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.7 }}
      >
        <div className="h-px w-[3.6vw] bg-[#cbb06a]" />
        <p className="m-0 font-[var(--font-mono)] text-[0.72vw] tracking-[0.18em] text-[#d8c998]">
          IT HAS TO REACH THE SILICON.
        </p>
      </motion.div>

      <motion.div
        className="absolute right-[8.8vw] top-[22vh] h-[18vw] w-[22vw] border border-[#d2b569]/30 bg-[#12130f]/20"
        initial={{ opacity: 0, scale: 0.82, rotate: -4 }}
        animate={{ opacity: 1, scale: 1, rotate: -4 }}
        transition={{ delay: 0.85, duration: 1.15, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="absolute inset-[1.1vw] border border-[#a9a99a]/20" />
        <div className="absolute left-[1.2vw] top-[1.2vw] font-[var(--font-mono)] text-[0.58vw] tracking-[0.14em] text-[#b6b5a9]">
          ACCELERATOR / DIE VIEW
        </div>
        <div className="absolute bottom-[1.2vw] left-[1.2vw] right-[1.2vw] flex justify-between font-[var(--font-mono)] text-[0.55vw] text-[#8b8c83]">
          <span>01.14 μm</span>
          <span>LIVE PATH</span>
        </div>
        <motion.div
          className="absolute left-[4vw] top-[5vw] h-[5.2vw] w-[10vw] border border-[#d4bd7c]/50"
          animate={{ rotate: [0, 1.5, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute inset-[0.45vw] border border-[#d0bf8e]/30" />
          <div className="absolute left-[-2vw] top-[2.3vw] h-px w-[14vw] bg-[#d3b66a]/55" />
          <div className="absolute left-[4.9vw] top-[-1.7vw] h-[8.5vw] w-px bg-[#d3b66a]/30" />
          <motion.div
            className="absolute left-[2.3vw] top-[2.1vw] h-[0.22vw] w-[0.22vw] rounded-full bg-[#f0d98d]"
            animate={{ x: [0, 5.4 * 16], opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 1.25, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}