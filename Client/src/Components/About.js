import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">MERN_STACK</h1>
            <p className="lead text-muted">
              The technology stack is a set of frameworks and tools used to
              develop a software product. This set of frameworks and tools are
              very specifically chosen to work together in creating a
              well-functioning software.
            </p>
            <p>
              <strong>MERN</strong> stack is a web development framework. It
              consists of MongoDB, ExpressJS, ReactJS, and NodeJS as its working
              components. Here are the details of what each of these components
              is used for in developing a web application when using MERN stack:
            </p>
            <p>
              <li>
                <p>
                  <strong>MongoDB</strong>: A document-oriented, No-SQL database
                  used to store the application data.
                </p>
              </li>
              <li>
                <p>
                  <strong>NodeJS</strong>: The JavaScript runtime environment.
                  It is used to run JavaScript on a machine rather than in a
                  browser.
                </p>
              </li>
              <li>
                <p>
                  <strong>ExpressJS</strong>: A framework layered on top of
                  NodeJS, used to build the backend of a site using NodeJS
                  functions and structures. Since NodeJS was not developed to
                  make websites but rather run JavaScript on a machine,
                  ExpressJS was developed.
                </p>
              </li>
              <li>
                <p>
                  <strong>ReactJS</strong>: A library created by Facebook. It is
                  used to build UI components that create the user interface of
                  the single page web application.
                </p>
              </li>
            </p>
          </div>
        </section>
        <p><img alt="Mern Stack" src="https://webassets.mongodb.com/_com_assets/cms/mern-stack-b9q1kbudz0.png"/></p>
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

export default About;
