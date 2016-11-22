import Renderer from './renderer';

const render = {
};

// automaticly new a renderer and run corresponding method
['parse', 'parseJSON'].forEach((method) => {
	render[method] = (...args) => {
		let renderer = new Renderer();
		return renderer[method](...args);
	};
});

export default render;
