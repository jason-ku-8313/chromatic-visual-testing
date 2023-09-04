import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Rate,
  Typography,
  Space,
  Divider,
  Progress,
} from 'antd';

const { Option } = Select;
const { Title } = Typography;

export default function Home() {
  return (
    <>
      <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40 }}>
        <Space align='start'>
          <img
            style={{ width: 40, height: 40 }}
            src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
            alt='Ant Design'
          />
          <Title level={2} style={{ marginBottom: 0 }}>
            Ant Design
          </Title>
        </Space>
      </section>
      <Divider style={{ marginBottom: 60 }}>Form</Divider>
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Form.Item label='InputNumber'>
          <InputNumber min={1} max={10} defaultValue={3} />
          <a href='https://ant.design'>Link</a>
        </Form.Item>
        <Form.Item label='Switch'>
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item label='Slider'>
          <Slider defaultValue={70} />
        </Form.Item>
        <Form.Item label='Select'>
          <Select defaultValue='lucy' style={{ width: 192 }}>
            <Option value='jack'>jack</Option>
            <Option value='lucy'>lucy</Option>
            <Option value='disabled' disabled>
              disabled
            </Option>
            <Option value='yiminghe'>yiminghe</Option>
          </Select>
        </Form.Item>
        <Form.Item label='DatePicker'>
          <DatePicker />
        </Form.Item>
        <Form.Item label='RangePicker'>
          <DatePicker.RangePicker />
        </Form.Item>
        <Form.Item label='Rate'>
          <Rate defaultValue={3} />
        </Form.Item>
        <Form.Item label='Progress'>
          <Progress percent={50} status="active" />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
          <Space>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
            <Button>Cancel</Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
}
