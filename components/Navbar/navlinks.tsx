'use client';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import Link from 'next/link';

interface NavlinkItemProps {
	href: string;
	children?: React.ReactNode;
}

const NavlinkItem = (props: NavlinkItemProps) => {
	const path: string = usePathname();
	return (
		<Button asChild variant={props.href === path ? 'outline' : 'ghost'}>
			<Link href={props.href}>{props.children}</Link>
		</Button>
	);
};

const Navlinks = () => {
	return (
		<div className="justify-between items-center px-6 py-4 w-80 lg:gap-4 hidden md:flex">
			<NavlinkItem href={'/about'}>About</NavlinkItem>
			<NavlinkItem href={'/privacy'}>Privacy</NavlinkItem>
			<NavlinkItem href={'/pricing'}>Pricing</NavlinkItem>
		</div>
	);
};

export { Navlinks, NavlinkItem };
