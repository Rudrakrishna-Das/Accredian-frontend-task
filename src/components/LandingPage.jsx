import { useRef, useState } from "react";
import ReferModal from "./ReferModal";
import Navigation from "./Navigation";

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("all_program");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const referRef = useRef(null);
  const benefitRef = useRef(null);
  const faqRef = useRef(null);
  const supportRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="text-black">
      <div className="bg-blue-300 flex justify-center gap-3 py-2 max-sm:hidden">
        <h1>Navigate your ideal carrer path</h1>
        <span className="text-blue-600 font-bold">Contact Expert</span>
      </div>
      <section className=" w-[80%] mx-auto my-4">
        <Navigation />
      </section>
      <section className="sticky top-0 w-[80%] mx-auto my-4">
        <ul className="w-[40%] max-md:w-full bg-blue-200 rounded-lg text-white mx-auto flex justify-around py-2">
          <li
            onClick={() => scrollToSection(referRef)}
            className="text-black hover:text-blue-500 cursor-pointer"
          >
            Refer
          </li>
          <li
            onClick={() => scrollToSection(benefitRef)}
            className="text-black hover:text-blue-500 cursor-pointer"
          >
            Benefits
          </li>
          <li
            onClick={() => scrollToSection(faqRef)}
            className="text-black hover:text-blue-500 cursor-pointer"
          >
            Faq
          </li>
          <li
            onClick={() => scrollToSection(supportRef)}
            className="text-black hover:text-blue-500 cursor-pointer"
          >
            Support
          </li>
        </ul>
      </section>
      {/* Refer */}
      <section
        ref={referRef}
        className="py-3 flex flex-col gap-10 text-xl text-center"
      >
        <div>
          <img
            src="./refer.png"
            alt="refer"
            className="w-[55rem] rounded-lg mx-auto"
          />
          <button
            onClick={handleOpenModal}
            className="bg-blue-600 text-white px-14 py-2 rounded-md relative -top-14 -left-72 max-md:static"
          >
            Refer Now
          </button>
        </div>

        <div className="bg-[#EEF5FF] py-6">
          <h1 className="mx-auto">
            How Do I <span className="text-[#1A73E8] font-bold">Refer</span>
          </h1>
          <img className="w-[50rem] mx-auto" src="./img1.png" alt="way" />
        </div>
        <button
          onClick={handleOpenModal}
          className="bg-blue-600 text-white w-36 py-2 rounded-md mx-auto"
        >
          Refer Now
        </button>
      </section>
      {/* Benefit */}
      <section ref={benefitRef} className="text-center flex flex-col gap-20">
        <h1 className="text-xl">
          What Are The{" "}
          <span className="text-blue-600 font-bold">Referral Benefits</span>
        </h1>
        <div className=" flex justify-around">
          <ul className="shadow-lg rounded-md">
            <li
              onClick={() => setSelectedGroup("all_program")}
              className={`${
                selectedGroup === "all_program"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black"
              } flex justify-between gap-4 hover:bg-blue-700 hover:text-white px-4 py-2 rounded-t-md cursor-pointer`}
            >
              All Programs <span>&gt;</span>
            </li>
            <li
              onClick={() => setSelectedGroup("product_management")}
              className={`${
                selectedGroup === "product_management"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black"
              } flex justify-between gap-4 hover:bg-blue-700 hover:text-white px-4 py-2 cursor-pointer`}
            >
              Product Management <span>&gt;</span>
            </li>
            <li
              onClick={() => setSelectedGroup("data_science")}
              className={`${
                selectedGroup === "data_science"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black"
              } flex justify-between gap-4 hover:bg-blue-700 hover:text-white px-4 py-2 rounded-b-md cursor-pointer`}
            >
              Data Science <span>&gt;</span>
            </li>
          </ul>
          <div className="overflow-hidden rounded-md border-[1px]">
            <table className="text-left w-full">
              <thead className="bg-blue-200">
                <tr>
                  <th className="border-r-2 border-black px-3 py-2">
                    Programs
                  </th>
                  <th className="border-r-2 border-black px-3 py-2">
                    Referrer Bonus
                  </th>
                  <th className="px-3 py-2">Referee Bonus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-r-2 border-black px-3 py-2">
                    Professional certificate
                  </td>
                  <td className="border-r-2 border-black px-3 py-2">10000</td>
                  <td className="px-3 py-2">6000</td>
                </tr>
                <tr>
                  <td className="border-r-2 border-black px-3 py-2">
                    Executive Program
                  </td>
                  <td className="border-r-2 border-black px-3 py-2">6000</td>
                  <td className="px-3 py-2">16000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button
          onClick={handleOpenModal}
          className="bg-blue-600 text-white w-36 py-2 rounded-md mx-auto"
        >
          Refer Now
        </button>
      </section>
      {/* FAQ */}
      <section ref={faqRef} className="flex flex-col gap-20 my-9">
        <h1 className="text-xl text-center">
          Frequently Asked
          <span className="text-blue-600 font-bold">Questions</span>
        </h1>

        <div className="flex justify-around">
          <div className="flex flex-col gap-3">
            <button className="border-2 border-black px-3 py-2">
              Eligibility
            </button>
            <button className="border-2 border-black px-3 py-2">
              How to use?
            </button>
            <button className="border-2 border-black px-3 py-2">
              Terms & conditions
            </button>
          </div>
          <div className="w-[55rem] flex flex-col gap-5">
            <p
              onClick={() => setShowMessage((prevState) => !prevState)}
              className={`flex justify-between cursor-pointer font-bold ${
                showMessage ? "text-blue-500" : "text-black"
              }`}
            >
              Do I need to have prior Product Management and Project Management
              experience to enroll in the program?{" "}
              <span>{showMessage ? "⬆️" : "⬇️"}</span>
            </p>
            <p className={`ml-5 ${showMessage ? "block" : "hidden"}`}>
              No, the program is designed to be inclusive of all levels of
              experience. All topics will be covered from the basics, making it
              suitable for individuals from any field of work.
            </p>
            <p>What is the minimum system configuration required?</p>
          </div>
        </div>
      </section>
      {/* support */}
      <section className="my-14" ref={supportRef}>
        <img src="./support.png" alt="support" className="h-40 mx-auto" />
      </section>
      {isModalOpen && <ReferModal onClose={handleCloseModal} />}
      {/* Footer */}
      <footer className="bg-[#3C4852]  w-full text-white">
        <div className="px-10 py-2 flex flex-col gap-9">
          <div className="flex justify-between items-center flex-wrap">
            <div>
              <h1 className="text-3xl">accredian</h1>
              <p className="text-xs text-center">credentials that matter</p>
            </div>
            <div>
              <button className="bg-blue-600 text-white px-3 py-2 rounded-md mx-auto">
                Schedule 1-on-1 Call Now
              </button>
              <p className="text-xs text-center">
                Speak with our Learning advisor
              </p>
            </div>
          </div>
          <div className="flex justify-between  flex-wrap">
            <ul className="flex flex-col gap-6 w-[20%]">
              <h1 className="text-xl">Programs</h1>
              <li className="flex justify-between items-center">
                Data Science $ AI <span>&#65291;</span>
              </li>
              <li className="flex justify-between items-center">
                Product Management <span>&#65291;</span>
              </li>
              <li className="flex justify-between items-center">
                Business Analytics <span>&#65291;</span>
              </li>
              <li className="flex justify-between items-center">
                Digital Transformation <span>&#65291;</span>
              </li>
            </ul>
            <div className="flex flex-col gap-6">
              <h1 className="text-xl">Contact Us</h1>
              <p>
                Email us (For Data Science Queries): admissions@accredian.com
              </p>
              <p>Email us (For Product Management Queries):pm@accredian.com</p>
              <p>
                Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
              </p>
              <p>Product Management Admission Helpline:+91 9625811095</p>
            </div>
            <ul className="w-[15%] flex flex-col gap-6">
              <h1 className="text-xl">Accredian</h1>
              <li>About</li>
              <li>Career</li>
              <li>Blog</li>
              <li>Admission Policy</li>
            </ul>
          </div>
          <p className="text-center">
            &#169; 2024 Accredian A Brand of FullStack Education Pvt Ltd. All
            Rights Reserved
          </p>
        </div>
      </footer>
    </section>
  );
};

export default LandingPage;
