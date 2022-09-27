import styled, { css } from 'styled-components';

interface TaskContainerProps {
	isTaskDone?: boolean;
}

export const TaskContentContainer = styled.div<TaskContainerProps>`
	width: 100%;
	min-height: 4.5rem;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: ${props => props.theme['gray-500']};
	border-radius: 8px;
	padding: 1rem 1rem;

	/* background-color: red; */

	& .taskContent {
		width: 100%;
		background-color: yellow;

		display: flex;

		background-color: ${props => props.theme['gray-500']};
		border-radius: 8px;

		button {
			width: 1.1rem;
			height: 1.1rem;
			border-radius: 50%;
			border: ${props => `solid 1px ${props.theme.blue}`};
			background-color: ${props =>
				props.isTaskDone ? props.theme.purpleDark : 'transparent'};
		}

		div {
			flex: 1;
			margin: 0 1em;
			/* background-color: green; */
			font-size: 0.875rem;
			word-wrap: break-word;
			word-break: break-all;
			text-decoration: ${props => (props.isTaskDone ? 'line-through' : 'none')};
			color: ${props => (props.isTaskDone ? props.theme['gray-300'] : '')};
		}

		& .trashBtn {
			color: ${props => props.theme.danger};
		}
	}
`;

export const checkIcon = {
	background: 'purple',
	borderRadius: '50%',
	color: 'white',
};
