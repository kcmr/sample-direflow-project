import {DireflowComponent} from 'direflow-component';
import App from './App';

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: 'styled-component',
  },
  properties: {
    title: '',
    bgColor: '',
  },
  plugins: [
    {
      name: 'styled-components',
    },
  ],
});
