const WaveBg = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="scale-y-[4] min-[1060px]:scale-y-[3.5] translate-y-20 min-[950px]:-translate-y-20"
      >
        <path
          fill="hsl(var(--myaccent))"
          fill-opacity="1"
          d="M0,288L120,282.7C240,277,480,267,720,266.7C960,267,1200,277,1320,282.7L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="scale-y-[2.5] translate-y-12 w-full"
      >
        <path
          fill="hsl(var(--myaccent))"
          d="M0,64L120,101.3C240,139,480,213,720,213.3C960,213,1200,139,1320,101.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg> */}
    </div>
  );
};

export default WaveBg;
