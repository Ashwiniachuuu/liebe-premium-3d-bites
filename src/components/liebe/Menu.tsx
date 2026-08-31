import { motion } from "motion/react";
import { Star } from "lucide-react";
import cheese from "@/assets/cheese-burger.png";
import spicy from "@/assets/spicy-chicken-burger.png";
import beef from "@/assets/double-beef-burger.png";
import chicken from "@/assets/crispy-chicken.png";
import fries from "@/assets/loaded-fries.png";
import drink from "@/assets/drinks.png";

const items = [
  { img: cheese, name: "Cheese Burger", desc: "Aged cheddar, smashed patty, brioche.", rating: 4.8, price: "$9.50" },
  { img: spicy, name: "Spicy Chicken Burger", desc: "Chili-glazed crispy fillet, herb slaw.", rating: 4.9, price: "$10.90" },
  { img: beef, name: "Double Beef Burger", desc: "Twin patties, house sauce, pickles.", rating: 4.7, price: "$13.20" },
  { img: chicken, name: "Crispy Chicken", desc: "Buttermilk brined, golden crunch.", rating: 4.6, price: "$8.40" },
  { img: fries, name: "Loaded Fries", desc: "Molten cheese, bacon crumb, chives.", rating: 4.8, price: "$6.20" },
  { img: drink, name: "Drinks", desc: "Cold-pressed citrus over crushed ice.", rating: 4.5, price: "$3.90" },
];

function Card({ item, i }: { item: (typeof items)[number]; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
      whileHover={{ y: -10, rotateX: 6, rotateY: -6 }}
      className="glass-panel group relative rounded-3xl p-7 [transform-style:preserve-3d] [perspective:900px]"
    >
      <div className="pointer-events-none absolute inset-x-8 top-8 h-40 rounded-full bg-gold-soft/50 blur-3xl transition-opacity group-hover:opacity-90" />
      <img
        src={item.img}
        alt={item.name}
        loading="lazy"
        width={800}
        height={800}
        className="relative mx-auto h-44 w-44 object-contain drop-shadow-[0_26px_28px_rgba(0,0,0,0.22)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
      />
      <div className="mt-6 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl text-foreground">{item.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
        </div>
        <span className="font-display text-lg text-foreground">{item.price}</span>
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
        <span className="inline-flex items-center gap-1.5 text-sm text-foreground/80">
          <Star className="h-4 w-4 fill-gold text-gold" aria-hidden />
          {item.rating.toFixed(1)}
        </span>
        <span className="text-[11px] font-semibold tracking-[0.22em] text-foreground/60 transition-colors group-hover:text-gold">
          ADD TO ORDER
        </span>
      </div>
    </motion.article>
  );
}

export function Menu() {
  return (
    <section id="menu" className="relative py-28">
      <div className="warm-glow pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold tracking-[0.32em] text-gold">THE MENU</span>
          <h2 className="font-display mt-4 text-4xl text-foreground sm:text-5xl">
            Crafted plates, cinematic taste
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every item is built from scratch daily — sourced clean, seared hot, served fast.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Card key={item.name} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
