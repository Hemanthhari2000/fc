import DragAndDrop from '@/components/drag-and-drop';

export default function Home() {
	return (
		<div className="space-y-16 pb-8">
			<div className="space-y-6">
				<h1 className="text-3xl md:text-5xl font-medium text-center">
					Free Open Source File Converter
				</h1>
				<p className="text-gray-400 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
					Experience the future of file conversion with our online, free, and
					lightning-fast file converter application. Our platform empowers you
					to transform your documents, images, and more with unparalleled speed
					and security. Join us today and enjoy seamless, hassle-free file
					conversions, all at no cost!
				</p>
			</div>
			<DragAndDrop />
		</div>
	);
}
