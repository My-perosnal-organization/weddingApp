import oliveImg from "../assets/olivos.png"
import doveImg from "../assets/paloma.png";

export function LocationsSection() {
    return(
        <section className="ceremony-section">

        <img
            src={oliveImg}
            alt=""
            className="olive-decoration"
        />


        <div className="ceremony-content">
            
            <div className="ceremony-icon">
            <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                >
                <g
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >

                    <path d="M12 22 L32 10 L52 22" />
                    <path d="M18 22 H46" />

                    <path d="M32 10 V6" />
                    <path d="M32 6 H36 L32 4 Z" />

                    <path d="M18 22 V42" />
                    <path d="M26 22 V42" />
                    <path d="M38 22 V42" />
                    <path d="M46 22 V42" />

                    <path d="M14 42 H50" />
                    <path d="M12 46 H52" />

                </g>
                </svg>

            </div>

            <h2 className="ceremony-title">CIVIL</h2>

            <p className="ceremony-time">17:00 pm</p>
            <p className="ceremony-time">Viernes 20</p>

            <p className="ceremony-place">Municipio La Floresta</p>

            <a
                className="rsvp-btn"
                href="https://maps.app.goo.gl/tLgW9i5wKPXYxoNY9"
                target="_blank"
                rel="noopener noreferrer"
                >
                CÓMO LLEGAR
            </a>

        </div>
        <img
            src={doveImg}
            alt=""
            className="dove-decoration"
        />
        

        </section>
    )
}