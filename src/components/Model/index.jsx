import React, { useState, useEffect, useContext} from 'react';
import { connect } from 'react-redux'
import { Modal, Button } from 'antd';
import { status } from '@/action/home'

function Model (props) {
  const { obj, visible, status } = props

  const hiden = () => {
    status(false)
  }

  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={visible}
        footer={null}
        onCancel={hiden}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}

export default connect(state => {
  return {
    visible: state.home.visible
  }
},{
  status
})(Model)
