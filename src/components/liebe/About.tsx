import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import kitchen from "@/assets/kitchen.jpg";

const stats = [
  { k: "10+", v: "Years of craft" },
  { k: "48", v: "Signature recipes" },
  { k: "4.9", v: "Guest rating" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);

  return (
    <section id="about" ref={ref} className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-float)]">
            <motion.img
              style={{ scale }}
              src={kitchen}
              alt="LIEBE chefs plating dishes in a sunlit premium kitchen"
              loading="lazy"
              width={1408}
              height={1008}
              className="h-[420px] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-white/5 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,color-mix(in_oklab,white_45%,transparent),transparent_55%)]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[11px] font-semibold tracking-[0.32em] text-gold">OUR STORY</span>
            <h2 className="font-display mt-4 text-4xl leading-tight text-foreground sm:text-5xl">
              Made Fresh. <br />
              Made With <span className="text-gold italic">Passion.</span>
            </h2>
            <p className="mt-6 max-w-lg text-muted-foreground">
              LIEBE began as a small open kitchen with one belief — that fast food deserves fine
              dining discipline. We grind our beef in-house, bake brioche each morning, and finish
              every plate under warm light before it reaches you.
            </p>
            <p className="mt-4 max-w-lg text-muted-foreground">
              No shortcuts, no freezers, no compromise. Just honest fire, clean sourcing and flavor
              worth the wait.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.k} className="glass-panel rounded-2xl px-4 py-5 text-center">
                  <div className="font-display text-2xl text-foreground">{s.k}</div>
                  <div className="mt-1 text-[11px] tracking-[0.14em] text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
