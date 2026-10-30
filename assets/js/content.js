/* ---------- Content: edit here ---------- */
// A value starting with "?" is a placeholder and shows with a dotted amber underline.
// Images live in assets/img. Swap a file, or point a key at a new one.
const ASSETS = {
  "fildata": "assets/img/logos/fildata.png",
  "loughborough": "assets/img/logos/loughborough.png",
  "stlouis": "assets/img/logos/st-louis.jpg",
  "calbank": "assets/img/logos/calbank.jpg",
  "ghana": "assets/img/logos/ghana-scholarship.jpg",
  "aied": "assets/img/logos/ai-in-education.jpg",
  "hackathon": "assets/img/photos/hackathon.jpg",
  "talent1": "assets/img/photos/talent-match-1.jpg",
  "talent1_size": [1200, 900],
  "talent2": "assets/img/photos/talent-match-2.jpg",
  "talent2_size": [900, 1200],
  "avatar": "assets/img/avatar.jpg",
  "banner": "assets/img/banner.jpg",
  "gwg": "assets/img/logos/grow-with-google.png",
  "mmc": "assets/img/logos/mentor-me-collective.png",
  "hdruk": "assets/img/logos/hdruk.png",
  "research": "assets/img/logos/retrieval-or-ranking.svg",
  "msft": "assets/img/projects/microsoft-logo.png"
};

const SITE = {
  initials: "EB",
  name: "Emmanuel Boakye",
  role: "AI Researcher & Data Scientist",
  bio: "AI researcher working on recommender systems, learning to rank and trustworthy AI. I study where retrieval and ranking pipelines break on sparse data, and how to make model decisions explainable.",
  email: "boakyemmanuel1@outlook.com",
  myTimeZone: "Europe/London",
  myCity: "London",
  myPlace: "London, United Kingdom",
  myCoords: "51.51° N, 0.13° W",
  bookCall: "https://cal.com/boakyemma",
  avatar: ASSETS.avatar,
  socials: [
    { icon: "brand-x", label: "X", href: "https://x.com/churchillondata" },
    { icon: "brand-linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/emmanuel-boakye-gh/" },
    { icon: "brand-github", label: "GitHub", href: "https://github.com/ChurchillonData" },
    { icon: "brand-medium", label: "Medium", href: null },
    { icon: "mail", label: "Email", href: "mailto:boakyemmanuel1@outlook.com" },
    { icon: "file-text", label: "Resume", href: "https://drive.google.com/file/d/1AjgyI-1A7TCr4E3eBvwSgFHnkkBS5kgo/view" }
  ],
  song: { title: "?Kwaku the Traveller", artist: "Black Sherif",
          url: "https://open.spotify.com/search/Kwaku%20the%20Traveller%20Black%20Sherif" },
  stack: [
    ["python","Python"],["r","R"],["pytorch","PyTorch"],["scikitlearn","scikit-learn"],["pandas","Pandas"],["numpy","NumPy"],
    ["huggingface","Hugging Face"],["langchain","LangChain"],["openai","OpenAI"],["claude","Claude"],["jupyter","Jupyter"],["matplotlib","Matplotlib"],
    ["postgresql","PostgreSQL"],["git","Git"],["github","GitHub"],["streamlit","Streamlit"],["docker","Docker"],["latex","LaTeX"]
  ],
  github: "ChurchillonData",
  quote: { text: "It is not wrong to go back for that which you have forgotten.", by: "Akan proverb, Sankofa" },
  visitors: null    // a real number from a visit counter; the line stays hidden while this is null
};

