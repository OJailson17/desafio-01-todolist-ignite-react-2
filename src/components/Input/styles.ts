import styled from 'styled-components';

export const InputContainer = styled.div`
	height: min-content;
	background-color: 'red';
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	margin-top: calc((3.375rem / 2) * -1);

	input {
		width: 39rem;
		height: 3.375rem;
		border-radius: 8px;

		background-color: ${props => props.theme['gray-500']};
		color: #fff;
		border: none;
		padding: 1rem;
		outline: none;

		&::placeholder {
			color: ${props => props.theme['gray-300']};
			font-size: 1rem;
		}
	}

	button {
		height: 3.25rem;
		width: 5.625rem;

		background-color: ${props => props.theme.blueDark};
		color: ${props => props.theme['gray-100']};
		font-size: 0.875rem;
		font-weight: bold;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		border-radius: 8px;
		border: none;

		&:hover {
			background-color: ${props => props.theme.blue};
		}
	}
`;
