<template>
  <div class="thursday content">
    <img src="@/assets/thursday.jpg" alt="thursday">

    <p>{{ message[currentLocale] }}</p>

    <div class="footer">
      <select v-model="currentLocale">
          <option
          selected="English"
          v-for="locale in locales"
          v-bind:key="locale.id"
          v-bind:value="locale.id"
          >
            {{locale.name}}
          </option>
      </select>
      <div>Made by Kristiāns Murds, km17055</div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      message: {
        en: "Thursdays are the longest days we have. On this day, lectures begin at 8:30 in the morning with an easy lecture on web design and end at 9:35 pm with web design practice. Theoretically, it is possible to finish earlier, but in practice not everyone has the opportunity, because we can choose which practical lecture we want to atend, but almost all students have other lectures or seminars along with the web design practical lecture. If we are morally emptied the other days, then this is the day where we are physically pumped out. I am a bit fortunate to have only one compulsory seminar parallel to the first web design practical workshops, from 16.30 to 18.05. So I'm getting to my second web design practice and finish the day around 8pm. Lucky, but still, it's 12 hours at university, which is not so easy, as there are many other compulsory lectures throughout the day that are not very easy, like the one called formal grammar. Personally, I plan to meet all course requirements early in the web design basics because I have mastered a photographer's education and believe that I have already mastered these basics. If I finish the course early, it will mean that I will not have to attend the first and last lecture  of the Thursdays, which will significantly reduce the length of my working day.",
        lv: 'Ceturtdienas ir garākās dienas kādas mums ir. Šajā dienā lekcijas sākas no paša rīta 8.30 ar vieglu lekciju par tīmekļa dizaina pamatiem un beidzas pašā vakarā 21.35 ar tīmekļa dizaina praktiskajiem darbiem. Teorētiski ir iespēja beigt arī agrāk, taču praktiski ne visiem ir tāda iespēja, jo mēs itkā varam izvēlēties uz kuriem praktiskajiem darbiem iet, bet gandrīz visiem studentiem vienlaikus ar tīmekļa dizaina pamata praktiskajiem darbiem ir citas obliāgās lekcijas vai specsepimāri. Ja pārējās dienās mēs tiekam morāli iztukšoti, tad šī ir tā diena, kad tiekam fiziski izpumpēti. Man ir mazliet paveicies ar to, ka man ir tikai viens obligātais specseminārs, kas ir paralēli pirmajiem praktiskajiem darbiem, kas ir no plkst 16.30 līdz 18.05. Tātad es tieku uz otrajiem tīmekļa dizaina praktiskajiem darbiem un varu baigt dienu ap pūlkstens 20.00. Paveicies, bet tomēr tās ir 12 stundas augstskolā, kas nav tik viegli, jo dienas garumā ir daudzas citas obligātas lekcijas, kas arī nav ļoti vieglas, kā piemēram, lekcija ar nosaukumu formālās gramatikas. Personīgi es plānoju priekšlaicīgi izpildīt visas kursa prasības tīmekļa dizaina pamatos, jo esmu apguvis fotogrāfa izglītību, un uzskatu, ka šie pamati man jau ir apgūti. Ja priekšlaicīgi nokārtošu kursu, tas nozīmēs, ka man nebūs jāiet uz ceturtdienas pirmo un pēdējo lekciju, kas būtiski samazinās manas darba dienas garumu.'
      },
      currentLocale: 'en',
      locales: [
        { id: 'en', name: 'English' },
        { id: 'lv', name: 'Latviešu' }
      ]
    }
  }
}
</script>
