<script lang="ts">
	const features = [
		{
			title: "Upload & Organize",
			icon: "upload",
			description:
				"Upload in bulk, organize content in categories, add custom filters & upload extras.",
		},
		{
			title: "Stream On-Demand",
			icon: "record",
			description:
				"Showcase your content in a beautiful on-demand video catalog.",
		},
		{
			title: "Stream live",
			icon: "stream",
			description:
				"Schedule events in advance & build excitement with a countdown overlay.",
		},
		{
			title: "Monetization",
			icon: "monetization",
			description:
				"Offer subscriptions or one-time purchases. Accept credit cards & PayPal.",
		},
		{
			title: "Analytics",
			icon: "stream",
			description:
				"Know what your audience likes & how your content is performing.",
		},
		{
			title: "For all devices",
			icon: "device",
			description: "Get organized on all devices",
		},
	];
	const prices = ["45$", "75$", "15$"];
</script>

<section class="bg-black text-white py-20">
	<div class="max-w-screen-xl mx-auto">
		<div class="flex items-center space-x-24">
			<div class="w-1/2 flex flex-col">
				<div class="flex flex-col space-y-4">
					<h1 class="text-5xl font-bold font-heading">
						Reach more <br /> people in real time
					</h1>
					<p>
						The Screeno ecosystem is designed to help you generate
						profit. Set up complete sales and marketing funnels with
						ease using the Screeno
					</p>
				</div>
				<div class="flex space-x-3 mt-12">
					<button class="primary w-1/3"> Start Free Trial </button>
					<button class="outline w-1/3"> Login </button>
				</div>
			</div>
			<div class="w-1/2 relative">
				<img
					src="../static/images/hero-image-desktop.png"
					alt="hero"
					class="h-full w-full"
				/>
				<img
					src="../static/images/hero-image-mobile.png"
					class="absolute -bottom-6 -left-3"
					alt="hero-Mobile"
				/>
			</div>
		</div>
		<div class="flex space-x-24 mt-32 justify-between">
			<img
				src="../static/images/apple-tv.svg"
				class="transition duration-300 transform hover:scale-110 cursor-pointer"
				alt="apple"
			/>
			<img
				src="../static/images/android-tv.svg"
				class="transition duration-300 transform hover:scale-110 cursor-pointer"
				alt="AndroidTV"
			/>
			<img
				src="../static/images/apple-watch.svg"
				class="transition duration-300 transform hover:scale-110 cursor-pointer"
				alt="Apple Watch"
			/>
			<img
				src="../static/images/iphone.svg"
				class="transition duration-300 transform hover:scale-110 cursor-pointer"
				alt="iphone"
			/>
			<img
				src="../static/images/android.svg"
				class="transition duration-300 transform hover:scale-110 cursor-pointer"
				alt="android"
			/>
		</div>
	</div>
</section>

