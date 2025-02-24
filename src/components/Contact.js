import { useState } from 'react';

const Contact = () => {
  const [searchItem, setSearchItem] = useState({
    name: '',
    message: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchItem((prev) => ({
      ...prev,
      [name]: value, // Dynamically update only the target field
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchItem);
    setSearchItem({
      name: '',
      message: '',
      contact: '',
    });
  };
  return (
    <div className="items-center h-[35rem] bg-slate-300 flex flex-row justify-between w-full overflow-hidden">
      <div className="items-center ml-12">
        <h1 className=" font-bold text-4xl mb-10 ml-2">Contact Us</h1>
        <form className="p-4 m-2 flex flex-col gap-4 bg-slate-700 w-96 items-center rounded-md shadow-lg shadow-slate-900">
          <div className="flex justify-between">
            <input
              type="text"
              name="name"
              className=" mr-2 border border-black rounded-md w-[155px]"
              placeholder="Name"
              value={searchItem.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="contact"
              className=" mr-2 border border-black rounded-md w-[155px] "
              placeholder="Contact"
              value={searchItem.contact}
              onChange={handleChange}
            />
          </div>

          <textarea
            type="text"
            name="message"
            className=" mr-2 border border-black rounded-md h-32 align-text-top w-80"
            placeholder="Message"
            value={searchItem.message}
            onChange={handleChange}
          />
          <button
            className=" px-2 border border-black bg-amber-200 cursor-pointer rounded-lg w-36"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="p-6 mr-6">
        <img
          className="w-[30rem] h-72"
          src="https://img.freepik.com/premium-photo/cartoonish-man-holding-big-sign-that-says-hello-against-pure-white-background_1260728-16030.jpg?w=900"
        ></img>
      </div>
    </div>
  );
};

export default Contact;