// Tech keys: a brand logo name, or "t:<icon>" for a plain outline icon
const EXPERIENCE = [
  { id: "mentor-me", company: "Grow with Google × Mentor Me Collective", role: "Track Lead", dates: "Apr 2026 – Jul 2026", location: "Remote, USA",
    logo: { img: "gwg", border: true }, featured: true,
    logos: [{ img: "gwg", border: true, name: "Grow with Google" }, { img: "mmc", name: "Mentor Me Collective" }],
    tech: [["python","Python"],["pandas","Pandas"],["numpy","NumPy"],["scikitlearn","scikit-learn"],["t:users","Mentoring"]],
    bullets: [
      "Led a group of 12 participants through the Google Advanced Data Analytics Certification program.",
      "Organised weekly sessions and led discussions on statistical concepts and machine learning.",
      "Supported members with Python (Pandas, NumPy, scikit-learn) and data storytelling."
    ] },
  { id: "fildata", company: "Fildata", role: "Data Scientist Intern", dates: "Nov 2025 – Feb 2026", location: "Manchester, UK",
    logo: { img: "fildata" }, featured: true,
    tech: [["python","Python"],["scikitlearn","scikit-learn"],["pandas","Pandas"],["t:binary-tree-2","Gradient Boosting"],["t:radar","Anomaly Detection"]],
    bullets: [
      "Built a fraud detection model on transaction data with gradient-boosted trees and anomaly detection, tuned to flag suspicious activity while keeping false positives manageable.",
      "Developed a customer churn prediction model to identify at-risk clients and support retention decisions."
    ] },
  { id: "st-louis", company: "St. Louis College of Education", role: "National Service Personnel (Data Quality)", dates: "Oct 2023 – Sep 2024", location: "Ghana",
    logo: { img: "stlouis", border: true },
    tech: [["t:database","Data Quality"],["t:math-function","Statistical Checks"],["t:layout-dashboard","Dashboards"],["t:report-analytics","Reporting"]],
    bullets: [
      "Built statistical checks to detect anomalies and inconsistencies across more than 18,000 student records, improving the reliability of institutional reporting.",
      "Developed dashboards and summary reports that gave staff clearer visibility into enrolment and student data for decision-making."
    ] },
  { id: "calbank", company: "CalBank", role: "Financial Analyst Intern", dates: "Jul 2023 – Oct 2023", location: "Ghana",
    logo: { img: "calbank", border: true },
    tech: [["t:chart-line","Time Series"],["t:report-analytics","Portfolio Risk"],["t:building-bank","Compliance"]],
    bullets: [
      "Tracked monthly deposit and loan balances in Excel and used simple time-series charts and moving averages to show trends to the finance team.",
      "Supported portfolio risk and compliance checks by updating loan exposure summaries and checking reports against internal limits and Bank of Ghana requirements."
    ] }
];

