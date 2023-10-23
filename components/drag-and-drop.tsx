'use client';

import { IconCloudUpload, IconFileSymlink } from '@tabler/icons-react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Dropzone from 'react-dropzone';
import { DroppedFiles } from './types';
import { useFCStore } from '@/lib/store';
import FileList from './file-list';

const DragAndDrop = () => {
	const [isFileHover, setIsFileHover] = useState<boolean>(false);
	const { files, addFiles } = useFCStore();

	const handleFileUpload = (data: File[]): void => {
		handleExitHover();
		const droppedFiles: DroppedFiles[] = [];
		data.map(file => {
			droppedFiles.push({
				id: uuidv4().toString(),
				file: file,
				filename: file.name,
				filesize: file.size.toString(),
				from: file.name.split('.').pop()!,
				to: null,
				filetype: file.type,
				isConverted: false,
				isConverting: false,
				isError: false
			});
		});
		addFiles(droppedFiles);
	};

	const handleEnterHover = () => setIsFileHover(true);
	const handleExitHover = () => setIsFileHover(false);
	return files.length ? (
		<FileList />
	) : (
		<Dropzone
			onDrop={handleFileUpload}
			onDragEnter={handleEnterHover}
			onDragLeave={handleExitHover}
		>
			{({ getRootProps, getInputProps }) => (
				<div
					{...getRootProps()}
					className=" bg-gray-50 h-72 dark:bg-gray-900 dark:border-gray-50 lg:h-80 xl:h-96 rounded-3xl shadow-sm border-2 border-dashed cursor-pointer flex items-center justify-center"
				>
					<input {...getInputProps()} />
					<div className="space-y-4 text-gray-500">
						{isFileHover ? (
							<>
								<div className="justify-center flex">
									<IconFileSymlink className="h-[3.5rem] w-[3.5rem]" />
								</div>
								<h3 className="text-center font-medium text-2xl">
									Yep! Right here
								</h3>
							</>
						) : (
							<>
								<div className="justify-center flex">
									<IconCloudUpload className="h-[3.5rem] w-[3.5rem]" />
								</div>
								<h3 className="text-center font-medium text-2xl">
									Click or drag and drop files here
								</h3>
							</>
						)}
					</div>
				</div>
			)}
		</Dropzone>
	);
};

export default DragAndDrop;
