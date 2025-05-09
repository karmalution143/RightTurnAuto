import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-400 text-white py-16">
      <div className="container mx-auto text-center">
        {/* Logo and Copyright */}
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 mb-8">
            <Image src="/logo.png" alt="Right Turn Auto Credit" className="h-12" />
          </div>
          <p className="text-sm">Copyright 2025 Right Turn Auto Credit</p>
        </div>
      </div>
    </footer>
  );
}
