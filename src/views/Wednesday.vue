<template>
  <div class="wednesday content">
    <img src="@/assets/wednesday.png" alt="wednesday">

    <h1 class="wednesday-color">{{ message.title[selected] }}</h1>
    <br />

    <p v-if="selected === 'en'" ><span class="wednesday-color special-text" >Wednesday is here.</span> As the students say, 'New day, new problems'. This time the problems start with getting up for lectures at six in the morning. Today's plan again has a branch of mathematics with the title 'Mathematical Analysis'. The day begins with a hands-on lecture, where we do practical tasks from the very morning. All students are sleepy and it is difficult to concentrate on tasks.<span class="wednesday-color special-text" > Yesterday, until the night,</span> I had to do my homework on mathematical logic. Today, sleepy all students have to switch to another mathematical way of thinking. Practical work is followed by an ordinary lecture explaining a new topic and listening and trying to understand it, because in a week's time we will be doing practical tasks on this topic.<span class="wednesday-color special-text" > It is also difficult to keep all the information in mind for week</span>. I personally do not understand why in the morning there can be no informative lecture followed by a lecture on practical tasks to strengthen knowledge. Why should it happen the other way around? It is up to the school management to decide, because we can not do anything about it anyway. Mathematical analysis is not as unintelligible as mathematical logic, but <span class="wednesday-color special-text" >this subject is not entertainment either.</span> Here too, after each lecture, there is homework that can be completed by the end of the day. Here you can feel even more that if you fall ill and do not come to the lecture, then by the next week you will have already missed the topic.</p>
    <p v-if="selected === 'lv'" ><span class="wednesday-color special-text" >Trešdiena ir klāt.</span> Kā saka studenti:'Jauna diena, jaunas problēmas'. Šoreiz problēmas sākas ar to, ka jāceļas uz lekcijām sešos no rīta. Šodienas plānā atkal ir matemātikas novirziens ar lekcijas nosaukumu 'Matemātiskā analīze'. Diena sākas ar praktisko lekciju, kurā jau no paša rīta pildām praktiskus matemātikas uzdevumus. Visiem studentiem nāk miegs un tāpēc ir grūti koncentrēties uz uzdevumiem. <span class="wednesday-color special-text" >Vakar tak līdz pašai naktij</span> bija jāpilda matemātiskās loģikas obligātais mājas darbs. Šodien miegainiem visiem studentiem jāpārslēdzas uz citu matemātisko domāšanu. Pēc praktiskajiem darbiem seko parastā lekcija, kurā skaidro jaunu tēmu un to ir jāklausās un jācenšas saprast, jo pēc tieši nedēļas no paša rīta par šo tēmu pildīsim praktiskos uzdevumus.<span class="wednesday-color special-text" > Grūti ir arī paturēt visu informāciju nedēļu galvā</span>. Es personīgi nesaprotu kāpēc no rīta nevar būt informatīva lekcija aiz kuras seko praktisko uzdevumu lekcija, lai nostiprinātu zināšanas. Kāpēc tam ir jānotiek otrādāk? Tas, lai paliek skolas vadības ziņā, jo mums tāpat nav nekādas teikšanas. Matemātiskā analīze nav tik nesaprotama kā matemātiskā loģika, bet tomēr arī <span class="wednesday-color special-text" >šis priekšmets nav nekāda izklaide.</span> Arī šeit pēc katras lekcijas ir mājas darbs, kuru var pildīt līdz dienas beigām. Te vēl vairāk var just to, ka, ja saslimsti un neatnāc uz lekciju, tad nākamajā nededēļā jau būsi stipri iekavējis tēmu.</p>

    <div class="footer wednesday-color">
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
  data () {
    return {
      message: {
        title: {
          en: 'are like Mondays in the middle of the week.',
          lv: 'ir kā pirmdienas nedēļas vidū.'
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
