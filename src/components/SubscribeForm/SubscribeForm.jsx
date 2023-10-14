import { motion } from "framer-motion";

function SubscribeForm() {
  const subscribe = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };
  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onSubmit={subscribe}
      className="p-2 border-2 rounded-md grow-2 mt-4 subscribe-form"
    >
      <input
        className=" outline-none pl-1"
        placeholder="Enter your email"
        required
      />
      <button
        className="bg-black px-5 py-3 text-white rounded-md font-medium"
        type="submit"
      >
        Subscribe
      </button>
    </motion.form>
  );
}
export default SubscribeForm;
