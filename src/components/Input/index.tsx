import { PlusCircle } from 'phosphor-react';
import plusSign from '../../assets/plus.svg';
import { InputContainer } from './styles';

export const Input = () => {
	return (
		<InputContainer>
			<input type='text' placeholder='Adicione uma nova tarefa' />
			<button>
				Criar
				<PlusCircle />
			</button>
		</InputContainer>
	);
};
