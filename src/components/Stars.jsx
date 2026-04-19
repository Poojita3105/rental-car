import { useRef } from "react";

const Stars = ({ count = 40 }) => {
  const stars = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 2.8 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      dur: 2 + Math.random() * 3,
      bright: 0.35 + Math.random() * 0.65,
      sc: 1.2 + Math.random() * 1.6,
    }))
  ).current;

  return (
    <>
      {stars.map((s) => (
        <div
          key={s.id}
          className="star-particle"
          style={{
            width: s.size,
            height: s.size,
            top: `${s.top}%`,
            left: `${s.left}%`,
            "--dur": `${s.dur}s`,
            "--delay": `${s.delay}s`,
            "--bright": s.bright,
            "--sc": s.sc,
          }}
        />
      ))}
    </>
  );
};

export default Stars;