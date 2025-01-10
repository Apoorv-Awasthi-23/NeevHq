import { testimonials } from "../constants/testimonials-sample";

const Team = () => {
  return (
    <div>
      <div className="pt-[50px] lg:pt-[120px]">
        <div className="flex flex-col items-center gap-8 px-4">
          <div className="text-xl md:text-3xl font-bold mb-0 md:mb-4">
            Meet Our Team
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map((testimonial, index) => (
              <a
                key={index}
                href="https://google.in"
                target="_blank"
                className="border flex gap-4 flex-row justify-around items-center border-gray-400 rounded-lg p-6 w-[320px] hover:border-blue-800 hover:shadow-lg transition-all"
              >
                <div className="flex flex-row gap-3  items-center">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="w-[60px] h-[60px] object-cover rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-bold ">{testimonial.user}</h3>
                    <p className="font-semibold text-md text-black mb-1">
                      {testimonial.company}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
