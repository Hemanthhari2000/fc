'use client';

import { bytesToSize, filetypeToLogo, limitFilename } from '@/lib/utils';
import { IconSquareRoundedX } from '@tabler/icons-react';
import { DroppedFiles } from './types';
import { useFCStore } from '@/lib/store';
import ConvertToDropDown from './convert-to-drop-down';
import { Button } from './ui/button';

const FileList = () => {
	const { files, removeFiles, updateFile } = useFCStore();
	const handleItemClose = (id: string) => {
		removeFiles(id);
	};
	const handleItemUpdate = (id: string, convertTo: string) => {
		updateFile(id, convertTo);
	};

	return (
		<div className="w-full flex flex-col">
			<div className="flex flex-col gap-1">
				{files.map(file => {
					return (
						<FileListItem
							key={file.id}
							file={file}
							onItemClose={handleItemClose}
							onItemUpdate={handleItemUpdate}
						/>
					);
				})}
			</div>
			<div className="mt-4 self-end">
				<Button
					className="px-10 py-6 text-lg font-semibold"
					// onClick={() => console.log(files)}
				>
					Convert
				</Button>
			</div>
		</div>
	);
};

const FileListItem = (props: {
	file: DroppedFiles;
	onItemClose: (id: string) => void;
	onItemUpdate: (id: string, convertTo: string) => void;
}) => {
	const { file, onItemClose, onItemUpdate } = props;
	return (
		<div className="h-fit px-4 md:px-12 lg:px-16 py-4 rounded-md border-gray-300 border-2 dark:border-gray-500 flex justify-between items-center flex-wrap lg:flex-nowrap cursor-pointer">
			<div className="flex gap-4 items-center mb-4 md:mb-0">
				<div className="flex items-center gap-2 w-64 md:w-80 lg:w-96">
					<span>{filetypeToLogo(file.filetype)}</span>
					<span className="group relative">
						{limitFilename(file.filename)}
						<span className="absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-fit px-3 py-1 bg-gray-600 dark:bg-gray-200 rounded-md text-center text-white dark:text-black justify-center text-sm font-medium after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-600 dark:after:border-t-gray-200">
							{file.filename}
						</span>
					</span>
					<span>
						<span className="items-center font-medium text-xs text-gray-400">
							({bytesToSize(file.filesize)})
						</span>
					</span>
				</div>
			</div>
			<ConvertToDropDown file={file} onItemUpdate={onItemUpdate} />
			<div>
				<IconSquareRoundedX
					className="h-[1.75rem] w-[1.75rem] cursor-pointer hover:ring-2 hover:rounded-lg"
					onClick={() => onItemClose(file.id)}
				/>
			</div>
		</div>
	);
};

export default FileList;
