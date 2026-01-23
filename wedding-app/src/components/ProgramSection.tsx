import iglesiaImg from "../assets/img1.png";
import anillosImg from "../assets/img2.png";
import copasImg from "../assets/img6.png";
import cenaImg from "../assets/img3.png";
import baileImg from "../assets/img4.png";
import autoImg from "../assets/img5.png";

export function ProgramSection() {
  return (
    <section className="program-section">
      <h2 className="program-title">PROGRAMA</h2>

      <div className="program-timeline">
        <TimelineItem
          time="18:00 hrs"
          text="Ceremonia"
          img={iglesiaImg}
          side="right"
        />
        <TimelineItem
          time="19:00 hrs"
          text="Boda Civil"
          img={anillosImg}
          side="left"
        />
        <TimelineItem
          time="20:00 hrs"
          text="Recepción"
          img={copasImg}
          side="right"
        />
        <TimelineItem
          time="20:30 hrs"
          text="Cena"
          img={cenaImg}
          side="left"
        />
        <TimelineItem
          time="21:30 hrs"
          text="Todo el mundo a bailar"
          img={baileImg}
          side="right"
        />
        <TimelineItem
          time="2:00 hrs"
          text="Fin del evento"
          img={autoImg}
          side="left"
          last
        />
      </div>
    </section>
  );
}


type ItemProps = {
  time: string;
  text: string;
  img: string;
  side: "left" | "right";
  last?: boolean;
};

function TimelineItem({ time, text, img, side, last }: ItemProps) {
  return (
    <div className={`program-item ${side} ${last ? "last" : ""}`}>
      <div className="program-side program-text-side">
        <span className="program-time">{time}</span>
        <span className="program-text">{text}</span>
      </div>

      <div className="program-center">
        <span className="program-heart">♥</span>
      </div>

      <div className="program-side program-icon-side">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

