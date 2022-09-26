import { Trash } from 'phosphor-react';
import { TaskContentContainer } from './styles';

export const Task = () => {
	return (
		<TaskContentContainer>
			<input type='checkbox' name='task' id='task' />
			<div>lorem</div>
			<Trash size={24} className='trashBtn' />
		</TaskContentContainer>
	);
};
