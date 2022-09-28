import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { EmptyTask } from './components/EmptyTask';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Task } from './components/Task';
import { useTask } from './context/taskContext';
import { GlobalStyles } from './styles/global';
import { TaskContainer } from './styles/styles';
import { defaultTheme } from './themes/defaultTheme';

function App() {
	const { tasks } = useTask();

	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<Header />
			<Input />

			<TaskContainer>
				<div className='tasksInfo'>
					<div>
						<span className='createdTasks'>Tarefas Criadas</span>
						<div>{tasks.length}</div>
					</div>

					<div>
						<span className='tasksDone'>Concluídas</span>
						<div>2 de {tasks.length}</div>
					</div>
				</div>

				{/* Tasks */}
				<div className='tasks'>
					{tasks.length > 0 ? (
						tasks.map(task => <Task key={task.id} task={task} />)
					) : (
						<EmptyTask />
					)}
				</div>
			</TaskContainer>
		</ThemeProvider>
	);
}

export { App };
