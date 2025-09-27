import apple from "./assets/apple.svg";
import googlePlay from "./assets/google-play.svg";
import creatorImage from "./assets/ritom.png";
import ananta from "./assets/logo.png";
import { ArrowRight, Twitter, Instagram, Linkedin } from "lucide-react";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

// Tailwind + Framer Motion + lucide-react assumed available in the project.

export default function Ananta() {
  return (
    <main className="min-h-screen bg-[#07070a] text-slate-100 font-inter py-12 px-6 lg:px-20">
      {/* Top navigation */}
      <header className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden shadow-2xl flex items-center justify-center">
            <img
              src={ananta}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-lg font-semibold tracking-tight">Ananta</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
          <a href="#apps" className="hover:opacity-100">
            Apps
          </a>
          <a href="#about" className="hover:opacity-100">
            About
          </a>
          <a href="#shop" className="hover:opacity-100">
            Shop
          </a>
          <a href="#contact" className="hover:opacity-100">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="twitter"
            className="opacity-80 hover:opacity-100"
          >
            <Twitter size={18} />
          </a>
          <a
            href="#"
            aria-label="instagram"
            className="opacity-80 hover:opacity-100"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#"
            aria-label="linkedin"
            className="opacity-80 hover:opacity-100"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </header>

      {/* Hero / About */}
      <section
        id="about"
        className="max-w-6xl mx-auto mb-16 flex flex-col-reverse lg:flex-row items-center gap-10"
      >
        {/* Text */}
        <div className="lg:flex-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            We Build Apps with Privacy, Design, and Speed at the Core.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl">
            Empowering people with fast, secure, and beautifully designed
            digital experiences.
          </p>

          {/* Trait badges */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Badge emoji="🔒" title="Privacy First" />
            <Badge emoji="🎨" title="Modern, Well-Organized Design" />
            <Badge emoji="❤️" title="Customers Before Revenue" />
            <Badge emoji="⚡" title="Fast & Future-Ready" />
          </div>
        </div>

        {/* Creator Image */}
        <div className="lg:flex-2 flex justify-center">
          <img
            src={creatorImage}
            alt="Creator"
            className="w-56 h-56 rounded-2xl object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-6">Our Apps</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AppCard
            title="SwiftChat"
            desc="Fast, private messaging for everyone."
            storeLinks
          />

          <AppCard
            title="NoteSpace"
            desc="Your ideas, synced and secure."
            storeLinks
          />

          <AppCard
            title="FitTrack"
            desc="Stay healthy with smart tracking."
            storeLinks
          />

          <ShowMoreCard label="Show More Apps" />
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="max-w-6xl mx-auto mb-24">
        <h2 className="text-2xl font-bold mb-6">Shop Our Gear</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard name="Company Hoodie" price="$39" />
          <ProductCard name="Mug" price="$12" />
          <ProductCard name="T-Shirt" price="$25" />
          <ProductCard name="Laptop Sleeve" price="$29" />
          <ProductCard name="Sticker Pack" price="$5" />

          <div className="col-span-full lg:col-auto">
            <ProductCard showMore />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto border-t border-slate-800 pt-8 pb-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href="#apps" className="hover:underline">
              Apps
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#shop" className="hover:underline">
              Shop
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4 opacity-90">
            <a href="#" aria-label="twitter">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="instagram">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="linkedin">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Ananta — Built with privacy & design in
          mind.
        </p>
      </footer>
      <Analytics />
    </main>
  );
}

function Badge({ emoji, title }: { emoji: string; title: string }) {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-slate-900/60 to-slate-800/40 border border-slate-700 shadow-lg hover:scale-[1.02] transition-transform">
      <span className="text-lg">{emoji}</span>
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
}

function AppCard({
  title,
  desc,
  storeLinks = false,
}: {
  title: string;
  desc: string;
  storeLinks?: boolean;
}) {
  return (
    <article className="rounded-2xl p-6 bg-gradient-to-b from-[#0b0b0d] to-[#0b0b0f] border border-slate-800 shadow-xl hover:translate-y-[-6px] hover:shadow-[0_10px_40px_rgba(99,102,241,0.08)] transition-transform">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center text-black font-bold">
          {title.charAt(0)}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-slate-400 text-sm">{desc}</p>
        </div>
      </div>

      {storeLinks && (
        <div className="mt-6 flex gap-3">
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900/50 border border-slate-700 text-sm shadow-sm hover:scale-[1.02]"
          >
            <img src={apple} alt="app store" className="w-4 h-4" />
            App Store
          </a>

          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-slate-900/50 border border-slate-700 text-sm shadow-sm hover:scale-[1.02]"
          >
            <img src={googlePlay} alt="google play" className="w-4 h-4" />
            Google Play
          </a>
        </div>
      )}
    </article>
  );
}

function ShowMoreCard({ label }: { label: string }) {
  return (
    <button className="rounded-2xl p-6 flex flex-col items-start justify-center bg-gradient-to-br from-transparent to-slate-900/20 border border-dashed border-slate-800 hover:shadow-[0_12px_40px_rgba(139,92,246,0.06)] transition-shadow">
      <span className="text-lg font-medium opacity-90">{label}</span>
      <span className="mt-3 inline-flex items-center gap-2 text-sm opacity-70">
        View all <ArrowRight size={14} />
      </span>
    </button>
  );
}

function ProductCard({
  name,
  price,
  showMore = false,
  className = "",
}: {
  name?: string;
  price?: string;
  showMore?: boolean;
  className?: string;
}) {
  if (showMore) {
    return (
      <button
        className={`w-full rounded-2xl p-5 flex flex-col justify-between bg-gradient-to-b from-[#06060a] to-[#0b0b0d] border border-slate-800 shadow-md hover:-translate-y-2 transition-transform h-full ${className}`}
      >
        <span className="text-lg font-medium opacity-90">
          Show More Products
        </span>
        <span className="mt-3 inline-flex items-center gap-2 text-sm opacity-70">
          View all <ArrowRight size={14} />
        </span>
      </button>
    );
  }

  return (
    <div
      className={`rounded-2xl p-5 bg-gradient-to-b from-[#06060a] to-[#0b0b0d] border border-slate-800 shadow-md hover:-translate-y-2 transition-transform h-full ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-lg bg-slate-900/40 flex items-center justify-center text-slate-300">
          🛍️
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-slate-400 mt-1">{price}</p>
        </div>
      </div>

      <div className="mt-4">
        <button className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-purple-500 text-black font-medium text-sm shadow hover:scale-[1.02] transition-transform">
          Buy Now
        </button>
      </div>
    </div>
  );
}
