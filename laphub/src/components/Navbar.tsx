"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    function updateDateTime() {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setDateTime(now.toLocaleString(undefined, options));
    }

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive flex container */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 gap-y-2">

          {/* Left side: Logo and badge */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
            <h1 className="text-cyan-700 text-2xl font-extrabold uppercase tracking-wide cursor-default select-none hover:text-cyan-600 transition-colors duration-300 ease-in-out">
              LapHub
            </h1>
            <span className="inline-block bg-red-600 text-white text-xs font-semibold uppercase px-3 py-1 rounded-full select-none tracking-wide shadow-md">
              Latest Releases
            </span>
          </div>

          {/* Right side: Datetime and GitHub */}
          <div className="flex items-center justify-between sm:justify-end gap-4 flex-wrap">
            <div className="text-blue-700 font-mono text-sm tracking-wider select-none min-w-[200px] text-right">
              {dateTime}
            </div>
            <a
              href="https://github.com/mustahsin64/LapHub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="text-black hover:text-blue-700 transition-colors duration-300 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 sm:w-7 sm:h-7"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.016c0 4.425 2.865 8.182 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.34-2.22-.252-4.555-1.114-4.555-4.958 0-1.095.39-1.99 1.029-2.69-.103-.253-.446-1.27.098-2.647 0 0 .84-.27 2.75 1.025a9.56 9.56 0 012.5-.336c.848.004 1.705.115 2.5.337 1.91-1.296 2.748-1.025 2.748-1.025.546 1.378.202 2.395.1 2.647.64.7 1.028 1.595 1.028 2.69 0 3.854-2.337 4.703-4.565 4.95.359.31.678.92.678 1.856 0 1.338-.012 2.419-.012 2.75 0 .268.18.58.688.481A10.02 10.02 0 0022 12.015C22 6.484 17.523 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
