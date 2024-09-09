import React from "react";

export default function Footer() {
  return (
    <footer class="bg-gray-100 font-light text-gray-600 py-6 border-t-2 mt-24 px-8">
      <div class="max-w-screen-xl mx-auto px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 class="font-bold text-base mb-2">Support</h4>
            <ul className="flex flex-col text-sm font-normal gap-2">
              <li>
                <a href="#" class="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Get help with a safety issue
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  AirCover
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Anti-discrimination
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Disability support
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Cancellation options
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Report neighborhood concern
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-base mb-2">Hosting</h4>
            <ul className="flex flex-col text-sm font-normal gap-2">
              <li>
                <a href="#" class="hover:underline">
                  Airbnb your home
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  AirCover for Hosts
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Hosting resources
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Community forum
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Hosting responsibly
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Join a free Hosting class
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-base mb-2">Airdnd</h4>
            <ul className="flex flex-col text-sm font-normal gap-2">
              <li>
                <a href="#" class="hover:underline">
                  Newsroom
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  New features
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Investors
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Airbnb.org emergency stays
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p class="text-center md:text-left mb-4 md:mb-0">
            &copy; 2024 Airbnb, Inc. ·{" "}
            <a href="#" class="hover:underline">
              Privacy
            </a>{" "}
            ·{" "}
            <a href="#" class="hover:underline">
              Terms
            </a>{" "}
            ·{" "}
            <a href="#" class="hover:underline">
              Sitemap
            </a>
          </p>
          <div class="flex space-x-4">
            <a href="#" class="hover:underline">
              English (AE)
            </a>
            <a href="#" class="hover:underline">
              AED
            </a>
            <a href="#" class="hover:underline">
              Facebook
            </a>
            <a href="#" class="hover:underline">
              Twitter
            </a>
            <a href="#" class="hover:underline">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
