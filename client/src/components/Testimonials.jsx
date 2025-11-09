import { testimonials } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 py-12">
      {/* Title section */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        They love us. You will too.
      </h2>

      {/* Body section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="flex flex-col max-w-md mx-auto md:mx-0 justify-between rounded-xl shadow hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col px-6 pt-8 mb-10 space-y-5">
              {/* Quote icon */}
              <svg
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400 fill-current"
              >
                <path d="M24 7.3h-5.1L22.3 4.1H17.3a6 6 0 0 0-3.2 10.3l3.2 1.7 6.5-6.8z" />
              </svg>

              {/* Quote text */}
              <p className="text-gray-700 m-0" style={{ hyphens: "auto" }}>
                {t.quote}
              </p>
            </div>

            {/* Author row */}
            <div className="flex space-x-2 bg-gray-50 px-6 pb-6 pt-5 rounded-b-xl">
              <div className="flex flex-col justify-center">
                <p className="font-semibold text-gray-900 m-0">{t.author}</p>
                <p className="text-gray-500 text-sm m-0 mt-1">{t.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
