const { promises: fs, existsSync: exists } = require('fs')
const path = require('path')
const got = require('got')
const out = path.join(__dirname, '../.support/openrct2.d.ts')
const url = 'https://raw.githubusercontent.com/OpenRCT2/OpenRCT2/develop/distribution/openrct2.d.ts'

;(async () => {
  let response
  try {
    response = await got(url)
  } catch (error) {
    throw new Error(
      `Unable to download OpenRCT2 type definitions, consider downloading manually into \`.support/\`\n\n${url}\n\n`,
      error.response.body
    )
  }

  if (!exists(path.dirname(out))) await fs.mkdir(path.dirname(out))
  if (response.body) await fs.writeFile(out, response.body, 'utf8')
})()
