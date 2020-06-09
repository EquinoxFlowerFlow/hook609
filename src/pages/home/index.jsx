import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Model from '@/components/Model'
import { Table, Space, Button } from 'antd';
import { getName, getdel, status } from '@/action/home'

function Home (props) {
  const { getName, getdel, data, status } = props
  const [datatwo, setDat] = useState(data)
  // const [obj, setObj] = useState({})
  const obj = {}
  useEffect(() => {
    getName()
  }, [datatwo])

  const shan = (val) =>{
    getdel(val)
  }

  const gai = (val) => {
    obj = val
  }

  const show = () => {
    status(true)
  }

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'namg',
      key: 'namg',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => show()} >增加</Button>
          <Button onClick={() => gai(record) } >修改</Button>
          <Button onClick={() => shan(record) } >删除</Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Model obj={obj} />
      <Table 
        columns={columns} 
        dataSource={data}
        rowKey={v => v.id }
      />
    </div>
  )
}
export default connect(state => {
  return {
    data: state.home.data
  }
},{
  getName,
  getdel,
  status
})(Home)
