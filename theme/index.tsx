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
          },
          components: {
            Typography: {
              colorLink: '#096DD9'
            },
            Menu: {
              itemBg: '#110964',
              colorBgElevated: '#110964',
              colorText: '#D4D0FB',
              colorBgTextHover: 'rgb(125,115,242,0.4)',
              colorPrimaryHover: '#D4D0FB',
              colorPrimaryBorder: '#fff',
              colorPrimary: '#D4D0FB'
            },
            Layout: {
              colorBgHeader: '#FFFFFF',
              colorBgBody: '#F5F5F5'
            },
            Table: {
              colorFillAlter: '#f7f6ff',
              colorFillContent: '#d4d0fb',
              colorFillSecondary: '#d4d0fb'
            },
            Pagination: {
              colorBgTextHover: '#ffffff'
            },
            Breadcrumb: {
              colorText: 'rgba(0,0,0,0.87)',
              colorTextDescription: 'rgba(0,0,0,0.38)'
            },
            Input: {
              colorTextPlaceholder: 'rgba(0,0,0,0.25)'
            },
            Slider: {
              colorBgElevated: '#f7f6ff'
            }
          }
        }}
      >
        {node}
      </ConfigProvider>
    </>
  )

export default withTheme;