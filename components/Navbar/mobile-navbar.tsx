import { IconLayoutSidebarLeftCollapse } from '@tabler/icons-react';
import { Sheet, SheetTrigger, SheetContent, SheetFooter } from '../ui/sheet';
import { NavlinkItem } from './navlinks';
import GithubButton from './github-button';
import { ColorToggle } from '@/components/color-toggle';

const MobileNavbar = () => (
	<Sheet>
		<SheetTrigger asChild className="block md:hidden p-2">
			<IconLayoutSidebarLeftCollapse className="h-[2.5rem] w-[2.5rem] cursor-pointer" />
		</SheetTrigger>
		<SheetContent className="w-72">
			<div className="grid gap-2 py-4">
				<NavlinkItem href={'/about'}>About</NavlinkItem>
				<NavlinkItem href={'/privacy'}>Privacy</NavlinkItem>
				<NavlinkItem href={'/pricing'}>Pricing</NavlinkItem>
			</div>
			<SheetFooter>
				<div className="gap-2 flex w-full justify-center">
					<ColorToggle />
					<GithubButton />
				</div>
			</SheetFooter>
		</SheetContent>
	</Sheet>
);

export default MobileNavbar;
