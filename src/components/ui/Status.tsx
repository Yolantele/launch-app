import { Avatar } from 'antd'
import React from 'react'
import { STATUS_STYLES as s } from './style'

interface PropsType {
  success: boolean
}

const Status: React.FC<PropsType> = ({ success }) => {
  return success ? (
    <Avatar size={40} style={s.success}>
      SUCCESS
    </Avatar>
  ) : (
    <Avatar size={40} style={s.failure}>
      FAILURE
    </Avatar>
  )
}

export default Status
