import NewsLetterBox from "../components/common/NewsLetterBox";
import { assets } from "../assets/assets";
import Title from "../components/common/Title";

const About = () => {
  return (
    <div className="border-t pt-14">
      <div className="text-center text-2xl">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      {/* --------------- about image and description --------------- */}
      <div className="flex flex-col sm:flex-row gap-16 my-10">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="About section image"
        />
        <div className="flex flex-col gap-6 justify-center md:w-2/4 text-gray-600">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>

      {/* ----------------- why choose section --------------------- */}
      <div className="mb-10">
        <div className="text-2xl">
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </div>

        <div className="flex flex-col md:flex-row text-sm mt-6">
          <div className="border border-gray-200 px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p>
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>

          <div className="border border-gray-200 px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p>
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className="border border-gray-200 px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p>
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
