import React from 'react'

const ProgressBar = (props) => {
  const { completeStatus } = props
  return (
    <div className='progress-bar-container'>
      <div className='progress-bar' style={{ width: `${completeStatus}%` }}>
        <span className='progress-bar-label'>{`${completeStatus}%`}</span>
      </div>
    </div>
  )
}

export default ProgressBar