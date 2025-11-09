
import {assets} from "../assets/assets"; 

const Header = () => {
  return (
    <section className="mx-auto max-w-6xl px-4">
      {/* 2-column hero: stacks on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        {/* Left: video banner (second on mobile, first on desktop) */}
        <div className="order-2 md:order-1 flex justify-center">
          <div className="shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] rounded-3xl overflow-hidden">
            <video
              src={assets.video_banner}
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[400px] h-auto object-cover"
            />
          </div>
        </div>

        {/* Right: text + CTA (first on mobile, second on desktop) */}
        <div className="order-1 md:order-2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The fastest{" "}
            <span className="text-indigo-700">background eraser.</span>
          </h1>

          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Transform your photos with our background remover app! Highlight
            your subject and create a transparent background ready for any
            design or destination.
          </p>

          <div>
            {/* Hidden native file input controlled by a styled label */}
            <input type="file" accept="image/*" id="upload1" hidden />
            <label
              htmlFor="upload1"
              className="inline-block bg-black text-white font-medium px-8 py-4 rounded-full text-lg
                         hover:opacity-90 hover:scale-105 transition-transform focus:outline-none
                         focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              aria-label="Upload an image"
            >
              Upload your image
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
