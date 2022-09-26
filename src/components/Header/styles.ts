import styled from 'styled-components';

export const HeaderContainer = styled.header`
	width: 100%;
	height: 12.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	/* position: absolute; */

	background-color: ${props => props.theme['gray-700']};
`;
