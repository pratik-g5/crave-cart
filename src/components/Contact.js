const Contact = () => {
  return (
    <div className="m-4 p-4 text-center">
      <h1 className="font-bold text-2xl">Contact Us</h1>
      <div className="p-2 m-2">
        <input
          type="text"
          className=" mr-2 border border-black rounded-sm "
          placeholder="Name"
        />
        <input
          type="text"
          className=" mr-2 border border-black rounded-sm"
          placeholder="Message"
        />
        <button className=" px-2 border border-black bg-amber-200 cursor-pointer">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