const PAPER_DOI = "https://doi.org/10.5281/zenodo.23457794";
const RESEARCH = [
  { id: "follow-up", title: "Dissertation Follow-Up Research", featured: true,
    paper: "Retrieval or Ranking? Diagnosing the Dominant Bottleneck in a Hybrid Two-Staged Recommender on a Sparse Product Catalogue",
    dates: "Apr 2026 – Jul 2026", where: "Independent research",
    logo: { img: "research" },
    links: [{ label: "Paper", href: PAPER_DOI, icon: "file-text" }, { label: "Code", href: "https://github.com/ChurchillonData/trace-r2d", icon: "brand-github" }],
    tech: [["t:binary-tree-2","LightGBM LambdaRank"],["huggingface","SBERT"],["t:math-function","SVD"],["t:arrows-sort","Learning to Rank"]],
    bullets: [
      "Built a two-stage recommender (SVD, SBERT and item-to-item retrieval feeding a LightGBM LambdaRank ranker) on Amazon Electronics 2023, with 79,838 users and 48,154 items.",
      "Generated candidates out-of-fold so no evaluation information could reach training.",
      "Reported that a simple popularity baseline (HR@10 = 0.61) outperformed the full hybrid system (HR@10 = 0.30) and treated that as a finding.",
      "Showed that training the ranker on retrieved candidates rather than observed pairs raised isolated HR@10 from 0.17 to 0.52, and that 84% of its decisions came from item popularity."
    ] },
  { id: "msc", title: "MSc Dissertation",
    paper: "Item Recommender System Using Machine Learning",
    dates: "May 2025 – Sep 2025", where: "Loughborough University · Loughborough, UK", supervisor: "Dr. Shaheen Syeda Fatima",
    logo: { img: "loughborough" }, links: [],
    tech: [["t:binary-tree-2","XGBoost"],["t:math-function","SVD"],["t:file-search","TF-IDF"],["t:brain","CNN"]],
    bullets: [
      "Built a hybrid recommender on 200,000 Amazon electronics reviews, stacking SVD, TF-IDF similarity and a review-text CNN under an XGBoost meta-learner to predict ratings.",
      "Evaluated with regression metrics (RMSE, MAE, R²) and ranking metrics (Precision, Recall, NDCG@K).",
      "Its headline result (R² = 0.89) proved to be inflated by data leakage, which motivated the follow-up study."
    ] },
  { id: "hdruk", title: "Postgraduate Research Intern, HDRUK",
    paper: "Predicting Survival in Critically Ill Patients using Classical and Machine Learning Models",
    dates: "Jan 2025 – Apr 2025", where: "Loughborough University · Loughborough, UK",
    logo: { img: "loughborough" },
    logos: [{ img: "loughborough", name: "Loughborough University" }, { img: "hdruk", name: "Health Data Research UK" }],
    links: [{ label: "Poster", href: "https://zenodo.org/records/21207234", icon: "file-text" }],
    tech: [["t:heart-rate-monitor","Survival Analysis"],["t:math-function","Cox PH"],["t:binary-tree-2","Random Survival Forest"],["t:binary-tree-2","Gradient Boosted Survival"]],
    bullets: [
      "Benchmarked a Cox proportional hazards model against Random Survival Forest and Gradient Boosted Survival for time-to-death prediction in critically ill ICU patients.",
      "Built an end-to-end modelling pipeline to handle right-censoring and missing clinical values, excluding outcome-derived columns to avoid leakage.",
      "Evaluated with the concordance index, time-dependent AUC and integrated Brier score rather than a single accuracy figure, and presented the work as a research poster."
    ] }
];

const PUBLICATIONS = [
  { cite: "Boakye, E. (2026).", title: "Retrieval or Ranking? Diagnosing the Dominant Bottleneck in a Hybrid Two-Staged Recommender on a Sparse Product Catalogue.",
    note: "Preprint on Zenodo, not peer-reviewed.", href: PAPER_DOI }
];

