import {
	createContext,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from 'react';

interface TaskContextProviderProps {
	children: ReactNode;
}

interface ITask {
	id: string;
	title: string;
	isDone: boolean;
}

interface ITaskContext {
	tasks: ITask[];
	setTasks: React.Dispatch<SetStateAction<ITask[]>>;
}

const TaskContext = createContext({} as ITaskContext);

export const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
	const [tasks, setTasks] = useState<ITask[]>([]);

	useEffect(() => {
		if (tasks.length > 0) {
			localStorage.setItem('@todo', JSON.stringify(tasks));
		}
	}, [tasks]);

	useEffect(() => {
		const localTasks = localStorage.getItem('@todo');

		if (localTasks) {
			setTasks(JSON.parse(localTasks));
		}
	}, []);

	return (
		<TaskContext.Provider value={{ tasks, setTasks }}>
			{children}
		</TaskContext.Provider>
	);
};

export const useTask = () => useContext(TaskContext);
