import React, { useState } from 'react';
import BaseLayout from 'components/organisms/BaseLayout';
import Modal, { ModalHeader } from 'components/atoms/Modal';

const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <BaseLayout>
      <div className="home">
        <Modal isOpen={show}>
          <ModalHeader handleClose={() => setShow(false)}>
            Test Modal
          </ModalHeader>
          <p>Modal content</p>
        </Modal>
        Home Page
        <button onClick={() => setShow(true)}>Open</button>
      </div>
    </BaseLayout>
  )
}

export default Home;