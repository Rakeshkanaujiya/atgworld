import React from 'react'

export default function HomeLeft() {
  return (
    <div className='w-[90%] m-auto'>
      <div className="lg:flex">
            <select className="p-1 bg-gray-100 font-semibold focus:outline-none cursor-pointer rounded-md">
            <option selected value="Write a Post">
                Write a Post
            </option>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
            </select>
            <button className="p-1 bg-blue-500 text-white rounded-md ml-5">
            <i class="fa-solid fa-user-group"></i> Join Group
            </button>
      </div>
      <div className="flex justify-center mt-8">
        <div className="md:w-[90%] ">
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <i class="fa-solid fa-location-dot"></i>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </div>
            <input
              type="search"
              id="default-search"
              class="block h-10 ps-10 text-sm text-gray-900 border-b-2 focus:outline-none"
              placeholder="Enter Your Location"
              required
            />
          </div>
          <p className="text-xs ml-2 mt-8 text-gray-500">
            <i className="fa-solid fa-circle-info"></i> Your location will help
            us serve better and extend a personalised experience.
          </p>
          <p className="text-sm ml-2 mt-8 mb-8 text-gray-950">
            <i className="fa-regular fa-thumbs-up"></i>{" "}
            <span className="font-semibold">RECOMMENDED GROUPS</span>
          </p>

          <div className="">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?cs=srgb&dl=pexels-george-dolgikh-551816-1310522.jpg&fm=jpg"
                  alt=""
                />
                <span className="font-semibold">Leisure</span>
              </div>
              <div>
                <span className="block w-[80px] text-center bg-black text-white text-xs rounded-2xl p-1">
                  Followed
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  src="https://wallpapers.com/images/hd/pretty-profile-pictures-k1qebyviiyl0wx0x.jpg"
                  alt=""
                />
                <span className="font-semibold">Activism</span>
              </div>
              <div>
                <span className="block w-[60px] text-center bg-gray-200 text-black text-xs rounded-2xl p-1">
                  Follow
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  src="https://www.shutterstock.com/image-photo/profile-picture-smiling-young-african-260nw-1873784920.jpg"
                  alt=""
                />
                <span className="font-semibold">MBA</span>
              </div>
              <div>
                <span className="block w-[60px] text-center bg-gray-200 text-black text-xs rounded-2xl p-1">
                  Follow
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                  alt=""
                />
                <span className="font-semibold">Philosophy</span>
              </div>
              <div>
                <span className="block w-[60px] text-center bg-gray-200 text-black text-xs rounded-2xl p-1">
                  Follow
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
