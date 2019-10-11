
const flipURI = 'https://coin-flip1.p.rapidapi.com/headstails'

// fetch information
const getFlip = async () => {
  try {
    const response = await fetch(flipURI)
    const obj = await response.json()
    console.log(`FETCHED. Response JSON ${obj}`)
    const flip = obj.value.flip || 'Nope.'
    return flip
  } catch (error) { console.error(error) }
}

// interact with DOM
const updateWithFlip = async (event) => {
  try {
    document.querySelector('#result2').innerHTML = ''
    const answer = await getFlip()
    document.querySelector('#result2').innerHTML = answer
  } catch (error) { console.error(error) }
}

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'getFlipButton') { updateWithFlip(event) }
})