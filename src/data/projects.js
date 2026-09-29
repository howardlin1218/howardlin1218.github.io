export const projects = [
  {
    id: 'tracky',
    title: 'Tracky',
    summary: 'Web telemetry and real-time application monitoring platform. Tracks visitor analytics, Core Web Vitals performance, client-side errors, and user session recontruction with detailed recorded actions. Also features role-based access control and automated PDF report generation via Puppeteer.',
    tags: ['JavaScript', 'Node.js', 'Express.js', 'MySQL', 'Chart.js', 'Puppeteer', 'REST API', 'HTML', 'CSS', 'Digital Ocean', 'Cloudflare', 'Fullstack'],
    thumbnail: '/assets/tracky.png',
    links: {
      github: 'https://github.com/howardlin1218/article-summarizer/tree/prod-branch',
      live: 'https://reporting.howard1218.site',
    },
    featured: false,
  },
  {
    id: 'article-summarizer',
    title: 'Article Summarizer',
    summary: 'All in one web application that automates the process of finding relevant product review articles, runs summarization and sentiment analysis on the article content, and presents it back to the frontend in a clean, structured card format. Features customizable filtering, real-time Server-Sent Events (SSE) progress streaming, summarization and sentiment classification through gpt-oss-120b (via Groq API), Supabase for storage, local offline exports, and automated email digest delivery via Resend.',
    tags: ['Python', 'FastAPI', 'TypeScript', 'PostgreSQL', 'Supabase', 'REST API', 'HTML', 'CSS', 'gpt-oss-120b', 'Resend API', 'Digital Ocean', 'Cloudflare', 'Fullstack'],
    thumbnail: '/assets/summarizer.png',
    links: {
      github: 'https://github.com/howardlin1218/article-summarizer/tree/prod-branch',
      live: 'https://summarizer.howard1218.site',
    },
    featured: false,
  },
  {
    id: 'voice-transcription',
    title: 'Voice Transcription',
    summary: 'Fullstack web app that allows users to record their speech and transcribes it into text. Features a word/character counter, editable transcribed text, and local export/copy. Uses the Whisper Large v3 Turbo speech-to-text model by OpenAI (via Groq API).',
    tags: ['JavaScript', 'Node.js', 'Express.js', 'REST API', 'HTML', 'CSS', 'Render', 'whisper-large-v3-turbo', 'Fullstack'],
    thumbnail: '/assets/transcription.png',
    links: {
      github: 'https://github.com/howardlin1218/voice-transcription',
      live: 'https://voicetranscription.up.railway.app/',
    },
    featured: false,
  },
  {
    id: 'heart-disease-predictor',
    title: 'Heart Disease Predictor',
    summary: 'Led a 5-person data science team to analyze socioeconomic predictors of cardiovascular disease, conducting EDA and feature selection across 250,000+ CDC health records using Pandas, NumPy, and Seaborn. Trained Logistic Regression and XGBoost models to quantify income-related heart disease risks while controlling for chronic health confounders, achieving 96% precision on negative cases and 70% recall on high-risk cases.',
    tags: ['Python', 'Sklearn', 'Pandas', 'Numpy', 'Logistic Regression', 'Seaborn', 'Matplotlib', 'Jupyter Notebook', 'Machine Learning', 'Data Visualization'],
    thumbnail: '/assets/heart_disease.png',
    links: {
      github: 'https://github.com/howardlin1218/Heart-Disease-Predictor',
      notebook: 'https://github.com/howardlin1218/Heart-Disease-Predictor/blob/main/FinalProject_Group155_WI25.ipynb',
    },
    featured: false,
  },
  {
    id: 'steam-video-game-prediction',
    title: 'Video Game Likability Prediction',
    summary: 'Machine learning project predicting Steam game likability using metadata, descriptions, prices, and reviews. Built ensemble model combining Naive Bayes, Logistic Regression, and Random Forest.',
    tags: ['Python', 'Sklearn', 'Pandas', 'Numpy', 'Matplotlib', 'Random Forest', 'Logistic Regression', 'Naive Bayes', 'Machine Learning', 'Data Visualization'],
    thumbnail: '/assets/steam.png',
    links: {
      github: 'https://github.com/howardlin1218/steam-video-game-prediction',
      notebook: 'https://github.com/howardlin1218/steam-video-game-prediction/blob/main/main.ipynb',
    },
    featured: false,
  },
  {
    id: 'glacier-retreat-research',
    title: 'Glacier Retreat Research',
    summary: 'Quarter-long research project on glacier retreat in Glacier National Park utilizing GIS tools and spatial research data.',
    tags: ['ArcGIS', 'Data Visualization', 'Research'],
    thumbnail: '/assets/syn100.png',
    links: {
      storymaps: 'https://storymaps.arcgis.com/stories/f13e3c84d31d4c87a106d00bac19ecc1',
    },
    featured: false,
  },
  {
    id: 'pixel-sketch',
    title: 'Pixel Sketch',
    summary: 'Interactive pixel-art sketching canvas tool with resizable grid, dynamic color picker, and eraser tool.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    thumbnail: '/assets/p_sketch.png',
    links: {
      github: 'https://github.com/howardlin1218/pixel-sketch',
      live: 'https://howardlin1218.github.io/pixel-sketch/',
    },
    featured: false,
  }
];

export const popularFilterTags = [
  'All',
  'Fullstack',
  'Python',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'Node.js',
  'Express.js',
  'FastAPI',
  'NumPy',
  'Pandas',
  'Digital Ocean',
  'Cloudflare',
  'MySQL',
  'Supabase',
  "REST API", 
  'Render',
  'Data Visualization'
];
