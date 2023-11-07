'use client';

import { IconCloudUpload, IconFileSymlink } from '@tabler/icons-react';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Dropzone from 'react-dropzone';
import { DroppedFiles } from './types';
import { useFCStore } from '@/lib/store';
import FileList from './file-list';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import loadFfmpeg from '@/lib/load-ffmpeg';
import { Skeleton } from './ui/skeleton';
import ffmpegConvert from '@/lib/convert-ffmpeg';
import { useToast } from './ui/use-toast';
import { accepted_files } from './constants';
import Tooltip from './tooltip';
import { tooltipAcceptedFiles } from '@/lib/utils';

const DragAndDrop = () => {
	const [isFileHover, setIsFileHover] = useState<boolean>(false);
	const [isFFMPEGLoaded, setIsFFMPEGLoaded] = useState<boolean>(false);
	const ffmpegRef = useRef<FFmpeg>();
	const { toast } = useToast();

	const {
		files,
		addFiles,
		updateFile_setIsConverting,
		updateFile_setURLandOuput,
		updateFile_setError
	} = useFCStore();

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

	useEffect(() => {
		loadFFMPEG();
	}, []);

	const loadFFMPEG = async () => {
		const ffmpeg_res: FFmpeg = await loadFfmpeg();
		ffmpegRef.current = ffmpeg_res;
		setIsFFMPEGLoaded(true);
	};

	const handleDownload = (file: DroppedFiles) => {
		const downloadLink = document.createElement('a');
		downloadLink.style.display = 'none';
		downloadLink.href = file.url!;
		downloadLink.download = file.output!;
		document.body.appendChild(downloadLink);
		downloadLink.click();
		URL.revokeObjectURL(file.url!);
		document.body.removeChild(downloadLink);
	};

	const handleConvertFiles = () => {
		updateFile_setIsConverting(true);

		files.map(async file => {
			try {
				const { url, outputFile } = await ffmpegConvert(
					ffmpegRef.current!,
					file
				);
				updateFile_setURLandOuput({
					id: file.id,
					url: url,
					output: outputFile
				});
				updateFile_setIsConverting(false, file.id);
			} catch (error) {
				updateFile_setError(file.id, true);
				updateFile_setIsConverting(false, file.id, true);
				toast({
					variant: 'destructive',
					title: 'Error',
					description: 'Something failed. Please try again later',
					duration: 5000
				});
			}
		});
	};

	return files.length ? (
		<FileList
			handleConvertFiles={handleConvertFiles}
			handleDownload={handleDownload}
		/>
	) : !isFFMPEGLoaded ? (
		<Skeleton className="h-96 max-w-4xl lg:max-w-6xl 2xl:max-w-7xl cursor-progress rounded-3xl" />
	) : (
		<Tooltip text={tooltipAcceptedFiles()}>
			<Dropzone
				onDrop={handleFileUpload}
				onDragEnter={handleEnterHover}
				onDragLeave={handleExitHover}
				accept={accepted_files}
				onDropRejected={() => {
					handleExitHover();
					toast({
						variant: 'destructive',
						title: 'Error uploading your files',
						description: 'Allowed Files: Audio, Video and Images',
						duration: 5000
					});
				}}
				onError={() => {
					handleExitHover();
					toast({
						variant: 'destructive',
						title: 'Error uploading your files',
						description: 'Allowed Files: Audio, Video and Images',
						duration: 5000
					});
				}}
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
		</Tooltip>
	);
};

export default DragAndDrop;
