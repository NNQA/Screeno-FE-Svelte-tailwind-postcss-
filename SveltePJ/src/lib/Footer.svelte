<footer class="py-20 bg-slate-300">
    <div class="flex max-w-screen-xl mx-auto justify-between space-x-14">
        <div class="flex flex-col space-y-6 w-1/4">
            <img
                src="../static/images/screeno.svg"
                width={98}
                height={13}
                alt="screen-footer"
            />
            <p class="">Streaming and Video platform</p>
            <div class="flex space-x-4">
                <img
                    src="../static/icons/instagram.svg"
                    width={20}
                    height={10}
                    alt="instagram"
                />
                <img
                    src="../static/icons/facebook.svg"
                    width={20}
                    height={10}
                    alt="facebook"
                />
            </div>
        </div>
        <div class="w-1/4 flex flex-col space-y-6">
            <p class="text-1xl font-bold font-heading">Contact info</p>
            <div class="flex flex-row space-x-2">
                <img
                    src="../static/icons/location.svg"
                    width={20}
                    height={10}
                    alt="location"
                />
                <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
            <div class="flex flex-row space-x-2">
                <img
                    src="../static/icons/phone.svg"
                    width={20}
                    height={10}
                    alt="phone"
                />
                <p>(219) 555-0114</p>
            </div>
            <div class="flex flex-row space-x-2">
                <img
                    src="../static/icons/email-blue.svg"
                    width={20}
                    height={10}
                    alt="email-blue"
                />
                <p>info@screeno.com</p>
            </div>
        </div>
        <div class="w-1/2 flex flex-col space-y-6">
            <h6 class="font-heading font-bold">Get in touch</h6>
            <form action="" class="flex flex-col space-y-6">
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Your name" />
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Your message"
                />
                <div>
                    <button class="primary font-heading font-bold px-8"
                        >Send</button
                    >
                </div>
            </form>
        </div>
    </div>
</footer>
<div class="border-slate-300 text-center py-2">
    ©2022 Screeno Ltd, All rights reserved
</div>

<style lang="postcss">
    input,
    textarea {
        @apply text-neutral-500 py-3 px-4 outline-none rounded-xl border-[1px] border-white focus:border-primary transition duration-300;
    }
</style>
