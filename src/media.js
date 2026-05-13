
import './index.css'

import Airtable from 'airtable'

const token =
  'patMqZk2Akn5UHWfm.48f5f0966f6908ad92e8c86f092d706c79770163860173f2ebc99e60bc7aa57b'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})
var base = Airtable.base('appwl7ytcI8w3EdWC')

function getArticleContent() {
  return new Promise((resolve, reject) => {
    const content = []

    base('Table 2')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            title: record.fields['NameMedia'],
            tags: record.fields['TagsMedia'],
            time: record.fields['TimeMedia'],
            note: record.fields['NoteMedia'],
            cover: record.fields['CoverMedia']
          })
        })

        resolve(content)
      })
  })
}

function initArticleContent() {
  const href = window.location.href.split('/').pop().split('.')[0]

  content.forEach((stroke) => {
    createArticleContent(stroke)
    // if (stroke.page === href) {
    //   createArticleContent(stroke)
    // }
  })
}

function createArticleContent(stroke) {
  let { title, tags, time, note, cover } = stroke

  console.log('da')

  const cover_media = document.createElement('div')
  const tag_media = document.createElement('div')
  const note_cover = document.createElement('div')
  const time_read = document.createElement('div')
  const title_media = document.createElement('div')

  cover_media.classList.add('A_cover_media')
  tag_media.classList.add('A_tag_media')
  note_cover.classList.add('A_note_cover')
  time_read.classList.add('A_time_read')
  title_media.classList.add('A_title_media')

  tag_media.innerHTML = tags
  note_cover.innerHTML = note
  time_read.innerHTML = time
  title_media.innerHTML = title

  cover_media.style.backgroundImage = `url(${cover})`

  const card = document.createElement('div')
  card.classList.add('M_Card')
  card.appendChild(cover_media)
  card.appendChild(tag_media)
  card.appendChild(note_cover)
  card.appendChild(time_read)
  card.appendChild(title_media)

  document.querySelector('.C_media_cards').appendChild(card)
}

let content
document.addEventListener('DOMContentLoaded', () => {
  getArticleContent().then((data) => {
    content = data
    initArticleContent()
  })
})

// import Airtable from 'airtable'

// const token =
//   'patMqZk2Akn5UHWfm.48f5f0966f6908ad92e8c86f092d706c79770163860173f2ebc99e60bc7aa57b'

// Airtable.configure({
//   endpointUrl: 'https://api.airtable.com',
//   apiKey: token
// })
// var base = Airtable.base('appwl7ytcI8w3EdWC')

// function getArticleContent() {
//   return new Promise((resolve, reject) => {
//     const content = []

//     base('Table 2')
//       .select({ maxRecords: 100 })
//       .firstPage()
//       .then((result) => {
//         result.forEach((record) => {
//           content.push({
//             id: record.id,
//             title: record.fields['NameMedia'],
//             tags: record.fields['TagsMedia'],
//             time: record.fields['TimeMedia'],
//             note: record.fields['NoteMedia'],
//             cover: record.fields['CoverMedia'],

//           })
//         })

//         resolve(content)
//       })

//   })
// }

// function initArticleContent() {
//   const href = window.location.href.split('/').pop().split('.')[0]

//   content.forEach((stroke) => {
//     createArticleContent(stroke)
//     if (stroke.page === href) {
//       createArticleContent(stroke)
//     }
//   })
// }

//  console.log(
//     'da'
//   )

// function createArticleContent(stroke) {
//   let { title, tags, time, note, cover } = stroke

 

//   const cover_media = document.querySelector('.Q_cover_media')
//   const tag_media = document.querySelector('.Q_tag_media')
//   const note_cover = document.querySelector('.Q_note_cover')
//   const time_read = document.querySelector('.Q_time_read')
//   const title_media = document.querySelector('.Q_title_media')


//   tag_media.innerHTML = tags
//   note_cover.innerHTML = note
//   time_read.innerHTML = time
//   title_media.innerHTML = title


//   cover_media.style.backgroundImage = `url(${cover})`

// }

// let content
// document.addEventListener('DOMContentLoaded', () => {
//   getArticleContent().then((data) => {
//     content = data
//     initArticleContent()
//   })
// })