import AnimationFadeIn from "./animations/animation-fadein";
import AnimationTextShowUp from "./animations/animation-text-showup";
import PageSection from "./layout/page-section";

export default function ContactSection() {
  return (
    <PageSection color="purple">
      <div className="pb-24 pt-4 md:px-8 md:pt-20">
        <AnimationTextShowUp noScale>
          <h2 className="mb-16 bg-gradient-to-br from-cyan-500 to-blue-800 bg-clip-text text-start text-6xl font-extrabold text-transparent md:text-5xl lg:text-7xl">
            Contact Me
          </h2>
        </AnimationTextShowUp>
        <AnimationFadeIn>
          <form
            action="https://usebasin.com/f/5785003bca73"
            method="POST"
            className="flex w-full max-w-4xl flex-col gap-8 text-xl text-gray-400">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="border-2 border-white/0 border-b-gray-400/60 bg-bgPurple/30 px-4 py-4 outline-gray-400/70"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="border-2 border-white/0 border-b-gray-400/60 bg-bgPurple/30 px-4 py-4 outline-gray-400/70"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message">Message </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                cols={33}
                required
                className="resize-none rounded-md border-2 border-gray-400/60 bg-bgPurple/30 px-4 py-4 outline-gray-400/70 ring-0 focus:border-gray-300"
              />
            </div>

            <button
              type="submit"
              className="-ml-3 w-full cursor-pointer bg-opacity-0 px-4 py-4 text-start outline-gray-400/70 hover:underline md:w-52">
              Submit
            </button>
          </form>
        </AnimationFadeIn>
      </div>
    </PageSection>
  );
}
