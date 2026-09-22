import { motion } from 'framer-motion';

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;

export function Scene6() {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="absolute inset-0 bg-[#0b0c0b]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(190,166,95,.12),transparent_36%),linear-gradient(180deg,#11120f 0%,#0a0b0a 100%)]" />
      <motion.div
        className="screenshot-shell absolute left-[9vw] top-[7vh] h-[72vh] w-[50vw] overflow-hidden rounded-[0.7vw]"
        initial={{ opacity: 0, y: 25, scale: 1.07 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.15, duration: 1.05, ease: [0.2, 0.82, 0.2, 1] }}
      >
        <motion.img
          src={asset('chek-04-passed.jpg')}
          alt="CHEK compliant result and signed vault"
          className="h-full w-full object-contain object-center"
          initial={{ scale: 1, y: 0 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 4.8, ease: [0.2, 0.75, 0.2, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0b0c0b]/55" />
        <motion.div
          className="absolute left-[10%] right-[10%] top-[23%] h-[0.25vw] bg-[#8db79e]/55"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: [0, 1, 0.35], scaleX: [0, 1, 1] }}
          transition={{ delay: 1.2, duration: 1.1 }}
        />
      </motion.div>

      <motion.div
        className="absolute right-[8vw] top-[17vh] w-[26vw]"
        initial={{ opacity: 0, x: 22 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.55, duration: 0.75 }}
      >
        <div className="micro-label mb-[1.5vh] text-[#9dc2ac]">06 / VERIFIED</div>
        <h2 className="m-0 font-[var(--font-display)] text-[4.6vw] font-medium leading-[0.88] tracking-[-0.07em] text-[#eee8dc]">
          100%
        </h2>
        <div className="mt-[1.7vh] flex items-center gap-[0.75vw]">
          <div className="h-[0.5vw] w-[0.5vw] rounded-full bg-[#8db79e] shadow-[0_0_1vw_rgba(141,183,158,.7)]" />
          <span className="font-[var(--font-mono)] text-[0.73vw] tracking-[0.14em] text-[#9fc2ad]">COMPLIANT / GATE PASSED</span>
        </div>
        <p className="mt-[3.2vh] max-w-[20vw] text-[0.85vw] leading-[1.5] text-[#aaa99f]">
          Only a verified result moves forward. The signed decision trail stays in the vault.
        </p>
      </motion.div>

      <motion.div
        className="absolute right-[8vw] bottom-[17.5vh] w-[26vw]"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 0.7 }}
      >
        <div className="mb-[1.1vh] flex items-center justify-between">
          <span className="micro-label">SIGNED VAULT</span>
          <span className="font-[var(--font-mono)] text-[0.54vw] text-[#8f9f93]">INTAKE / AUDITOR / VERIFIER</span>
        </div>
        <div className="space-y-[0.55vh]">
          {['INTAKE  ·  submitted', 'AUDITOR  ·  result', 'VERIFIER  ·  verdict'].map((row, index) => (
            <motion.div
              key={row}
              className="flex items-center justify-between border-b border-[#e1d9c4]/12 pb-[0.55vh] font-[var(--font-mono)] text-[0.61vw] text-[#c2c1b5]"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.35 + index * 0.14, duration: 0.4 }}
            >
              <span>{row}</span>
              <span className="text-[#82aa93]">SIGNED</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-[#090a09]"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ delay: 4.35, duration: 1.2, times: [0, 0.35, 0.95, 1] }}
      >
        <div className="absolute h-[21vw] w-[21vw] rounded-full border border-[#d4bc78]/20" />
        <div className="absolute h-[16vw] w-[16vw] rounded-full border border-[#d4bc78]/20" />
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.86 }}
          animate={{ opacity: [0, 0, 1, 1], scale: [0.86, 0.86, 1, 1] }}
          transition={{ delay: 4.35, duration: 1.2, times: [0, 0.3, 0.75, 1] }}
        >
          <div className="mb-[1.2vh] flex h-[4.2vw] w-[4.2vw] items-center justify-center border border-[#d5bb70]/70">
            <div className="h-[2.2vw] w-[2.2vw] rotate-45 border border-[#d5bb70]/80" />
          </div>
          <div className="final-wordmark font-[var(--font-display)] text-[3.6vw] font-medium text-[#e8dfc9]">CHEK</div>
          <div className="mt-[1.8vh] font-[var(--font-mono)] text-[0.67vw] tracking-[0.25em] text-[#c8b779]">GOVERNANCE FROM AI TO SILICON</div>
          <div className="mt-[2.2vh] font-[var(--font-mono)] text-[0.52vw] tracking-[0.22em] text-[#87887e]">CLARITY  |  VERIFICATION  |  TRUST</div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}