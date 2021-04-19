import React from "react";
import { Jumbotron } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Jumbotron>
        <h1>MERN_SITE!</h1>
        <p>
          MERN stands for MongoDB, Express, React, Node, after the four key
          technologies that make up the stack. MongoDB - document database.
          Express(.js) - Node.js web framework. React(.js) - a client-side
          JavaScript framework.
        </p>
        <hr className="my-4" />
        <p>
          MERN Stack: MERN Stack is a Javascript Stack that is used for easier
          and faster deployment of full-stack web applications. MERN Stack
          comprises of 4 technologies namely: MongoDB, Express, React and Node.
          js. It is designed to make the development process smoother and
          easier.
        </p>
        <p className="lead">
          <a
            className="btn btn-primary btn-lg"
            href="https://www.mongodb.com/mern-stack"
            role="button"
          >
            Learn more
          </a>
        </p>
      </Jumbotron>
      <div className="container marketing">
        <div className="row">
          <div className="col-lg-3">
            <h2>M -- MongoDB</h2>
            <p>
              MongoDB is a source-available cross-platform document-oriented
              database program. Classified as a NoSQL database program, MongoDB
              uses JSON-like documents with optional schemas. MongoDB is
              developed by MongoDB Inc. and licensed under the Server Side
              Public License.
            </p>
            <p>
              <a className="btn btn-secondary" href="https://docs.mongodb.com/" role="button">
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-3">
            <h2>E -- ExpressJS</h2>
            <p>
              Express.js, or simply Express, is a back end web application
              framework for Node.js, released as free and open-source software
              under the MIT License. It is designed for building web
              applications and APIs. It has been called the de facto standard
              server framework for Node.js.It has been called the .
            </p>
            <p>
              <a className="btn btn-secondary" href="https://expressjs.com/" role="button">
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-3">
            <h2>R -- ReactJS</h2>
            <p>
              The top tier of the MERN stack is React.js, the declarative
              JavaScript framework for creating dynamic client-side applications
              in HTML. React lets you build up complex interfaces through simple
              Components, connect them to data on your backend server, and
              render them as HTML.
            </p>
            <p>
              <a className="btn btn-secondary" href="https://reactjs.org/" role="button">
                View details »
              </a>
            </p>
          </div>
          <div className="col-lg-3">
            <h2>N -- NodeJS</h2>
            <p>
              Node.js is an open-source, cross-platform, back-end JavaScript
              runtime environment that runs on the V8 engine and executes
              JavaScript code outside a web browserNode. js is primarily used
              for non-blocking, event-driven servers, due to its single-threaded
              nature. It's used for traditional web sites and back-endAPI
            </p>
            <p>
              <a className="btn btn-secondary" href="https://nodejs.org/en/" role="button">
                View details »
              </a>
            </p>
          </div>
        </div>
        <hr className="featurette-divider" />
      </div>

      <div>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
      <div className="col-md-5 p-lg-5 mx-auto my-5">
        <h1 className="display-4 font-weight-normal">Devloper's!</h1>
        <p className="lead font-weight-normal">You are not responsible for the programming you picked up in any age, you are the one hundred percent responsible for fixing it.
        <br/>Thanks & Regards  <br /> Ankit Upadhyay</p>
      </div>
      <div className="product-device box-shadow d-none d-md-block"></div>
      <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>
      </div>

      <div>
      <footer className="footer">
      <div className="container">
        <span>Created By ❤️ AnkitTechFirm Pvt.Ltd</span>
      </div>
      </footer>
      </div>
    </div>
  );
};

export default Home;
