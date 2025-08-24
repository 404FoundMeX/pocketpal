import type { MetaRecord } from 'nextra'

const GETTING_STARTED: MetaRecord = {
  purpose: '',
}

const ARCHITECTURE: MetaRecord = {

}

const FEATURES: MetaRecord = {

}

const CONTRIBUTING_GUIDE: MetaRecord = {

}

const API: MetaRecord = {

}

const DEPLOYMENT: MetaRecord = {

}


export default {
  index: {
    type: 'page',
    display: 'hidden'
  },
  docs: {
    type: 'page',
    title: 'Documentation',
    items: {
      "getting-started": { 
        items: GETTING_STARTED,
        title: 'Getting Started',
      },
      "architecture": { 
        items: ARCHITECTURE,
        title: 'Architecture & Design',
      },
      "features": { 
        items: FEATURES,
        title: 'Features & Roadmap',
      },
      "contributing-guide": { 
        items: CONTRIBUTING_GUIDE,
        title: 'Contributing Guide',
      },
      "api": { 
        items: API,
        title: 'API Documentation',
      },
      "deployment": { 
        items: DEPLOYMENT,
        title: 'Deployment & Hosting',
      },
    }
  }
}