import styled from 'styled-components';

export const TaskContentContainer = styled.div`
	width: 100%;
	min-height: 4.5rem;

	display: flex;
	/* flex-direction: row; */
	align-items: flex-start;
	/* justify-content: space-between; */

	background-color: ${props => props.theme['gray-500']};
	border-radius: 8px;
	padding: 1rem 1rem;

	/* background-color: red; */

	input {
		width: 20px;
		height: 20px;
		/* background-color: red; */
	}

	div {
		max-width: 90%;
		min-width: 90%;
		margin: 0 1em;
		/* background-color: green; */
		font-size: 0.875rem;
		word-wrap: break-word;
		word-break: break-all;
	}

	.trashBtn {
		/* background-color: yellow; */
	}
`;
