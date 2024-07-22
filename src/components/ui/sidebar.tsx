import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignCenter } from "lucide-react";
import Link from "next/link";
import {
  FaAlignCenter,
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import Image from "next/image"; // Import the Image component from next/image

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignCenter className="ps-4 dark:text-white h-[2.4rem] w-[2.4rem] md:hidden" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <div className="pb-4 border-b border-gray-700">
              <div className="flex items-center space-x-4">
                <Image
                  src="/image.png"
                  alt="Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-lg font-semibold">Rahul Verma</h3>
                  <p className="text-sm text-gray-400">Software Engineer</p>
                </div>
              </div>
            </div>
          </SheetTitle>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <nav className="flex-1 px-4 py-6">
              <ul className="space-y-2">
                <li>
                  <Link href="/" prefetch={false}>
                    <div className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-700 transition-colors">
                      <FaHome className="w-5 h-5 text-gray-400" />
                      <span className="text-base font-medium">Home</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#about" prefetch={false}>
                    <div className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-700 transition-colors">
                      <FaUser className="w-5 h-5 text-gray-400" />
                      <span className="text-base font-medium">About</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#projects" prefetch={false}>
                    <div className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-700 transition-colors">
                      <FaBriefcase className="w-5 h-5 text-gray-400" />
                      <span className="text-base font-medium">Projects</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="#contact" prefetch={false}>
                    <div className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-700 transition-colors">
                      <FaEnvelope className="w-5 h-5 text-gray-400" />
                      <span className="text-base font-medium">Contact</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
          </SheetClose>
        </SheetFooter>
        {/* <div className="px-4 py-4 border-t border-gray-700">
          <Link href="/resume" prefetch={false}>
            <div className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-500 transition-colors">
              <FaDownload className="w-5 h-5 mr-2" />
              Download Resume
            </div>
          </Link>
        </div> */}
      </SheetContent>
    </Sheet>
  );
}
