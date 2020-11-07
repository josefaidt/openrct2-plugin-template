import { name as id, displayName as name, version } from './package.json'

function button(text, onClick) {
  const y = 20
  return {
    type: 'button',
    text,
    x: 10,
    y: y,
    width: 50,
    height: 20,
    onClick,
  }
}

export default function action() {
  try {
    park.postMessage({
      type: 'award',
      text: `${name} - ${version} has been called!`,
    })
  } catch (error) {
    console.log(error)
  }
  let window
  window = ui.getWindow(id)
  if (window) {
    window.bringToFront()
  }

  window = ui.openWindow({
    title: id,
    classification: name,
    width: 200,
    height: 80,
    widgets: [
      button('close', function close() {
        window.close()
      }),
    ],
  })
}