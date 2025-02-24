import UserClass from './UserClass';

const About = () => {
  return (
    <div className="bg-cyan-300 h-[40rem]">
      <img
        className="mr-5 mt-10"
        align="right"
        alt="coding"
        width="400"
        src="https://raw.githubusercontent.com/devSouvik/devSouvik/master/gif3.gif"
      ></img>
      <div className="w-6/12 ml-6 pt-20 ">
        {/* <p className="m-2 p-2 mt-10 font-bold">
          CraveCart is a SPA React Web-Dev project built from scratch by
          manually installing the required bundler and dev dependencies
        </p> */}
        <UserClass
          name={'Pratik G'}
          location={'Bengaluru, IND'}
          contact={'pgumthanavar05@gmail.com'}
        />
      </div>
    </div>
  );
};

export default About;
