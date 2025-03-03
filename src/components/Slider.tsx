import { memo, useEffect, useRef, useState } from "react";
import cn from "classnames";

const communityImages = [
  {
    src: "/image-1.jpg",
    alt: "Illustration 1",
  },
  {
    src: "/image-2.jpg",
    alt: "Illustration 2",
  },
  {
    src: "/image-3.jpg",
    alt: "Illustration 3",
  },
  {
    src: "/image-4.jpg",
    alt: "Illustration 4",
  },
  {
    src: "/image-5.jpg",
    alt: "Illustration 5",
  },
  {
    src: "/image-6.jpg",
    alt: "Illustration 6",
  },
  {
    src: "/image-7.jpg",
    alt: "Illustration 7",
  },
  {
    src: "/image-8.jpg",
    alt: "Illustration 8",
  },
];

export function CommunityGallery() {
  const ref = useRef<HTMLDivElement | null>(null);

  const [shouldPlay, setShouldPlay] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShouldPlay(entry.isIntersecting);
        });
      },
      {
        root: null,
        rootMargin: `${window.innerHeight}px 0px`,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  const [isLazy, setIsLazy] = useState(true);
  // Either wait until we're scrolling close...
  useEffect(() => {
    if (!isLazy) {
      return;
    }
    const rootVertical = window.innerHeight * 2.5;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLazy(false);
          }
        });
      },
      {
        root: null,
        rootMargin: `${rootVertical}px 0px`,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [isLazy]);
  // ... or until it's been a while after hydration.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLazy(false);
    }, 20 * 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex overflow-x-hidden overflow-y-visible w-auto"
    >
      <div
        className="w-full py-12 lg:py-20 whitespace-nowrap flex flex-row animate-marquee lg:animate-large-marquee"
        style={{
          animationPlayState: shouldPlay ? "running" : "paused",
        }}
      >
        <CommunityImages isLazy={isLazy} />
      </div>
      <div
        aria-hidden="true"
        className="w-full absolute top-0 py-12 lg:py-20 whitespace-nowrap flex flex-row animate-marquee2 lg:animate-large-marquee2"
        style={{
          animationPlayState: shouldPlay ? "running" : "paused",
        }}
      >
        <CommunityImages isLazy={isLazy} />
      </div>
    </div>
  );
}

interface CommunityImagesProps {
  isLazy: boolean;
}

const CommunityImages = memo(function CommunityImages({
  isLazy,
}: CommunityImagesProps) {
  return (
    <>
      {communityImages.map(({ src, alt }, i) => (
        <div
          key={i}
          className={cn(
            `group flex justify-center px-5 min-w-[50%] lg:min-w-[25%] rounded-2xl relative`
          )}
        >
          <div
            className={cn(
              "h-auto relative rounded-2xl overflow-hidden before:-skew-x-12 before:absolute before:inset-0 before:-translate-x-full group-hover:before:animate-[shimmer_1s_forwards] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent transition-all ease-in-out duration-300",
              i % 2 === 0
                ? "rotate-2 group-hover:rotate-[-1deg] group-hover:scale-110 group-hover:shadow-lg lg:group-hover:shadow-2xl"
                : "group-hover:rotate-1 group-hover:scale-110 group-hover:shadow-lg lg:group-hover:shadow-2xl rotate-[-2deg]"
            )}
          >
            <img
              loading={isLazy ? "lazy" : "eager"}
              src={src}
              alt={alt}
              className="aspect-[4/3] h-full w-full flex object-cover rounded-2xl bg-gray-10 dark:bg-gray-80"
            />
          </div>
        </div>
      ))}
    </>
  );
});
