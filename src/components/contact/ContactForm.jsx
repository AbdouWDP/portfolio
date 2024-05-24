function ContactForm() {
  return (
    <form className="text-text flex flex-col justify-center gap-8 max-lg:gap-4 h-full">
      <div className="inp name w-full relative text-base">
        <p className="absolute left-4 bg-body px-2">Name</p>
        <input
          type="text"
          placeholder="Insert your name"
          className="rounded-xl h-16 w-full px-6 bg-body outline-none"
        />
      </div>
      <div className="inp mail w-full relative text-base">
        <p className="absolute left-4 bg-body px-2">Email</p>
        <input
          type="email"
          placeholder="Insert your email"
          className="rounded-xl h-16 w-full px-6 bg-body outline-none"
        />
      </div>
      <div className="inp project w-full relative text-base">
        <p className="absolute left-4 bg-body px-2">Project</p>
        <textarea
          type="text"
          placeholder="Insert your project"
          className="rounded-xl h-40 w-full px-6 pt-4 bg-body resize-none outline-none"
        ></textarea>
      </div>
    </form>
  );
}

export default ContactForm;
