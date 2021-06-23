import { Precedences } from '@roman-rite/constants/precedences';
import { CalendarDef } from '@roman-rite/models/calendar-def';
import { DateDefinitions } from '@roman-rite/types/calendar-def';
import { PatronTitles } from '@romcal/constants/martyrology-metadata';

export class Europe extends CalendarDef {
  definitions: DateDefinitions = {
    cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop: {
      customLocaleKey:
        'cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop_copatrons_of_europe',
      martyrology: ['cyril_the_philosopher_monk', 'methodius_of_thessaloniki_bishop'],
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: (titles) => [...titles, PatronTitles.CopatronOfEurope],
    },

    catherine_of_siena_virgin: {
      customLocaleKey: 'catherine_of_siena_virgin_copatroness_of_europe',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: (titles) => [...titles, PatronTitles.CopatronessOfEurope],
    },

    benedict_of_nursia_abbot: {
      customLocaleKey: 'benedict_of_nursia_abbot_patron_of_europe',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: (titles) => [...titles, PatronTitles.PatronOfEurope],
    },

    bridget_of_sweden_religious: {
      customLocaleKey: 'bridget_of_sweden_religious_copatroness_of_europe',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: (titles) => [...titles, PatronTitles.CopatronessOfEurope],
    },

    teresa_benedicta_of_the_cross_stein_virgin: {
      customLocaleKey: 'teresa_benedicta_of_the_cross_stein_virgin_copatroness_of_europe',
      precedence: Precedences.ProperFeast_PrincipalPatronOfARegion_8c,
      titles: (titles) => [...titles, PatronTitles.CopatronessOfEurope],
    },
  };
}
