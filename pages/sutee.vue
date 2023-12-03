<script setup>
import BaseNavbar from '~/components/BaseNavbar.vue';
import BaseHeader from '~/components/BaseHeader.vue';
import BaseVerticalCard from '~/components/BaseVerticalCard.vue';
import TextOverImage from '~/components/TextOverImage.vue';
import BaseHorizontalCard from '~/components/BaseHorizontalCard.vue';
import BaseFooter from '~/components/BaseFooter.vue';
</script>

<template>
  <div class="w-full h-full" style="font-family: 'Inter', sans-serif;">
    <BaseNavbar />
    <BaseHeader img="/assets/imgs/header-image.png" />

    <div class="flex-grow">
      <div class="justify-center items-center shadow-2xl bg-white flex flex-col px-12 py-11 max-md:px-5">
        <div
          class="self-stretch flex w-full items-stretch justify-between gap-5 px-0.5 max-md:max-w-full max-md:flex-wrap">
          <div class="text-gray-900 text-3xl font-bold leading-5">Exhibitions</div>
          <div class="self-center flex items-stretch gap-2.5 my-auto">
            <div class="text-gray-900 text-center text-sm font-medium leading-5 grow whitespace-nowrap">
              see all
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>

          </div>
        </div>

        <div class="bg-zinc-300 self-stretch shrink-0 h-px mt-8 max-md:max-w-full"></div>

        <div class="py-7 max-md:pl-5 flex overflow-x-scroll pb-10 style-1" style="width: 98%; justify-content: stretch;">
          <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 mx-auto" style="margin:0px 50px;">
            <BaseVerticalCard title="Hung Liu: Making History"
              desc="Adapting motifs and symbols from Chinese visual and cultural traditions, as well as antique photographs of Chinese society by Western observers ..."
              date="11 Nov - 12 Dec 2023"
              img="https://images.theconversation.com/files/405333/original/file-20210609-14808-1kzzyhj.png?ixlib=rb-1.1.0&rect=197%2C71%2C3355%2C1725&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" />
            <BaseVerticalCard title="Hung Liu: Making History"
              desc="Adapting motifs and symbols from Chinese visual and cultural traditions, as well as antique photographs of Chinese society by Western observers ..."
              date="11 Nov - 12 Dec 2023"
              img="https://images.theconversation.com/files/405333/original/file-20210609-14808-1kzzyhj.png?ixlib=rb-1.1.0&rect=197%2C71%2C3355%2C1725&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" />
            <BaseVerticalCard title="Hung Liu: Making History"
              desc="Adapting motifs and symbols from Chinese visual and cultural traditions, as well as antique photographs of Chinese society by Western observers ..."
              date="11 Nov - 12 Dec 2023"
              img="https://images.theconversation.com/files/405333/original/file-20210609-14808-1kzzyhj.png?ixlib=rb-1.1.0&rect=197%2C71%2C3355%2C1725&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" />
            <BaseVerticalCard title="Hung Liu: Making History"
              desc="Adapting motifs and symbols from Chinese visual and cultural traditions, as well as antique photographs of Chinese society by Western observers ..."
              date="11 Nov - 12 Dec 2023"
              img="https://images.theconversation.com/files/405333/original/file-20210609-14808-1kzzyhj.png?ixlib=rb-1.1.0&rect=197%2C71%2C3355%2C1725&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" />
            <BaseVerticalCard title="Hung Liu: Making History"
              desc="Adapting motifs and symbols from Chinese visual and cultural traditions, as well as antique photographs of Chinese society by Western observers ..."
              date="11 Nov - 12 Dec 2023"
              img="https://images.theconversation.com/files/405333/original/file-20210609-14808-1kzzyhj.png?ixlib=rb-1.1.0&rect=197%2C71%2C3355%2C1725&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" />
            <BaseVerticalCard title="Hung Liu: Making History"
              desc="Adapting motifs and symbols from Chinese visual and cultural traditions, as well as antique photographs of Chinese society by Western observers ..."
              date="11 Nov - 12 Dec 2023"
              img="https://images.theconversation.com/files/405333/original/file-20210609-14808-1kzzyhj.png?ixlib=rb-1.1.0&rect=197%2C71%2C3355%2C1725&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" />
            <BaseVerticalCard title="Hung Liu: Making History"
              desc="Adapting motifs and symbols from Chinese visual and cultural traditions, as well as antique photographs of Chinese society by Western observers ..."
              date="11 Nov - 12 Dec 2023"
              img="https://images.theconversation.com/files/405333/original/file-20210609-14808-1kzzyhj.png?ixlib=rb-1.1.0&rect=197%2C71%2C3355%2C1725&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" />
            <BaseVerticalCard title="Hung Liu: Making History"
              desc="Adapting motifs and symbols from Chinese visual and cultural traditions, as well as antique photographs of Chinese society by Western observers ..."
              date="11 Nov - 12 Dec 2023"
              img="https://images.theconversation.com/files/405333/original/file-20210609-14808-1kzzyhj.png?ixlib=rb-1.1.0&rect=197%2C71%2C3355%2C1725&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" />
            <BaseVerticalCard title="Hung Liu: Making History"
              desc="Adapting motifs and symbols from Chinese visual and cultural traditions, as well as antique photographs of Chinese society by Western observers ..."
              date="11 Nov - 12 Dec 2023"
              img="https://images.theconversation.com/files/405333/original/file-20210609-14808-1kzzyhj.png?ixlib=rb-1.1.0&rect=197%2C71%2C3355%2C1725&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" />
          </div>
        </div>

      </div>
      <div>
        <div class="gap-5 flex max-md:flex-col max-md:items-flex-start max-md:gap-0 bg-white pb-10">
          <div class="flex flex-col items-stretch mt-10 ml-40 w-2/5 max-md:w-full max-md:ml-0">
            <div class="flex grow flex-col items-stretch mt-3 px-5 max-md:mt-10">
              <div class="text-gray-900 text-3xl font-bold leading-5">
                #vichakarn
              </div>
              <div class="text-black text-2xl font-medium leading-8 mt-7">
                Exhibitions related to academic work
              </div>
              <div class="text-black text-xl font-medium leading-8 whitespace-nowrap mt-7">
                Exhibitions ที่เกี่ยวข้องกับงานวิชาการ
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-items-start w-3/5 ml-5 max-md:w-full max-md:ml-0 ">
            <div class="flex flex-col justify-items-start">
              <BaseHorizontalCard title="Hung Liu: Making History"
                desc="New knowledge and experiences through the presentation of academic works from a variety of disciplines."
                date="25 Feb - 6 Mar 2022"
                img="https://images.theconversation.com/files/405333/original/file-20210609-14808-1kzzyhj.png?ixlib=rb-1.1.0&rect=197%2C71%2C3355%2C1725&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" />
              <BaseHorizontalCard title="Hung Liu: Making History"
                desc="New knowledge and experiences through the presentation of academic works from a variety of disciplines."
                date="25 Feb - 6 Mar 2022"
                img="https://images.theconversation.com/files/405333/original/file-20210609-14808-1kzzyhj.png?ixlib=rb-1.1.0&rect=197%2C71%2C3355%2C1725&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" />
              <BaseHorizontalCard title="Hung Liu: Making History"
                desc="New knowledge and experiences through the presentation of academic works from a variety of disciplines."
                date="25 Feb - 6 Mar 2022"
                img="https://images.theconversation.com/files/405333/original/file-20210609-14808-1kzzyhj.png?ixlib=rb-1.1.0&rect=197%2C71%2C3355%2C1725&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" />
            </div>
          </div>
        </div>
      </div>

      <div class="shadow-xl bg-stone-900 flex flex-col items-stretch py-12">
        <Imageslide />
        <div class="text-white text-center text-3xl font-bold leading-5 self-center max-w-[350px] mt-16 max-md:mt-10">
          Explore More Work
        </div>
        <div class="text-white text-center text-xl underline mt-2 mb-16">
          click to see more
        </div>
        <Imageslide />
      </div>

      <div>
        <div class="gap-5 flex max-md:flex-col max-md:items-flex-start max-md:gap-0 bg-white ">
          <div class="flex flex-col items-stretch mt-10 ml-40 w-2/5 max-md:w-full max-md:ml-0">
            <div class="flex grow flex-col items-stretch mt-3 px-5 max-md:mt-10">
              <div class="text-gray-900 text-3xl font-bold leading-5">
                Organized By
              </div>
              <div class="text-black text-2xl font-medium leading-8 mt-7">
                Interesting work from various organizers
              </div>
              <div class="text-black text-xl font-medium leading-8 whitespace-nowrap mt-7">
                ผลงานที่น่าสนใจจากผู้จัดที่หลากหลาย
              </div>
              <div class="flex items-stretch gap-4 mt-28 self-start max-md:mt-10 pb-10">
                <div class="text-black text-sm font-medium">All Organize</div>
                <img loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf8870fbbc82a01b10459cb075dab33e34c582ee754542cd8cc257c255023960?"
                  class="aspect-[1.78] object-contain object-center w-4 fill-black overflow-hidden self-center shrink-0 max-w-full my-auto" />
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-items-start w-3/5 ml-5 max-md:w-full max-md:ml-0 ">
            <div class="flex flex-row justify-items-start">
              <TextOverImage text="SCX"
                img="https://blog.hubspot.com/hs-fs/hubfs/colortheory_0.webp?width=650&height=433&name=colortheory_0.webp" />
              <TextOverImage text="SCX"
                img="https://blog.hubspot.com/hs-fs/hubfs/colortheory_0.webp?width=650&height=433&name=colortheory_0.webp" />
              <TextOverImage text="SCX"
                img="https://blog.hubspot.com/hs-fs/hubfs/colortheory_0.webp?width=650&height=433&name=colortheory_0.webp" />

            </div>
          </div>
        </div>
      </div>

    </div>
    <BaseFooter text="© 2023 ATOMMUSE, SIT KMUTT." />
  </div>
</template>

<style scoped>
.style-1::-webkit-scrollbar {
  width: 360px;
  height: 8px;
}

.style-1::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

.style-1::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

.style-1::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #280E05;
}
</style>
