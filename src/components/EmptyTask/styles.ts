import styled from 'styled-components';

export const EmptyTaskContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: ${props => props.theme['gray-300']};

	margin-top: 1.5rem;
	border-top: ${props => `solid 1px ${props.theme['gray-400']}`};

	img {
		margin: 4rem 0 1rem;
	}

	strong {
		line-height: 1.6;
	}
`;
