import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import combo from "@/assets/combo.png";

export function Offers() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <section id="offers" ref={ref} className="relative overflow-hidden py-28">
      <div className="warm-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="glass-panel relative grid items-center gap-10 rounded-[2.5rem] px-8 py-14 lg:grid-cols-2 lg:px-14">
          <div className="pointer-events-none absolute -left-16 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold-soft/70 blur-3xl" />

          <div className="relative">
            <span className="text-[11px] font-semibold tracking-[0.32em] text-gold">
              FEATURED OFFER
            </span>
            <h2 className="font-display mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
              Spicy Burger Combo <br />
              <span className="text-gold">— 20% OFF</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Our chili-glazed signature burger with golden loaded fries and an iced house drink.
              Plated for one, built for the craving.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <span className="font-display text-3xl text-foreground">$14.40</span>
              <span className="text-lg text-muted-foreground line-through">$18.00</span>
            </div>
            <a
              href="#contact"
              className="mt-9 inline-flex rounded-full bg-primary px-8 py-3.5 text-xs font-semibold tracking-[0.2em] text-primary-foreground transition-transform hover:-translate-y-1"
            >
              CLAIM THE COMBO
            </a>
          </div>

          <motion.div style={{ y }} className="relative">
            <motion.img
              src={combo}
              alt="Spicy burger combo with fries and a cold drink"
              loading="lazy"
              width={1200}
              height={912}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full drop-shadow-[0_46px_46px_rgba(0,0,0,0.24)]"
            />
            <div className="mx-auto mt-2 h-6 w-3/5 rounded-[100%] bg-foreground/10 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
