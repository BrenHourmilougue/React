import { useState } from 'react';
import PropTypes from 'prop-types';

export const App = ({title, subtitle}) => {

  return (
    <>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    </>
  
  )
}
App.propTypes = {
  title : PropTypes.string.isRequired,
  subtitle : PropTypes.string.isRequired,
}
App.defaultProps = {
  title : 'Hello World',
  subtitle : 'Hola mun2',
}
