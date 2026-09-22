import { motion } from 'framer-motion';

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;

const nodes = ['SYSTEM', 'CONTROLS', 'DEPLOYMENT', 'SILICON', 'GOVERNANCE'];

export function Scene3() {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 82% 100%)' }}
      animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      exit={{ opacity: 0, clipPath: 'polygon(0 0, 18% 0, 0 100%, 0 100%)' }}
      transition={{ duration: 0.85, ease: [0.75, 0, 0.2, 1] }}
    >
      <div className="absolute inset-0 bg-[#0d0e0d]" />
      <div className="scene-grid absolute inset-0 opacity-20" />
      <div className="absolute right-[-4vw] top-[-20vh] h-[65vw] w-[65vw] rounded-full border border-[#d2bd82]/10" />
      <div className="absolute right-[1vw] top-[-12vh] h-[51vw] w-[51vw] rounded-full border border-[#d2bd82]/10" />

      <motion.div
        className="absolute left-[5.7vw] top-[9.5vh] w-[28vw]"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
      >
        <div className="micro-label mb-[1.3vh]">03 / DECLARED FACTS</div>
        <h2 className="m-0 font-[var(--font-display)] text-[2.55vw] font-medium leading-[1.04] tracking-[-0.045em] text-[#eee8dc]">
          FROM SYSTEM
          <br />
          <span className="metal-text">TO HARDWARE.</span>
        </h2>
        <p className="mt-[2.2vh] max-w-[22vw] text-[0.82vw] leading-[1.5] text-[#9c9d93]">
          CHEK evaluates recorded facts. It does not physically measure or modify the accelerator.
        </p>
      </motion.div>

      <motion.div
        className="screenshot-shell absolute right-[5.2vw] top-[9vh] h-[77vh] w-[42vw] overflow-hidden rounded-[0.65vw]"
        initial={{ opacity: 0, scale: 0.9, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <motion.img
          src={asset('chek-02-intake.jpg')}
          alt="CHEK declared facts intake interface"
          className="h-full w-full object-contain object-center"
          initial={{ scale: 1, y: '0%' }}
          animate={{ scale: 1, y: '0%' }}
          transition={{ duration: 5.3, ease: [0.2, 0.7, 0.2, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0b0c0b]/30" />
      </motion.div>

      <div className="absolute bottom-[8.6vh] left-[5.8vw] right-[51vw]">
        <div className="mb-[1.4vh] flex items-center justify-between">
          <span className="micro-label">GOVERNANCE PATH</span>
          <span className="font-[var(--font-mono)] text-[0.56vw] text-[#c4b77e]">DECLARED / ASSESSED</span>
        </div>
        <div className="relative flex items-center justify-between">
          <div className="absolute left-[0.5vw] right-[0.5vw] top-1/2 h-px -translate-y-1/2 bg-[#bbb08b]/30" />
          {nodes.map((node, index) => (
            <motion.div
              key={node}
              className="relative z-10 flex flex-col items-center gap-[0.75vh]"
              initial={{ opacity: 0, scale: 0.65 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 + index * 0.16, duration: 0.45 }}
            >
              <div className="h-[0.72vw] w-[0.72vw] rounded-full border border-[#cbb06a]/70 bg-[#151511] shadow-[0_0_0_0.28vw_rgba(203,176,106,.08)]" />
              <span className="font-[var(--font-mono)] text-[0.52vw] tracking-[0.1em] text-[#beb8a8]">{node}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="absolute bottom-[17.8vh] left-[8.6vw] h-[0.22vw] w-[0.22vw] rounded-full bg-[#e4c978]"
        animate={{ x: [0, 20.4 * 16, 0], opacity: [0, 1, 0] }}
        transition={{ delay: 0.9, duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}