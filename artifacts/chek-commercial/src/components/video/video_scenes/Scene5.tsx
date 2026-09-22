import { motion } from 'framer-motion';

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;

export function Scene5() {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
      animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
      exit={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
      transition={{ duration: 0.85, ease: [0.75, 0, 0.2, 1] }}
    >
      <div className="absolute inset-0 bg-[#0d0e0d]" />
      <div className="absolute left-[5vw] top-[6vh] h-[78vh] w-[90vw] border border-[#cbb06a]/12" />
      <div className="absolute left-[5vw] top-[47vh] h-px w-[90vw] bg-[#cbb06a]/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,rgba(190,160,87,.09),transparent_32%)]" />

      <motion.div
        className="absolute left-[7vw] top-[11vh]"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.65 }}
      >
        <div className="micro-label mb-[1.2vh]">05 / DETERMINISTIC VERIFIER</div>
        <h2 className="m-0 font-[var(--font-display)] text-[3.25vw] font-medium leading-[0.96] tracking-[-0.06em] text-[#eee8dc]">
          WHO CHECKS
          <br />
          THE CHECKER?
        </h2>
      </motion.div>

      <div className="absolute left-[7vw] right-[7vw] top-[43vh] flex items-center justify-between">
        {[
          { title: 'AUDITOR', note: 'submits result', tone: 'border-[#b76f69]/65 text-[#d9a49e]' },
          { title: 'VERIFIER', note: 'recomputes facts', tone: 'border-[#cbb06a]/70 text-[#dec98e]' },
          { title: 'VAULT', note: 'preserves trail', tone: 'border-[#8caf9b]/70 text-[#9fc5af]' },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            className="relative z-10 flex w-[13vw] flex-col items-center gap-[1vh]"
            initial={{ opacity: 0, scale: 0.72 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.52 + index * 0.3, duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className={`flex h-[5.2vw] w-[5.2vw] items-center justify-center rounded-full border ${item.tone} bg-[#11120f] shadow-[0_1vw_2vw_rgba(0,0,0,.35)]`}>
              <span className="font-[var(--font-mono)] text-[0.6vw] tracking-[0.12em]">{item.title}</span>
            </div>
            <span className="font-[var(--font-mono)] text-[0.58vw] tracking-[0.1em] text-[#8f9287]">{item.note}</span>
          </motion.div>
        ))}
        <motion.div className="absolute left-[14vw] right-[14vw] top-[2.6vw] h-px bg-[#cbb06a]/30"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7, duration: 1.2 }} />
        <motion.div className="absolute left-[27vw] top-[2.35vw] h-[0.45vw] w-[0.45vw] rounded-full bg-[#d6bd71] shadow-[0_0_1vw_rgba(214,189,113,.85)]"
          animate={{ x: [0, 28 * 16, 0], opacity: [0, 1, 0.4] }} transition={{ delay: 1.1, duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} />
      </div>

      <motion.div
        className="screenshot-shell absolute bottom-[8vh] left-[7vw] h-[24vh] w-[27vw] overflow-hidden rounded-[0.5vw] opacity-65"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.65, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <img src={asset('chek-02-intake.jpg')} alt="CHEK auditor challenge interface" className="h-full w-full object-cover object-bottom" />
        <div className="absolute inset-0 bg-[#0b0c0b]/35" />
      </motion.div>
      <motion.div
        className="absolute bottom-[12.1vh] left-[36.5vw] w-[27vw] rounded-[0.55vw] border border-[#b76f69]/40 bg-[#351e1e]/25 px-[1vw] py-[1.1vw]"
        initial={{ opacity: 0, x: -14 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.25, duration: 0.55 }}
      >
        <div className="font-[var(--font-mono)] text-[0.58vw] tracking-[0.1em] text-[#db9e95]">FALSE FAVORABLE RESULT</div>
        <div className="mt-[0.8vh] text-[0.74vw] leading-[1.4] text-[#bdb8ab]">auditor attempts to sign 100% compliant</div>
      </motion.div>
      <motion.div
        className="absolute bottom-[12.1vh] right-[7vw] w-[27vw] rounded-[0.55vw] border border-[#91b49f]/45 bg-[#1c2b23]/30 px-[1vw] py-[1.1vw]"
        initial={{ opacity: 0, x: 14 }}
        animate={{ opacity: 1, x: 1 }}
        transition={{ delay: 1.8, duration: 0.55 }}
      >
        <div className="font-[var(--font-mono)] text-[0.58vw] tracking-[0.1em] text-[#a8d0b4]">CHEK DOES.</div>
        <div className="mt-[0.8vh] text-[0.74vw] leading-[1.4] text-[#c3c4b8]">independent verifier rejects the shortcut</div>
      </motion.div>
    </motion.div>
  );
}