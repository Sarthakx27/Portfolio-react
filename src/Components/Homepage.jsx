import React from "react";

const Homepage = () => {
  return (
    <div className="w-full h-screen  absolute scroll-smooth overflow-auto">
      <div className="w-full relative h-screen">
        <h1 className="font-extrabold justify-center absolute flex flex-col top-8
          align-middle w-1/2 mx-auto items-center text-gray-500 leading-none"
          style={{ fontSize: 200, opacity: 0.09 }}>
          Hello.<br /><span style={{ opacity: 0.5 }}>Hello.<br />
            <span style={{ opacity: 0.7 }}>Hello.</span></span></h1>
        <div className="flex justify-around w-full top-1/4 items-center absolute align-middle">
          <h1 className=" mt-48 tracking-widest">Front-End Developer<br />
            and Web Designer<br />
            based in <span className=" text-orange-400">In</span><span>d</span><span
              className=" text-green-600">ia</span>.</h1>
          <h1 className="font-semibold text-9xl tracking-wider">Hello.
            <br />I am <br /><span className=" text-red-500">
              Sarthak.</span></h1>
        </div>
      </div>

      <div className=" w-full relative h-screen flex">
        <h1 className="font-extrabold justify-center absolute flex flex-col top-8
          align-middle w-1/2 mx-auto items-center text-gray-500 leading-none left-10"
          style={{ fontSize: 200, opacity: 0.03 }}>
          About.<br /><span>About.<br />
            <span>About.</span></span></h1>
        <div className=" w-5/6 absolute">
          <h1 className="font-semibold text-9xl w-1/3 tracking-widest mr-auto ml-44 mb-10">About_<br />
            <span className=" text-red-500">
              me:</span></h1>
          <h1 className=" w-1/3 tracking-widest ml-auto mr-38">I am a Front End Developer and Designer and
            I have a Bachelor’s degree in Science in Information Technology.
            I am passionate about creating visually appealing and user-friendly web applications.
            I am proficient in ReactJS, Tailwind, HTML, CSS, and JavaScript.
            I like minimal design and strives to create simple yet elegant designs.
            I have also created several Projects to practice and hone my skills.</h1>
        </div>
      </div>

      <div className="w-5/6 mt-16 ml-auto mr-auto">
        <h1 className="font-semibold text-9xl tracking-widest mr-auto ml-16 mb-24">My_
          <br /><span className=" text-red-500">
            Projects:</span></h1>
        {/**Project 1 */}
        <div className=" w-full tracking-widest flex justify-between items-center">
          <div className="w-1/2 ml-16">
            <img className=" w-4/5 hover:opacity-60" src="./assets/images/image1.jpg" />
          </div>
          <div className=" w-2/5 mr-16">
            <h1 className="font-semibold text-5xl tracking-widest text-red-500">
              :Flick<span className="text-white">_Flow</span></h1>
            <ul className="list-disc mt-6 leading-7 list-inside">
              <li>A movie review website in which a user
                can sign-up with an OTP authentication
                and login.</li>
              <li>The logged in users can add new movies
                and can also give their reviews and
                ratings.</li>
              <li>The user can also see other users
                reviews with their name and timestamp.</li>
              <li>Technology_used: React.Js, Firebase, Firestore, Tailwind.</li>
            </ul>
          </div>
        </div>

        {/**Project 2 */}
        <div className=" mt-40 w-full tracking-widest flex justify-between items-center">
          <div className=" w-2/5 ml-16 mr-16">
            <h1 className="font-semibold text-5xl tracking-widest text-white">
              Ray_<span className="text-red-500">Ban:</span></h1>
            <ul className="list-disc mt-6 leading-7 list-inside">
              <li>A eye-catching webpage which includes smooth animations. </li>
              <li>Animations/Transitions can be seen by hovering/clicking on the background image.</li>
              <li>Technology_used: HTML, CSS, Javascript, SheryJs.</li>
            </ul>
          </div>
          <div className="w-1/2 ml-16">
            <img className=" w-3/4 h-fit hover:opacity-60" src="./assets/images/image2.jpg" />
          </div>
        </div>

        {/**Project 3 */}
        <div className="mt-40 w-full tracking-widest flex justify-between items-center">
          <div className="w-1/2 ml-16">
            <img className=" w-4/5 hover:opacity-60" src="./assets/images/image3.png" />
          </div>
          <div className=" w-2/5 mr-16">
            <h1 className="font-semibold text-5xl tracking-widest text-red-500">
              :Resort<span className="text-white">_Website</span></h1>
            <ul className="list-disc mt-6 leading-7 list-inside">
              <li>A basic Resort website i made to clear my Html/Css foundation.</li>
              <li>The Design is simple and basic.</li>
              <li>Languages_used: HTML, CSS.</li>
            </ul>
          </div>
        </div>

        {/**Project 4 */}
        <div className=" mt-40 w-full tracking-widest flex justify-between items-center">
          <div className=" w-2/5 ml-16 mr-16">
            <h1 className="font-semibold text-5xl tracking-widest text-white">
              Dice_<span className="text-red-500">Game:</span></h1>
            <ul className="list-disc mt-6 leading-7 list-inside">
              <li>A Dice game webpage i made only using React.js. </li>
              <li>It is completely responsive on every device.</li>
              <li>Technology_used: ReactJs.</li>
            </ul>
          </div>
          <div className="w-1/2 ml-16">
            <img className=" w-3/4 h-fit hover:opacity-60" src="./assets/images/image4.png" />
          </div>
        </div>


      </div>

      <div className="h-auto w-full flex justify-between mt-52 relative">
        <h1 className="font-extrabold justify-center absolute flex flex-col
          w-full items-end right-20 text-gray-500 leading-none"
          style={{ fontSize: 156, opacity: 0.09 }}>
          Contact.<br /><span style={{ opacity: 0.5 }}>Contact.<br />
            <span style={{ opacity: 0.7 }}>Contact.</span></span></h1>
        <div className="w-full tracking-widest ">
          <h1 className="font-semibold text-9xl tracking-widest mr-auto ml-44 mb-10">Contact/
            <br /><span className=" text-red-500">
              Links:</span></h1>
          <ul className="list-disc mt-6 leading-7 list-inside w-1/2 tracking-widest pl-6 pr-20 ml-auto mr-38">
            <li>E-mail: <a href="#">sarrthakbhatt327@gmail.com</a> </li>
            <li>On the Internet: <a href="#">LinkedIn</a> / <a href="#">GitHub</a></li>
          </ul>
        </div>


      </div>

    </div>
  );
};

export default Homepage;
