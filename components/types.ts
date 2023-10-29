export type DroppedFiles = {
	id: string;
	filename: string;
	filesize: string;
	from: string;
	to: string | null;
	filetype: string;
	file: File;
	isConverted: boolean;
	isConverting: boolean;
	isError: boolean;
	url?: string;
	output?: string;
};
