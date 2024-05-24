import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { TbBrandFiverr, TbSend } from "react-icons/tb";
import ContactForm from "./ContactForm";

const SingleContact = ({ title, contact, icon }) => {
  return (
    <div
      className={`single-contact ${title} w-full bg-white rounded-xl flex justify-center items-center max-lg:py-4`}
    >
      <div className="w-4/5 h-4/5 text-title text-base max-md:text-sm flex flex-col justify-evenly items-center">
        <div className="text-3xl">
          <span>{icon}</span>
        </div>
        <div className="font-semibold">
          <p>{title}</p>
        </div>
        <div className="text-text font-semibold">
          <p>{contact}</p>
        </div>
        <div className="write-me-button">
          <button className="flex gap-1 items-center text-text text-sm">
            <span>Write me</span>
            <span className="wmi duration-200 ease-in-out">
              <FaArrowRightLong />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

function Contact() {
  return (
    <section className="contact w-screen h-screen" id="contact">
      <article className="w-4/5 h-full m-auto">
        <div className="h-1/5">
          <div className="text-4xl text-title font-bold text-center">
            <h1>Contact Me</h1>
          </div>
          <div className="text-text text-center my-2">
            <p>Get in touch</p>
          </div>
        </div>
        <div className="w-full h-3/4 m-auto flex justify-center gap-10 max-md:flex-col max-md:py-8">
          <div className="talk-to-me h-full text-center flex justify-between flex-col max-md:w-full max-xl:gap-4 max-xl:w-1/2">
            <div className="text-title text-2xl font-semibold max-md:text-lg max-xl:text-xl">
              <h2>Talk To Me</h2>
            </div>
            <SingleContact
              title="Fiverr"
              contact="AWDP"
              icon={<TbBrandFiverr />}
            />
            <SingleContact
              title="Email"
              contact="gachtou12@gmail.com"
              icon={<MdOutlineMail />}
            />
            <SingleContact
              title="WhatsApp"
              contact="0674712007"
              icon={<FaWhatsapp />}
            />
          </div>
          <div className="write-project-form h-full text-center flex justify-between flex-col max-md:w-full max-xl:w-1/2">
            <div className="text-title text-2xl text-center font-semibold max-md:text-lg max-xl:text-xl max-xl:mb-4">
              <h2>Write me your project</h2>
            </div>
            <ContactForm />
            <div className="send-message-button w-3/5 h-16 text-lg font-semibold max-xl:mt-4 max-sm:w-3/4">
              <button className="w-full h-full text-white flex items-center justify-center gap-2 bg-title hover:bg-title-dark rounded-xl">
                <span>Send Message</span>
                <span className="text-xl">
                  <TbSend />
                </span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Contact;
