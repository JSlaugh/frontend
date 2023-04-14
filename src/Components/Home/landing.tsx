import "../../Styles/Landing/styles.css";
import ReactCookieConsent from "react-cookie-consent";
function Home() {
  return (
    <div className="">
      <nav
        className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            Fag el-Gamous
          </a>
          <button
            className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  href="#OurTeam"
                >
                  Our Team
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item mx-0 mx-lg-1">
                <a
                  className="nav-link py-3 px-0 px-lg-3 rounded"
                  href="#GetInvolved"
                >
                  Get Involved
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="/tools">
                  Our Data
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead bg-primary text-white text-center heroImage">
        <div className="container d-flex align-items-center flex-column hero overlay">
          <h1 className="masthead-heading text-uppercase mb-0">
            Fag el-Gamous
          </h1>
        </div>
      </header>
      <section className="page-section Our Team" id="OurTeam">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Our Team
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-user"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
        </div>
        <div className="cards">
          <div className="cardPerson">
            <a>
              <img
                src="images/KerryMuhlestein (1).jpg"
                loading="lazy"
                alt="Dr. Kerry Muhlestein"
              />
              <p className="overlay">
                Dr. Kerry Muhlestein <br></br>{" "}
                <h4>BYU Egypt Excavation Director</h4>
              </p>
            </a>
          </div>
          <div className="cardPerson">
            <a>
              <img
                src="images\CaseySaqqara.jpg"
                loading="lazy"
                alt="Dr. Casey Kirkpatrick"
              />
              <p className="overlay">
                Dr. Casey Kirkpatrick <br></br>{" "}
                <h4>
                  Adjunct Research Professor in the Department of Anthropology
                </h4>
              </p>
            </a>
          </div>
          <div className="cardPerson">
            <a>
              <img
                src="images\AnneWerkt.jpg"
                loading="lazy"
                alt="Anne Kwaspen"
              />
              <p className="overlay">
                Anne Kwaspen <br></br>{" "}
                <h4>
                  Costume History, Archaological Egyptian Textiles, Technical
                  Analyses
                </h4>
              </p>
            </a>
          </div>
          <div className="cardPerson">
            <a>
              <img
                src="images/KristinSouth.JPG"
                loading="lazy"
                alt="Kristin South"
              />
              <p className="overlay">
                Kristin South <br></br> <h4>Team Member Since 1998</h4>
              </p>
            </a>
          </div>
          <div className="cardPerson">
            <a>
              <img
                src="images/BrianChristensen.jpg"
                loading="lazy"
                alt="Brian Christensen"
              />
              <p className="overlay">
                Brian Christensen <br></br>{" "}
                <h4>Associate Professor of Art at BYU</h4>
              </p>
            </a>
          </div>
          <div className="cardPerson">
            <a>
              <img
                src="images/BethanyJensen.jpg"
                loading="lazy"
                alt="Bethany Jensen"
              />
              <p className="overlay">
                Bethany Jensen <br></br>{" "}
                <h4>University of Memphis Graduate Student</h4>
              </p>
            </a>
          </div>
          <div className="cardPerson">
            <a>
              <img
                src="images/20211013_121933.jpg"
                loading="lazy"
                alt="Dr. R. Paul Evans"
              />
              <p className="overlay">
                Dr. R. Paul Evans <br></br>{" "}
                <h4>
                  Assistant Professor in the Department of Microbiology &
                  Molecular Biology at BYU
                </h4>
              </p>
            </a>
          </div>
          <div className="cardPerson">
            <a>
              <img
                src="images\130922077_204286024633747_3943393942308887057_n.jpg"
                loading="lazy"
                alt="Dr. Krystal V. L. Pierce"
              />
              <p className="overlay">
                Dr. Krystal V. L. Pierce <br></br>{" "}
                <h4>
                  Assistant Professor in the Department of Ancient Scripture at
                  BYU
                </h4>
              </p>
            </a>
          </div>
        </div>
      </section>
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            Fag el-Gamous Burial Site and Seila Pyramid
          </h2>
          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          <div className="row">
            <div className="col-lg-12 ms-auto">
              <p className="lead">
                This database is designed to make the work of the BYU Egypt
                Excavation Project available to the world. It represents the
                data gained from decades of excavation combined with digital
                analytical power that should make any number of studies
                possible. We believe that the data presented herein makes it
                possible for us to tell something of the stories of those who
                lived so long ago in Egypt, and that those stories deserve to be
                told.
              </p>
            </div>
            <div className="col-lg-12 me-auto">
              <p className="lead">
                This database is the results of the work of many people and
                institutions. Most especially it represents the combined efforts
                of the Excavation Team, the College of Religious Education, the
                College of Life Sciences, and the Department of Information
                Systems inside of the Marriott School of Business.
              </p>
            </div>
            <div className="col-lg-12 me-auto">
              <p className="lead">
                There are two main parts to the BYU Egypt Excavation Project.
                The part with which this database is concerned is the Fag
                el-Gamous cemetery. This cemetery was in use during the
                Graeco-Roman era of Egyptian history. In the early 1900’s some
                Mummy Portraits were found there by Bernard Grenfell and Arthur
                Hunt. The cemetery is very large and densely populated with
                burials. Some lie in the mudstone escarpments, where tombs were
                carved into the rocks. These are typically somewhat wealthier
                burials, including a golden masked mummy who was the daughter of
                a priest in the Ptolemaic period. Most of the burials lie loose
                in the sand. These burials range from being fully skeletonized
                to being extremely well preserved. They range from just after
                300 BC to about 500 AD. During that time period nearly all of
                the inhabitants of the Fayoum converted to Christianity. There
                is some evidence for this in the burials. We are doing vigorous
                research attempting to determine if there are more detectable
                archaeological markers pointing to Christian burial practices.
              </p>
            </div>
            <div className="col-lg-12 me-auto">
              <p className="lead">
                This large cemetery population allows for significant
                statistical studies of burial practices. It has afforded a
                marvelous opportunity for demographic studies. Our textile
                analyses are providing significant new insights into changing
                burial patterns and the multiple and varied uses to which
                textiles were put. Because all of our textiles derive from a
                known setting, some of our most important work involves
                identifying and describing original in situ contexts that can be
                generalized to the many museum collections of uncertain
                provenance. We have also been able to study weaving practices,
                the use of tunics in various time periods, the use of sprang
                hairnets in various time periods, and a number of other textile
                studies. Analysis of amulets, figurines, pottery, jewelry, and
                other burial goods has also been possible. The site is among the
                most promising for telling us statistically significant
                information about burial practices in Graeco-Roman Egypt for the
                common person.
              </p>
            </div>
            <div className="col-lg-12 me-auto">
              <p className="lead">
                The other part of the excavation is of the Seila Pyramid. Our
                discovery of a stela with two of the names of Snefru, first king
                of the Fourth Dynasty, revealed who had built the pyramid. It
                lies 10 km due west of the Meidum Pyramid, and in terms of its
                elevation and the ratio of its construction, there are some
                clear links between the two pyramids. The Seila Pyramid has
                evidence for ritual activity on both the north and the eastern
                sides. It has a causeway on the eastern side, but no valley
                temple. It represents an important witness of Snefru’s
                innovations in regard to pyramid complexes, and play an
                important role in the development of pyramids. Besides the
                stelae, other important artifacts include an altar, the remains
                of a small statue, a foundation deposit jar, a model oar, and
                the remains of several limestone tables or altars.
              </p>
            </div>
            <div className="col-lg-12 me-auto">
              <p className="lead">
                Our most recent publications may best highlight some of the
                research that is possible from the longstanding excavations
                performed by Brigham Young University (BYU). The fist book
                listed includes chapters on the geography and history of the
                region, history of the BYU Excavations, the ritual ramifications
                of the excavation of the Seila Pyramid, a report on ritual
                objects on the northern side of the Seila Pyramid, an analysis
                of common burial practices at the cemetery, a ground-breaking
                report on which mummy portraits came from Fag el-Gamous, an
                analysis of the kinds of weaves used in burial clothing, an
                analysis of the use of jewelry in burials, an analysis of the
                kinds of dyes used to obtain purple clothing in the burials, a
                paleopathological study of some of the crania found among the
                burials, an analysis of pottery with a specific kind of hole, a
                report on the kinds of grain found with burials, a translation
                of papyrus found in the cemetery, and a report of a survey done
                of the nearby town of Philadelphia.
              </p>
            </div>
          </div>

          <div className="text-center mt-4">
            {/* <a
              className="btn btn-xl btn-outline-light"
              href="https://startbootstrap.com/theme/freelancer/"
            >
              <i className="fas fa-download me-2"></i>
              Free Download!
            </a> */}
          </div>
        </div>
      </section>
      <footer className="footer text-center">
        <div className="container">
          <div className="centerContent" id="GetInvolved">
            <h4 className="text-uppercase mb-4">Get Involved!</h4>
            <p className="lead2 mb-0">
              <a
                target="blank"
                href="https://www.sparcproject.org/"
                className="btn btn-primary"
              >
                Click Here To Find Out How
              </a>
            </p>
          </div>
        </div>
      </footer>

      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>
            Brigham Young University &copy; Provo, UT 84602, USA | 801-422-4636
            |{" "}
            <a
              href="https://www.privacypolicies.com/live/bccfad04-3419-49b7-9627-33976d216684"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted"
            >
              Privacy Policy
            </a>{" "}
            | 2023 © All Rights Reserved
          </small>
        </div>
      </div>
      {/* Cookie consent notification */}
      <ReactCookieConsent
        location="bottom"
        buttonClasses="btn btn-primary"
        buttonText="I Understand/Accept"
        cookieName="cookieConsent"
        style={{ background: "#333", color: "#fff" }}
        buttonStyle={{ background: "#f8f8f8", color: "#333", fontSize: "13px" }}
        // this makes the expiration one minute for the cookie
        expires={1 / 24 / 60}
      >
        This website uses cookies to ensure you get the best experience on our
        website.{" "}
        <a
          href="https://www.privacypolicies.com/live/bccfad04-3419-49b7-9627-33976d216684"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Privacy Policy
        </a>
      </ReactCookieConsent>
    </div>
  );
}

export default Home;
