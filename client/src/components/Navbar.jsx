import { ScanSearch } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-12 py-6 bg-slate-950 border-b border-slate-800">

      {/* Logo */}
      <div className="flex items-center gap-3">

        <ScanSearch className="w-9 h-9 text-emerald-400" />

        <h1 className="text-3xl font-bold tracking-tight text-white">
          CodeLens
        </h1>

      </div>

      {/* Navigation */}
      <div className="space-x-8 text-gray-400">

        <a href="#" className="hover:text-white transition">
          Dashboard
        </a>

        <a href="#" className="hover:text-white transition">
          Analytics
        </a>

        <a href="#" className="hover:text-white transition">
          About
        </a>

      </div>

    </nav>
  );
}

export default Navbar;