import { motion } from 'framer-motion';
const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;
const nodes=['AI','CONTROLS','DEPLOYMENT','SILICON','CHEK'];
export function Scene3(){return <motion.div className="absolute inset-0 overflow-hidden" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.6}}>
  <div className="absolute inset-0 bg-[#0d0e0d]"/><div className="scene-grid absolute inset-0 opacity-20"/>
  <motion.div className="absolute left-[5.7vw] top-[10vh] w-[32vw]" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.2,duration:.55}}>
    <div className="micro-label mb-[1.3vh]">03 / AI → SILICON</div>
    <h2 className="m-0 font-[var(--font-display)] text-[3.1vw] font-medium leading-[1] tracking-[-.05em] text-[#eee8dc]">ONE GOVERNANCE PATH.<br/><span className="metal-text">ALL THE WAY DOWN.</span></h2>
    <p className="mt-[2.2vh] max-w-[24vw] text-[.76vw] leading-[1.5] text-[#9c9d93]">CHEK evaluates the recorded system and hardware facts that govern the decision.</p>
  </motion.div>
  <motion.div className="screenshot-shell absolute right-[5.2vw] top-[9vh] h-[77vh] w-[42vw] overflow-hidden rounded-[.65vw]" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{delay:.12,duration:.8}}><img src={asset('chek-02-intake.jpg')} alt="CHEK declared facts intake" className="h-full w-full object-contain object-center"/></motion.div>
  <div className="absolute bottom-[9vh] left-[5.8vw] right-[51vw]"><div className="relative flex items-center justify-between"><div className="absolute left-[.5vw] right-[.5vw] top-1/2 h-px -translate-y-1/2 bg-[#bbb08b]/30"/>{nodes.map((node,index)=><motion.div key={node} className="relative z-10 flex flex-col items-center gap-[.75vh]" initial={{opacity:0,scale:.65}} animate={{opacity:1,scale:1}} transition={{delay:.45+index*.12,duration:.35}}><div className="h-[.72vw] w-[.72vw] rounded-full border border-[#cbb06a]/70 bg-[#151511]"/><span className="font-[var(--font-mono)] text-[.52vw] tracking-[.1em] text-[#beb8a8]">{node}</span></motion.div>)}</div></div>
</motion.div>}
