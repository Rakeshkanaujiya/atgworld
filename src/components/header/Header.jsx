import React from 'react'

export default function Header() {
  const background = {
    backgroundImage: ` url('')`,
    height: "440px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div class="h-[440px] w-full bg-[url('././images/backImg.jpeg')] bg-cover">
      <div className="text-white p-10">
        <p className="text-[36px] font-bold">Computer Engineering</p>
        <p class="text-[18px]">Some quick example text</p>
      </div>
    </div>
  );
}

