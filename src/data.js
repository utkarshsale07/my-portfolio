export const PROFILE = {
  name: 'Utkarsh Ambadas Sale',
  email: 'utkarshsale07.sits.comp@gmail.com',
  phone: '+917030198620',
  phoneLabel: '+91 70301 98620',
  github: 'https://github.com/utkarshsale07',
  linkedin: 'https://www.linkedin.com/in/utkarsh-sale-276191222/',
}

const GH = 'https://github.com/utkarshsale07/'

export const PROJECTS = [
  {
    category: 'Full Stack', featured: true,
    title: 'Helper Hub: local services and household help platform',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React', 'MySQL'],
    bullets: [
      'Connects customers with verified professionals for plumbing, electrical work, AC repair, cleaning, painting and appliance repair.',
      'REST APIs secured with Spring Security and JWT, with role-based access for customers, providers and admins.',
      'Service booking, booking tracking, reviews, provider management and an admin dashboard on a React frontend.',
    ],
    link: 'https://github.com/Rahul-Bodade/HelperHub-Local-Services-Household-Help-Platform', linkLabel: 'View Helper Hub code',
  },
  {
    category: 'Full Stack', featured: true,
    title: 'Campus Book Exchange: college book buying and selling platform',
    stack: ['ASP.NET Core MVC', 'C#', 'Entity Framework Core', 'SQL Server'],
    bullets: [
      'Web app where students buy, sell and exchange used academic books.',
      'Secure authentication, role-based access control, image-based listings and book management.',
      'Search by department, semester, subject and title, plus an admin dashboard.',
    ],
    link: GH + 'Campus-Book-Exchange-College-Book-Buying-Selling-Platform', linkLabel: 'View Campus Book Exchange code',
  },
  {
    category: 'Data', featured: true,
    title: 'Customer shopping behavior analysis',
    stack: ['Python', 'SQL', 'Power BI'],
    bullets: [
      'Analysed 3,900+ customer transactions to find spending patterns and segment behavior.',
      'Data cleaning and preprocessing in Python, with SQL-based business analysis.',
      'Power BI dashboard that supports decisions on subscriptions, loyalty and marketing strategies.',
    ],
    link: GH + 'Customer-Shopping-Behavior-Analysis-Project', linkLabel: 'View analysis code',
  },
  {
    category: 'Mobile', title: 'Agricultural marketplace app for farmers',
    stack: ['Flutter', 'Firebase', 'Razorpay', 'Gemini AI'],
    text: 'An Android app that lets farmers sell products directly to consumers, retailers and wholesalers. Features include product listing, real-time market rates, search and recommendations, Razorpay payments, delivery options, ratings and a Gemini AI chatbot for user support.',
    link: GH + 'Mobile-App-for-Direct-Market-Access-for-Farmers', linkLabel: 'View farmers app on GitHub',
  },
  {
    category: 'AI / ML', title: 'Natural language database interaction using an LLM',
    stack: ['LangChain', 'Hugging Face', 'Streamlit', 'SQL', 'Few-shot learning'],
    text: 'An intelligent query system that lets users talk to a database in plain English instead of SQL. LangChain, Hugging Face LLMs and few-shot learning generate optimised SQL queries, a Streamlit UI keeps it easy to use, and safeguards protect against SQL injection.',
    link: GH + 'Natural-Language-Database-Interaction-using-LLM-', linkLabel: 'View this project on GitHub',
  },
  {
    category: 'AI / ML', title: 'SMS spam detector',
    stack: ['Naive Bayes', 'NLP', 'EDA', 'Machine learning'],
    text: 'A web application that detects whether an SMS is spam or not. Data cleaning, preprocessing and EDA (tokenization, stop-word removal, stemming) improved performance, and Naive Bayes was selected after comparing ML algorithms, reaching 97% accuracy.',
    link: GH + 'SMS-Spam-Detector', linkLabel: 'View spam detector on GitHub',
  },
  {
    category: 'Data', title: 'Banking domain data analytics',
    stack: ['Power BI', 'Python', 'MySQL', 'Excel', 'DAX'],
    text: 'An interactive Power BI dashboard that analyses banking risk metrics. Client-banking data was cleaned and preprocessed, and DAX measures track key KPIs like Total Clients, Loans and Deposits to support data-driven lending decisions.',
    link: GH + 'Banking-Domain-Data-Analytics-Project', linkLabel: 'View banking analytics on GitHub',
  },
  {
    category: 'Data', title: 'Blinkit sales analysis: interactive Excel dashboard',
    stack: ['Excel', 'Dashboard', 'Sales analysis'],
    text: "An interactive Excel sales dashboard that analyses Blinkit's performance. It tracks total and average sales, outlet types, item categories, fat content and location trends, and shows how customer preferences, outlet size and revenue growth opportunities connect.",
    link: GH + 'Interactive-Excel-Project-Real-time-Blinkit-Analysis', linkLabel: 'View Blinkit analysis on GitHub',
  },
  {
    category: 'Data', title: 'WhatsApp chat analyser',
    stack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    text: 'A Python tool that processes exported WhatsApp chats. It parses, cleans and structures raw text into tables, then uses Pandas, Matplotlib and Seaborn to show trends, activity patterns, sentiment distribution and emoji usage.',
    link: GH + 'WhatsApp-Chat-Analyser-', linkLabel: 'View chat analyser on GitHub',
  },
]

export const SKILLS = [
  { title: 'Languages', items: ['Java', 'C#', 'JavaScript', 'SQL', 'C++'] },
  { title: 'Backend', items: ['Spring Boot', 'Spring Security', 'JWT', 'REST APIs', 'ASP.NET Core MVC', 'Entity Framework Core'] },
  { title: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'JavaScript'] },
  { title: 'Databases', items: ['MySQL', 'SQL Server'] },
  { title: 'Core concepts', items: ['OOP', 'Data structures and algorithms', 'DBMS', 'Operating systems', 'SDLC', 'Authentication and authorization'] },
  { title: 'Data, AI and mobile', items: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Power BI', 'Excel', 'Streamlit', 'LangChain', 'Flutter', 'Firebase'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'Eclipse', 'VS Code'] },
]

export const EDUCATION = [
  { year: '2026', title: 'Post Graduate Certificate in Advanced Computing (PGCP-AC)', place: 'C-DAC, ACTS' },
  { year: '2025', title: 'B.E. in Computer Engineering, 65%', place: 'Sinhgad Institute of Technology and Science, University of Pune' },
  { year: '2021', title: 'HSC (Science), 81%', place: 'New Arts, Commerce and Science College, Ahmednagar' },
  { year: '2019', title: 'SSC, 79.8%', place: 'Zilla Parishad High School, Loni (Sayyadmir), Ashti, Beed' },
]
