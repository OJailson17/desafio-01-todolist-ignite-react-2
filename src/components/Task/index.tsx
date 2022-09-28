import * as Checkbox from '@radix-ui/react-checkbox';
import { Trash, Check } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useTask } from '../../context/taskContext';
import { TaskContentContainer } from './styles';

interface Task {
	id: string;
	title: string;
	isDone: boolean;
}

interface TaskProps {
	task: Task;
}

export const Task = ({ task }: TaskProps) => {
	const [isTaskDone, setIsTaskDone] = useState(false);
	const { tasks, setTasks } = useTask();

	useEffect(() => {
		const allTasks = tasks.map(taskItem => {
			if (taskItem.id === task.id) {
				taskItem = { ...taskItem, isDone: isTaskDone };
			}

			return taskItem;
		});

		setTasks(allTasks);

		console.log(allTasks);
	}, [isTaskDone]);

	useEffect(() => {
		setIsTaskDone(task.isDone);
	}, []);

	return (
		<TaskContentContainer isTaskDone={isTaskDone}>
			<div className='taskContent'>
				<Checkbox.Root
					checked={isTaskDone}
					onCheckedChange={checked => {
						if (checked) {
							setIsTaskDone(true);
						} else {
							setIsTaskDone(false);
						}
					}}
				>
					<Checkbox.Indicator>
						<Check size={15} color='white' weight='bold' />
					</Checkbox.Indicator>
				</Checkbox.Root>

				<div>{task.title}</div>
				<Trash size={24} className='trashBtn' />
			</div>
		</TaskContentContainer>
	);
};
