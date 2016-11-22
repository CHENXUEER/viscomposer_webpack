import _ from 'underscore';
import Node from './node';
import * as f from '../../commonfunctions';

class Canvas extends Node {
	buildDOM() {
		if (this.debug) {
			let g = f.createSVGElement('g');
			g.setAttribute('transform', 'translate(0, 0) scale(1)');

			this.dom = g;
		}

		let g = f.createSVGElement('g'),
			clipPath = f.createSVGElement('clipPath'),
			rect = f.createSVGElement('rect');

		rect.setAttribute('x', '0');
		rect.setAttribute('y', '0');
		rect.setAttribute('width', `${this.props.width}px`);
		rect.setAttribute('height', `${this.props.height}px`);
		clipPath.appendChild(rect);

		let clipID = this.uuid;
		clipPath.setAttribute('id', clipID);
		this.defs = [clipPath];
		g.setAttribute('clip-path', `url(#${clipID})`);

		if (this.debug) {
			this.dom.appendChild(g);
		} else {
			this.dom = g;
		}
		this.container = g;
	}
}

Canvas.props = {
	width: 400,
	height: 400,
	padding: { top: 0, bottom: 0, left: 0, right: 0 },
};

export default Canvas;
