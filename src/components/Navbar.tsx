import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-end p-4">
      <ThemeToggle />
    </nav>
  );
}
