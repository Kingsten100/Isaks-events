import React from 'react'
import Hero from './hero'
import Events from './events'
import { Content } from './content'
import  Title  from './title'
import Text from './text'
import Picture from './picture'

export const Sections = ({ sections }) => {




  return (
    <div>
        {
            sections && sections.map(section => {
                switch(section._type){
                    case 'heroSection':
                        return <Hero key={section._key} headline={section.headline} image={section.image} />
                    case 'eventsSection':
                        return <Events key={section._key} title={section.title}/>
                    case 'contentSection':
                        return <Content key={section._key} headline={section.headline} image={section.image} text={section.text}/>
                    case 'titleSection':
                        return <Title key={section._key} headline={section.headline}/>
                    case 'textSection':
                        return <Text key={section._key} text={section.text}/>
                    case 'pictureSection':
                        return <Picture key={section._key} picture={section.picture}/>
                    default: 
                    return null
                }
            })
        }
    </div>
  )
}
