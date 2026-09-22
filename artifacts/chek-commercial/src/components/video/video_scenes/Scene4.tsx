import { motion } from 'framer-motion';

const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;

export function Scene4() {
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0, clipPath: 'circle(0% at 78% 44%)' }}
      animate={{ opacity: 1, clipPath: 'circle(150% at 78% 44%)' }}
      exit={{ opacity: 0, clipPath: 'circle(0% at 21% 45%)' }}
      transition={{ duration: 0.95, ease: [0.75, 0, 0.2, 1] }}
    >
      <div className="absolute inset-0 bg-[#0a0b0a]" />
      <motion.div
        className="absolute left-[8vw] top-[-15vw] h-[48vw] w-[48vw] rounded-full border border-[#b56d69]/20"
        animate={{ rotate: [0, 4, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 5.5, ease: 'easeInOut', repeat: Infinity }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_52%,rgba(172,94,82,.12),transparent_28%),linear-gradient(90deg,#0a0b0a 0%,rgba(10,11,10,.55) 56%,#0a0b0a 100%)]" />
      <div className="absolute left-[5vw] top-[16vh] bottom-[16vh] w-px bg-[#b76f69]/40" />

      <motion.div
        className="absolute left-[7vw] top-[18vh] w-[29vw]"
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        <div className="micro-label mb-[1.6vh] text-[#bca29b]">04 / THE HARD RULE</div>
        <h2 className="m-0 font-[var(--font-display)] text-[3.2vw] font-medium leading-[0.98] tracking-[-0.06em] text-[#eee8dc]">
          THE EASY FIXES
          <br />
          <span className="text-[#b76f69]">CAN&apos;T HIDE</span>
          <br />
          THE HARD ONE.
        </h2>
        <p className="mt-[3.4vh] max-w-[21vw] font-[var(--font-mono)] text-[0.68vw] leading-[1.65] tracking-[0.08em] text-[#a49c94]">
          FOUR CONDITIONS PASS.
          <br />
          ONE CRITICAL EXPORT FINDING
          <br />
          STILL HOLDS THE GATE.
        </p>
      </motion.div>

      <motion.div
        className="screenshot-shell absolute right-[5.7vw] top-[13vh] h-[73vh] w-[52vw] overflow-hidden rounded-[0.7vw] border-[#b76f69]/35"
        initial={{ opacity: 0, scale: 0.9, x: 25 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.12, duration: 1.05, ease: [0.2, 0.82, 0.2, 1] }}
      >
        <motion.img
          src={asset('chek-03-failed.jpg')}
          alt="CHEK failed gate result with critical finding"
          className="h-full w-full object-contain object-center"
          initial={{ scale: 1, y: '0%' }}
          animate={{ scale: 1, y: '0%' }}
          transition={{ duration: 5.2, ease: [0.2, 0.72, 0.2, 1] }}
        />
        <motion.div
          className="absolute left-0 right-0 top-[24%] h-[0.3vw] bg-[#c17870]/60 shadow-[0_0_1.1vw_rgba(193,120,112,.55)]"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: [0, 1, 0.25], scaleX: [0, 1, 1] }}
          transition={{ delay: 1.2, duration: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0a]/25 via-transparent to-[#0a0b0a]/40" />
      </motion.div>

      <motion.div
        className="absolute right-[7.3vw] top-[18.2vh] rounded-full border border-[#d28b83]/70 bg-[#3b1f1e]/65 px-[0.9vw] py-[0.55vh] font-[var(--font-mono)] text-[0.56vw] tracking-[0.12em] text-[#e5afa4]"
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.25, duration: 0.35 }}
      >
        CRITICAL FINDING OPEN
      </motion.div>
    </motion.div>
  );
}