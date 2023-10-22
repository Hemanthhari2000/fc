import { IconBrandGithub } from '@tabler/icons-react';
import Link from 'next/link';
import { Button } from '../ui/button';

const GithubButton = () => {
	return (
		<Button variant={'default'} size={'icon'} asChild>
			<Link href={'https://github.com/hemanthhari2000/fc'}>
				<IconBrandGithub className="h-[1.2rem] w-[1.2rem]" />
			</Link>
		</Button>
	);
};
export default GithubButton;
