const Privacy = () => {
	return (
		<div className="space-y-4 pb-16">
			<h1 className="text-4xl">Privacy</h1>
			<p className="text-lg text-gray-500 dark:text-gray-300">
				The applicaation utilizes ffmpeg wasm and our application ensures a
				secure and confidential file conversion process, eliminating the
				necessity of transmitting any data to external servers. This approach
				prioritizes full transparency in the interaction between the system and
				user data. The beauty of our application lies in its seamless operation
				within your browser, requiring no additional setup. Simply upload your
				file, click the convert button, and the entire process, including file
				processing, occurs discreetly within your browser.
			</p>
			<h1 className="text-3xl">Data we collect</h1>
			<p className="text-lg text-gray-500 dark:text-gray-300">
				We do not collect your data whatsoever. The whole idea of the
				application is to provide a truly open source, fast and safe file
				converter that does not send data over a server and store them for
				future usage. We do not collect IP addresses, links clicked, the number
				of times a page is visited, data for analytics purposes like other
				applications.
			</p>
			<h1 className="text-3xl">Cookies and Trackers</h1>
			<p className="text-lg text-gray-500 dark:text-gray-300">
				This application refrains from utilizing cookies or any other tracking
				mechanisms to gather user information. It has been built with complete
				transparency in mind, prioritizing a user-centric approach to provide
				the optimal experience.
			</p>
			<h1 className="text-3xl">Third-Party Links</h1>
			<p className="text-lg text-gray-500 dark:text-gray-300">
				This application exclusively employs links for its GitHub repository and
				does not incorporate any third-party links, ensuring a secure and
				controlled user experience. It is designed with a commitment to
				transparency and user trust.
			</p>
			<h1 className="text-3xl">Contact Us</h1>
			<p className="text-lg text-gray-500 dark:text-gray-300">
				Your inquiries and feedback are valuable to us, and our commitment to
				transparency is reflected in our direct and user-friendly contact
				approach. In case if you have any questions or concerns about anything,
				please drop a mail to{' '}
				<span className="dark:text-green-400 text-green-600">
					hemanthhari2000@gmail.com
				</span>
				<br />
				Our team will contact and provide support as soon as possible.
			</p>
		</div>
	);
};

export default Privacy;
