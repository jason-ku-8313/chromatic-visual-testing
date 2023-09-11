import React from "react";
import { ConfigProvider } from "antd";

const withTheme = (node: JSX.Element) => (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'red',
            colorPrimaryHover: 'red',
            controlItemBgHover: 'red'
          },
          components: {
            Upload: {
              colorIcon: 'red',
              colorIconHover: 'red',
              colorHighlight: 'red',
              controlOutline: 'red'
            }
          }
        }}
      >
        {node}
      </ConfigProvider>
    </>
  )

export default withTheme;