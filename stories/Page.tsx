import React from 'react';
import Home from '../pages/index'
import './page.css';
import withTheme from '../theme';

export const Page: React.FC = () => {
  return withTheme(<Home/>)
};
