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

    base('Table 1')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            note: record.fields['Note'],
            page: record.fields['ID'],
            title: record.fields['Title'],
            tag: record.fields['Tag'],
            description: record.fields['Description'],
            time: record.fields['Time'],
            cover: record.fields['Cover'],
            text: record.fields['Content'],
            photo: record.fields['Photo'],
            about: record.fields['About']

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
  let { title, tag, description, time, cover, text, note, photo, about} = stroke

  console.log(
    'ok'
  )

  const cover_img = document.querySelector('.cover_img')
  const tag_white = document.querySelector('.Q_tag_white')
  const title_cover_article = document.querySelector('.Q_title_cover_article')
  const des = document.querySelector('.Q_des')
  const time_read = document.querySelector('.Q_time_read')
  const text1 = document.querySelector('.A_content')
  const note_cover = document.querySelector('.Q_note_cover')
  const photo_article = document.querySelector('.Q_photo_article')
  const about_nomi = document.querySelector('.A_about_nomi')


  tag_white.innerHTML = tag
  title_cover_article.innerHTML = title
  des.innerHTML = description
  time_read.innerHTML = time
  text1.innerHTML = text
  note_cover.innerHTML = note
  about_nomi.innerHTML = about
  


  cover_img.style.backgroundImage = `url(${cover})`
  photo_article.style.backgroundImage = `url(${photo})`



//   const contentItemCover = document.createElement('img')
//   contentItemCover.classList.add('A_ContentItemCover')
//   contentItemCover.src = image

//   const contentItemTitle = document.createElement('h3')
//   contentItemTitle.classList.add('A_ContentItemTitle')
//   contentItemTitle.innerText = title

//   const contentItemDescription = document.createElement('div')
//   contentItemDescription.classList.add('W_ContentItemDescription')
//   contentItemDescription.innerHTML = text

//   const contentItem = document.querySelector('.S_ArticleContent')

//   contentItem.appendChild(contentItemCover)
//   contentItem.appendChild(contentItemTitle)
//   contentItem.appendChild(contentItemDescription)
}

let content
document.addEventListener('DOMContentLoaded', () => {
  getArticleContent().then((data) => {
    content = data
    initArticleContent()
  })
})