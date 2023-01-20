import stars from "@assets/games/parallax/stars.png";
import nebulae from "@assets/games/parallax/nebulae.png";
import dust from "@assets/games/parallax/dust.png";
import planets from "@assets/games/parallax/planets.png";
import ParallaxLayer from "./parallax-layer";

export default function SpaceParallax({ offsetY }: { offsetY: number }) {
  console.log(stars);
  return (
    <div className="relative h-full w-full animate-in fade-in slide-in-from-top-5 duration-500">
      <ParallaxLayer
        offsetY={offsetY}
        img={stars.src}
        speed={0.2}
        addOffset={offsetY}
      />
      <ParallaxLayer
        offsetY={offsetY}
        img={nebulae.src}
        speed={0.5}
        addOffset={offsetY}
      />
      <ParallaxLayer
        offsetY={offsetY}
        img={dust.src}
        speed={1.1}
        addOffset={offsetY}
      />
      <ParallaxLayer
        offsetY={offsetY}
        img={planets.src}
        speed={1.5}
        addOffset={offsetY}
      />
    </div>
  );
}