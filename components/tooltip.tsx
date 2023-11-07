interface ToolTipProps {
	text: string;
	children: React.ReactNode;
}

const Tooltip = (props: ToolTipProps) => {
	const { text, children } = props;
	return text.length > 0 ? (
		<div className="group relative">
			{children}
			<span className="absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-fit px-3 py-1 bg-gray-600 dark:bg-gray-200 rounded-md text-center text-white dark:text-black justify-center text-sm font-medium after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-600 dark:after:border-t-gray-200">
				{text}
			</span>
		</div>
	) : (
		<div>{children}</div>
	);
};

export default Tooltip;
