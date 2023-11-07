'use client';

import { bytesToSize, filetypeToLogo, limitFilename } from '@/lib/utils';
import {
	IconDownload,
	IconReload,
	IconSquareRoundedX
} from '@tabler/icons-react';
import { DroppedFiles } from './types';
import { useFCStore } from '@/lib/store';
import ConvertToDropDown from './convert-to-drop-down';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useState } from 'react';
import Tooltip from './tooltip';

const FileList = ({
	handleConvertFiles,
	handleDownload
}: {
	handleConvertFiles: () => void;
	handleDownload: (file: DroppedFiles) => void;
}) => {
	const [isFilesProcessed, setIsFilesProcessed] = useState(false);

	const { files, removeFiles, updateFile_convertTo } = useFCStore();

	const handleItemClose = (id: string) => {
		removeFiles(id);
	};

	const handleItemUpdate = (id: string, convertTo: string) => {
		updateFile_convertTo(id, convertTo);
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
							onItemDownload={handleDownload}
						/>
					);
				})}
			</div>
			<div className="mt-4 self-end">
				<Button
					size={'lg'}
					className="text-lg font-semibold"
					onClick={() => {
						setIsFilesProcessed(true);
						setTimeout(() => {
							handleConvertFiles();
							setIsFilesProcessed(false);
						});
					}}
					disabled={isFilesProcessed}
				>
					{isFilesProcessed ? (
						<IconReload className="mr-2 h-4 w-4 animate-spin" />
					) : null}
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
	onItemDownload: (file: DroppedFiles) => void;
}) => {
	const { file, onItemClose, onItemUpdate, onItemDownload } = props;
	return (
		<div className="h-fit px-4 md:px-12 lg:px-16 py-4 rounded-md border-gray-300 border-2 dark:border-gray-500 flex justify-between items-center flex-wrap lg:flex-nowrap">
			<div className="flex gap-4 items-center mb-4 md:mb-0">
				<div className="flex items-center gap-2 w-64 md:w-80 lg:w-96">
					<span>{filetypeToLogo(file.filetype)}</span>
					<Tooltip text={file.filename}>{limitFilename(file.filename)}</Tooltip>
					<span>
						<span className="items-center font-medium text-xs text-gray-400">
							({bytesToSize(file.filesize)})
						</span>
					</span>
				</div>
			</div>
			{file.isConverting ? (
				<Badge className="bg-yellow-400 text-white">Converting</Badge>
			) : file.isConverted ? (
				<div className="w-24 flex justify-between">
					<Badge className="bg-green-400 text-white">Done</Badge>
					<IconDownload
						className="h-[1.5rem] w-[1.5rem] cursor-pointer hover:ring-2 hover:rounded-lg"
						onClick={() => onItemDownload(file)}
					/>
				</div>
			) : file.isError ? (
				<Badge className="bg-red-400 text-white">Error</Badge>
			) : (
				<ConvertToDropDown file={file} onItemUpdate={onItemUpdate} />
			)}
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
