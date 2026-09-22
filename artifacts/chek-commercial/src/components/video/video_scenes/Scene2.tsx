import { motion } from 'framer-motion';
const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`;
export function Scene2() {
  return <motion.div className="absolute inset-0 overflow-hidden" initial={{opacity:0,clipPath:'inset(0 0 0 100%)'}} animate={{opacity:1,clipPath:'inset(0 0 0 0%)'}} exit={{opacity:0,clipPath:'inset(0 100% 0 0)'}} transition={{duration:.65,ease:[.75,0,.2,1]}}>
    <div className="absolute inset-0 bg-[#0b0c0b]"/><div className="absolute -left-[10vw] top-[8vh] h-[55vw] w-[55vw] rounded-full bg-[#be9b4a]/[0.055] blur-[7vw]"/>
    <motion.div className="absolute left-[6.5vw] top-[17vh] w-[34vw]" initial={{opacity:0,x:-22}} animate={{opacity:1,x:0}} transition={{delay:.25,duration:.55}}>
      <div className="micro-label mb-[1.8vh]">02 / CHEK</div>
      <h2 className="m-0 font-[var(--font-display)] text-[4.4vw] font-medium leading-[.94] tracking-[-.06em] text-[#eee8dc]">THE DECISION<br/><span className="metal-text">GETS CHECKED.</span></h2>
      <p className="mt-[3vh] max-w-[23vw] font-[var(--font-mono)] text-[.72vw] leading-[1.7] tracking-[.1em] text-[#a9a99e]">INDEPENDENT GOVERNANCE VERIFICATION<br/>WITH A PRESERVED EVIDENCE TRAIL.</p>
    </motion.div>
    <motion.div className="screenshot-shell absolute right-[8vw] top-[9vh] h-[78vh] w-[34vw] overflow-hidden rounded-[.7vw]" initial={{opacity:0,scale:.92,x:30}} animate={{opacity:1,scale:1,x:0}} transition={{delay:.12,duration:.8}}>
      <img src={asset('chek-01-home.jpg')} alt="CHEK home screen" className="h-full w-full object-contain object-center"/>
      <motion.div className="pointer-events-none absolute left-0 right-0 top-0 h-[12vh] bg-gradient-to-b from-[#dcc383]/10 to-transparent" animate={{y:['-100%','720%'],opacity:[0,.55,0]}} transition={{delay:.5,duration:2.6,ease:'linear'}}/>
    </motion.div>
  </motion.div>;
}
