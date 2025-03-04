import { CommunityGallery } from "@/components/Slider";

export default function Home() {
  return (
    <>
      <main>
        {/* HERO */}
        <div
          className="max-md:hidden mx-auto h-dhv overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg"
          style={{ backgroundImage: "url('/hero.webp')" }}
        >
          <div className="mt-[64rem]"></div>
        </div>
        <div
          className="visible md:hidden mx-auto h-dhv overflow-y-scroll bg-cover bg-center bg-no-repeat shadow-lg"
          style={{ backgroundImage: "url('/hero-mobile.webp')" }}
        >
          <div className="mt-[40rem]"></div>
        </div>

        {/* SHORT INTRO */}
        <div className="bg-neutral-100 py-8 px-5 lg:px-80">
          <h3 className="text-center mb-8 text-5xl font-semibold">
            Flayer Studio
          </h3>
          <p className="text-center text-md mb-4 lg:text-lg">
            A graphic designer and illustrator based in Yogyakarta, Indonesia,
            with four years of experience creating impactful visuals for brands
            locally and internationally.
          </p>
          <p className="text-center text-md lg:text-lg">
            I specialize in logo design, branding, illustrations, content media,
            marketing materials, and packaging design—crafting designs that
            align with your brand’s identity and storytelling. Inspired by
            creativity and driven by purpose, my work brings ideas to life with
            thoughtful design solutions.
          </p>
          <img
            className="rounded-full mt-4 mx-auto"
            height="160"
            width="160"
            src="/logo-flayer.jpg"
          />
        </div>

        {/* MEET THE ARTIST  */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-gray-100 py-10 px-5 lg:px-10 xl:px-40">
            <h3 className="text-5xl xl:text-8xl text-center mb-16 font-semibold tracking-widest">
              MEET THE ARTIST
            </h3>
            <p className="mb-8 text-md xl:text-lg">
              Traveler, coffee lover, music enthusiast, and concertgoer—Ghizal
              is a graphic designer and illustrator based in Yogyakarta,
              Indonesia.
            </p>
            <p className="mb-8 text-md xl:text-lg">
              With a passion for storytelling through visuals, Ghizal works as a
              freelance designer, collaborating with clients both locally and
              internationally. Specializing in logo design, branding, marketing
              materials, packaging, and intricate illustrations for playing
              cards and tarot decks, their work blends creativity with purpose.
            </p>
            <p className="text-md xl:text-lg">
              Whether sketching ideas over a cup of coffee or finding
              inspiration in the energy of live music, Ghizal’s designs are
              shaped by a love for art, culture, and meaningful connections.
            </p>
          </div>
          <div className="bg-white w-full max-lg:order-first">
            <img src="/profile.png" alt="profile" />
          </div>
        </div>
        <div className="bg-slate-200 text-center py-14 px-4">
          <h3 className="text-5xl xl:text-8xl text-center mb-12 font-semibold">
            WHAT WE DO
          </h3>
          <h4 className="text-base xl:text-2xl mb-4 font-medium tracking-wider">
            LOGOS AND BRANDING
          </h4>
          <h4 className="text-base xl:text-2xl mb-4 font-medium tracking-wider">
            CUSTOM DESIGN AND ILLUSTRATION
          </h4>
          <h4 className="text-base xl:text-2xl mb-4 font-medium tracking-wider">
            LABEL AND PACKAGE DESGIN
          </h4>
          <h4 className="text-base xl:text-2xl font-medium tracking-wider">
            MARKETING AND CONTENT MEDIA
          </h4>
        </div>

        {/*  ILLUSTRATION */}
        <div className="p-5 xl:p-10 bg-zinc-50">
          <h3 className="text-2xl xl:text-5xl text-center mb-4 xl:mb-8">
            Illustration
          </h3>
          <img
            className="rounded-lg"
            src="/illustration.png"
            alt="illustration"
          />
        </div>

        {/*  MARKETING */}
        <div className="p-5 xl:p-10 bg-neutral-100">
          <h3 className="text-2xl xl:text-5xl text-center mb-4 xl:mb-8">
            Marketing Design Asset
          </h3>
          <img className="rounded-lg" src="/marketing.png" alt="illustration" />
        </div>

        {/*  CONTENT MEDIA */}
        <div className="p-5 xl:p-10 bg-slate-50">
          <h3 className="text-2xl xl:text-5xl text-center mb-4 xl:mb-8">
            Content Media
          </h3>
          <img
            className="rounded-lg"
            src="/content-media.png"
            alt="illustration"
          />
        </div>

        {/*  WORK WITH ME */}
        <div className="bg-zinc-200 py-10 mx-auto flex flex-col">
          <h3 className="text-4xl xl:text-6xl text-center mb-8 xl:mb-10 font-semibold">
            WORK WITH US
          </h3>
          <p className="px-14 xl:w-[40rem] text-center mx-auto">
            Whether you're in need of a logo and branding, re-branding, custom
            illustrations or use of a current design feel free to send an email.
          </p>
          <a
            className="w-[10rem] mt-10 py-2 text-lg text-center mx-auto bg-slate-600 text-neutral-100 rounded-full hover:-translate-y-1 duration-200 hover:shadow-lg hover:bg-slate-400"
            role="button"
            href="mailto:saintflayer@gmail.com"
          >
            Get in touch!
          </a>
          <CommunityGallery />
          {/* <motion.div
            className="absolute left-0 flex gap-4"
            style={{ x: xTranslation }}
            ref={ref}
            onHoverStart={() => {
              setMustFinish(true);
              setDuration(SLOW_DURATION);
            }}
            onHoverEnd={() => {
              setMustFinish(true);
              setDuration(FAST_DURATION);
            }}
          >
            {[...images, ...images].map((item, idx) => (
              <Card image={item} key={idx} />
            ))}
          </motion.div> */}
        </div>
      </main>
      <footer className="grid grid-rows-1 justify-center lg:grid-cols-2 lg:gap-4 py-10 lg:px-52 xl:px-80">
        <div>
          <img
            className="rounded-full max-lg:mx-auto"
            height="160"
            width="160"
            src="/logo-flayer.jpg"
          />
        </div>
        <div className="pt-8 text-center lg:text-right">
          <p className="mb-1">Illustration, Art, Graphic Design</p>
          <p className="mb-1">Yogyakarta, Indonesia</p>
          <a
            className="font-thin mb-1 underline cursor-pointer"
            href="mailto:saintflayer@gmail.com"
          >
            <p>saintflayer@gmail.com</p>
          </a>
          <a
            className="font-thin underline cursor-pointer"
            href="https://www.instagram.com/flayer.std/"
            target="_blank"
          >
            <p>@flayer.std</p>
          </a>
        </div>
      </footer>
    </>
  );
}
