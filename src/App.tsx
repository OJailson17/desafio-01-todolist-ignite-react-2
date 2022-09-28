import { ThemeProvider } from 'styled-components';
import { EmptyTask } from './components/EmptyTask';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Task } from './components/Task';
import { GlobalStyles } from './styles/global';
import { TaskContainer } from './styles/styles';
import { defaultTheme } from './themes/defaultTheme';

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<Header />
			<Input />

			<TaskContainer>
				<div className='tasksInfo'>
					<div>
						<span className='createdTasks'>Tarefas Criadas</span>
						<div>5</div>
					</div>

					<div>
						<span className='tasksDone'>Concluídas</span>
						<div>2 de 5</div>
					</div>
				</div>

				{/* Tasks */}
				<div className='tasks'>
					<EmptyTask />
				</div>
			</TaskContainer>
		</ThemeProvider>
	);
}

export { App };
