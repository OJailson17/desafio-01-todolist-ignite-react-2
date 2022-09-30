import styled from 'styled-components';

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

	& .taskContent {
		width: 100%;
		background-color: yellow;

		display: flex;

		background-color: ${props => props.theme['gray-500']};
		border-radius: 8px;

		button:first-child {
			width: 1.1rem;
			height: 1.1rem;
			border-radius: 50%;
			text-align: center;
			border: ${props => `solid 2px ${props.theme.blue}`};
			background-color: ${props =>
				props.isTaskDone ? props.theme.purpleDark : 'transparent'};

			&:hover {
				border: ${props => `solid 2px ${props.theme.purple}`};
				background-color: ${props => props.isTaskDone && props.theme.purple};
			}
		}

		div {
			flex: 1;
			margin: 0 1em;
			font-size: 0.875rem;
			word-wrap: break-word;
			word-break: break-all;
			text-decoration: ${props => (props.isTaskDone ? 'line-through' : 'none')};
			color: ${props => (props.isTaskDone ? props.theme['gray-300'] : '')};
		}

		button:last-child {
			width: 2rem;
			height: 2rem;
			display: flex;
			justify-content: center;
			align-items: center;

			background-color: transparent;
			border: none;
			border-radius: 4px;

			&:hover {
				background-color: ${props => props.theme['gray-400']};

				.trashBtn {
					color: ${props => props.theme.danger};
				}
			}

			& .trashBtn {
				color: ${props => props.theme['gray-300']};
			}
		}
	}
`;
