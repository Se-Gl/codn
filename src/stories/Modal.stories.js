import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { Modal } from '../components/Modal'
import 'greencss/css/greencss.css'

const stories = storiesOf('Modal Test', module)

export const StoryModal = stories.add('Modal', () => {
  const [toggleModal, setToggleModal] = useState(false)
  return (
    <div className=''>
      {/* Modal Toggle Button */}
      <button
        onClick={() => setToggleModal((prev) => !prev)}
        className='bg-red-9 px-20px py-10px rounded-10px hover:bg-red-7 relative z-1'>
        Toggle Modal
      </button>

      {/* Modal */}
      <div className='relative z-2'>
        <Modal toggle={toggleModal} setToggle={setToggleModal}>
          <Modal.Header className='sans font-900 text-30px fade-in-left animation-duration-500ms animation-forwards'>
            <h3>👋 Hi, I'm your modal</h3>
          </Modal.Header>
          <Modal.Body className='sans font-400 text-15px text-gray fade-in animation-duration-800ms animation-forwards'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Quis vel eros donec ac. Mauris
              pellentesque pulvinar pellentesque habitant morbi tristique senectus.
            </p>
            <p>
              Nunc non blandit massa enim nec dui nunc. Sed elementum tempus egestas sed sed risus. Senectus et netus et malesuada
              fames ac turpis egestas maecenas. Urna nec tincidunt praesent semper feugiat. Est ante in nibh mauris cursus mattis
              molestie. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.
            </p>
          </Modal.Body>
          <Modal.Footer className='sans font-400 text-10px'>
            <h3>copyright</h3>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
})
