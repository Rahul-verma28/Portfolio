import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignCenter } from "lucide-react";
import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaTools,
} from "react-icons/fa";
import Image from "next/image";

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignCenter className="ps-4 dark:text-white h-[2.4rem] w-[2.4rem] md:hidden" />
      </SheetTrigger>
      <SheetContent className="dark:bg-gray-900 bg-gray-100 flex flex-col justify-between">
        <div>
          <SheetHeader>
            <SheetTitle>
              <div className="pb-4 border-b dark:border-gray-700 border-gray-300">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/logo.png"
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold dark:text-white">
                      Rahul Verma
                    </h3>
                    <p className="text-sm dark:text-gray-400 text-gray-600">
                      Software Engineer
                    </p>
                  </div>
                </div>
              </div>
            </SheetTitle>
          </SheetHeader>
          <nav className="flex-1 py-6">
            <ul className="space-y-2">
              <li>
                <Link href="#home" prefetch={false}>
                  <div className="flex items-center space-x-3 px-3 py-2 rounded-md dark:hover:bg-gray-700 hover:bg-gray-300 transition-colors">
                    <FaHome className="w-5 h-5 dark:text-gray-400 text-gray-600" />
                    <span className="text-base font-medium dark:text-white text-gray-800">
                      Home
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#about" prefetch={false}>
                  <div className="flex items-center space-x-3 px-3 py-2 rounded-md dark:hover:bg-gray-700 hover:bg-gray-300 transition-colors">
                    <FaUser className="w-5 h-5 dark:text-gray-400 text-gray-600" />
                    <span className="text-base font-medium dark:text-white text-gray-800">
                      About
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#services" prefetch={false}>
                  <div className="flex items-center space-x-3 px-3 py-2 rounded-md dark:hover:bg-gray-700 hover:bg-gray-300 transition-colors">
                    <FaTools className="w-5 h-5 dark:text-gray-400 text-gray-600" />
                    <span className="text-base font-medium dark:text-white text-gray-800">
                      Services
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#projects" prefetch={false}>
                  <div className="flex items-center space-x-3 px-3 py-2 rounded-md dark:hover:bg-gray-700 hover:bg-gray-300 transition-colors">
                    <FaBriefcase className="w-5 h-5 dark:text-gray-400 text-gray-600" />
                    <span className="text-base font-medium dark:text-white text-gray-800">
                      Projects
                    </span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="#contact" prefetch={false}>
                  <div className="flex items-center space-x-3 px-3 py-2 rounded-md dark:hover:bg-gray-700 hover:bg-gray-300 transition-colors">
                    <FaEnvelope className="w-5 h-5 dark:text-gray-400 text-gray-600" />
                    <span className="text-base font-medium dark:text-white text-gray-800">
                      Contact
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="px-4 pt-4 border-t dark:border-gray-700 border-gray-300">
          <p className="text-center text-sm">
            Copyright &copy; 2024 Portfolio{" "}
            <b>Rahul Verma</b>.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
