import React, { Component, Fragment } from "react";
import aiCurriculum from "API/aiCurriculum";

class AICurriculum extends Component {
  render() {
    const aiCurriculumRow = aiCurriculum.map((person, index) => (
      <div className="accordion__item " key={index}>
        <a
          href="#"
          className="accordion__toggle"
          data-toggle="collapse"
          data-target="#course-toc-2"
          data-parent="#parent"
        >
          <span className="flex">{person.title}</span>
          <span className="accordion__toggle-icon material-icons">
            keyboard_arrow_down
          </span>
        </a>

        {person.topic.map((pet, i) => (
          <div
            // className={`accordion__menu collapse  ${index}`}
            className="accordion__menu collapse show"
            id="course-toc-2" key={i}
          >
            <div className="accordion__menu-link" >
              <span className="icon-holder icon-holder--small icon-holder--dark rounded-circle d-inline-flex icon--left">
                <i className="icon-Video_icon" />
              </span>
              <a className="flex" href="fixed-student-lesson.html">
                {pet.subtitle}
              </a>
            </div>
          </div>
        ))}
      </div>

    ))
    return (
      <Fragment>
        <section
          className="container-flud clp_batch_table "
          id="batches"
          style={{ backgroundColor: "#f5f7fa" }}
        >
          <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding box_heading_section">
              <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12 no-padding ">
                <h2 className="title_box_heading">
                  Curriculum
                </h2>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 no-padding text-right">
                <a href="#!" className="btnblue  ">
                  <i className="icon-PDF2" aria-hidden="true"></i>
                DOWNLOAD CURRICULUM
              </a>
              </div>
            </div>
            <div className="row mb-0">
              <div className="col-lg-12">
                <div
                  className="accordion js-accordion accordion--boxed list-group-flush"
                  id="parent"
                >
                  {aiCurriculumRow}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </div> */}
      </Fragment >
    );
  }
}

export default AICurriculum;
