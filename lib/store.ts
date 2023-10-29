import { DroppedFiles } from '@/components/types';
import { create } from 'zustand';

type State = {
	files: DroppedFiles[];
};

type Action = {
	addFiles: (newFiles: DroppedFiles[]) => void;
	removeFiles: (id: string) => void;
	removeAll: () => void;
	updateFile_convertTo: (id: string, convertTo: string) => void;
	updateFile_setIsConverting: (
		value: boolean,
		id?: string,
		isSetBothFalse?: boolean
	) => void;
	updateFile_setURLandOuput: ({
		id,
		url,
		output
	}: {
		id: string;
		url: string;
		output: string;
	}) => void;
	updateFile_setError: (id: string, isError: boolean) => void;
};

export const useFCStore = create<State & Action>(set => ({
	files: [],
	addFiles: newFile => {
		set(state => {
			return { files: [...state.files, ...newFile] };
		});
	},
	removeFiles: id => {
		set(state => {
			return { files: state.files.filter(ele => ele.id != id) };
		});
	},
	removeAll: () => {
		set(() => {
			return { files: [] };
		});
	},
	updateFile_convertTo: (id, convertTo) => {
		set(state => {
			const updatedFiles = state.files.map(file => {
				if (file.id === id) {
					return { ...file, to: convertTo };
				}
				return file;
			});
			return { files: updatedFiles };
		});
	},
	updateFile_setIsConverting(value, id, isSetBothFalse) {
		set(state => {
			const updatedFiles_conversion: DroppedFiles[] = state.files.map(file => {
				if (id && file.id === id) {
					if (isSetBothFalse) {
						return {
							...file,
							isConverting: value,
							isConverted: value
						};
					}
					return {
						...file,
						isConverting: value,
						isConverted: !value
					};
				}
				return {
					...file,
					isConverting: value,
					isConverted: !value
				};
			});
			return { files: updatedFiles_conversion };
		});
	},
	updateFile_setURLandOuput({ id, url, output }) {
		set(state => {
			const updatedFiles = state.files.map(file => {
				if (file.id === id) {
					return { ...file, url: url, output: output };
				}
				return file;
			});
			return { files: updatedFiles };
		});
	},
	updateFile_setError(id, isError) {
		set(state => {
			const updatedFiles = state.files.map(file => {
				if (file.id === id) {
					return { ...file, isError: isError };
				}
				return file;
			});
			return { files: updatedFiles };
		});
	}
}));
