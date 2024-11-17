"use client";

import Image from "next/image";
import Link from "next/link";

export function FooterComponent() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto max-w-7xl px-4 pb-16 pt-32">
        <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
          <Link href="/">
            <Image
              src="/assets/shared/desktop/logo-light.png"
              alt="Designo logo"
              width={202}
              height={27}
            />
          </Link>
          <ul className="mt-8 flex flex-col space-y-4 md:mt-0 md:flex-row md:space-x-8 md:space-y-0">
            <li>
              <Link href="/about" className="hover:underline">
                Our Company
              </Link>
            </li>
            <li>
              <Link href="/locations" className="hover:underline">
                Locations
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <p className="font-bold">Designo Central Office</p>
              <p>3886 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div>
              <p className="font-bold">Contact Us (Central Office)</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.com</p>
            </div>
            <div className="flex justify-center space-x-4 md:justify-end">
              <Link href="#" aria-label="Facebook">
                <Image
                  src="/assets/shared/desktop/icon-facebook.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Image
                  src="/assets/shared/desktop/icon-youtube.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Image
                  src="/assets/shared/desktop/icon-twitter.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" aria-label="Pinterest">
                <Image
                  src="/assets/shared/desktop/icon-pinterest.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Image
                  src="/assets/shared/desktop/icon-instagram.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
