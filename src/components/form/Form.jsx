import Button from "../button/Button";

const Form = () => {
  return (
    <div className="pt-[72px] pb-[40px] bg-white-gray rounded-xl">
      <form className="flex flex-col justify-center gap-4 px-10">
        <label className="hidden" htmlFor="name">
          Name*
        </label>
        <input
          className="px-5 py-3.5 font-medium border-0 shadow-lg text-lg rounded-xl"
          type="name"
          name="name"
          id="name"
          placeholder="Name*"
          required
        />
        <label className="hidden" htmlFor="email">
          Email*
        </label>
        <input
          className="px-5 py-3 text-lg font-medium border-0 shadow-lg rounded-xl"
          type="email"
          name="email"
          id="email"
          placeholder="Email*"
          required
        />
        <label className="hidden" htmlFor="message">
          Message*
        </label>
        <textarea
          className="px-5 py-3 text-lg border-0 shadow-lg rounded-xl resize-none"
          name="message"
          id="message"
          cols="40"
          rows="5"
          placeholder="Message*"
          required
        />
        <div className="flex justify-center mt-8">
          <Button text="Shoot us a message" styles="px-12 bg-black-light" fill />         
        </div>
      </form>
    </div>
  );
}

export default Form;