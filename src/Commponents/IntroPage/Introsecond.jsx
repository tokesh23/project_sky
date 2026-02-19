import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      title: "Our Clients",
      value: 300,
      suffix: "+",
      description: "Happy clients worldwide",
    },
    {
      title: "Our Achievements",
      value: 120,
      suffix: "+",
      description: "Successful completed projects",
    },
    {
      title: "Our Target",
      value: 500,
      suffix: "+",
      description: "Goal for the upcoming year",
    },
  ];

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#0f3b42",
        padding: "80px 20px",
        textAlign: "center",
        color: "white",
      }}
    >
      <h2 style={{ fontSize: "36px", marginBottom: "50px" }}>
        Our Growth & Vision
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#2c4f56",
              padding: "40px",
              borderRadius: "15px",
              width: "280px",
            }}
          >
            <h3 style={{ fontSize: "22px", marginBottom: "15px" }}>
              {item.title}
            </h3>

            <div style={{ fontSize: "40px", fontWeight: "bold", color: "#e6ff00" }}>
              {inView && (
                <CountUp
                  start={0}
                  end={item.value}
                  duration={2.5}
                  suffix={item.suffix}
                />
              )}
            </div>

            <p style={{ marginTop: "10px", opacity: 0.8 }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