const PROJECTS = [
  { slug: "vellum-nlq", title: "Vellum-NLQ", date: "05.2026", featured: true, mock: "vellum",
    short: "A governed natural-language query layer that lets non-technical users ask questions of medical insurance claims data in plain English.",
    tech: [["python","Python"],["postgresql","SQL"],["t:brain","LLMs"],["t:database","Text-to-SQL"]],
    overview: [
      "Vellum-NLQ is a text-to-SQL layer for medical insurance claims. A non-technical user asks a question in plain English and gets an answer from the claims data.",
      "A governance boundary means generated queries run only against permitted tables and columns. That keeps the system safe on regulated data.",
      "Every answer comes back with the SQL that produced it, so a reviewer can audit what the model actually ran."
    ],
    links: { site: null, siteLabel: "Live site", repo: "https://github.com/ChurchillonData/vellum-nlq" } },
  { slug: "edgar-risk", title: "EDGAR Risk", date: "04.2026", featured: true, mock: "edgar",
    short: "Explainable risk and sentiment analysis of SEC filings, with every score traced back to matched terms and cited excerpts.",
    tech: [["python","Python"],["t:file-search","NLP"],["t:list-details","Finance lexicons"],["t:building-bank","SEC EDGAR"]],
    overview: [
      "EDGAR Risk reads public SEC filings and scores them for sentiment, risk and uncertainty using finance-specific word lists. Every score traces back to matched terms and cited excerpts.",
      "Overall risk breaks down into litigation, regulatory, liquidity, market, cybersecurity and operational categories. The system tracks risk across a company's recent filings to show whether it is rising or falling.",
      "It parses filing sections and supports both US issuer forms (8-K, 10-Q, 10-K) and foreign issuer forms (6-K, 20-F)."
    ],
    links: { site: "https://edgar-risklens.netlify.app/", siteLabel: "Live site", repo: "https://github.com/ChurchillonData/SEC-Risk-Analyzer" } },
  { slug: "retrieval-or-ranking", title: "Retrieval or Ranking?", date: "07.2026", featured: false, mock: "paper",
    short: "Diagnosing the dominant bottleneck in a hybrid two-stage recommender on a sparse product catalogue.",
    tech: [["t:binary-tree-2","LightGBM LambdaRank"],["huggingface","SBERT"],["t:math-function","SVD"],["t:arrows-sort","Learning to Rank"]],
    overview: [
      "Follow-up research to my MSc dissertation. I rebuilt the recommender as two stages on Amazon Electronics 2023, separating candidate retrieval from ranking across 79,838 users and 48,154 items. Candidates were generated out-of-fold so no evaluation information could reach training.",
      "A simple popularity baseline (HR@10 = 0.61) beat the full hybrid system (HR@10 = 0.30). I reported that as a finding.",
      "Training the ranker on retrieved candidates instead of observed pairs raised isolated HR@10 from 0.17 to 0.52. 84% of its decisions came from item popularity."
    ],
    links: { site: PAPER_DOI, siteLabel: "Paper", repo: "https://github.com/ChurchillonData/trace-r2d" } },
  { slug: "climateclaim", title: "ClimateClaim", date: "05.2026", featured: false, mock: "green",
    short: "Greenwashing detection for ten oil and gas majors with ClimateBERT, SBERT reranking and GPT-4o-mini scoring.",
    tech: [["python","Python"],["huggingface","ClimateBERT"],["huggingface","SBERT"],["openai","GPT-4o-mini"]],
    overview: [
      "ClimateClaim checks what ten oil and gas majors say about climate against the evidence. ClimateBERT detects climate claims in company text. An SBERT cross-encoder reranks the supporting passages. GPT-4o-mini then scores each claim.",
      "Evidence comes from NGO sources including Carbon Tracker, InfluenceMap, ClientEarth, Global Witness and The Guardian. Each claim is rated well substantiated, weakly substantiated or contradicted, with a plain-language rationale grounded in that evidence.",
      "The project is complete and shipped."
    ],
    links: { site: "https://claimify-esg.vercel.app/", siteLabel: "Live site", repo: "https://github.com/ChurchillonData/claimify-esg" } }
];

const AWARDS = [
  { title: "Talent Match Recognition", issuer: "Loughborough University", year: "2025", logo: { img: "loughborough" },
    desc: "Selected and recognised as emerging talent in tech and business for the Master's Mentor Scheme.",
    photos: [
      { src: "talent1", alt: "Talent Match Master's Mentor Scheme certificate for Emmanuel Boakye beside a Loughborough Careers Network booklet" },
      { src: "talent2", alt: "Students at a Talent Match mentor scheme session at Loughborough University" }
    ],
    caption: "Talent Match Master's Mentor Scheme, Loughborough University, 2025" },
  { title: "AI in Education Hackathon", issuer: "DigiTech @ Loughborough University", year: "2025",
    desc: "EDI inclusivity challenge using AI.", logo: { img: "aied" },
    photos: [{ src: "hackathon", alt: "Hackathon participants standing beside an AI avatar display at Loughborough University" }],
    caption: "AI in Education Hackathon, Loughborough University, 2025" },
  { title: "Government of Ghana Scholarship", issuer: "Ghana Scholarships Secretariat", year: "2024",
    desc: "Sponsored my MSc in Data Science at Loughborough University.", logo: { img: "ghana", border: true } }
];
