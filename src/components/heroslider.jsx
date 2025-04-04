import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  const [slide, setSlide] = useState(0);

  const slides1 = [
    {
      image:
        "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhbmt8ZW58MHx8MHx8fDA%3D",
      title: "Protect What Matters Most",
      subtitle: "Comprehensive insurance solutions tailored for your peace of mind",
    },
    {
      image:
        "https://media.istockphoto.com/id/2143222197/photo/businesses-use-smartphones-with-online-banking-digital-technology-mobile-banking-for-shopping.webp?a=1&b=1&s=612x612&w=0&k=20&c=am27_xs8MuYO987dS2dYDMNsRmjUDv-2Bs93WtGQxSg=",
      title: "Financial Security You Can Trust",
      subtitle: "Safeguard your future with our reliable banking insurance services",
    },
    {
      image:
        "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFua3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Coverage for Every Life Stage",
      subtitle: "From health to property—get insured with a name you trust",
    },
  ];
  

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % slides1.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      {slides1.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === slide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            
            height: "566px",
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.5)",
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col md:flex-row h-full w-full mt-16  min-h-[500px]">
        <div className="flex flex-col justify-end flex-1 p-6 md:p-10">
          <div className="w-full max-w-3xl animate-fade-in">
            <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl font-display">
              {slides1[slide].title}
            </h1>
            <p className="max-w-2xl mb-8 text-base text-white/90 md:text-lg">
              {slides1[slide].subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
