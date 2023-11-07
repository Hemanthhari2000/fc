import { accepted_files } from '@/components/constants';
import {
	IconPhoto,
	IconPhotoFilled,
	IconVideo,
	IconFileTypeTxt,
	IconHeadphones
} from '@tabler/icons-react';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const limitFilename = (filename: string): string => {
	if (filename.length > 10) {
		return (
			filename.substring(0, 5) + '...' + filename.substring(filename.length - 8)
		);
	}
	return filename;
};

export const bytesToSize = (bytes: string): string => {
	if (!+bytes) return '0B';

	const k = 1024;
	const sizes = ['B', 'KB', 'MB', 'GB'];
	const i = Math.floor(Math.log(+bytes) / Math.log(k));

	return `${parseFloat((+bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};

export const filetypeToLogo = (filetype: string): JSX.Element => {
	switch (filetype.split('/')[0].toLowerCase()) {
		case 'image':
			return <IconPhoto />;
		case 'video':
			return <IconVideo />;
		case 'text':
			return <IconFileTypeTxt />;
		case 'audio':
			return <IconHeadphones />;
		default:
			return <IconPhotoFilled />;
	}
};

export const tooltipAcceptedFiles = (): string => {
	let tooltipText = `Accepted files are: ${accepted_files['image/*']}`;
	if (
		accepted_files['video/*'].length > 0 &&
		accepted_files['audio/*'].length > 0
	) {
		tooltipText += `,${accepted_files['video/*']}, ${accepted_files['audio/*']}`;
	}
	return tooltipText;
};
