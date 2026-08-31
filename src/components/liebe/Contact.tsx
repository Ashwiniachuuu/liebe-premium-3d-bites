import { motion } from "motion/react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const details = [
  { icon: MapPin, label: "Location", value: "24 Halden Street, Lisbon" },
  { icon: Phone, label: "Phone", value: "+351 910 442 118" },
  { icon: Mail, label: "Email", value: "hello@liebe.food" },
  { icon: Clock, label: "Opening Hours", value: "Mon–Sun · 11:00 – 23:30" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="warm-glow pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold tracking-[0.32em] text-gold">CONTACT</span>
          <h2 className="font-display mt-4 text-4xl text-foreground sm:text-5xl">Come find us</h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((d, i) => (
            <motion.div
              key={d.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass-panel rounded-3xl p-7 transition-transform hover:-translate-y-1.5"
            >
              <d.icon className="h-5 w-5 text-gold" aria-hidden />
              <div className="mt-5 text-[11px] font-semibold tracking-[0.24em] text-muted-foreground">
                {d.label.toUpperCase()}
              </div>
              <div className="mt-2 text-base font-medium text-foreground">{d.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden pb-24 pt-4">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-panel relative overflow-hidden rounded-[2.5rem] px-8 py-20 text-center"
        >
          <div className="pointer-events-none absolute inset-0 warm-glow" />
          <h2 className="font-display relative text-4xl text-foreground sm:text-6xl">
            Ready for Your Next <span className="text-gold italic">Craving?</span>
          </h2>
          <p className="relative mt-5 text-muted-foreground">One bite is all it takes.</p>
          <a
            href="#menu"
            className="relative mt-10 inline-flex rounded-full bg-primary px-10 py-4 text-xs font-semibold tracking-[0.22em] text-primary-foreground transition-transform hover:-translate-y-1"
          >
            ORDER YOUR BURGER
          </a>
        </motion.div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <span className="font-display text-base tracking-[0.3em] text-foreground">LIEBE</span>
          <span>© {new Date().getFullYear()} LIEBE. Good food, good mood.</span>
        </footer>
      </div>
    </section>
  );
}
