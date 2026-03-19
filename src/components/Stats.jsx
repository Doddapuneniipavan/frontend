import { useEffect, useState } from "react";

function Counter({ end, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="stat-card">
      <h2>{count}+</h2>
      <p>{label}</p>
    </div>
  );
}

function Stats() {
  return (
    <section className="stats">
      <Counter end={50} label="Projects Built" />
      <Counter end={10} label="Technologies Used" />
      <Counter end={100} label="Performance Focus" />
      <Counter end={24} label="Support Availability" />
    </section>
  );
}

export default Stats;