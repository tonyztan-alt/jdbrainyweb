import { IStory } from '../../../redux/state/storyState';
import { WordCategory } from '../../../redux/state/wordState';

import img1 from './0Special_Inventions_1_without_templates.png';

const a1 = require('./audio/SPS_2_1.mp3');
const a2 = require('./audio/SPS_2_2.mp3');
const a3 = require('./audio/SPS_2_3.mp3');
const a4 = require('./audio/SPS_2_4.mp3');
const a5 = require('./audio/SPS_2_5.mp3');
const a6 = require('./audio/SPS_2_6.mp3');
const a7 = require('./audio/SPS_2_7.mp3');
const a8 = require('./audio/SPS_2_8.mp3');
const a9 = require('./audio/SPS_2_9.mp3');
const a10 = require('./audio/SPS_2_10.mp3');
const a11 = require('./audio/SPS_2_11.mp3');
const a12 = require('./audio/SPS_2_12.mp3');
const a13 = require('./audio/SPS_2_13.mp3');
const a14 = require('./audio/SPS_2_14.mp3');
const a15 = require('./audio/SPS_2_15.mp3');
const a16 = require('./audio/SPS_2_16.mp3');
const a17 = require('./audio/SPS_2_17.mp3');

const story: IStory = {
  title: 'The Special Invention',
  id: 3,
  sections: [
    {
      text:
        `“Get dressed and come to breakfast right now!”  Mom called sweetly.  
        “I will,”`,
      audio: a1,
      id: 1,
      wordCategories: [
        WordCategory.FRIENDS,
      ],
      part: 1,
    },
    {
      text:
        ` said.
        “You said that twice already!  You’ll make me late for work.”
        “Okay!”`,
      audio: a2,
      id: 1,
      wordCategories: [
        WordCategory.FRIENDS,
      ],
      part: 1,
    },
    {
      text:
        ` said.	
        Great ideas kept`,
      audio: a3,
      id: 1,
      wordCategories: [
        WordCategory.FRIENDS,
      ],
      part: 1,
    },
    {
      text:
        ` thinking till late at night, so every morning it was hard to wake up in time for school.`,
      audio: a4,
      id: 1,
      wordCategories: [
        WordCategory.FRIENDS,
      ],
      part: 1,
    },
    {
      text:
        ` liked inventing things, and they always worked really well---while`,
      audio: a5,
      id: 1,
      wordCategories: [
        WordCategory.FRIENDS,
      ],
      part: 1,
    },
    {
      text:
        ` was planning and imagining them---and sometimes almost worked after`,
      audio: a6,
      id: 1,
      wordCategories: [
        WordCategory.FRIENDS,
      ],
      part: 1,
    },
    {
      text:
        ` actually made them. A funnel to toss toys in like the`,
      audio: a7,
      wordCategories: [
        WordCategory.TOYS,
      ],
      part: 1,
      imgPositions: [
        {
          top: 61,
          left: 56,
          width: 8,
          part: 1,
        }
      ],
    },
    {
      text:
        ` and the`,
      audio: a8,
      wordCategories: [
        WordCategory.TOYS,
      ],
      part: 1,
      imgPositions: [
        {
          top: 61,
          left: 65,
          width: 6,
          part: 1,
        }
      ],
    },
    {
      text:
        ` so they’d slide into the toy box to save time cleaning up. A squirt-gun scraper to scrape dog poop off shoes and
        wash them at the same time. A special second string so a kite could drop a little
        parachute holding a toy`,
      audio: a9,
      wordCategories: [
        WordCategory.PRETEND,
        WordCategory.ANIMALS,
        WordCategory.BIRDS,
        WordCategory.THINGS,
        WordCategory.WATER_ANIMALS,
        WordCategory.TOYS,
        WordCategory.TOOLS,
        WordCategory.VEHICLES,
      ],
      part: 1,
      imgPositions: [
        {
          top: 85,
          left: 63,
          width: 8,
          part: 1,
        }
      ],
    },
    {
      text:
        `. Interesting inventions. Helpful inventions!
        Wonderful inventions!!`,
      audio: a10,
      id: 1,
      wordCategories: [
        WordCategory.FRIENDS,
      ],
      part: 1,
    },
    {
      text:
        ` needed a special stay-up-after-wake-up-in-the-morning invention.`,
      audio: a11,
      id: 1,
      wordCategories: [
        WordCategory.FRIENDS,
      ],
      part: 1,
    },
    {
      text:
        ` thought about the`,
      audio: a12,
      wordCategories: [
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF,
        WordCategory.TOYS,
        WordCategory.TOOLS,
      ],
      part: 1,
    },
    {
      text:
        ` part all through breakfast, and
        cogitated about the`,
      audio: a13,
      wordCategories: [
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF,
        WordCategory.TOYS,
        WordCategory.TOOLS,
      ],
      part: 1,
    },
    {
      text:
        ` section on the way to school, and devised
        the`,
      audio: a14,
      wordCategories: [
        WordCategory.VEHICLES,
      ],
      part: 1,
    },
    {
      text:
        ` unit at school, and imagined the`,
      audio: a15,
      wordCategories: [
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF,
        WordCategory.TOYS,
        WordCategory.TOOLS,
      ],
      part: 1,
    },
    {
      text:
        ` segment on the way home, and by after school snack time knew the`,
      audio: a16,
      wordCategories: [
        WordCategory.ANIMALS,
        WordCategory.WATER_ANIMALS,
        WordCategory.BIRDS,
        WordCategory.THINGS,
        WordCategory.HOUSE_STUFF,
        WordCategory.TOYS,
        WordCategory.TOOLS,
      ],
      part: 1,
    },
    {
      text:
        ` made the final step and then knew exactly how to create it!
        Every morning on her way to the kitchen Mom opened the bedroom door to
        politely say, “Wake up!”`,
      audio: a17,
      id: 1,
      wordCategories: [
        WordCategory.FRIENDS,
      ],
      part: 1,
    },
  ],
  parts: [
    {
      backgroundImg: img1,
      id: 1,
    }
  ]
}

export default story;