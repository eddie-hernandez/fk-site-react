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
                <div className="guideRow">
                  <div />
                  <h4>S</h4>
                  <h4>M</h4>
                  <h4>L</h4>
                  <h4>XL</h4>
                  <h4>XXL</h4>
                </div>
                <div className="guideRow">
                  <h6>Body Length</h6>
                </div>
                <div className="guideRow">
                  <h6>Chest Width</h6>
                </div>
                <div className="guideRow">
                  <h6>Sleeve Length</h6>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  )
}
