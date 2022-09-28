import styled from 'styled-components';

export const TaskContainer = styled.main`
	max-width: 46rem;
	margin: 4rem auto 4rem;

	display: flex;
	flex-direction: column;
	align-items: center;

	/* background-color: green; */

	& > .tasksInfo {
		width: 100%;
		/* background-color: green; */
		display: flex;
		align-items: center;
		justify-content: space-between;

		& > div {
			/* background-color: brown; */
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1rem;

			span {
				font-size: 0.875rem;
				font-weight: bold;
			}

			div {
				height: 19px;
				padding: 0 8px;
				border-radius: 8px;
				background-color: ${props => props.theme['gray-400']};
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: bold;
				font-size: 0.75rem;
			}
		}

		& .tasksDone {
			color: ${props => props.theme.purple};
		}

		& .createdTasks {
			color: ${props => props.theme.blue};
		}
	}

	& > .tasks {
		width: 100%;
		margin-top: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
`;
