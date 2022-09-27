import { HeaderContainer } from './styles';

import logoImg from '../../assets/todo-logo.svg';

export const Header = () => {
	return (
		<HeaderContainer>
			<img src={logoImg} alt='' />
		</HeaderContainer>
	);
};
