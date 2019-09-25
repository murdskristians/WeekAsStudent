<template>
  <div class="monday content">
    <img src="@/assets/monday.jpg" alt="monday">

    <h1 class="monday-color">{{ message.title[currentLocale] }}</h1>
    <br />
    <p>{{ message.content[currentLocale] }}</p>

    <div class="footer monday-color">
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
          en: "Monday is a good day to have a great day! It's all in your attitude.",
          lv: 'Pirmdiena ir piemērota, lai būtu lieliska diena! Viss ir jūsu attieksmē.'
        },
        content: {
          en: 'Ohhh, Monday is here. Many people are overwhelmed by the coldness of hearing the word. Most students are no exception. We are aware that only the very first working day after the holidays has begun and four more days are ahead and have not even begun. In the third year, Mondays are variable, as you do not always have to attend lectures. Whether to go or not can only be found by looking at the study program, as there are dates when there are lectures. If for some reason it is not done on a Sunday, the students are overwhelmed by the feeling of a lottery that will determine whether the student has missed the lecture and will not be with her or is fortunate this time. If you are not lucky, stress makes no sense to run anywhere because the lectures were in the morning and at best you can only manage to finish the last lecture. Unfortunately, there is no video recording of the lecture or what is available and then the only thing left for the students to hope is that the students will tell what was in the lecture. If fellow students are unwilling or unable to help, there are no other options. Mondays are ideal days for homework. This is the case if they are free. But if not, they are due on Sunday and / or even Saturday. There is so much homework that you can do for several days without stopping.',
          lv: 'Ohhh, pirmdiena ir klāt. Daudzus cilvēkus pārņem aukstuma sajūta vien izdzirdot šo vārdu. Lielākā daļa studentu nav izņēmums. Mūs pārņem apziņa, ka ir sākusies tikai pati pirmā darba diena pēc brīvdienām un vēl veselas četras dienas ir priekšā, un nav pat sākušās. Trešajā kursā pirmdienas ir mainīgas, jo ne vienmēr ir jāiet uz lekcijām. To vai ir jāiet, vai nav var noskaidrot tikai paskatoties studiju programmā, jo tur ir norādīti datumi, kad ir vai nav lekcijas. Ja tas kaut kādu iemeslu dēļ nav izdarīts svētdienā, tad studentus pārņem loterijas sajūta, kurā tiks noskaidrots vai students ir iekavējis lekciju un vairs netiks līdzi vai arī viņam šoreiz ir palaimējies. Ja nav palaimējies, tad ar stresu nav jēgas nekur skriet, jo lekcijas bija no rīta un labākajā gadījumā var vairs paspēt tikai uz pēdējās lekcijas beigām. Diemžēl nekādi lekcijas video ieraksti vai kas tāds nav pieejami un, tad studentiem vienīgais, kas atliek ir cerēt, ka studiju biedri pastāstīs, kas bija lekcijās. Ja studiju biedri negrib vai nevar palīdzēt, tad citu variantu nav. Pirmdienas ir idealas dienas, lai pidītu mājas darbus. Tas ir gadjumā, ja viņas ir brīvas. Bet ja nav, tad tie jāpilda svētdienā un/vai pat sestdienā. Mājas darbu ir tik daudz ka var pildīt vairākas dienas bez apstājas.'
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
