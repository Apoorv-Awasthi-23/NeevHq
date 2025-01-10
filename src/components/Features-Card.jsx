import { useState } from "react";
import { useRef } from "react";


const CardTilt = ({ children, className }) => {
  const itemRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg)
         rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const FeatureCard = ({ title, src, description }) => {
  return (
    <div className="relative size-full">
      <img
        src={src}
        className="absolute top-0 left-0 size-full object-cover object-center"
      />
      <div
        className="relative z-10 size-full flex flex-col 
        justify-between p-5 text-black"
      >
        <div>
          <h1 className="featureCard-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const FeatCard = () => (
  <section className="bg-blue-50 ">
    <div className="container mx-auto px-3 md:px-10 py-0 mb-0 ">
      <div className="relative h-[70vh] flex items-start justify-start px-5 pt-16 pb-0 m-b z-10">
        <video
          className="absolute top-0 left-0 w-full h-[50vh] object-cover mt-24 mb-0 z-0"
          src="/images/process-vid.mp4"
          autoPlay
          loop
          muted
        ></video>

        <div className="relative z-20">
          <div className="text-2xl sm:text-4xl mb-3 sm:mb-5 text-left font-bold md:whitespace-nowrap">
            AI beyond documentation
          </div>
          <p className="max-w-md font-circular-web text-lg text-black opacity-90 mt-2">
            High-quality AI medical documentation is the foundation. NeevHQ
            Assist adds a layer of intelligence. Clinicians get key, real-time
            guidance at the point of care. Healthcare organizations get
            team-wide alignment and can stay on top of value-based care
            programs.
          </p>
        </div>
      </div>

      <CardTilt className="bg-blue-100 border-hsla relative  py-4 mb-7 h-full w-full overflow-hidden rounded-md md:h-[65vh]">
        <FeatureCard
          src="https://www.neevhq.com/docu.webp"
          title={
            <div className="text-2xl sm:text-4xl mb-3 sm:mb-5 text-left font-bold md:whitespace-nowrap">
              Effortless Documentation For
              <span className="hidden sm:inline">
                <br />
              </span>
              <span className="text-left inline-block bg-gradient-to-r from-[#607AFF] from-30% via-[#8DD3FF] via-90% to-[#B4D0FF] to-100% bg-clip-text text-transparent w-fit">
                Smarter Healthcare
              </span>
            </div>
          }
          description="Automate your documentation process with Neev - seamless, accurate, and ready for your EMRs."
          isComingSoon
        />
      </CardTilt>

      <CardTilt className="border-hsla relative py-8 mb-7 h-full w-full overflow-hidden rounded-md md:h-[65vh]">
        <FeatureCard
          src="/images/img-2.jpg"
          title={
            <div className="text-2xl sm:text-4xl mb-3 sm:mb-5 text-left font-bold md:whitespace-nowrap">
              Clinicians tailor their notes,
              <span className="hidden sm:inline">
                <br />
              </span>
              <span className="text-left inline-block bg-gradient-to-r from-[#607AFF] from-30% via-[#8DD3FF] via-90% to-[#B4D0FF] to-100% bg-clip-text text-transparent w-fit">
                their way
              </span>
            </div>
          }
          description="Transcribe Conversations : Record and summarise doctor-patient interactions with
                        speaker diarisation."
          isComingSoon
        />
      </CardTilt>

      <CardTilt className=" border-hsla relative pb-8 mb-7 h-full w-full overflow-hidden rounded-md md:h-[65vh]">
        <FeatureCard
          src="/images/Imag-text.png"
          title={
            <div className="text-2xl sm:text-4xl mb-3 sm:mb-5 text-left font-bold md:whitespace-nowrap">
              Safe, Secure, Transparent
            </div>
          }
          description=""
          isComingSoon
        />
      </CardTilt>
    </div>
  </section>
);

export default FeatCard;
