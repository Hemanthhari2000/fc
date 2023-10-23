export type DroppedFiles = {
	id: string;
	filename: string;
	filesize: string;
	from: string;
	to: string | null;
	filetype: string;
	file: unknown;
	isConverted: boolean;
	isConverting: boolean;
	isError: boolean;
};
