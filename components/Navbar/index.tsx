import Link from 'next/link';

import Logo from './logo';
import { Navlinks } from './navlinks';

import GithubButton from './github-button';
import MobileNavbar from './mobile-navbar';
import { ColorToggle } from '@/components/color-toggle';

const Navbar = () => {
	return (
		<div className="flex justify-between items-center h-16 w-full px-4 py-10 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
			<Link href={'/'}>
				<Logo />
			</Link>
			<Navlinks />
			<div className="gap-2 hidden md:flex">
				<ColorToggle />
				<GithubButton />
			</div>
			<MobileNavbar />
		</div>
	);
};

export default Navbar;
