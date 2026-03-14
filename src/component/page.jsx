import img2 from "../assets/Mercedes-Benz1.png";
import img3 from "../assets/_2026-AMG-GT63-APXGP-2DR-COUPE.png";
import img4 from "../assets/Mercedes-AMG-GT-63-APXGP-Edition_3.png";
import Video from "../assets/2.MP4";
import img5 from "../assets/price 1.png";
import img6 from "../assets/price 3.png";
import img7 from "../assets/price 4.png";
import img8 from "../assets/price 511.png";
import img9 from "../assets/price 5.png";
import img09 from "../assets/p6.png";
import img22 from "../assets/service-0.png";
import img23 from "../assets/service-9.png";
import img24 from "../assets/service-8.png";
const page = () => {
  return (
    <div>
      <div className="hero">
        <nav className="nav-0">
          <img data-aos="fade-down" data-aos-duration="1500" src={img2} />
          <a data-aos="fade-down" data-aos-duration="1500" href="#Home">
            Home
          </a>
          <a data-aos="fade-down" data-aos-duration="2000" href="#About">
            About
          </a>
          <a data-aos="fade-down" data-aos-duration="2500" href="#Models">
            Models
          </a>
          <a data-aos="fade-down" data-aos-duration="3000" href="#Service">
            Service
          </a>
          <a data-aos="fade-down" data-aos-duration="3000" href="#Contact Us">
            Contact Us
          </a>
        </nav>
        <h1 data-aos="fade-right" data-aos-duration="1500">
          Mercedes-Benz
        </h1>
        <p data-aos="fade-right" data-aos-duration="1500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          iusto illum a optio et incidunt fugiat voluptates autem commodi
          dolores asperiores at dicta repellendus itaque magni, quas ipsa sed
          facilis veniam pariatur, molestiae quod! Ipsam, soluta dolor Sit
          debitis, odio ratione pariatur maiores incidunt laborum dignissimos
          sunt suscipit nulla obcaecati sint magnam quibusdam cupiditate?
        </p>
        <button data-aos="fade-up" data-aos-duration="1500">
          <img src={img2} />
        </button>
      </div>
      {/* part about */}
      <h1 className="h-2" id="About">
        About
      </h1>
      {/* <h3>Upcoming Releases</h3> */}
      <p className="p-2">Upcoming Releases</p>
      <div className="about">
        <img src={img3} />
        <div className="about-02">
          <div className="about-03">
            <h1>The 2026 Mercedes-AMG GT 63 APXGP Edition</h1>
            <p>
              Life imitates art in the new Mercedes-AMG GT 63 APXGP Edition, a
              stunning vehicle designed for the release of the new movie, F1.
              The coupe presents extraordinary design elements that closely
              mirror the films fictional APXGP Formula 1® team vehicles. Each of
              the 52 vehicles paintwork was meticulously applied by hand with
              APXGP-specific designs. The car is inspired by the fictional APXGP
              team featured in the movie and features a hand-applied Race
            </p>
            <button>Explore</button>
          </div>
        </div>
      </div>
      <div className="about-09">
        <div className="about-08">
          <div className="about-07">
            <h1>Mercedes-AMG GT 63 APXGP</h1>
            <p>
              Life imitates art in the new Mercedes-AMG GT 63 APXGP Edition, a
              stunning vehicle designed for the release of the new movie, F1.
              The coupe presents extraordinary design elements that closely
              mirror the films fictional APXGP Formula 1® team vehicles. Each of
              the 52 vehicles paintwork was meticulously applied by hand with
              APXGP-specific designs. The car is inspired by the fictional APXGP
              team featured in the movie and features a hand-applied Race
            </p>
            <button>Explore</button>
          </div>
        </div>
        <img src={img4} />
      </div>
      {/* part about */}
      {/* part models */}
      <h1 className="h-2" id="Models">
        Models
      </h1>
      <p className="p-2">Mercedes-Benz Overview</p>
      <div className="all">
        {/* //////////// */}
        <div className="card">
          <img src={img6} />
          <div className="card-body">
            <h3>EQS Saloon.</h3>
            <p>
              Mercedes-Benz is developing a car with an artificial
              intelligence-based
            </p>
          </div>
        </div>
        <div className="card">
          <img src={img5} />
          <div className="card-body">
            <h3>Mercedes-AMG A 45</h3>
            <p>
              Mercedes-Benz is developing a car with an artificial
              intelligence-based
            </p>
          </div>
        </div>
        <div className="card">
          <img src={img7} />
          <div className="card-body">
            <h3>Mercedes-AMG SL 43</h3>
            <p>
              Mercedes-Benz is developing a car with an artificial
              intelligence-based
            </p>
          </div>
        </div>
      </div>
      {/* ///////22222222////// */}
      <div className="all">
        <div className="card">
          <img src={img8} />
          <div className="card-body">
            <h3>Mercedes-Maybach S-Class</h3>
            <p>
              Mercedes-Benz is developing a car with an artificial
              intelligence-based
            </p>
          </div>
        </div>
        <div className="card">
          <img src={img9} />
          <div className="card-body">
            <h3>Mercedes-Maybach Class</h3>
            <p>
              Mercedes-Benz is developing a car with an artificial
              intelligence-based
            </p>
          </div>
        </div>
        <div className="card">
          <img src={img09} />
          <div className="card-body">
            <h3>Mercedes-Maybach GLC</h3>
            <p>
              Mercedes-Benz is developing a car with an artificial
              intelligence-based
            </p>
          </div>
        </div>
      </div>
      {/* //////222222222////// */}
      <div className="video">
        <h1>Mercedes-Benz</h1>
        <h3>
          <span style={{ fontSize: "25px", letterSpacing: "2px" }}>
            Generation
          </span>
          <span
            style={{
              fontFamily:
                "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
            }}
          >
            18
          </span>
          <span
            style={{
              color: "red",
              fontFamily:
                "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
            }}
          >
            85
          </span>
          <span
            style={{
              fontFamily:
                "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
            }}
          >
            -20
          </span>
          <span
            style={{
              color: "red",
              fontFamily:
                "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
            }}
          >
            23
          </span>
        </h3>
        {/* ---------------------------- */}
        <video autoPlay controls>
          <source src={Video} type="video/mp4" />
        </video>
        {/* ---------------------------- */}
        {/* part models */}
      </div>
      {/* part service */}
      <br />
      <br />
      <br />
      <h1 className="h-2" id="Service">
        Mercedes-Benz Service Packages
      </h1>
      <h3 style={{ textAlign: "center", marginTop: "3rem", fontSize: "22px" }}>
        Mercedes-Benz Service A-B-A (Three Year)
      </h3>
      {/* ---------part-A-service--------- */}
      <div className="service">
        <div className="service-0">
          <div className="service-9">
            <h1>Mercedes-Benz Service A (One Year)</h1>
            <br />
            <h4>
              Service Package ensures the safety of your car and increases
              performance and value. At service A (Every 10) your car will get
              maintenance for below points:
            </h4>
            <br />
            <p>
              - Change Engine Oil And Filter
              <br /> - Replace the Air Filter
              <br /> - Add Fuel Additive
              <br /> - Add Windshield Wash Fluid
              <br /> - System Diagnostic And Short Test (Computer Inspection)
              <br /> - Brake System Check
              <br /> - Engine Cooling System Check
              <br />- Front And Rear Lighting System Check
              <br /> - Inspect Tires
              <br /> - Correct Tire Pressure
            </p>
          </div>
        </div>
        <img src={img22} />
      </div>
      {/* ---------part-B - service--------- */}
      <div className="ser">
        <img src={img23} />
        <div className="ser-0">
          <div className="ser-B">
            <h1>Mercedes-Benz Service B (Two Year)</h1>
            <br />
            <h4>
              At service B (Every 20K) your car will get maintenance for below
            </h4>
            <br />
            <p>
              - Change Engine Oil And Filter
              <br /> - Replace the Air Filter
              <br /> - System Diagnostic And Short Test (Computer Inspection)
              <br /> - Brake System Check
              <br /> - Front And Rear Lighting System Check
              <br /> - Correct Tire Pressure
              <br /> - Check the Power Steering Oil Level
              <br /> - Inspect Front Axle Joint For Play And Inspect RubberBoots
              <br /> - Replace Brake Fluid
              <br /> - Inspect Tires
            </p>
          </div>
        </div>
      </div>
      {/* ---------Mercedes-Benz Service A-B-A----------- */}
      <div className="end">
        <div className="end-0">
          <div className="end-9">
            <h1>Mercedes-Benz Service A-B-A (Three Year)</h1>
            <br />
            <h4>
              At service A+B+A your car will get Service A for the first year or
              (10K - Kilometer) maintenance for the below points:
            </h4>
            <br />
            <p>
              - Change Engine Oil And Filter
              <br /> - Replace the Air Filter
              <br /> - Add Fuel Additive
              <br /> - Add Windshield Wash Fluid
              <br /> - System Diagnostic And Short Test (Computer Inspection)
              <br /> - Brake System Check
              <br /> - Engine Cooling System Check
              <br /> - Front And Rear Lighting System Check
              <br /> - Inspect Tires
              <br /> - Correct Tire Pressure
            </p>
          </div>
        </div>
        <img src={img24} />
      </div>
      {/* part service */}
      <br />

      <h1 className="h-2" id="Contact Us" style={{ fontSize: "35px" }}>
        Contact Us
      </h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="us-0">
        <div className="us-9">
          <div className="us-8">
            <form>
              <h2>Contact Us</h2>
              <label For="Name">Name</label>
              <input type="Name" placeholder="Your Full Name" required />

              <label For="Email">Email</label>
              <input type="Email" placeholder="you@example.com" required />

              <label For="Message">Message</label>
              <textarea
                placeholder="Write Your Message Here..."
                rows={6}
                cols={50}
                required
              />

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* part Content us */}

      {/* part footer */}

      <footer>
        <img style={{ maxWidth: "200px", marginLeft: "2rem" }} src={img2} />
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Models">Models</a>
        <a href="#Service">Service</a>
        <a href="#Contact Us">Contact Us</a>
        <h5>Create By:Amanj Abbas Akray</h5>
      </footer>
      {/* part footer */}
    </div>
  );
};

export default page;
