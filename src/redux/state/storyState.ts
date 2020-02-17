import { IWord, WordCategory } from './wordState';

import s1 from '../../static/stories/costumeStory/costume';
import s2 from '../../static/stories/alienStory/alien';
import s3 from '../../static/stories/inventionStory/invention';

export interface IStory {
  // text: string | string[];
  img: any;
  title: string;
  id: number;
  // words: IWord[];
  // audio: any[];
  currSectionIdx: number;
  sections: ISection[];
}

export interface ISection {
  text: string;
  audio?: any;
  word?: IWord;
  wordCategories: WordCategory[];
}

export const initialStoryState: IStoryState = {
  stories: [
    s1,
    s2,
    s3,
  ],
  currStory: null
}

export default interface IStoryState {
  stories: IStory[];
  currStory: IStory | null;
}
