<template>
  <div class="saturday content">
    <img src="@/assets/saturday.png" alt="saturday">

    <h1 class="saturday-color">{{ message.title[currentLocale] }}</h1>
    <br />


    <p v-if="currentLocale === 'en'" >Saturday has finally arrived. If Friday was not free<span class="saturday-color special-text" >  then Saturday definitely is.</span> Thank God you can finally relax, meet your friends, and leave thoughts about school. This is the only day of the week where you can plan and go somewhere safe, but not always and not for everyone, because there are students who leave all their homework for this day and then do it from morning until night. Often they also do not have time to accomplish everything physically. I express my condolences to them because<span class="saturday-color special-text" > such students are much more likely to fail a course to drop out of their studies.</span> This day is the perfect time for a party, but you can't be too excited about them as in the movies. However, I am very fortunate to have studied at another university, so I was able to transfer three whole courses from it. If I could not, then I would have to take two or three lectures throughout the week depending on the number<span class="saturday-color special-text" > of credit points</span>, as it is mandatory to have six credit points in Part C subjects to complete the third course. Part C subjects are also compulsory and must necessarily be from another university. It turns out that students have to find what<span class="saturday-color special-text" > they are interested in </span> and what they can physically attend to as they will be required to attend courses, homework, tests and an exam. Also, if any of these courses are failed, the third course cannot be completed.</p>
    <p v-if="currentLocale === 'lv'" >Beidzot ir pienākusi sestdiena. Ja piektdiena nebija brīva,<span class="saturday-color special-text" >  tad sestdiena noteikti ir.</span> Paldies Dievam beidzot var mazliet atpūsties, satikties ar draugiem un atslēgties no mācībām. Šī ir vienīgā diena nedēļā, kad ir iespēja kaut ko droši ieplānot un doties, bet nevienmēr un ne visiem, tāpēc, ka ir studenti, kuri atstāj visus mājas darbus uz šo dienu un tad pilda no paša rīta līdz vakaram. Nereti arī ar to viņiem fiziski nepietiek laika, lai visu izpildītu. Izsaku viņiem līdzjūtību, jo<span class="saturday-color special-text" > tādiem studentiem ir daudz lielāka iespēja nenokārtot kādu kursu uz izkrist no studijām.</span> Šī diena ir īstais laiks ballītēm, taču pārāk aizrauties kā to rāda filmās arī nevar. Man gan ir ļoti paveicies ar to, ka esmu mācījies arī citā augstskolā, tāpēc es varēju pārcelt veselus trīs kursus no tās. Ja es nevarētu, tad man visā nedēļā būtu jābūt papildus divām vai trīs lekcijām atkarībā<span class="saturday-color special-text" > no kredītpunktu skaita</span>, jo pēc plāna, lai pabeigtu trešo kursu ir jāsavācas seši kredītpunkti C daļas priekšmetos. C daļas priekšmeti ir arī obligāti un tiem ir obligāti jābūt kādiem priekšmetiem no citas augstskolas. Sanāk, ka studentiem pašiem ir jāatrod, kas<span class="saturday-color special-text" > viņus interesē </span>un ko viņi no tā fiziski spēj apmeklēt, jo šie kursi būs obligāti jāapmeklē, jāpilda mājas darbi, kontroldarbi un eksāmens. Kā arī, ja kaut vienu no šiem kursiem nenokārto, tad trešo kursu nevar nokārtot.</p>

    <div class="footer saturday-color">
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
          en: "Saturday, you've always been my favorite!",
          lv: 'Sestdiena, tu vienmēr esi bijusi mana mīļākā!'
        },
        content: {
          en: "Saturday has finally arrived. If Friday was not free then Saturday definitely is. Thank God you can finally relax, meet your friends, and leave thoughts about school. This is the only day of the week where you can plan and go somewhere safe, but not always and not for everyone, because there are students who leave all their homework for this day and then do it from morning until night. Often they also do not have time to accomplish everything physically. I express my condolences to them because such students are much more likely to fail a course to drop out of their studies. This day is the perfect time for a party, but you can't be too excited about them as in the movies. However, I am very fortunate to have studied at another university, so I was able to transfer three whole courses from it. If I could not, then I would have to take two or three lectures throughout the week depending on the number of credit points, as it is mandatory to have six credit points in Part C subjects to complete the third course. Part C subjects are also compulsory and must necessarily be from another university. It turns out that students have to find what they are interested in and what they can physically attend to as they will be required to attend courses, homework, tests and an exam. Also, if any of these courses are failed, the third course cannot be completed.",
          lv: 'Beidzot ir pienākusi sestdiena. Ja piektdiena nebija brīva, tad sestdiena noteikti ir. Paldies Dievam beidzot var mazliet atpūsties, satikties ar draugiem un atslēgties no mācībām. Šī ir vienīgā diena nedēļā, kad ir iespēja kaut ko droši ieplānot un doties, bet nevienmēr un ne visiem, tāpēc, ka ir studenti, kuri atstāj visus mājas darbus uz šo dienu un tad pilda no paša rīta līdz vakaram. Nereti arī ar to viņiem fiziski nepietiek laika, lai visu izpildītu. Izsaku viņiem līdzjūtību, jo tādiem studentiem ir daudz lielāka iespēja nenokārtot kādu kursu uz izkrist no studijām. Šī diena ir īstais laiks ballītēm, taču pārāk aizrauties kā to rāda filmās arī nevar. Man gan ir ļoti paveicies ar to, ka esmu mācījies arī citā augstskolā, tāpēc es varēju pārcelt veselus trīs kursus no tās. Ja es nevarētu, tad man visā nedēļā būtu jābūt papildus divām vai trīs lekcijām atkarībā no kredītpunktu skaita, jo pēc plāna, lai pabeigtu trešo kursu ir jāsavācas seši kredītpunkti C daļas priekšmetos. C daļas priekšmeti ir arī obligāti un tiem ir obligāti jābūt kādiem priekšmetiem no citas augstskolas. Sanāk, ka studentiem pašiem ir jāatrod, kas viņus interesē un ko viņi no tā fiziski spēj apmeklēt, jo šie kursi būs obligāti jāapmeklē, jāpilda mājas darbi, kontroldarbi un eksāmens. Kā arī, ja kaut vienu no šiem kursiem nenokārto, tad trešo kursu nevar nokārtot.'
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
