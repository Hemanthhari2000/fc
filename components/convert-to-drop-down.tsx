'use client';

import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem
} from '@/components/ui/select';
import { extensions } from './constants';
import { useState } from 'react';
import { DroppedFiles } from './types';

const ConvertToDropDown = (props: {
	file: DroppedFiles;
	onItemUpdate: (id: string, convertTo: string) => void;
}) => {
	const { file, onItemUpdate } = props;
	const [selected, setSelected] = useState<string>('');

	return (
		<div className="flex gap-4 items-center text-gray-500">
			<span className="text-sm font-medium">Convert to</span>
			<Select
				onValueChange={value => {
					setSelected(value);
					onItemUpdate(file.id, value);
				}}
				value={selected}
			>
				<SelectTrigger className="w-28 h-8 text-black dark:text-gray-50 font-medium">
					<SelectValue placeholder="---" />
				</SelectTrigger>
				<SelectContent className="h-fit bg-gray-600 dark:bg-gray-200 text-white dark:text-gray-600 text-base font-medium text-center rounded-sm">
					{file.filetype.includes('image') && (
						<div className="grid grid-cols-2 gap-2 w-fit">
							{extensions.image.map((extension, i) => (
								<div key={i} className="col-span-1">
									<SelectItem value={extension} className="mx-auto">
										{extension}
									</SelectItem>
								</div>
							))}
						</div>
					)}
				</SelectContent>
			</Select>
		</div>
	);
};

export default ConvertToDropDown;
