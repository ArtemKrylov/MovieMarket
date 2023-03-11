import { createGlobalStyle } from 'styled-components';
import 'modern-normalize/modern-normalize.css';

export const GlobalStyle = createGlobalStyle`
  body {
		max-width: 100vw;
		margin: 0;
		color: ${({ theme }) => theme.colors.black};
		font-family: 'Shantell Sans', cursive;
}


	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		overflow: hidden;
		border: 0;
		clip: rect(0 0 0 0);
	}

	.app {
		max-width: 100vw;
		min-height: 100vh;
		background-color: #4158D0;
		background-image: linear-gradient(43deg, #ffbe0b 10%, #8347ec 46%, #3a86ff 80%, #4158D0 100%);


	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
			monospace;
	}

	h1, h2, h3, h4, h5, h6, p {
		margin-top: 0;
		margin-bottom: 0;
	}

	ul, ol {
		margin-top: 0;
		margin-bottom: 0;
		padding-left: 0;
	}

	img {
		display: block;
		overflow: hidden;
	} 

	li {
		list-style: none;
	}

	a, .link {
		text-decoration: none;
		color: inherit;
  
	}

	button {
		cursor: pointer;
	}

`;
