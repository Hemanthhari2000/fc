import { DroppedFiles } from '@/components/types';
import { create } from 'zustand';

type State = {
	files: DroppedFiles[];
};

type Action = {
	addFiles: (newFiles: DroppedFiles[]) => void;
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
