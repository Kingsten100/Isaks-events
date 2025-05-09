import {blockContentType} from './blockContentType'
import { eventType } from './eventType'
import { heroSection } from './sections/heroSection'
import { eventsSection } from './sections/eventsSection'
import { pageType } from './pageType'
import { contentSection } from './sections/contentSection'
import { titleSection } from './sections/titleSection'
import { textSection } from './sections/textSection'
import { pictureSection } from './sections/pictureSection'

export const schema = {
  types: [
    blockContentType, 
    eventType, 
    heroSection, 
    eventsSection, 
    pageType, 
    contentSection, 
    titleSection,
    textSection,
    pictureSection
  ]
}
