import Head from "next/head";
import Link from "next/link";
import Layout from "components/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="row">
          <div className="col-12">
            <br />
            <br />
            <br />
            <div
              style={{
                borderRadius: "100px",
                height: "140px",
                width: "140px",
                overflow: "hidden",
                backgroundImage: "url('/profile_picture.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <br />
            <h1 className="name" id="name">
              <Link href="#">Rafael Ancheta</Link>
            </h1>
            <p
              className="tagline"
              style={{ marginTop: "-7px", marginBottom: "20px" }}
            >
              software consultant
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 content">
            <p>
              I&apos;m Rafael, a software consultant with 8+ years of
              experience. I&apos;ve started companies and built multiple
              companies&apos; products from idea to production enviorments. I
              enjoy running, climbing, studying and generally being outdoors.
            </p>
            <br />
            <p>Email me at: me@rafaelancheta.com</p>
            <p>
              Linkedin:{" "}
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/rafaelancheta"
              >
                www.linkedin.com/in/rafaelancheta
              </Link>
            </p>
            <p>
              Github:{" "}
              <Link target="_blank" href="https://github.com/rancheta">
                www.github.com/rancheta
              </Link>
            </p>
            <p>
              <Link href="/blog">Blog</Link>
            </p>
          </div>
        </div>

        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-lg-4">
            <h3>Projects</h3>
            <br />
            <h4> 123 Dyno 2022 - Current</h4>
            <hr />

            <p>
              Creation and operation of 123 Dyno, the fastest metric based
              autoscaling of any cloud proider. An autoscaling solution for
              Heroku that provides a 12x speed upgrade and extensions to
              autoscale via CPU, memory, queue, and improved response times.
              Designed to intelligently handle load, cut users bills, and extend
              Heroku with more options than most cloud providers.
            </p>
            <br />
            <Link target="_blank" href="https://123dyno.com">
              123 Dyno
            </Link>
            <br />
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <h4> Hurry, Inc 2022</h4>
            <hr />
            <p>
              Consulted on the creation of Hurry&apos; minimum viable product
              and built out both the initial delivery portal via React.js and
              the bare-bones backend to support company endeavors within months.
              Further architected and built out scalable software via tools on
              AWS and worked on multiple internal projects.
            </p>
            <br />
            <Link target="_blank" href="https://hurry.team">
              Hurry
            </Link>
            <br />
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <h4>Software Consultant 2016 - Current</h4>
            <hr />
            <p>
              Consulting and contracting for various companies, typically
              building software from idea to minimum viable products and
              further.
            </p>
            <br />
            Consulting &amp; Development @ Brackot
            <br />
            <br />
            <Link target="_blank" href="http://ar.old.rafaelancheta.com">
              Created @ Augmented Reality Conference Display
            </Link>
            <br />
            <br />
            <Link
              target="_blank"
              href="http://meal-planner.old.rafaelancheta.com"
            >
              Created @ Fitness Billing and Planning Platform
            </Link>
            <br />
            <br />
            <Link target="_blank" href="http://carousel.old.rafaelancheta.com">
              Modded @ Carousel Port for AngularJS
            </Link>
            <br />
            <br />
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <h4>Numina 2017 - 2018</h4>
            <hr />
            <br />
            <p>
              Developed company&apos;s initial frontend dashboard that rendered
              tens of thousands of data points from municipal sensors, built a
              robust api layer in Flask, and generated data visualizations on
              AWS.
            </p>
            <br />
            <Link target="_blank" href="http://www.numina.co">
              Numina.co
            </Link>
            <br />
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <hr />
            <br />
            <h4>Carlypso 2015 - 2016</h4>
            <br />
            <p>
              Maintained an AngularJS and NodeJS app, ported it over to Django,
              implemented a CMS system, built a car configurator in ReactJS,
              designed front end testing using Selenium, Karma, and Rollbar.
              Worked with designers to produce highly design focused layouts.
              Carlypso now acquired.
            </p>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <hr />
            <br />
            <h4>toEverywhere 2015</h4>
            <br />
            <p>
              Built, managed, and formed relationships for an aggregator of
              ridesharing/carpooling providers across the public and private
              sector to boost the visibility of carpooling data across
              industries. toEverywhere&apos;s goal was to create a system that
              showed all the places you could go and all the cars passing by.
            </p>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <hr />
            <br />

            <h4>Rdvouz 2014 - 2015</h4>
            <br />
            <p>
              Designed and developed the ridesharing website Rdvouz to create a
              modern and smart ridematching service that matched users with
              drivers passing along their routes. Experience with agile
              development and getting product to initial users quickly. Accepted
              into 2015 Carma Axlr8r Batch with seed funding and featured in The
              Atlantic&apos;s City Lab.
            </p>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <hr />
            <br />

            <h4>Wavespot CRM 2013-2014</h4>
            <br />
            <p>
              Designed and developed the front end of a CRM system for WiFi
              based social networking. Also designed and developed their
              consumer facing site using the Wordpress CMS.
            </p>
            <br />
            <Link target="_blank" href="http://www.wavespot.net/">
              Consumer facing site
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
