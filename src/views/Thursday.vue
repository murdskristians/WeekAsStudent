<template>
  <div class="thursday content">
    <img src="@/assets/thursday.png" alt="thursday" />

    <h1 class="thursday-color">{{ message.title[selected] }}</h1>
    <br />

    <p v-if="selected === 'en'">
      <span class="thursday-color special-text">Thursdays are the longest days we have.</span> On this day, lectures begin at 8:30 in the morning with an easy lecture on web design and end at 9:35 pm with web design practice.
      <span class="thursday-color special-text">Theoretically, it is possible to finish earlier</span>, but in practice not everyone has the opportunity, because we can choose which practical lecture we want to atend, but almost all students have other lectures or seminars along with the web design practical lecture. If we are morally emptied the other days, then this is the day where we are physically pumped out. I am a bit fortunate to have only one compulsory seminar parallel to the first web design practical workshops,
      <span class="thursday-color special-text">from 16.30 to 18.05.</span> So I'm getting to my second web design practice and finish the day around 8pm. Lucky, but still,
      <span class="thursday-color special-text">it's 12 hours at university,</span> which is not so easy, as there are many other compulsory lectures throughout the day that are not very easy, like the one called formal grammar. Personally, I plan to meet all course requirements early in the web design basics because
      <span class="thursday-color special-text">I have mastered a photographer's education</span> and believe that I have already mastered these basics. If I finish the course early, it will mean that I will not have to attend the first and last lecture of the Thursdays, which will significantly reduce the length of my working day.
    </p>
    <p v-if="selected === 'lv'">
      <span class="thursday-color special-text">Ceturtdienas ir garākās dienas kādas mums ir.</span> Šajā dienā lekcijas sākas no paša rīta 8.30 ar vieglu lekciju par tīmekļa dizaina pamatiem un beidzas pašā vakarā 21.35 ar tīmekļa dizaina praktiskajiem darbiem.
      <span class="thursday-color special-text">Teorētiski ir iespēja beigt arī agrāk</span>, taču praktiski ne visiem ir tāda iespēja, jo mēs itkā varam izvēlēties uz kuriem praktiskajiem darbiem iet, bet gandrīz visiem studentiem vienlaikus ar tīmekļa dizaina pamata praktiskajiem darbiem ir citas obliāgās lekcijas vai specsepimāri. Ja pārējās dienās mēs tiekam morāli iztukšoti, tad šī ir tā diena, kad tiekam fiziski izpumpēti. Man ir mazliet paveicies ar to, ka man ir tikai viens obligātais specseminārs, kas ir paralēli pirmajiem praktiskajiem darbiem, kas ir
      <span class="thursday-color special-text">no plkst 16.30 līdz 18.05.</span> Tātad es tieku uz otrajiem tīmekļa dizaina praktiskajiem darbiem un varu baigt dienu ap pūlkstens 20.00. Paveicies, bet tomēr
      <span class="thursday-color special-text">tās ir 12 stundas augstskolā,</span> kas nav tik viegli, jo dienas garumā ir daudzas citas obligātas lekcijas, kas arī nav ļoti vieglas, kā piemēram, lekcija ar nosaukumu formālās gramatikas. Personīgi es plānoju priekšlaicīgi izpildīt visas kursa prasības tīmekļa dizaina pamatos, jo
      <span class="thursday-color special-text">esmu apguvis fotogrāfa izglītību</span>, un uzskatu, ka šie pamati man jau ir apgūti. Ja priekšlaicīgi nokārtošu kursu, tas nozīmēs, ka man nebūs jāiet uz ceturtdienas pirmo un pēdējo lekciju, kas būtiski samazinās manas darba dienas garumu.
    </p>

    <div class="footer thursday-color">
      <b-form-select
        v-model="selected"
        :options="options"
        size="sm"
        label-align="center"
        class="mt-3"
      ></b-form-select>

      <div>Made by Kristiāns Murds, km17055</div>
      <div>Week As LU student</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: {
        title: {
          en:
            " and it really feels like a Thursday. Sometimes things just work out, but sometime they dont",
          lv:
            "un tā tiešām jūtas kā ceturtdiena. Dažreiz lietas vienkārši izdodas, bet dažreiz nē."
        }
      },
     selected: "en",
      options: [
        { value: "en", text: "English" },
        { value: "lv", text: "Latviešu" }
      ]
    };
  }
};
</script>
