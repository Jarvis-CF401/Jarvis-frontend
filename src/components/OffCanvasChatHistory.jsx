// OffCanvasChatHistory.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';



const OffCanvasChatHistory = ({ chatHistory }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Chat History
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Chat History</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="history-window">
            {chatHistory.length === 0 ? (
              <p>No chat history available.</p>
            ) : (
              chatHistory.map((message, index) => (
                <div key={index} className={`history-message ${message.type}`}>
                  {message.text}
                </div>
              ))
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvasChatHistory;