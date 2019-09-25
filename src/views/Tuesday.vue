<template>
  <div class="tuesday content">
    <img src="@/assets/tuesday.png" alt="tuesday">

    <h1 class="tuesday-color">{{ message.title[currentLocale] }}</h1>
    <br />
    <p>{{ message.content[currentLocale] }}</p>

    <div class="footer tuesday-color">
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
        title: {
          en: 'Nothing messes up your Friday like realizing it’s only Tuesday.',
          lv: 'Nekas neizjauc jūsu piektdienu kā izpratne, ka tā ir tikai otrdiena.'
        },
        content: {
          en: "If the university didn't start yesterday, then it has definitely started today. If the week starts on a Tuesday, the worst thing is that the first lecture after the holidays in the morning is mathematical logic, which I think is the most difficult lecture in the third year. It is very difficult for me in these lectures to grasp what I am taught during the lecture, and after each lecture I will be given a hard homework that must be done. In addition, it is possible to do optional homework in this lecture, which is also given after each lecture, but this is not for me. It is a condition that you have to do this homework correctly throughout the year before you can receive one bonus point at the final grade. Perhaps I would fill in to strengthen my knowledge, but it is enough for me that the mandatory homework takes me all day to accomplish and I am very convinced that he is wrong, too. The lecturer says that those attending the lectures will have no problems, but I do not agree, because I personally attend each lecture and I cannot understand anything. I would also like to mention that at the end of high school, I had an 'A' level in the centralized exam in math, which is considered to be the highest, so I could hardly say that the problem is with me. I was greeted with this subject already in the second year when I found out that about half of the students did not pass this and this teacher in the third year.",
          lv: 'Ja universitate nesākās vakar, tad šodien viņa pavisam noteikti ir sākusies. Ja nedēļa sākas ar otartdienu, tad pats trakākais ir tas, ka pati pirmā lekcija pēc brīvdienām no rīta ir matemātiskā loģika, kura, manuprāt, ir visgrūtākā lekcija trešajā kursā. Man šajās lekcijās ir ļoti grūti uztvert to ko man māca lekcijas laikā, kā arī pēc katras lekcijas tiek uzdots smags mājasdarbs, kurš jāizpilda obligāti. Papildus ir iespēja šajā lekcijā pildīt neobligāto mājas darbu, kas arī tiek uzdots pēc katras lekcijas, bet tas nav priekš manis. Tam ir nosacījums, ka jāizpilda šos mājasdarbus pareizi visu gadu un tikai tad var saņem vienu balli bonusā pie gala vērtējuma. Varbūt es pildītu, lai nostiprinātu zināšanas, bet man jau pietiek ar to, ka obligātais mājasdarbs man aizņem visu dienu, lai izpildītu un man ir liela pārliecība, ka viņš tāpat ir nepareizs. Pasniedzējs apgalvo, ka tiem, kas apmeklēs lekcijas nekādu problēmu nebūs, taču es tam nepiekrītu, jo pats personīgi apmeklēju katru lekciju un tāpat nespēju neko saprast. Vēlos pieminēt arī to, ka vidusskolas beigās man centralizētajā eksāmenā bija A līmenis, kas tiek uzskatīts par augstāko, tāpēc diez vai varētu teikt, ka problēma ir manī. Mani ar šo priekšmetu sabaidīja jau otrajā kursā, kad uzzināju, ka tieši šo un pie šī pasniedzēja trešajā kursā nenokārtoja apmēram puse no studentiem.'
        }
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
