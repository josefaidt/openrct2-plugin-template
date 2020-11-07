// Expose the OpenRCT2 to Visual Studio Code's Intellisense
/// <reference path=".support/openrct2.d.ts" />

import {
  name as id,
  displayName as name,
  author,
  version,
  license as licence,
} from './package.json'
import action from './action'

function main() {
  if (typeof ui !== 'undefined') {
    ui.registerMenuItem(name, action)
  } else {
    console.log('OpenRCT2 is running in headless mode, UI not registered')
  }

  try {
    park.postMessage({
      type: 'award',
      text: `${name} - ${version} has been initialized!`,
    })
  } catch (error) {
    console.log(error)
  }
}

registerPlugin({
  name,
  version,
  authors: [author],
  type: 'local',
  licence,
  main,
})
