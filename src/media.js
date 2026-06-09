
import './index.css'

import Airtable from 'airtable';
import arrowSvg from './images/Arrow_button.svg';


const token =
  'patMqZk2Akn5UHWfm.48f5f0966f6908ad92e8c86f092d706c79770163860173f2ebc99e60bc7aa57b'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})
var base = Airtable.base('appwl7ytcI8w3EdWC')


// Глобальное состояние приложения
let content = []; 
let filteredContent = []; 
let currentIndex = 0; 
const cardsPerPage = 12; 


function getArticleContent() {
  return new Promise((resolve, reject) => {
    const contentData = [];

    base('Table 2')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          const coverField = record.fields['CoverMedia'];
          let coverUrl = '';

          if (coverField) {
            if (Array.isArray(coverField) && coverField[0] && coverField[0].url) {
              coverUrl = coverField[0].url;
            } else if (typeof coverField === 'string') {
              coverUrl = coverField;
            }
          }

          contentData.push({
            id: record.id,
            title: record.fields['NameMedia'] || 'Без названия',
            tags: record.fields['TagsMedia'] || '',
            time: record.fields['TimeMedia'] || '',
            note: record.fields['NoteMedia'] || '',
            cover: coverUrl, 
            cataloge: record.fields['CatalogeMedia'] || '' 
          });
        });

        resolve(contentData);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function renderCards() {
  const nextCards = filteredContent.slice(currentIndex, currentIndex + cardsPerPage);
  
  nextCards.forEach((stroke) => {
    createArticleContent(stroke);
  });

  currentIndex += cardsPerPage;

  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.style.display = currentIndex >= filteredContent.length ? 'none' : 'inline-block';
  }
}

function initArticleContent() {
  filteredContent = [...content];
  currentIndex = 0;
  
  const container = document.querySelector('.C_media_cards');
  if (container) container.innerHTML = '';

  renderCards();
  setupFilters(); 
}

function createArticleContent(stroke) {
  const { title, tags, time, cover, cataloge } = stroke;

  const card = document.createElement('a');
  card.classList.add('M_card_cataloge_media');
  
  card.style.setProperty('cursor', 'pointer', 'important');
  
  if (cataloge && typeof cataloge === 'string' && cataloge.trim() !== '') {
    card.setAttribute('href', cataloge);
  } else {
    card.setAttribute('href', '#');
  }

  const tagsString = Array.isArray(tags) ? tags.join(', ') : tags;
  card.setAttribute('data-card-tags', (tagsString || '').toLowerCase());

  const c_tag_title_time = document.createElement('div');
  c_tag_title_time.classList.add('C_tag_title_time');

  const a_tag_time = document.createElement('div');
  a_tag_time.classList.add('A_tag_time');

  const q_tag_media = document.createElement('p');
  q_tag_media.classList.add('Q_tag_media');
  q_tag_media.textContent = tagsString ? tagsString.charAt(0).toUpperCase() + tagsString.slice(1) : '';

  const q_time_read = document.createElement('p');
  q_time_read.classList.add('Q_time_read');
  q_time_read.textContent = time; 

  const q_title_media = document.createElement('h5');
  q_title_media.classList.add('Q_title_media');
  q_title_media.textContent = title;

  a_tag_time.appendChild(q_tag_media);
  a_tag_time.appendChild(q_time_read);
  c_tag_title_time.appendChild(a_tag_time);
  c_tag_title_time.appendChild(q_title_media);

  const a_img_button_cataloge = document.createElement('div');
  a_img_button_cataloge.classList.add('A_img_button_cataloge');

  const q_cover_media = document.createElement('div');
  q_cover_media.classList.add('Q_cover_media');
  
  if (cover && typeof cover === 'string' && cover.trim() !== '' && cover !== 'undefined') {
    q_cover_media.style.backgroundImage = `url('${cover}')`;
  } else {
    q_cover_media.style.backgroundColor = '#e0e0e0'; 
  }

  const a_button_arrow_media = document.createElement('div');
  a_button_arrow_media.classList.add('A_button_arrow_media');
  
  a_button_arrow_media.innerHTML = `
    <div class="A_button_arrow">
      <img class="Q_arrow_button" src="${arrowSvg}" alt="Стрелка">
    </div>
  `;

  a_img_button_cataloge.appendChild(q_cover_media);
  a_img_button_cataloge.appendChild(a_button_arrow_media);

  card.appendChild(c_tag_title_time);
  card.appendChild(a_img_button_cataloge);

  const allChildren = card.querySelectorAll('*');
  allChildren.forEach(child => {
    child.style.setProperty('pointer-events', 'none', 'important');
  });

  const container = document.querySelector('.C_media_cards');
  if (container) {
    container.appendChild(card);
  }
}

function setupFilters() {
  const tags = document.querySelectorAll('.C_tag_all_media .A_tag_media');

  tags.forEach(tagElement => {
    tagElement.addEventListener('click', () => {
      const activeTag = document.querySelector('.C_tag_all_media .A_tag_media.active');
      if (activeTag) {
        activeTag.classList.remove('active');
      }
      tagElement.classList.add('active');

      const selectedTag = tagElement.getAttribute('data-tag').toLowerCase();

      if (selectedTag === 'все') {
        filteredContent = [...content];
      } else {
        filteredContent = content.filter(item => {
          const itemTags = item.tags ? (Array.isArray(item.tags) ? item.tags.join(', ') : item.tags).toLowerCase() : '';
          return itemTags.includes(selectedTag);
        });
      }

      currentIndex = 0;
      const container = document.querySelector('.C_media_cards');
      if (container) container.innerHTML = '';
      
      filteredContent.forEach(item => {
        if (!item.cover || typeof item.cover !== 'string' || item.cover.trim() === '') {
          item.cover = ''; 
        }
        if (!item.cataloge || typeof item.cataloge !== 'string' || item.cataloge.trim() === '') {
          item.cataloge = '#'; 
        }
      });

      renderCards();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.style.setProperty('cursor', 'pointer', 'important');
    loadMoreBtn.addEventListener('click', renderCards);
  }

  getArticleContent()
    .then((data) => {
      content = data;
      initArticleContent();
    })
    .catch((error) => {
      console.error("Ошибка при получении данных из Airtable:", error);
    });
});
