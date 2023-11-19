import Link from 'next/link';

const About = () => {
	return (
		<div className="space-y-16 pb-16">
			<div className="space-y-4">
				<h1 className="text-5xl font-medium">FC - FileConverter</h1>
				<p className="text-lg text-gray-500 dark:text-gray-300">
					Experience the future of file conversion with our online, free, and
					lightning-fast file converter application. Our platform empowers you
					to transform your documents, images, and more with unparalleled speed
					and security. Join us today and enjoy seamless, hassle-free file
					conversions, all at no cost!
				</p>
			</div>
			<div className="space-y-5">
				<h1 className="text-4xl">Features</h1>
				<h3 className="text-2xl">Image, Audio and Video Conversion</h3>
				<p className="text-lg text-gray-500 dark:text-gray-300">
					Effortlessly convert images, audio, and video files in real-time
					without the need to transmit your data to a server. This innovative
					solution allows you to seamlessly convert files directly within your
					client browser, utilizing a secure browser-based library. Experience
					the utmost safety and security in file conversion through our web
					application. Give it a{' '}
					<Link href={'/'}>
						<span className="dark:text-green-400 text-green-600 underline">
							try now!
						</span>
					</Link>
				</p>
				<h3 className="text-2xl">Fast, Safe and Secure</h3>
				<p className="text-lg text-gray-500 dark:text-gray-300">
					Utilizing ffmpeg wasm, our application ensures a secure and
					confidential file conversion process, eliminating the necessity of
					transmitting any data to external servers. This approach prioritizes
					full transparency in the interaction between the system and user data.
					The beauty of our application lies in its seamless operation within
					your browser, requiring no additional setup. Simply upload your file,
					click the convert button, and the entire process, including file
					processing, occurs discreetly within your browser.
				</p>
				<h3 className="text-2xl">It&apos;s Free and Open-Source</h3>
				<p className="text-lg text-gray-500 dark:text-gray-300">
					It&apos;s a free and open-source file converter application which is a
					powerful tool designed with simplicity and transparency in mind. We
					believe in providing users with a genuine solution for seamless file
					conversions without any hidden costs. Built on an open-source
					framework, this application not only ensures accessibility for all but
					also encourages community-driven enhancements. Experience the freedom
					to convert your files effortlessly, knowing that our commitment to
					openness and user empowerment is at the core of every transformation.
					Checkout our{' '}
					<Link href={'https://github.com/hemanthhari2000/fc'}>
						<span className="dark:text-green-400 text-green-600 underline">
							github repo
						</span>
					</Link>{' '}
					and discover the authenticity of a file converter that&apos;s truly
					free and open for all.
				</p>
			</div>
		</div>
	);
};

export default About;
