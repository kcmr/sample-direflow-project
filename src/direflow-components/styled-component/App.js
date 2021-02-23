import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div`
  font-family: sans-serif;
  padding: 20px;
  background-color: ${({bgColor}) => `${bgColor}`};
  outline: 1px solid #ccc;
`;

const App = (props) => {
  return (
    <Box bgColor={props.bgColor}>
      <h1>{props.title}</h1>
    </Box>
  );
};

App.defaultProps = {
  title: 'Hi',
  bgColor: '#fff',
};

App.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
};

export default App;
