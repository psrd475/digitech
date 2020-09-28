import React, { Component, Fragment } from 'react';
import { Modal, Button } from 'react-bootstrap'

class GrabNow extends Component {
  render() {
    const { show, close } = this.props;
    console.log(show, close);
    return (
      <Fragment>
        {show ?
          <Modal show={show} onClose={close}>
            <h3>Modal title</h3>
            <p>Content</p>
          </Modal>
          :
          ''
        }

        {/* <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal title
        </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">...</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
        </button>
                <button type="button" className="btn btn-primary">
                  Save changes
        </button>
              </div>
            </div>
          </div>
        </div> */}

      </Fragment>
    );
  }
}

export default GrabNow;