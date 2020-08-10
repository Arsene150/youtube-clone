import React, { FC } from 'react'
import Style from '../assets/scss/layouts/VideoGrid.module.scss'

const VideoGrid: FC = ({children}) => (
  <div className={Style.container}>
    {children}
  </div>
)

export default VideoGrid