import { motion } from 'framer-motion';

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;

export function Scene2() {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0, clipPath: 'inset(0 0 0 100%)' }}
      animate={{ opacity: 1, clipPath: 'inset(0 0 0 0%)' }}
      exit={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
      transition={{ duration: 0.9, ease: [0.75, 0, 0.2, 1] }}
    >
      <div className="absolute inset-0 bg-[#0b0c0b]" />
      <div className="absolute -left-[10vw] top-[8vh] h-[55vw] w-[55vw] rounded-full bg-[#be9b4a]/[0.055] blur-[7vw]" />
      <div className="absolute right-[4vw] top-[12vh] h-[42vw] w-[1px] bg-[#bca869]/20" />
      <div className="absolute bottom-[9vh] left-[5vw] right-[5vw] gold-rule opacity-60" />
      <motion.div
        className="absolute left-[6.5vw] top-[13vh] w-[30vw]"
        initial={{ opacity: 0, x: -22 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.42, duration: 0.72 }}
      >
        <div className="micro-label mb-[1.8vh]">02 / INDEPENDENT VERIFICATION</div>
        <h2 className="m-0 font-[var(--font-display)] text-[4.2vw] font-medium leading-[0.96] tracking-[-0.06em] text-[#eee8dc]">
          CHEK
          <br />
          <span className="metal-text">ARRIVES.</span>
        </h2>
        <p className="mt-[3.3vh] max-w-[20vw] font-[var(--font-mono)] text-[0.74vw] leading-[1.7] tracking-[0.1em] text-[#a9a99e]">
          GOVERNANCE THAT HOLDS
          <br />
          ITS OWN EVIDENCE.
        </p>
      </motion.div>

      <motion.div
        className="screenshot-shell absolute right-[9vw] top-[8vh] h-[80vh] w-[32vw] overflow-hidden rounded-[0.7vw]"
        initial={{ opacity: 0, scale: 0.92, x: 30, rotateY: -7 }}
        animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
        exit={{ opacity: 0, scale: 1.08, x: -35 }}
        transition={{ delay: 0.22, duration: 1.2, ease: [0.2, 0.84, 0.2, 1] }}
        style={{ transformPerspective: 1200 }}
      >
        <img
          src={asset('chek-01-home.jpg')}
          alt="CHEK home screen with shield-chip emblem and primary navigation cards"
          className="h-full w-full object-contain object-center"
        />
        <motion.div
          className="pointer-events-none absolute left-0 right-0 top-0 h-[12vh] bg-gradient-to-b from-[#dcc383]/10 to-transparent"
          animate={{ y: ['-100%', '720%'], opacity: [0, 0.55, 0] }}
          transition={{ delay: 0.7, duration: 3.7, ease: 'linear', repeat: Infinity, repeatDelay: 0.8 }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-[10.8vh] left-[6.6vw] flex items-center gap-[1vw]"
        initial={{ opacity: 0, y: 13 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.25, duration: 0.6 }}
      >
        <div className="h-[0.42vw] w-[0.42vw] rounded-full bg-[#cbb06a] shadow-[0_0_1vw_rgba(203,176,106,.75)]" />
        <p className="m-0 font-[var(--font-mono)] text-[0.68vw] tracking-[0.12em] text-[#d6cba9]">
          CHEK / INDEPENDENT AI GOVERNANCE VERIFICATION
        </p>
      </motion.div>
    </motion.div>
  );
}