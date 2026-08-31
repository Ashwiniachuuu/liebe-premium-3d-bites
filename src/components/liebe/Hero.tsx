import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { useEffect } from "react";
import burger from "@/assets/hero-burger.png";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 160]);
  const scale = useTransform(scrollY, [0, 700], [1, 0.82]);
  const textY = useTransform(scrollY, [0, 600], [0, -80]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 80, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 80, damping: 18 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="warm-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,color-mix(in_oklab,white_90%,transparent),transparent_60%)]" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 pb-20 lg:grid-cols-2">
        <motion.div style={{ y: textY }} className="relative z-10 text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-panel inline-flex rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.28em] text-foreground/70"
          >
            PREMIUM KITCHEN · EST. 2015
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display mt-6 text-balance-tight text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Good Food. <br />
            Good <span className="text-gold italic">Mood!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mx-auto mt-6 max-w-md text-base text-muted-foreground lg:mx-0"
          >
            Fresh flavors. Bold cravings. Delivered your way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <a
              href="#offers"
              className="rounded-full bg-primary px-8 py-3.5 text-xs font-semibold tracking-[0.2em] text-primary-foreground shadow-[var(--shadow-glass)] transition-transform hover:-translate-y-1"
            >
              ORDER NOW
            </a>
            <a
              href="#menu"
              className="glass-panel rounded-full px-8 py-3.5 text-xs font-semibold tracking-[0.2em] text-foreground transition-transform hover:-translate-y-1"
            >
              EXPLORE MENU
            </a>
          </motion.div>
        </motion.div>

        <motion.div style={{ y, scale }} className="relative z-10 [perspective:1200px]">
          <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-soft/60 blur-3xl" />

          {/* steam */}
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute left-1/2 top-4 h-24 w-16 rounded-full bg-white/70 blur-2xl"
              style={{ marginLeft: (i - 1) * 46 }}
              animate={{ opacity: [0, 0.7, 0], y: [20, -70], scale: [0.6, 1.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: i * 1.4, ease: "easeOut" }}
            />
          ))}

          {/* particles */}
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.span
              key={`p${i}`}
              className="absolute h-1.5 w-1.5 rounded-full bg-gold/60"
              style={{ left: `${8 + i * 9}%`, top: `${20 + ((i * 37) % 60)}%` }}
              animate={{ y: [0, -22, 0], opacity: [0.2, 0.9, 0.2] }}
              transition={{ duration: 4 + (i % 4), repeat: Infinity, delay: i * 0.3 }}
            />
          ))}

          <motion.div
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <img
              src={burger}
              alt="Signature juicy crispy chicken burger from LIEBE"
              width={1200}
              height={1200}
              className="relative w-full drop-shadow-[0_50px_60px_rgba(0,0,0,0.28)]"
            />
            <div className="pointer-events-none -mt-20 h-32 overflow-hidden">
              <img
                src={burger}
                alt=""
                aria-hidden
                width={1200}
                height={1200}
                className="reflect w-full opacity-25"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
