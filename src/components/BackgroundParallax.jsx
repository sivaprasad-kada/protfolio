import { motion, useScroll, useTransform } from 'framer-motion';

export default function BackgroundParallax() {
  const { scrollY } = useScroll();
  
  // Parallax elements move inversely to or slightly differently from the scroll position
  const y1 = useTransform(scrollY, [0, 4000], [0, -400]);
  const y2 = useTransform(scrollY, [0, 4000], [0, -800]);
  const y3 = useTransform(scrollY, [0, 4000], [0, 500]);
  const y4 = useTransform(scrollY, [0, 4000], [0, -200]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Decorative Orbs with parallax scroll */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[10%] left-[5%] w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute top-[40%] right-[10%] w-96 h-96 bg-pink-600/10 rounded-full blur-[100px]"
      />
      <motion.div 
        style={{ y: y3 }}
        className="absolute top-[70%] left-[20%] w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[120px]"
      />
      <motion.div 
        style={{ y: y4 }}
        className="absolute top-[85%] right-[25%] w-72 h-72 bg-fuchsia-600/10 rounded-full blur-[90px]"
      />
    </div>
  );
}
