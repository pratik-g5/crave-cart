import UserClass from './UserClass';

const About = () => {
  return (
    <div className="aboutUs">
      <p>
        CraveCart is a SPA React Web-Dev project built from scratch by manually
        installing the required bundler and dev dependencies
      </p>
      <UserClass
        name={'Pratik G'}
        location={'Bengaluru, IND'}
        contact={'pgumthanavar05@gmail.com'}
      />
    </div>
  );
};

export default About;
