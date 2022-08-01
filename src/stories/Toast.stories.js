// import React, { useState } from 'react'
// import { storiesOf } from '@storybook/react'

// import 'greencss/css/greencss.css'
// import { Toast } from '../components/Toast'
// import SuccessIcon from '../components/Toast/icon/Success'
// import ErrorIcon from '../components/Toast/icon/Error'
// import InfoIcon from '../components/Toast/icon/Info'

// const stories = storiesOf('Toast Test', module)
// stories.add('Toast', () => {
//   const [list, setList] = useState([])
//   const [show, setshow] = useState(false)
//   let toastProperties = null

//   const showToast = (type) => {
//     switch (type) {
//       case 'success':
//         toastProperties = {
//           id: list.length + 1,
//           title: 'Success',
//           description: 'This is a success toast component',
//           backgroundColor: '#5cb85c',
//           icon: <SuccessIcon height='30' width='30' />
//         }
//         break
//       case 'danger':
//         toastProperties = {
//           id: list.length + 1,
//           title: 'Danger',
//           description: 'This is a danger toast component',
//           backgroundColor: '#d9534f',
//           icon: <ErrorIcon height='30' width='30' />
//         }
//         break
//       case 'info':
//         toastProperties = {
//           id: list.length + 1,
//           title: 'Info',
//           description: 'This is a info toast component',
//           backgroundColor: '#5bc0de',
//           icon: <InfoIcon height='30' width='30' />
//         }
//         break
//       case 'warning':
//         toastProperties = {
//           id: list.length + 1,
//           title: 'Warning',
//           description: 'This is a warning toast component',
//           backgroundColor: '#f0ad4e',
//           icon: <ErrorIcon height='30' width='30' />
//         }
//         break
//       default:
//         toastProperties = []
//     }
//     setList([...list, toastProperties])
//   }

//   const handleClick = () => {
//     showToast('success')
//     setshow(true)
//   }

//   return (
//     <div className='' style={{ fontFamily: 'Inter' }}>
//       <button onClick={handleClick}>Show Toast</button>
//       <Toast position='top-right' show={show} toastlist={list} setList={setList} timeout={1000} />
//     </div>
//   )
// })

import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import 'greencss/css/greencss.css'
import { handleShowToast, Toast } from '../components/Toast'

const stories = storiesOf('Toast Test', module)
stories.add('Toast', () => {
  const [toastList, setToastList] = useState([])

  return (
    <div className='' style={{ fontFamily: 'Inter' }}>
      <button onClick={() => handleShowToast('info', 'Success', 'You did it! codn toast works successfully!', setToastList)}>
        Show warning
      </button>
      <Toast
        toastList={toastList}
        setToastList={setToastList}
        duration={50000}
        position='top-right'
        progressColor='from-blue to-magenta gradient-to-left'
      />
    </div>
  )
})
