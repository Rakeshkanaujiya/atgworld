import React from 'react'
import Card from '../card/Card';
import HomeLeft from '../homeleft/HomeLeft';

export default function Home() {
  return (
    <div className="md:w-[70%] lg:flex  m-auto mt-10">
      <div className="flex flex-col lg:w-[70%]">
        <ul className="flex mb-6 mt-2 md:w-[100%] w-[100%] justify-center sm:justify-start">
          <li className="mx-2 cursor-pointer h-10 font-semibold border-b-2">
            All Posts(32)
          </li>
          <li className="mx-2 cursor-pointer">Article</li>
          <li className="mx-2 cursor-pointer">Event</li>
          <li className="mx-2 cursor-pointer">Education</li>
          <li className="mx-2 cursor-pointer">Job</li>
        </ul>
        <div className="lg:w-[90%]">
          <Card
            bgsrc="https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EwvQaxFwWfv97F7HxzZF9vzhzkVgKy9jGZ7dBFCafzvlIoC5BK9hTZFUx3tL4RaDLK-ueT1qnvvqbvjWN~wmwRbuadsFXdKPtG40ng4ReInbBbaeM2LUsjdH7zzvTb2MeROtRhMouozsnsbIYBCURHT2hg8pOgdho9A1lAvDDe0lm7KXSI55Yomu4-5H8q-Skscfb3Mx1QGsXpLp8V6x3~N7Cxkeo9A7isvIqnpfWqFIoK1xfysZWC9TgkGCwf6QKy5JEj1k6HsVdimqAC~rkr77Ps9YFHl2pMsrVkCg2S6CMmvrzlXenTqP4hjGhsWZBS1J7eRzuUzjmDOhxcSh9g__"
            title="What if famous brands had regular fonts? Meet RegulaBrands!"
            para="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
            profilesrc="https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xm~czUCGXNhA5DmsA7BWWdUXbbeGMXyZhyG6fZQt~CB-Dl7xN~kKXNwTf3T1M4GSrvqbIoEzT~jx8Uo0iDIP6Fkfn931pbtomfKbNw8FRSIevTQNlcpMcbyNF-KoHpfgE0rGUYn4CJ-jB2X3UeMywP7Cx8ZO5KM2NfHwJqRWtU8mm34DcfvxvlOdqluIwV-dkWDrx39C6wA2--oeJ7tAvD1QwUDLhfbqvw57e2grM3DfuQYqlzpWa6-WtRcojyduB6HJ~RDlvfXQ4K3TZtKS6DmBy4PL0PBZvwOot0XtgDNa9vEnJdxruqFi5VOkdB0Q5ISw3LgVSv4xHnZl4a7PpQ__"
            username="Sarthak Kamra"
            views="2.5K"
          />
          <Card
            bgsrc="https://s3-alpha-sig.figma.com/img/250a/24fe/c8e32137d06a7bb3fd57b6dfb4e07bfe?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p7vv9aIW17QC8-v1o8V8TskKwHFL0BVsrpD74ChGjfr8dcMnyuH-Zp-VMor5jpGs3tQUXpstodF~hJNaoS1TepnOng7lFJsnfv076q0jvzTKVY538X-kPjfdyQ7iGhKCKqUzMC-eSPwfO2kPEy-Wz9K7pwB2VUpWZ4FhxTy4oIvjp9LDyOTdcnChd8gPBWXY4UHliH-bmUroJbK88sgsZ1jjaDOPpyCkMiqbmwhW2EBsgKzt7Ln4qvEK022Okln~Gt55mVk53OGNDLMTEMi71nNx6fAN3c-xhFZx4dLzNMfY8OOEMm7zTAIsEYq0cqOeZ1evtcHRAzC0wcsCgV17cA__"
            title="Tax Benefits for Investment under National Pension Scheme launched by Government"
            para="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
            profilesrc="https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IVoO4d30R~TBKXmV34-sy8cex-z4PfIGbULRMukph6pgaR1P~1~zt7bjWMADAC4S60LvHJ-SoD3P0whyHESvwmPbBjS14X~-sDqSmaLHFoI8j7vRlgxRM3ZiCbNOYHYxzlPhvDu1jr4AMR9YlylviUNhzYaw5CfFZxiZ1XOGBVyd-NeIFggbDcMzPE8sVPW5m11T8R6~OzXCF~rHdjLOQ0u5uZ8lvFqunsPS7ma1lvxanOzkmrpUbwd8bWgdvVD5~XuWBcydnGY28PzEmrJjU0t30aHWoaJ9vBmV2vcKAGjZP2HgOzjcAqoBUB2jS7Cu-CjwuCwlJXXr01mqMAaBag__"
            username="Sarah West"
            views="1.4K"
          />
          <Card
            bgsrc="https://s3-alpha-sig.figma.com/img/bdc0/79a9/a2e530610a1b91c9682ba7889c87c1b2?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ll5sqn9YuE-evKrJAgN86lIVC-EGZf8wiAw1nq7yAryNBOkq7Sg8hKImeS7LeiCBxcRUy0JhqQVzNiHagbk~JVvkW8BSoPvEKIaXZD0RCE7cbbNavBBaU~zfmUvq9agcyHvtxph9jVXyYGeWEfxfe-pVLgnhNz6y02jHe6UgdYcm0VzxdXGkGplvS8Q9OZwlKDbB17ne1wSNg5pyhKsAm~ZfhTmr-5OF7HRmREr65XszlCPeXxVakc8JXakxmmWYL-WGsoYL1xkk-A2s28bQDdMYKgwR7oqJspBh8NEk44VA-KgryX1i6VNjUgKrqQ23G6Frx6FBiXjuVCSVpfhQng__"
            title="Finance & Investment Elite Social Mixer @Lujiazui"
            para="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
            profilesrc="https://s3-alpha-sig.figma.com/img/b8a9/097f/c3ac7682e52df2e10d0a36ec3f243a44?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ng0VDYcSvtV1A57wBDN4-DuJAwroU49mCLRKwrWstF5SsOhJBYqwqikGVs7TS5nVFvmFXiCmc3eLB2NpVjWbKKY5i8pkNpxPOGWHjMGwPVNAGg8EncxQ9E6xafnTbpe7xp~jBa~0X8DGMC5DGFizAWLCgm-6TGLWS3iBV1iL8pD~n09gAiKOCNmggoWRL0KqCuY4pQcEk6aKAw6GVA1NhzKrsB2yGHX7T-KzHeQE-M71KEgHzIcjRTjo8uHytniC-UXKoIiA5isBV0o-H6CZZogHogTqA8948OeoVlOK8rAJ1~iyAwb-fnLX2hYsdqNjVO1c9E1HMPVq2e6cZ~tAWw__"
            username="Ronal Jones"
            views="1.4K"
          />
        </div>
      </div>
      <div className="lg:w-[30%]">
        <HomeLeft />
      </div>
    </div>
  );
}
