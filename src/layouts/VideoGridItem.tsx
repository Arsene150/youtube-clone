import React, { FC } from 'react'
import Style from '../assets/scss/layouts/VideoGridItem.module.scss'
import { Link } from 'react-router-dom'

const VideoGridItem: FC = ({ id, src, title }) => (
  <Link to={{pathname: 'watch', search: `?v=${id}`}}>
    <div>
      <img src={src} alt={title}/>
      <span>{title}</span>
    </div>
  </Link>
)

export default VideoGridItem