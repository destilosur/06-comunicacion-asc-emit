class ColorBall extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.nBola = Math.round(Math.random() * 100);
	}

	// static optimiza la carga (solo lo carga una vez)
	static get styles() {
		return /*css*/ `
		:host {
			
		}
		.ball {
			margin: 7px;
			text-align: center;
			line-height: 50px;
			width: 50px;
			height: 50px;
			background-color: hsl(${Math.round(Math.random() * 360)}, 100%, 50%);
			border-radius: 50%;
			animation: flotar 2s ease-in-out  infinite;
		}

		@keyFrames flotar {
			0% {
				transform: translateY(0);
			}
			50% {
				transform: translateY(-7px);}
			100% {
				transform: translateY(0);}
		}
	`;
	}

	connectedCallback() {
		this.render();
		const color = getComputedStyle(this.shadowRoot?.children[1]).backgroundColor;

		this.shadowRoot?.querySelector('.ball')?.addEventListener('click', () => {
			this.emitInfo({ num: this.nBola, color });
		});
	}

	// emite Evento al Padre
	emitInfo(info) {
		this.dispatchEvent(
			new CustomEvent('INFO', { detail: info, composed: true, bubbles: true }),
		);
	}

	render() {
		this.shadowRoot.innerHTML = /* html */ `
		<style>${ColorBall.styles}</style>
		<div class="ball">${this.nBola}</div>
		`;
	}
}

customElements.define('color-ball', ColorBall);
