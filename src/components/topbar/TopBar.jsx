import React from 'react'

export default function TopBar() {
  return (
    <div className="w-full mt-4 mb-4 flex justify-around ">
      <div className="">
        <a className="text-2xl text-green-500" href="">
          ATG.<span className="text-gray-500">WORLD</span>
        </a>
      </div>
      <div className="hidden md:block">
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-43 h-3 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-64 h-8 ps-10 text-sm text-gray-900 rounded-2xl bg-gray-100 focus:outline-none"
            placeholder="Search for your favorite groups in ATG"
            required
          />
        </div>
      </div>

      <div className="">
        <p className="topbarCreateAccount">
          Create account. <span className="text-blue-600">It's free!</span>
        </p>
      </div>
    </div>
  );
}
