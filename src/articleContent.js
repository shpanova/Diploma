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
            page: record.fields['ID'],
            title: record.fields['Title'],
            tag: record.fields['Tag'],
            description: record.fields['Description'],
            time: record.fields['Time'],
            cover: record.fields['Cover']
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
  let { title, tag, description, time, cover} = stroke

  console.log(
    'ok'
  )

  const cover_img = document.querySelector('.cover_img')
  const tag_one = document.querySelector('.tag_one')
  const title_cover = document.querySelector('.title_cover')
  const des = document.querySelector('.des')
  const time_read = document.querySelector('.time_read')

  tag_one.innerHTML = tag
  title_cover.innerHTML = title
  des.innerHTML = description
  time_read.innerHTML = time

  cover_img.style.backgroundImage = `url(${cover})`



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