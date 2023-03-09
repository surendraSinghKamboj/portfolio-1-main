

import {NextStudio} from 'next-sanity/studio'
import {StudioProvider, StudioLayout} from 'sanity'

import config from '../../sanity.config'

export default function StudioPage() {
  return (
    <NextStudio config={config}>
      <StudioProvider config={config}>
      
        
        
        {/* Put components here and you'll have access to the same React hooks as Studio gives you when writing plugins */}
        <StudioLayout />
      </StudioProvider>
    </NextStudio>
  )
}