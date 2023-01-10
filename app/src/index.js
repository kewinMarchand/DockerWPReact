import {App} from './App';

const { render } = wp.element;

render(<App {...document.getElementById('app').dataset} />, document.getElementById('app'));
