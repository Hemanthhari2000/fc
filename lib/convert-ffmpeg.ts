import { FFmpeg } from '@ffmpeg/ffmpeg';
import { DroppedFiles } from '@/components/types';
import { fetchFile } from '@ffmpeg/util';

const getFilenameWithoutExtension = (filename: string): string => {
	const idx = filename.lastIndexOf('.');
	if (idx !== -1) {
		return filename.slice(0, idx);
	}
	return filename;
};

const ffmpegConvert = async (
	ffmpeg: FFmpeg,
	file: DroppedFiles
): Promise<{ url: string; outputFile: string }> => {
	const inputFileExtension = file.filename;
	const outputFile = getFilenameWithoutExtension(file.filename) + '.' + file.to;
	ffmpeg.writeFile(inputFileExtension, await fetchFile(file.file));

	const ffmpeg_command = ['-i', inputFileExtension, outputFile];
	await ffmpeg.exec(ffmpeg_command);
	const data = await ffmpeg.readFile(outputFile);
	const blob = new Blob([data], { type: file.filetype.split('/')[0] });
	const url = URL.createObjectURL(blob);
	return { url, outputFile };
};

export default ffmpegConvert;
