<script>
    import "@fontsource/montserrat/700.css";
    import "@fontsource/montserrat/600.css";
    import "@fontsource/montserrat/500.css";
    import "@fontsource/mulish/700.css";
    import "@fontsource/mulish/400.css";
    import "@fontsource/mulish/300.css";

    import Navbar from "../lib/Navbar.svelte";
    import Page from "./+page.svelte";
    import Footer from "../lib/Footer.svelte";
</script>

<div class="w-full min-h-full">
    <Navbar />
    <Page />
    <slot />

    <Footer></Footer>

</div>

<style lang="postcss" global>
    :global(button) {
        @apply px-6 py-3 font-sans rounded-full outline-none transition duration-300;
    }
    :global(button.primary) {
        @apply bg-primary text-white hover:bg-blue-700;
    }
    :global(button.outline) {
        @apply border-white text-white black border-[1px] hover:bg-white hover:text-black;
    }
    :global(button.black) {
        @apply text-black border-black;
    }
    :global(section) {
        @apply py-20 bg-black mx-auto;
    }
    :global(button.secondary) {
        @apply bg-white text-black hover:bg-gray-500 hover:text-white;
    }
    :global(button.keywhite) {
        @apply hover:bg-black hover:text-white;
    }
    
</style> 