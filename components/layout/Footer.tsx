export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-xs text-white/30">
      © {new Date().getFullYear()} Bartłomiej Basta. Built with Next.js &
      Tailwind CSS.
    </footer>
  );
}
