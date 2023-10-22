import { IconFileStack } from '@tabler/icons-react';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({ weight: '400', subsets: ['latin'] });

const Logo = () => {
	return (
		<div className="flex items-center gap-2 w-fit px-2 font-extrabold text-2xl">
			<IconFileStack className="h-[2.5rem] w-[2.5rem]" />
			<span className={pacifico.className}>F C</span>
		</div>
	);
};

export default Logo;
