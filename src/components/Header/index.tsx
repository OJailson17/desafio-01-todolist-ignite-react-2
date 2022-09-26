import { HeaderContainer } from './styles';

import logoImg from '../../assets/todo-logo.svg';
import { Input } from '../Input';

export const Header = () => {
	return (
		<HeaderContainer>
			<img src={logoImg} alt='' />
		</HeaderContainer>
	);
};
