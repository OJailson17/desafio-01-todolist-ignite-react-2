import * as Checkbox from '@radix-ui/react-checkbox';
import { Trash, Check } from 'phosphor-react';
import { useState } from 'react';
import { checkIcon, TaskContentContainer } from './styles';

export const Task = () => {
	const [isTaskDone, setIsTaskDone] = useState(false);

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

				<div>Task que precisa ser concluída</div>
				<Trash size={24} className='trashBtn' />
			</div>
		</TaskContentContainer>
	);
};
