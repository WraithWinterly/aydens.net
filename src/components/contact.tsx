import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <div className="flex w-full flex-col items-center px-2 text-start animate-in fade-in slide-in-from-top-10 duration-500">
      <h2 className="bg-gradient-to-br from-cyan-300 to-blue-700 bg-clip-text text-4xl font-extrabold text-transparent md:text-7xl lg:text-8xl">
        Contact
      </h2>
      <form
        action="https://usebasin.com/f/5785003bca73"
        method="POST"
        className="flex w-full max-w-4xl flex-col gap-4 rounded-xl bg-purple-900/30 px-4 py-4 backdrop-blur-xl">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="rounded-xl bg-gray-500/50 px-4 py-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="rounded-xl bg-gray-500/50 px-4 py-4"
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
            className="resize-none rounded-xl bg-gray-500/50 px-4 py-4"
          />
        </div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          whileHover={{
            scale: 1.1,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            damping: 14,
            bounce: 0.5,
            duration: 0.1,
          }}
          className="mx-auto w-full md:w-52">
          <button
            type="submit"
            className="btn w-full bg-purple-700 py-4 md:w-52">
            Submit
          </button>
        </motion.div>
      </form>
    </div>
  );
}
