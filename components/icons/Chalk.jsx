export default function Chalk() {
  return (
    <svg className="no-area" width={0} height={0}>
      <filter id="chalk">
        <feTurbulence
          result="T"
          numOctaves="3"
          seed="0"
          type="fractalNoise"
          baseFrequency=".4"
        ></feTurbulence>
        <feOffset dy="-2" dx="-2"></feOffset>
        <feDisplacementMap
          in2="T"
          scale="5"
          xChannelSelector="R"
          yChannelSelector="G"
          in="SourceGraphic"
        ></feDisplacementMap>
      </filter>
    </svg>
  );
}
