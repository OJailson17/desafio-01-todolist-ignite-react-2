import clipboardIcon from '../../assets/clipboard.svg';
import { EmptyTaskContainer } from './styles';

export const EmptyTask = () => {
	return (
		<EmptyTaskContainer>
			<img src={clipboardIcon} alt='clipboard' />
			<strong>Você ainda não tem tarefas cadastradas</strong>
			<p>Crie tarefas e organize seus itens a fazer</p>
		</EmptyTaskContainer>
	);
};
