import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { useTask } from '../../context/taskContext';
import { InputContainer } from './styles';

export const Input = () => {
	const [taskTitle, setTaskTitle] = useState('');

	const { setTasks } = useTask();

	const handleCreateTask = () => {
		const task = {
			id: String(new Date().getTime()),
			title: taskTitle,
			isDone: false,
		};

		setTasks(state => [...state, task]);
		setTaskTitle('');
	};

	return (
		<InputContainer>
			<input
				type='text'
				placeholder='Adicione uma nova tarefa'
				onChange={e => setTaskTitle(e.target.value)}
				value={taskTitle}
			/>
			<button onClick={handleCreateTask}>
				Criar
				<PlusCircle size={16} weight='bold' />
			</button>
		</InputContainer>
	);
};
