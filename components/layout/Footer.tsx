export default function Footer() {
  return (
    <footer
      className="px-6 py-8 text-center text-xs"
      style={{
        borderTop: "1px solid var(--card-border)",
        color: "var(--text-faint)",
      }}
    >
      © {new Date().getFullYear()} Bartłomiej Basta. Built with Next.js &
      Tailwind CSS.
    </footer>
  );
}
