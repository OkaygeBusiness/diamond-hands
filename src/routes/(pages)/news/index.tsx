import { $, component$ } from "@builder.io/qwik"
import Header from "../../../components/molecules/header/header"
import BigNews from "../../../components/molecules/bigNews/bigNews"
import SmallNews from "../../../components/molecules/smallNews/smallNews"

export default component$(() => {
  return (
    <div class="flex flex-col justify-center m-auto w-3/4">
      <Header text="Financial News" hasButton={false} />
      <div class="mb-10">
        <BigNews
          link="https://news.yahoo.com/search-trump-storage-site-uncovers-162403585.html"
          headerText="Search of Trump storage site uncovers classified docs"
          text="Documents with classified markings have been discovered at former President Donald Trump's storage site in Florida, a person familiar with the matter said."
          image="https://s.yimg.com/uu/api/res/1.2/_jTctqCL29eUFCggEo0PsQ--~B/Zmk9c3RyaW07aD00MDQ7cT05NTt3PTcyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-12/f3ba7440-7669-11ed-bfe7-95debe08fb9d.cf.webp"
        />
      </div>
      <SmallNews
        link="https://news.yahoo.com/putin-preparing-flee-russia-implodes-162403585.html"
        headerText="Putin Is Preparing to Flee When Russia Implodes, Ex-Aide Says"
        text="2hrs ago"
        image="https://s.yimg.com/ny/api/res/1.2/It_0Uae09q_e8gYak_UE5A--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTM5Ng--/https://media.zenfs.com/en/thedailybeast.com/db7f804996a7e2d8762ef6ca76bae0fc"
      />
      <SmallNews
        link="https://news.yahoo.com/rep-alexandria-ocasio-cortez-under-200346856.html"
        headerText="Rep. Alexandria Ocasio-Cortez is under investigation by the House Ethics Committee"
        text="3hrs ago"
        image="https://s.yimg.com/ny/api/res/1.2/89552zQnGs4DvpegaQySkw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTM1MztjZj13ZWJw/https://media.zenfs.com/en/insider_articles_922/6295acbe8e7f3be94e4f856f314d3039"
      />
      <SmallNews
        link="https://news.yahoo.com/homebuyers-underwater-mortgage-203707947.html"
        headerText="People are getting sick with mystery illnesses and testing negative for COVID, RSV, and flu. Here's why."
        text="4hrs ago"
        image="https://s.yimg.com/ny/api/res/1.2/08ZPaZBJa64nynisZlGXOw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTcwNTtoPTQ3MA--/https://media.zenfs.com/en/insider_articles_922/82a80c8162ff743bd1a63b769c674252"
      />
    </div>
  )
})
