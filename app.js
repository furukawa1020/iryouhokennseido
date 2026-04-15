const slides = Array.from(document.querySelectorAll('.slide'));
const toc = document.getElementById('toc');
const slideCounter = document.getElementById('slideCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sourcesContainer = document.getElementById('sources');
const progressFill = document.getElementById('progressFill');

const sources = [
  {
    title: 'European Observatory: Sweden Health System Summary 2024',
    note: '税方式、21地域圏、290自治体、公的支出比率86%、医療費GDP比10.7%などの全体像。',
    url: 'https://eurohealthobservatory.who.int/publications/i/sweden-health-system-summary-2024'
  },
  {
    title: 'Socialstyrelsen: About the Swedish healthcare system',
    note: 'スウェーデン医療の分権構造、公的・民間提供の位置づけ。',
    url: 'https://www.socialstyrelsen.se/en/about-us/healthcare-for-visitors-to-sweden/about-the-swedish-healthcare-system/'
  },
  {
    title: 'Government Offices of Sweden: Medical care',
    note: '医療政策の主管と、平等でアクセス可能な医療という政府の基本方針。',
    url: 'https://www.government.se/government-policy/medical-care/'
  },
  {
    title: 'Government Offices of Sweden: Municipalities and regions',
    note: '地方自治、地域圏と自治体の位置づけ、課税権の根拠。',
    url: 'https://www.government.se/tx/2168'
  },
  {
    title: '1177: Healthcare guarantee',
    note: '受診保証の考え方。当日連絡、3日以内の医学的評価、長期待機時の他機関案内など。',
    url: 'https://www.1177.se/en/Vastra-Gotaland/other-languages/other-languages/regler-och-rattigheter---andra-sprak/vardgaranti-andra-sprak-vgr/'
  },
  {
    title: '1177: High-cost protection for outpatient care',
    note: '外来患者負担の上限1,450 SEK。地域がより低い額を設定できる旨も記載。',
    url: 'https://www.1177.se/Vastra-Gotaland/sa-fungerar-varden/kostnader-och-ersattningar/hogkostnadsskydd-for-oppenvard'
  },
  {
    title: 'TLV: High-cost threshold for medicines',
    note: '処方薬の高額負担保護。2025-07-01から上限3,800 SEK、12か月単位。',
    url: 'https://www.tlv.se/in-english/medicines/what-is-the-high-cost-threshold/how-it-works.html'
  },
  {
    title: 'Försäkringskassan: Dental care subsidy scheme',
    note: '歯科は一般医療と完全同一ではなく、別建ての補助制度要素がある。',
    url: 'https://www.forsakringskassan.se/english/dental-care-subsidy/subsidies-in-the-county-councils-dental-care-subsidy-scheme'
  },
  {
    title: 'European Observatory: Nordic health care systems',
    note: '北欧共通の特徴は税方式、居住ベースの普遍主義、公立病院中心。ただし制度設計は各国でかなり異なる。',
    url: 'https://eurohealthobservatory.who.int/publications/m/nordic-health-care-systems-recent-reforms-and-current-policy-challenges'
  },
  {
    title: 'European Observatory: National authority in Nordic health systems',
    note: '北欧4か国で国レベルへの権限集約が進行。ノルウェーとデンマークが先行し、スウェーデンとフィンランドも追随傾向。',
    url: 'https://eurohealthobservatory.who.int/publications/i/national-authority-in-nordic-health-systems'
  },
  {
    title: 'European Observatory: Sweden principal health reforms',
    note: '2000年代以降の改革は待機時間短縮、プライマリケア強化、高齢者ケア連携、質比較などが柱。',
    url: 'https://eurohealthobservatory.who.int/monitors/health-systems-monitor/countries-hspm/section-detail/sweden-2012/principal-health-reforms/analysis-of-recent-reforms/'
  },
  {
    title: 'European Observatory: Denmark, Norway, Finland health system summaries 2024',
    note: 'デンマーク・ノルウェー・フィンランドとの比較用。中央集権化の度合いと地域再編の差を見るために参照。',
    url: 'https://eurohealthobservatory.who.int/publications'
  }
];

let currentIndex = 0;

function renderSources() {
  sourcesContainer.innerHTML = sources.map((source) => `
    <article>
      <h3>${source.title}</h3>
      <p>${source.note}</p>
      <a href="${source.url}" target="_blank" rel="noreferrer">${source.url}</a>
    </article>
  `).join('');
}

function renderToc() {
  toc.innerHTML = slides.map((slide, index) => `
    <button type="button" class="${index === currentIndex ? 'is-active' : ''}" data-index="${index}">
      ${String(index + 1).padStart(2, '0')} ${slide.dataset.title}
    </button>
  `).join('');

  toc.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => showSlide(Number(button.dataset.index)));
  });
}

function showSlide(index) {
  currentIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('is-active', slideIndex === currentIndex);
  });
  slideCounter.textContent = `${currentIndex + 1} / ${slides.length}`;
  progressFill.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
  renderToc();
}

prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight' || event.key === 'PageDown') {
    showSlide(currentIndex + 1);
  }
  if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
    showSlide(currentIndex - 1);
  }
});

renderSources();
showSlide(0);
