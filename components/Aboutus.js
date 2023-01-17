import Wave from "react-wavify";

const Aboutus = () => {
  return (
    <div className="relative top-[-15%]">
      <Wave
        fill="#2D1634"
        paused={false}
        options={{
          height: 50,
          amplitude: 50,
          speed: 0.35,
          points: 2,
        }}
      />
      <div className="h-screen relative -top-5 bg-gradient-to-b from-[#2D1634] to-[#1e0925]">
        <div
          className="
        relative top-[20%]
        flex flex-row w-[90vw]
        justify-around
        mx-auto
        "
        >
          <img
            className="h-[20vh]
            my-[10%]  
            "
            src="/About/imagesntc_abt.svg"
            alt=""
          />
          <div className="about-content flex flex-col justify-around h-[50vh]">
            <img src="/About/About usabt_title.svg" alt="" />
            <img src="/About/abt_content.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
