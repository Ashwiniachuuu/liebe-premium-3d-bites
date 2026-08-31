import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/liebe/Navbar";
import { Hero } from "@/components/liebe/Hero";
import { Menu } from "@/components/liebe/Menu";
import { Offers } from "@/components/liebe/Offers";
import { About } from "@/components/liebe/About";
import { Contact, FinalCta } from "@/components/liebe/Contact";

const title = "LIEBE — Good Food. Good Mood!";
const description =
  "LIEBE serves premium handcrafted burgers, crispy chicken and loaded fries. Fresh flavors, bold cravings, delivered your way.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <Menu />
      <Offers />
      <About />
      <Contact />
      <FinalCta />
    </main>
  );
}
