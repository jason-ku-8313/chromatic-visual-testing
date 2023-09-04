import React from "react";
import { ConfigProvider } from "antd";

const testGreenColor = "#52c41a";
const testRedColor = "#ff0000";

const withTheme = (node: JSX.Element) => (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'red',
            // colorFillSecondary: 'yellow'
          },
        }}
      >
        <ConfigProvider
          theme={{
            token: {
              borderRadius: 16,
            },
          }}
        >
          {node}
        </ConfigProvider>
      </ConfigProvider>
    </>
  )

export default withTheme;