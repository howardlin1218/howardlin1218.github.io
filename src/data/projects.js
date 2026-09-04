export const projects = [
  {
    id: 'tracky',
    title: 'Tracky',
    summary: 'Web analytics and reporting platform with real-time visitor tracking and metrics dashboard.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'Apache2', 'Digital Ocean', 'MySQL', 'Fullstack'],
    thumbnail: '/assets/tracky.png',
    links: {
      github: 'https://github.com/howardlin1218/article-summarizer/tree/prod-branch',
      live: 'https://www.reporting.howard1218.site/',
    },
    featured: false,
  },
  {
    id: 'article-summarizer',
    title: 'Article Summarizer',
    summary: 'Web app that lets users search and filter articles from a selection of websites and generate summaries and sentiment analyses. Includes database to save and retrieve articles. Built with HTML/CSS/TypeScript frontend and Python Flask backend.',
    tags: ['Python', 'TypeScript', 'Flask', 'HTML', 'CSS', 'Supabase', 'Render', 'Groq API', 'Fullstack'],
    thumbnail: '/assets/article_summarizer.png',
    links: {
      github: 'https://github.com/howardlin1218/article-summarizer/tree/prod-branch',
      live: 'https://summarizer.howard1218.site',
    },
    featured: false,
  },
  {
    id: 'pdf-converter',
    title: 'PDF Converter',
    summary: 'Internal tool web app that extracts key structured information from PDF files and outputs downloadable .csv format. Python Flask backend parser hosted on Render.',
    tags: ['Python', 'TypeScript', 'Flask', 'HTML', 'CSS', 'Render', 'Fullstack'],
    thumbnail: '/assets/pdf_converter.png',
    links: {
      github: 'https://github.com/howardlin1218/pdf_parser',
      live: 'https://pdf-parser-1-yogt.onrender.com/',
    },
    featured: false,
  },
  {
    id: 'heart-disease-predictor',
    title: 'Heart Disease Predictor',
    summary: 'Quarter-long data science project analyzing relationships between heart disease and demographics, income, and lifestyle factors. Python data preprocessing and logistic regression modeling.',
    tags: ['Python', 'Sklearn', 'Pandas', 'Numpy', 'Logistic Regression', 'Seaborn', 'Matplotlib', 'Jupyter Notebook', 'Machine Learning'],
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
    tags: ['Python', 'Sklearn', 'Pandas', 'Numpy', 'Matplotlib', 'Random Forest', 'Logistic Regression', 'Naive Bayes', 'Machine Learning'],
    thumbnail: '/assets/steam.png',
    links: {
      github: 'https://github.com/howardlin1218/steam-video-game-prediction',
      notebook: 'https://github.com/howardlin1218/steam-video-game-prediction/blob/main/main.ipynb',
    },
    featured: false,
  },
  {
    id: 'pixel-sketch',
    title: 'Pixel Sketch',
    summary: 'Interactive pixel-art sketching canvas tool with resizable grid, dynamic color picker, and eraser tool.',
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    thumbnail: '/assets/p_sketch.png',
    links: {
      github: 'https://github.com/howardlin1218/pixel-sketch',
      live: 'https://howardlin1218.github.io/pixel-sketch/',
    },
    featured: false,
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors',
    summary: 'Interactive Rock Paper Scissors browser game against computer AI (first to 5 wins).',
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    thumbnail: '/assets/rps.png',
    links: {
      github: 'https://github.com/howardlin1218/rock_paper_scissors',
      live: 'https://howardlin1218.github.io/rock_paper_scissors/',
    },
    featured: false,
  },
  {
    id: 'email-marketing-ad-windows',
    title: 'Email Marketing Ad - Windows',
    summary: 'HTML email template recreation based on commercial design graphics, cross-client email compatible.',
    tags: ['HTML', 'CSS', 'Graphic Design'],
    thumbnail: '/assets/windows_ad.png',
    links: {
      github: 'https://github.com/howardlin1218/windows_ad',
      live: 'https://howardlin1218.github.io/windows_ad/',
    },
    featured: false,
  },
  {
    id: 'glacier-retreat-research',
    title: 'Glacier Retreat Research',
    summary: 'Quarter-long research project on glacier retreat in Glacier National Park utilizing GIS tools and spatial research data.',
    tags: ['ArcGIS', 'Data Visualization', 'Graphics', 'Research'],
    thumbnail: '/assets/syn100.png',
    links: {
      storymaps: 'https://storymaps.arcgis.com/stories/f13e3c84d31d4c87a106d00bac19ecc1',
    },
    featured: false,
  }
];

export const popularFilterTags = [
  'All',
  'Fullstack',
  'Python',
  'TypeScript',
  'Machine Learning',
  'Flask',
  'JavaScript',
  'Research',
];
