import Wave from "react-wavify";

const Contact = () => {
  return (
    <div className="relative md:top-[-70vh] top-[-10%]">
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
      <div className="h-[80vh] w-screen bg-[#2D1634] relative -top-5 flex flex-col justify-around">
        <img className="h-[5vh]" src="/Contacts/Meet.svg" alt="" />
        <div className="flex flex-row justify-around mb-[10vh]">
          <div className="flex flex-col">
            <img
              className="w-[25vw] md:w-auto"
              src="/Contacts/image 20.svg"
              alt=""
            />
            <div className="m-auto text-cyan-50 font-bold">Lakshya Singh</div>
            <div className="text-white m-auto">Joint General Secretary</div>
          </div>
          <div className="flex flex-col">
            <img
              className="w-[25vw] md:w-auto"
              src="/Contacts/image 21.svg"
              alt=""
            />
            <div className="m-auto text-cyan-50 font-bold">Manish Rai</div>
            <div className="text-white m-auto">General Secretary</div>
          </div>
          <div className="flex flex-col">
            <img
              className="w-[25vw] md:w-auto"
              src="/Contacts/image 22.svg"
              alt=""
            />
            <div className="m-auto text-cyan-50 font-bold">Pretty Sarwa</div>
            <div className="text-white m-auto">Joint General Secretary</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact