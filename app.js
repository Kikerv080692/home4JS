

const show = async () => {
  const root = document.querySelector('#root')
  root.classList.add("load")
  const films = await fetch('https://ajax.test-danit.com/api/swapi/films')
  const objFilms = await films.json()
  console.log(objFilms)


  objFilms.map((film) => {
    const filmTag = document.createElement('div')
    filmTag.classList.add = 'film'
    const title = document.createElement('h2')
    title.textContent = `${film.episodeId} ${film.name} `
   const crawl = document.createElement('p')
   crawl.textContent = film.openingCrawl
   const characters = document.createElement('ul')

   filmTag.appendChild(title)
   filmTag.appendChild(characters)
   filmTag.appendChild(crawl)

   root.appendChild(filmTag)
   film.characters.map( async (char) => {
     const chars = await fetch(char)
     const objChars = await chars.json()
     console.log(objChars)
     const item = document.createElement('li')
     item.textContent = objChars.name
     characters.appendChild(item)
   })
  })
  root.classList.remove('load')
}

show()