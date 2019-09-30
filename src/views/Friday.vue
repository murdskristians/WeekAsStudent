<template>
  <div class="friday content">
    <img src="@/assets/friday.png" alt="friday">

    <h1 class="friday-color">{{ message.title[currentLocale] }}</h1>
    <br />
    <p>{{ message.content[currentLocale] }}</p>
  <!-- <b-button variant="danger">Button</b-button> -->
    <div class="footer friday-color">
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
          en: 'Music always sounds better on Friday.',
          lv: 'Mūzika vienmēr skan labāk piektdienā.'
        },
        content: {
          en: "The long-awaited Friday is here, but the day has just begun. This time, as on Monday, you should look at the study plan to find out if the lectures are taking place or not. If it doesn't, it's very good and you can start doing your homework, which is given on yesterday - long Thursday, but if the lectures are happening, it's three in a row and all the same. Changes had already been sent for the first Friday two days in advance that there would be additional lectures scheduled from Monday. Unfortunately, I had already planned to go to the Quest room to celebrate my girlfriends birthday and the fact that this quest room was designed for six people to finish. I have to choose between the extra mandatory lectures that were not planned and the fact that my girlfriends birthday is ruined because of me, unfortunately, we can't find anyone ready to go in my place and my girl doesn't want to go without me, but everything is already reserved and negotiated with other people. This can happen at the University of Latvia because if the professor is suddenly can not arrive on another day, the management believes that it will be easier for all students to change their plans than to talk to the lecturer about taking the lecture on scheduled time. If students cannot, then they are to blame and it is their problem that they have to deal with themselves.",
          lv: "Ilgi gaidītā piektdiena ir klāt, bet diena ir tikai sākusies. Šoreiz tāpat kā pirmdienā ir jāskatās studiju plānā, lai noskaidrotu vai lekcijas notiek, vai nenotiek. Ja nenotiek, tad ļoti labi un var sākt pildīt mājas darbus, kuri tikai uzdoti vakar - garajā ceturtdienā, bet ja lekcijas notiek, tad tās ir trīs pēc kārtas un visas vienādas. Par pirmo piektdienu jau tika atsūtītas izmaiņas divas dienas iepriekš par to, ka notiks vēl papildus lekcijas, kuras tika plānotas pirmdienā. Diemžēl man jau bija ieplānots doties uz 'Quest room', lai nosvinētu savas meitenes dzimšanas dienu, kā arī tas, ka šis 'quest room' ir paredzēts tieši sešiem cilvēkiem, lai to varētu iziet. Sanāk, ka man ir jāizvēlās starp papildus obligātām lekcijām, kuras nebija plānā un to, ka manis dēļ tiek sabojāta manas meitenes dzimšanas diena, jo diemžēl nevaram atrast nevienu cilvēku, kurš būtu gatavs doties manā vietā, kā arī mana meitene nevēlās doties bez manis, bet viss jau ir rezervēts un sarunāts ar citiem cilvēkiem. Tā Latvijas Universitē mēdz notikt, jo, ja pansiedzējs pēkšņi netiek citā dienā, tad vadība uzskata, ka visiem studentiem būs vieglāk samainīt savus plānus nekā sarunāt ar pasniedzēju, lai lekcija tomēr notiek pēc plānotā grafika. Ja studenti nevar, tad paši ir vainīgi un tās ir viņu problēmas ar kurām pašiem jātiek galā."
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
