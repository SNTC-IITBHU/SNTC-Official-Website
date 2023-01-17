import Wave from "react-wavify";

const Aboutus = () => {
  return (
    <div>
      <Wave
        fill="#2D1634"
        paused={false}
        options={{
          height: 20,
          amplitude: 50,
          speed: 0.35,
          points: 3,
        }}
      />
    </div>
  );
};
export default Aboutus;
