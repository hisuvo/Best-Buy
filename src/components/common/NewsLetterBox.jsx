import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandle = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    console.log(email);
  };

  return (
    <div className="my-10 text-center">
      <h3 className="text-2xl mb-3 font-medium text-gray-800">
        Subscribe now & get 20% off
      </h3>
      <p className="text-xl sm:text-sm md:text-base text-gray-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form
        onSubmit={onSubmitHandle}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <button
          className="bg-black text-white text-xs px-10 py-4"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
