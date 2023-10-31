import React from 'react'
import './ProductModals.css'

export function WashModal({ openInstructions, setOpenInstructions }) {
  return (
    <>
      <button
        className="otherInfo clickable"
        onClick={() => setOpenInstructions(true)}
      >
        WASH INSTRUCTIONS
      </button>
      {openInstructions ? (
        <>
          <div className="modal">
            <div className="modalContent">
              <span
                className="close"
                onClick={() => setOpenInstructions(false)}
              >
                &times;
              </span>
              <h3>
                <u>WASH INSTRUCTIONS</u>
              </h3>
              <p className="modalInfo">
                cold wash, air dry! we do not recommend putting polyester
                material in an automatic dryer as it can ruin the fabric.
              </p>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  )
}

export function MeasurementModal({ openGuide, setOpenGuide }) {
  return (
    <>
      <button
        className="otherInfo clickable"
        onClick={() => {
          setOpenGuide(true)
        }}
      >
        MEASUREMENT GUIDE
      </button>
      {openGuide ? (
        <>
          <div className="modal">
            <div className="modalContent">
              <span className="close" onClick={() => setOpenGuide(false)}>
                &times;
              </span>
              <h3>
                <u>MEASUREMENT GUIDE</u>
              </h3>
              <div className="measurementGuideChart">
                <div className="guideCol col1">
                  <div />
                  <h4>S</h4>
                  <h4>M</h4>
                  <h4>L</h4>
                  <h4>XL</h4>
                  <h4>XXL</h4>
                </div>
                <div className="guideCol col2">
                  <h6>Body Length</h6>
                  <h6>
                    27<sup>1/2</sup> in.
                  </h6>
                  <h6>
                    28<sup>1/2</sup> in.
                  </h6>
                  <h6>
                    29<sup>1/2</sup> in.
                  </h6>
                  <h6>
                    30<sup>1/2</sup> in.
                  </h6>
                  <h6>
                    31<sup>1/2</sup> in.
                  </h6>
                </div>
                <div className="guideCol col3">
                  <h6>Chest Width</h6>
                  <h6>19 in.</h6>
                  <h6>21 in.</h6>
                  <h6>23 in.</h6>
                  <h6>25 in.</h6>
                  <h6>27 in.</h6>
                </div>
                <div className="guideCol col4">
                  <h6>Sleeve Length</h6>
                  <h6>
                    8<sup>1/8</sup> in.
                  </h6>
                  <h6>
                    8<sup>3/8</sup> in.
                  </h6>
                  <h6>
                    8<sup>5/8</sup> in.
                  </h6>
                  <h6>
                    8<sup>7/8</sup> in.
                  </h6>
                  <h6>
                    9<sup>1/8</sup> in.
                  </h6>
                </div>
              </div>
              {/* <table>
                <thead>
                  <tr>
                    <td></td>
                    <td>S</td>
                    <td>M</td>
                    <td>L</td>
                    <td>XL</td>
                    <td>XXL</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>BODY LENGTH</td>
                    <td>
                      27<sup>1/2</sup> in.
                    </td>
                    <td>
                      28<sup>1/2</sup> in.
                    </td>
                    <td>
                      29<sup>1/2</sup> in.
                    </td>
                    <td>
                      30<sup>1/2</sup> in.
                    </td>
                    <td>
                      31<sup>1/2</sup> in.
                    </td>
                  </tr>
                  <tr>
                    <td>CHEST WIDTH</td>
                    <td>19 in.</td>
                    <td>21 in.</td>
                    <td>23 in.</td>
                    <td>25 in.</td>
                    <td>27 in.</td>
                  </tr>
                  <tr>
                    <td>SLEEVE LENGTH</td>
                    <td>
                      8<sup>1/8</sup> in.
                    </td>
                    <td>
                      8<sup>3/8</sup> in.
                    </td>
                    <td>
                      8<sup>5/8</sup> in.
                    </td>
                    <td>
                      8<sup>7/8</sup> in.
                    </td>
                    <td>
                      9<sup>1/8</sup> in.
                    </td>
                  </tr>
                </tbody>
              </table> */}
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  )
}
