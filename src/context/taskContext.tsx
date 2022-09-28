import {
	createContext,
	ReactNode,
	SetStateAction,
	useContext,
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

	return (
		<TaskContext.Provider value={{ tasks, setTasks }}>
			{children}
		</TaskContext.Provider>
	);
};

export const useTask = () => useContext(TaskContext);
