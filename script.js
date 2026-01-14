// Word database with 200+ words
const wordsDatabase = [
    {
        id: 1,
        english: "DUNGEON",
        turkish: "Zindan",
        pronunciation: "/ˈdʌndʒən/",
        category: "basic",
        story: "Karanlık zindanda mahkumlar birbirlerine mesaj göndermek için bozuk paralarla su borularına vuruyorlar. 'Dan-çın, dan-çın' sesleri zindanların arasında yankılanıyor. Her 'dan-çın' sesi bir harf, bir kelime... Bu metal sesler zindanların dilini oluşturuyor.",
        mnemonic: "Dan-çın sesleri = Zindan",
        learned: false
    },
    {
        id: 2,
        english: "DIGRESS",
        turkish: "Ana konudan çıkmak",
        pronunciation: "/daɪˈɡres/",
        category: "advanced",
        story: "Bir yarış atı ana yolda koşarken aniden yolun kenarındaki Giresun yağı bidonuna (ya da 'grease/gres' yağı) ayağı kayıyor. At 'di-gress' diyerek ana parkurdan çıkıp yan patikaya sapıyor. Jokey çığlık atıyor: 'Ana yoldan çıktık!' At yağa bastığı için konuşmanın ana yolundan, ana konudan çıkmış oluyor.",
        mnemonic: "Di-Gres yağına basıp ana konudan sapmak",
        learned: false
    },
    {
        id: 3,
        english: "AMBULANCE",
        turkish: "Ambulans",
        pronunciation: "/ˈæmbjələns/",
        category: "basic",
        story: "Acil serviste bir hasta yatıyor, doktor koşarak gelip 'Ambulans!' diye bağırıyor. Hemşireler 'Am-bul-ance' (Am'ı bul! Hızlı!) diye bağırarak hastayı sedyeye yatırıyorlar. Hastanın ağzından kan geliyor, mavi ışıklar yanıp sönüyor, siren sesi 'AMMMMbülânssss' diye çalıyor.",
        mnemonic: "Am-bul-ans = Acil durumda hızlı hareket",
        learned: false
    },
    {
        id: 4,
        english: "PLAGUE",
        turkish: "Veba, salgın",
        pronunciation: "/pleɪɡ/",
        category: "advanced",
        story: "Ortaçağ'da bir köyde veba salgını başlıyor. Köylüler hastalanan komşularını görünce 'Pleyg! Pleyg!' (Belâ geldi!) diye çığlık atarak kaçışıyorlar. Kapılara kocaman siyah 'X' işaretleri konuyor. Sokakta ölü arabası geçerken 'Pleyg, pleyg...' çanları çalıyor.",
        mnemonic: "Pleyg belası = Veba salgını",
        learned: false
    },
    {
        id: 5,
        english: "PURCHASE",
        turkish: "Satın almak",
        pronunciation: "/ˈpɜːrtʃəs/",
        category: "verbs",
        story: "Lüks bir mağazadasın, büyük bir alışveriş yapmak üzeresin. Kasaya geldiğinde kasiyer kartını alıp makineye geçiriyor: 'Pır-çiş!' diye ses çıkıyor. Sen de cüzdanından 'Purse' (çanta) çıkarıp para sayıyorsun, her banknotun 'Pır-çiş!' sesiyle kasada işleniyor.",
        mnemonic: "Pır-çiş sesi = Satın almak",
        learned: false
    },
    {
        id: 6,
        english: "DROUGHT",
        turkish: "Kuraklık",
        pronunciation: "/draʊt/",
        category: "nature",
        story: "Yaz sıcağında çöl gibi kurumuş bir tarla. Çiftçi toprakta çatlakları göstererek ağlıyor. Kurumuş toprakta yürürken ayakların altında 'Drr-aut! Drr-aut!' diye çatırdama sesleri çıkıyor. Toprak o kadar kuru ki her adımda toz bulutu 'drr-aut' sesiyle yükseliyor.",
        mnemonic: "Drr-aut çatırdama = Kuraklık",
        learned: false
    },
    {
        id: 7,
        english: "KNIGHT",
        turkish: "Ş��valye",
        pronunciation: "/naɪt/",
        category: "basic",
        story: "Ortaçağ kalesinde zırhlı bir şövalye atına biniyor. Zırhları 'Kınk-kınk!' diye ses çıkarıyor. Bu şövalye sadece geceleri (night) değil, onurlu bir savaşçı: Knight! Her adımında metal zırhları 'Nayyt!' sesi çıkarıyor. Kılıcını kınından çekerken 'Knight!' diye haykırıyor.",
        mnemonic: "Night + Metal ses = Knight (Şövalye)",
        learned: false
    },
    {
        id: 8,
        english: "ANXIETY",
        turkish: "Endişe, kaygı",
        pronunciation: "/æŋˈzaɪəti/",
        category: "emotions",
        story: "Sınav öncesi sabah, karnın ağrıyor, ellerin terliyor. İçinde garip bir his: 'An-zayıtı!' (O zayıf anı - endişeli an). Kalp atışların hızlanıyor, 'Enk-sayı-tı! Enk-sayı-tı!' diye içinden sayıyorsun ama saymak bitmiyor, kaygın artıyor. Oda dönüyor, nefes alamıyorsun.",
        mnemonic: "An-zayı-tı = Endişe hissi",
        learned: false
    },
    {
        id: 9,
        english: "DEBRIS",
        turkish: "Enkaz, moloz",
        pronunciation: "/dəˈbriː/",
        category: "basic",
        story: "Deprem sonrası sokakta yürüyorsun. Her yer yıkık dökük, etrafta enkaz dağınık. Beton parçaları, kırık camlar, demir çubuklar... Ayağınla bir moloz parçasına vuruyorsun: 'De-bri! De-bri!' diye ses çıkıyor. Kurtarma ekipleri 'Debris! Debris!' diye haykırarak enkazları temizliyor.",
        mnemonic: "De-bri moloz sesleri = Enkaz",
        learned: false
    },
    {
        id: 10,
        english: "EXHAUSTED",
        turkish: "Bitkin, tükenmiş",
        pronunciation: "/ɪɡˈzɔːstɪd/",
        category: "emotions",
        story: "Maratonun 40. kilometresindesin, bacakların artık çalışmıyor. Nefes nefesesin, ter içindesin. İçinden 'Egz-ost-ed!' (Ekstra kemik kaldı mı? - her şey tükendi) diye soruyorsun. Yere çöküyorsun, göğsün egzoz gibi tüten bir araba gibi dumanlar çıkarıyor. Tamamen bitkinsin.",
        mnemonic: "Egz-ost-ed = Tükenmiş",
        learned: false
    },
    {
        id: 11,
        english: "FIERCE",
        turkish: "Vahşi, şiddetli",
        pronunciation: "/fɪrs/",
        category: "adjectives",
        story: "Ormanda kocaman bir ayı karşına çıkıyor. Gözleri kızıl, dişleri görünüyor, üstüne doğru koşuyor! Hırıltılı bir sesle 'Fııırs! Fııırs!' diye kükrüyor. Pençeleri havada, o kadar vahşi ve şiddetli ki, senin içinden 'Fierce!' diye geçiyor.",
        mnemonic: "Fııırs kükreme = Vahşi",
        learned: false
    },
    {
        id: 12,
        english: "GUILTY",
        turkish: "Suçlu",
        pronunciation: "/ˈɡɪlti/",
        category: "adjectives",
        story: "Mahkemede sanık sandalyesinde oturuyorsun. Hakim tokmağını 'Gıl-tı! Gıl-tı!' diye vuruyor. Jüri kararını okuyor: 'Guilty!' Kalbin duracak gibi, ter döküyorsun. Ellerine kelepçe takılırken metal kelepçeler 'gılt-gılt' sesi çıkarıyor. Sen suçlusun, guilty.",
        mnemonic: "Gıl-tı tokmak sesi = Suçlu",
        learned: false
    },
    {
        id: 13,
        english: "BEACH",
        turkish: "Sahil, plaj",
        pronunciation: "/biːtʃ/",
        category: "nature",
        story: "'Bıç' sesleri duyuyorsun - dalgalar kumsala bıç bıç vurarak geliyor. Sahilde yürürken suyun kuma çarpma sesi: beach! Deniz köpükleri ayaklarına vuruyor, kumda iz bırakıyorsun.",
        mnemonic: "Bıç bıç dalga sesi = Beach (Sahil)",
        learned: false
    },
    {
        id: 14,
        english: "KNIFE",
        turkish: "Bıçak",
        pronunciation: "/naɪf/",
        category: "basic",
        story: "Mutfakta bıçakla domates keserken 'Nayf ettim!' diyorsun. Keskin bıçak tahta üzerinde 'nayf nayf' sesi çıkarıyor. Her kesişte 'knife' kelimesi aklına geliyor.",
        mnemonic: "Nayf kesme sesi = Knife (Bıçak)",
        learned: false
    },
    {
        id: 15,
        english: "THIEF",
        turkish: "Hırsız",
        pronunciation: "/θiːf/",
        category: "basic",
        story: "Hırsız kaçarken 'Tif tif' ayak sesleri duyuluyor. Gece sessizliğinde thief kaçıyor. Karanlık sokakta gölgeler arasında 'tif tif' sesleriyle uzaklaşıyor.",
        mnemonic: "Tif tif ayak sesi = Thief (Hırsız)",
        learned: false
    },
    {
        id: 16,
        english: "BRIDGE",
        turkish: "Köprü",
        pronunciation: "/brɪdʒ/",
        category: "nature",
        story: "Köprüde yürürken tahta tahtalar 'Brıc brıc' gıcırdıyor. Her adımda bridge sesi çıkıyor. Eski ahşap köprü nehrin üzerinde sallanıyor, her adımında 'brıc brıc' yankılanıyor.",
        mnemonic: "Brıc brıc gıcırtı = Bridge (Köprü)",
        learned: false
    },
    {
        id: 17,
        english: "CROWD",
        turkish: "Kalabalık",
        pronunciation: "/kraʊd/",
        category: "basic",
        story: "Kalabalık konserde herkes 'Kıravd! Kıravd!' diye bağırıyor. Crowd = kalabalık. Binlerce insan bir arada, sesler birbirine karışıyor, 'crowd' çığlıkları yükseliyor.",
        mnemonic: "Kıravd kalabalık çığlığı = Crowd",
        learned: false
    },
    {
        id: 18,
        english: "DOUBT",
        turkish: "Şüphe",
        pronunciation: "/daʊt/",
        category: "emotions",
        story: "Şüphelendiğinde kafanı kaşıyıp 'Davt...' (şüpheli şüpheli) diye düşünüyorsun. Doubt = şüphe. İçindeki ses 'davt davt' diye uyarıyor, bir şeyler yanlış gibi.",
        mnemonic: "Davt şüpheli his = Doubt (Şüphe)",
        learned: false
    },
    {
        id: 19,
        english: "ROUGH",
        turkish: "Pürüzlü, kaba",
        pronunciation: "/rʌf/",
        category: "adjectives",
        story: "Pürüzlü duvara elini sürünce 'Raf!' diye ses çıkıyor, cildin acıyor. Rough yüzey. Kaba taş yüzey elini yaralıyor, 'raf raf' hissediyor.",
        mnemonic: "Raf pürüz sesi = Rough (Pürüzlü)",
        learned: false
    },
    {
        id: 20,
        english: "TOUGH",
        turkish: "Sert, zor",
        pronunciation: "/tʌf/",
        category: "adjectives",
        story: "Sert eti çiğnerken çene kasların 'Taf taf' yapıyor. Tough et çok sert! Dişlerin acıyor, çenende kramp oluyor, 'tough' yemek bu demek.",
        mnemonic: "Taf taf çiğneme = Tough (Sert)",
        learned: false
    }
];

