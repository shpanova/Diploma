import "./index.css";

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
            cover: record.fields['CoverMedia'],

          })
        })

        resolve(content)
      })

  })
}

function initArticleContent() {
  const href = window.location.href.split('/').pop().split('.')[0]

  content.forEach((stroke) => {
    if (stroke.page === href) {
      createArticleContent(stroke)
    }
  })
}

function createArticleContent(stroke) {
  let { title, tags, time, note, cover } = stroke

  console.log(
    'da'
  )

  const cover_media = document.querySelector('.Q_cover_media')
  const tag_media = document.querySelector('.Q_tag_media')
  const note_cover = document.querySelector('.Q_note_cover')
  const time_read = document.querySelector('.Q_time_read')
  const title_media = document.querySelector('.Q_title_media')


  tag_media.innerHTML = tags
  note_cover.innerHTML = note
  time_read.innerHTML = time
  title_media.innerHTML = title


  cover_media.style.backgroundImage = `url(${cover})`

}

let content
document.addEventListener('DOMContentLoaded', () => {
  getArticleContent().then((data) => {
    content = data
    initArticleContent()
  })
})