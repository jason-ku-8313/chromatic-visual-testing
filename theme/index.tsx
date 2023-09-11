import React from "react";
import { ConfigProvider } from "antd";

const withTheme = (node: JSX.Element) => (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorTextBase: '#000000',
            colorText: 'rgba(0, 0, 0, 0.87)',
            colorPrimary: '#5244ee',
            colorPrimaryHover: '#7D73F2',
            colorPrimaryActive: '#1F11BB',
            colorTextDisabled: 'rgba(0,0,0,0.38)',
            colorBgContainerDisabled: '#f5f5f5',
            colorFillSecondary: '#f7f6ff',
            colorPrimaryBg: '7D73F2',
            colorError: '#ff4d4f',
            colorErrorBorderHover: '#ff4d4f',
            colorErrorOutline: 'rgba(255,77,79,.2)',
            wireframe: true
        }}}
      >
        {node}
      </ConfigProvider>
    </>
  )

export default withTheme;