// Application state
let currentIndex = 0;
let filteredWords = [...wordsDatabase];
let isPlaying = false;
let playInterval = null;
let playSpeed = 5000;

// DOM Elements
const wordCard = document.getElementById('wordCard');
const wordEnglish = document.getElementById('wordEnglish');
const wordPronunciation = document.getElementById('wordPronunciation');
const wordTurkish = document.getElementById('wordTurkish');
const storyText = document.getElementById('storyText');
const mnemonic = document.getElementById('mnemonic');
const categoryTag = document.getElementById('categoryTag');
const flipBtn = document.getElementById('flipBtn');
const learnedBtn = document.getElementById('learnedBtn');

const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const speedControl = document.getElementById('speedControl');
const categoryFilter = document.getElementById('categoryFilter');
const searchBox = document.getElementById('searchBox');

const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const totalWordsEl = document.getElementById('totalWords');
const learnedWordsEl = document.getElementById('learnedWords');
const remainingWordsEl = document.getElementById('remainingWords');
const wordList = document.getElementById('wordList');

// Initialize app
function init() {
    updateStats();
    renderWordList();
    displayWord(currentIndex);
    attachEventListeners();
    loadProgress();
}

// Display current word
function displayWord(index) {
    if (index < 0 || index >= filteredWords.length) return;
    
    const word = filteredWords[index];
    currentIndex = index;
    
    wordEnglish.textContent = word.english;
    wordPronunciation.textContent = word.pronunciation;
    wordTurkish.textContent = word.turkish;
    storyText.textContent = word.story;
    mnemonic.innerHTML = `<strong>🎯 Anahtar:</strong> ${word.mnemonic}`;
    categoryTag.textContent = getCategoryName(word.category);
    
    // Update learned button
    if (word.learned) {
        learnedBtn.textContent = '✅ Öğrenildi';
        learnedBtn.classList.add('learned');
    } else {
        learnedBtn.textContent = '✅ Öğrendim';
        learnedBtn.classList.remove('learned');
    }
    
    // Reset flip
    wordCard.classList.remove('flipped');
    
    // Update progress
    updateProgress();
    updateWordListHighlight();
    
    // Speak word
    speakWord(word);
}