<section class="bg-white">
	<div class="max-w-screen-lg items-center mx-auto">
		<div class="flex text-center flex-col">
			<div class="flex flex-col space-y-4">
				<h1 class="text-4xl font-bold font-heading">
					All-in-one platform
				</h1>
				<p>
					You take care of the video quality and we take care of
					everything else
				</p>
			</div>
			<div class="flex justify-center mt-20 space-x-8">
				<button class="primary w-1/5">Start Free Trial</button>
				<button class="outline black w-1/5 keywhite">Login</button>
			</div>
		</div>
		<div class="grid  grid-cols-3 gap-10 mt-20">
			{#each features as feature}
				<div class="flex flex-col space-y-3 p-5 hover:shadow-xl transition duration-300 cursor-pointer">
					<div class="flex space-x-3">
						<img
							src={`../static/icons/${feature.icon}.svg`}
							alt={feature.title} class="transform transition duration-300 hover:rotate-6"
						/>
						<h5 class="font-heading font-bold">{feature.title}</h5>
					</div>
					<p>{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section>
	<div class="flex flex-col max-w-screen-xl mx-auto space-y-20 text-white">
		<div class="flex flex-col  text-center">
			<h1 class="text-4xl font-heading font-bold">We help you grow</h1>
		</div>
		<div class="flex space-x-24">
			<div class="flex flex-col w-1/2 space-y-3 justify-center">
				<h5 class="text-3xl font-sans font-bold">Monetize your way</h5>
				<p>
					Set up subscriptions, rentals, or one-time buys for access
					to your VOD and live streams. Create exclusive experiences
					for your subscribers with coupons and promotions. One
					predictable fee, transparent pricing, and same-day setup.
				</p>
				<div class="flex space-x-3 group">
					<p class="font-heading group-hover:font-bold transition">
						Get Started
					</p>
					<img
						src="https://raw.githubusercontent.com/mnismtt/screeno/main/static/icons/arrow.svg "
						class="transition transform group-hover:translate-x-1"
						alt="arrow"
					/>
				</div>
			</div>
			<div class="relative w-1/2">
				<img
					src="../static/images/monetization.png"
					alt="Monetization"
					class="w-full h-full"
				/>
				<div
					class="absolute flex flex-col space-y-3 bg-white px-8 py-10 -top-4 -left-6 rounded-xl text-black"
				>
					{#each prices as price}
						<div
							class="flex w-full space-x-16 font-semibold bg-gray-100 rounded-xl py-4 px-3
						 hover:bg-blue-200 hover:text-primary transition duration-300 hover:translate-x-2 hover:-translate-y-2 hover:shadow-xl"
						>
							<p>Donate</p>
							<p>{price}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div class="flex space-x-24">
			<div class="flex w-1/2 relative">
				<img
					src="../static/images/optimized.png"
					alt="Optimized"
					class="w-full h-full"
				/>
				<div
					class="px-4 py-4 bg-white absolute -top-2 -right-2 rounded-2xl"
				>
					<div class="relative">
						<img
							src="../static/icons/email-black.svg"
							alt="Email Icon"
							class="w-8 h-6"
						/>
						<span
							class="absolute text-xs rounded-full -top-2 -right-2 bg-primary px-[6px] py-[1px] font-bold font-heading"
							>1</span
						>
					</div>
				</div>
			</div>
			<div class="flex flex-col w-1/2 space-y-3 justify-center">
				<h5 class="text-3xl font-sans font-bold">
					Optimized for growth
				</h5>
				<p>
					The Screeno ecosystem is designed to help you generate
					profit. Set up complete sales and marketing funnels with
					ease using the Screeno built-in marketing tools and
					integrations. Generate leads and convert your audience into
					paying subscribers, at no extra cost.
				</p>
				<div class="flex space-x-3 group">
					<p class="font-heading group-hover:font-bold transition">
						Get Started
					</p>
					<img
						src="https://raw.githubusercontent.com/mnismtt/screeno/main/static/icons/arrow.svg "
						class="transition transform group-hover:translate-x-1"
						alt="arrow"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="py-20 text-white bg-black">
	<div class="max-w-screen-lg mx-auto">
		<div class="flex flex-col space-x-3 text-center">
			<h2 class="font-heading font-bold text-4xl">
				Start your own business today
			</h2>
			<p class="mt-2">
				Consistent quality and experience across all platforms and
				devices.
			</p>
		</div>
		<div class="flex justify-center space-x-8 mt-14">
			<button class="secondary w-1/5">Get Started</button>
			<button class="outline w-1/5">Login</button>
		</div>
		<div class="relative mt-20">
			<img
				src="../static/images/business-desktop.png"
				alt="business desktop"
				class="w-full h-full"
			/>
			<img
				src="../static/images/business-mobile.png"
				alt="business mobile"
				class="absolute -bottom-4 -left-6"
			/>
		</div>
	</div>
</section>

<section class="pt-20 pb-36 bg-white">
	<div class="flex flex-col justify-center text-center space-y-3">
		<h2 class="text-4xl font-bold font-heading">
			Famous live on our platform
		</h2>
		<p>At the end of the day have fun with celebrities</p>
	</div>
	<div class="flex flex-col overflow-hidden mt-24 space-y-6">
		<div class="flex space-x-8">
			<img
				src="../static/images/showcase-1.png"
				alt="showcase-1"
				class="w-[360px] h-[200px]"
			/>
			<img
				src="../static/images/showcase-2.png"
				alt="showcase-2"
				class="w-[360px] h-[200px]"
			/>
			<img
				src="../static/images/showcase-3.png"
				alt="showcase-3"
				class="w-[360px] h-[200px]"
			/>
			<img
				src="../static/images/showcase-4.png"
				alt="showcase-4"
				class="w-[360px] h-[200px]"
			/>
		</div>
		<div class="flex space-x-8 -translate-x-32">
			<img
				src="../static/images/showcase-5.png"
				alt="showcase-5"
				class="w-[360px] h-[200px]"
			/>
			<img
				src="../static/images/showcase-6.png"
				alt="showcase-6"
				class="w-[360px] h-[200px]"
			/>
			<img
				src="../static/images/showcase-7.png"
				alt="showcase-7"
				class="w-[360px] h-[200px]"
			/>
			<img
				src="../static/images/showcase-8.png"
				alt="showcase-8"
				class="w-[360px] h-[200px]"
			/>
			<img
				src="../static/images/showcase-9.png"
				alt="showcase-9"
				class="w-[360px] h-[200px]"
			/>
		</div>
	</div>
</section>
