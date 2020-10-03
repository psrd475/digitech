import React, { Component, Fragment } from "react";
import aiBatches from "API/aiBatches";

class AIUpcomingBatches extends Component {
  render() {
    const aiBatchesRow = aiBatches.map((item, index) => {
      return (
        <tr className={`bt_row_bx ${item.disable}`} key={index}>
          <td className="date_bx">
            <span className="day_class">
              <span
                className="time-change-wrapper"
                data-timestamp={1601256600}
                data-format="MMM"
              >
                {item.month}
              </span>
              <span
                className="time-change-wrapper"
                data-timestamp={1601256600}
                data-format="dd"
              >
                {item.dd}
              </span>
              <span
                className="batch_super_date"
                data-format="dd"
                data-timestamp={1601256600}
              >
                <sup>{item.sup}</sup>&nbsp;
              </span>
            </span>
          </td>
          <td className="timeday_bx">
            <table cellPadding={0} cellSpacing={0} width="100%" border={0}>
              <tbody>
                <tr>
                  <td className="day_bx">
                    <span id="days_16946" className="dayspan_bx">
                      <span
                        className="time-change-wrapper"
                        data-timestamp={1601256600}
                        data-format="E"
                      >
                        {item.startDay}
                      </span>
                      <span
                        className="time-change-wrapper"
                        data-timestamp={1601602200}
                        data-format=" - E"
                      >
                        {item.endDay}
                      </span>
                      {item.numberOfDays}
                    </span>
                    <span className="week_bx">{item.weekEnd}</span>
                  </td>
                  <td className="time_bx">
                    <span className="fast_fill">
                      <i className={`icon-${item.batchStatusIcon}`} />
                      {item.batchStatus}
                    </span>
                    <span>
                      Timings -
                      <span
                        className="time-change-wrapper"
                        data-timestamp={1601256600}
                        data-format="hh:mm a"
                      >
                        {item.startTime}
                      </span>
                      to
                      <span
                        className="time-change-wrapper"
                        data-timestamp={1603251000}
                        data-format="hh:mm a ( TZ )"
                      >
                        {item.endTime}
                      </span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      );
    });

    return (
      <Fragment>
        <section
          className="container-flud clp_batch_table "
          id="batches"
          style={{ backgroundColor: "#f5f7fa" }}
        >
          <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding box_heading_section">
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 no-padding">
                <h2 className="title_box_heading">
                  Instructor-led AI live online classes
                </h2>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 sub_content_bx">
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 batch_table_clp">
                <table
                  className="table_bch_bx"
                  width="100%"
                  cellSpacing={0}
                  cellPadding={0}
                  border={0}
                >
                  <tbody>{aiBatchesRow}</tbody>
                </table>
              </div>
              <div
                className="col-lg-4 col-md-4 col-sm-12 col-xs-12 bch_pr_infbx"
                id="batch_table_enroll"
              >
                <div className="dtlpr_infbx">
                  <p className="title">Course Price at</p>
                  <div className="prbx_dt">
                    <span className="final_pr discount_17108">
                      <i className="fa fa-inr" aria-hidden="true" />
                      15996
                    </span>
                    <span className="cutdis_pr price_17108">
                      <i className="fa fa-inr" aria-hidden="true" />
                      19995
                    </span>
                  </div>
                  <div className="disinf_bx hide">
                    <span className="off">
                      <span className="discount_value_perct_17108">20% </span>
                      OFF
                    </span>
                    Expires in
                    <ul className="offer_clpbatchtable_countdown hide">
                      <li>
                        <span className="days digit">00</span>
                        <span className="days_ref text">day</span>
                      </li>
                      <li>
                        <span className="hours digit">00</span>
                        <span className="hours_ref text">:</span>
                      </li>
                      <li>
                        <span className="minutes digit">00</span>
                        <span className="minutes_ref text">:</span>
                      </li>
                      <li>
                        <span className="seconds last digit">00</span>
                        <span className="seconds_ref text" />
                      </li>
                    </ul>
                  </div>
                  <div className="zesto_money_india ">
                    <a
                      className="enroll_now_normal enroll-clp-btn_new orange_btn_with_gradient enroll-clp-btn on_hide_this_show_other ga-click"
                      data-courseid={776}
                      data-batchid
                      data-category="Enroll_Funnel_CLP"
                      data-action="Clicked_On_Enroll_Batch_Table"
                      data-ctaction="Course page Enroll"
                      data-enroll-location="Batch_Table"
                      data-button-name="Enroll Now"
                      data-button-location="second fold navigation"
                    >
                      ENROLL NOW
                    </a>
                    <div className="emi_box">
                      <span className="emi_avail_txt">
                        <span
                          className="emilinkonhover ga-click"
                          data-category="enroll-now pay later"
                          data-action="tool_tip_click"
                        >
                          <i className="icon-lms_information" /> No Cost EMI
                        </span>
                        <span className="enroll-discount-price">
                          starts at <i className="fa fa-inr" />
                          1,799 / month
                        </span>
                        <a
                          data-toggle="modal"
                          data-target="#fee_finance_popup_clp"
                          className="clp_view_more_emi ga-click"
                          data-category="enroll-now pay later"
                          data-action="view_more_click"
                        >
                          View more
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default AIUpcomingBatches;
