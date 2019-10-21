<template>
  <div class="sunday content">
    <img src="@/assets/sunday.png" alt="sunday">

    <h1 class="sunday-color">{{ message.title[currentLocale] }}</h1>
    <br />

    <p v-if="currentLocale === 'en'" >It is said that, for decent and conscientious people, the working day begins on the evening of the previous day. Likewise, for students of the<span class="sunday-color special-text" >  University of Latvia </span>, a new study week begins on Sunday. On Sunday check and schedule the lectures for next week and mark any changes to the next week related to the lecture process. Sunday is a perfect day to check the University of Latvia's e-mail and Internet study system and to collect all the news and changes. Some of them may relate to the <span class="sunday-color special-text" >next week or even the next day of study. </span> This is the right time to respond to emails and clarify your questions. It should be noted that Saturday is the day when the student switched from holiday mode to readiness to study. Homework is most often not done on a Sunday, as <span class="sunday-color special-text" >very often Mondays are free and fit perfectly.</span> On Sundays, students are overwhelmed by the sadness that the holidays are over and the thought of having a good time, not having to worry about homework, not thinking about lectures and waking up freely without the alarm and stress. Yes, it was only a couple of days, but it is still sad. Personally, I do all the homework for the job and keep the necessary links with the knowledge so that on Monday I will get there and do it without delay as if I hadn't been ready for work on<span class="sunday-color special-text" > Sunday </span> evening.</p>
    <p v-if="currentLocale === 'lv'" >Tā runā, ka kārtīgiem un apzinigiem cilvēkiem darba diena sākas iepriekšējās dienas vakarā. Tāpat arī kārtīgiem<span class="sunday-color special-text" >  Latvijas Universitātes </span> studentiem jauna mācību nedēļa sākas ar svētdienu. Svētdienā tiek aplūkotas un plānotas nāamās nedēļas lekcijas un atzīmētas visas izmaiņas, kas paradzētas uz nākamo nedēļu saistībā ar lekciju norisi. Svētdiena ir deāla diena, lai pārbaudītu Latvijas Universitātes e-pastu un interneta studiju sistēmu, un ievāktu visus jaunumus un izmaiņas. Dažas no tām var attiekties uz <span class="sunday-color special-text" >nākamo nenēļu vai pat nākamo studiju dienu.</span> Tas ir īstais brīdis, lai atbildētu uz e-pastiem un precizētu interesējošos jautājumus. Jāpiemin, ka sētdiena ir tā diena, kad students pārslēdzās no brīvdienu režīma uz gatavību studēt. Mājas darbi gan visbiežāk pašā svētdienā netiek pildīti, jo <span class="sunday-color special-text" >ļoti bieži pirmdienas ir brīvas un lieliski iederas šim darbam.</span> Svētdienās studentus pārņm skumjas par to, ka brīvdienas ir pagājušas un domas par to cik labi bija, kad nebija jāuztraucās par mājas darbiem, neija jādomā par lekcijām un varēja brīvi pamosties bez modinātāja un stresa. Jā, tās bija tikai pāris dienas, bet tomēr ir skumji. Personīgi es sagatavoju visus mājas darbus to pildīšanai un saglabāju nepieciešamās saites ar apziņu, ka pirmdienā ķeršos visam klāt un pildīšu bez aizkaves, kura būtu, ja darbiem sagatavojies<span class="sunday-color special-text" > svētdienas </span> es vakarā nebūtu.</p>

    <div class="footer sunday-color">
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
          en: 'well spent brings a week of content.',
          lv: 'labi pavadīta nes saturīgu nedēļu.'
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
