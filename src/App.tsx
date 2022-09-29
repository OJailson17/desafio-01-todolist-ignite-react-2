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

	const numberOfTasks = tasks.length;
	const numberOfDoneTasks = tasks.filter(task => task.isDone).length;

	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<Header />
			<Input />

			<TaskContainer>
				<div className='tasksInfo'>
					<div>
						<span className='createdTasks'>Tarefas Criadas</span>
						<div>{numberOfTasks}</div>
					</div>

					<div>
						<span className='tasksDone'>Concluídas</span>
						<div>
							{numberOfDoneTasks} de {numberOfTasks}
						</div>
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