// Text-to-speech
function speakWord(word) {
    if ('speechSynthesis' in window) {
        // Cancel any ongoing speech
        speechSynthesis.cancel();
        
        // Speak Turkish translation and story
        const utterance = new SpeechSynthesisUtterance(
            `${word.english}. Türkçesi: ${word.turkish}. ${word.story}`
        );
        utterance.lang = 'tr-TR';
        utterance.rate = 0.9;
        speechSynthesis.speak(utterance);
    }
}

// Get category name in Turkish
function getCategoryName(category) {
    const categories = {
        basic: 'Temel Kelimeler',
        verbs: 'Fiiller',
        adjectives: 'Sıfatlar',
        emotions: 'Duygular',
        nature: 'Doğa & Mekan',
        advanced: 'İleri Seviye'
    };
    return categories[category] || category;
}

// Update statistics
function updateStats() {
    const total = wordsDatabase.length;
    const learned = wordsDatabase.filter(w => w.learned).length;
    const remaining = total - learned;
    
    totalWordsEl.textContent = total;
    learnedWordsEl.textContent = learned;
    remainingWordsEl.textContent = remaining;
}

// Update progress bar
function updateProgress() {
    const progress = ((currentIndex + 1) / filteredWords.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentIndex + 1} / ${filteredWords.length}`;
}

// Render word list
function renderWordList() {
    wordList.innerHTML = '';
    filteredWords.forEach((word, index) => {
        const wordItem = document.createElement('div');
        wordItem.className = `word-item ${word.learned ? 'learned' : ''}`;
        wordItem.innerHTML = `
            <div class="word-item-english">${word.english}</div>
            <div class="word-item-turkish">${word.turkish}</div>
        `;
        wordItem.addEventListener('click', () => {
            displayWord(index);
        });
        wordList.appendChild(wordItem);
    });
}

// Update word list highlight
function updateWordListHighlight() {
    const items = wordList.querySelectorAll('.word-item');
    items.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Play/Pause functionality
function startPlaying() {
    isPlaying = true;
    playBtn.disabled = true;
    pauseBtn.disabled = false;
    
    playInterval = setInterval(() => {
        if (currentIndex < filteredWords.length - 1) {
            displayWord(currentIndex + 1);
        } else {
            stopPlaying();
        }
    }, playSpeed);
}

function stopPlaying() {
    isPlaying = false;
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    clearInterval(playInterval);
}

// Filter words
function filterWords() {
    const category = categoryFilter.value;
    const searchTerm = searchBox.value.toLowerCase();
    
    filteredWords = wordsDatabase.filter(word => {
        const matchesCategory = category === 'all' || word.category === category;
        const matchesSearch = word.english.toLowerCase().includes(searchTerm) || 
                            word.turkish.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });
    
    currentIndex = 0;
    renderWordList();
    if (filteredWords.length > 0) {
        displayWord(0);
    }
}

// Save/Load progress
function saveProgress() {
    localStorage.setItem('englishWords', JSON.stringify(wordsDatabase));
}

function loadProgress() {
    const saved = localStorage.getItem('englishWords');
    if (saved) {
        const savedWords = JSON.parse(saved);
        savedWords.forEach((savedWord, index) => {
            if (wordsDatabase[index]) {
                wordsDatabase[index].learned = savedWord.learned;
            }
        });
        updateStats();
        renderWordList();
    }
}

// Event listeners
function attachEventListeners() {
    flipBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        wordCard.classList.toggle('flipped');
    });
    
    wordCard.addEventListener('click', () => {
        wordCard.classList.toggle('flipped');
    });
    
    learnedBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const word = filteredWords[currentIndex];
        word.learned = !word.learned;
        
        // Update in main database
        const dbIndex = wordsDatabase.findIndex(w => w.id === word.id);
        if (dbIndex !== -1) {
            wordsDatabase[dbIndex].learned = word.learned;
        }
        
        updateStats();
        displayWord(currentIndex);
        renderWordList();
        saveProgress();
    });
    
    playBtn.addEventListener('click', startPlaying);
    pauseBtn.addEventListener('click', stopPlaying);
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            displayWord(currentIndex - 1);
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < filteredWords.length - 1) {
            displayWord(currentIndex + 1);
        }
    });
    
    speedControl.addEventListener('change', (e) => {
        playSpeed = parseInt(e.target.value);
        if (isPlaying) {
            stopPlaying();
            startPlaying();
        }
    });
    
    categoryFilter.addEventListener('change', filterWords);
    searchBox.addEventListener('input', filterWords);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && currentIndex < filteredWords.length - 1) {
            displayWord(currentIndex + 1);
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            displayWord(currentIndex - 1);
        } else if (e.key === ' ') {
            e.preventDefault();
            wordCard.classList.toggle('flipped');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
