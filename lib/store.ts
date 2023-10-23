import { DroppedFiles } from '@/components/types';
import { create } from 'zustand';

type State = {
	files: DroppedFiles[];
};

type Action = {
	addFiles: (newFiles: DroppedFiles[]) => void;
	updateFile: (id: string, convertTo: string) => void;
	removeFiles: (id: string) => void;
	removeAll: () => void;
};

export const useFCStore = create<State & Action>(set => ({
	files: [],
	addFiles: newFile => {
		set(state => {
			return { files: [...state.files, ...newFile] };
		});
	},
	updateFile: (id, convertTo) => {
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
	removeFiles: id => {
		set(state => {
			return { files: state.files.filter(ele => ele.id != id) };
		});
	},
	removeAll: () => {
		set(() => {
			return { files: [] };
		});
	}
}));
