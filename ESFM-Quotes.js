function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

const quotes = [
    "True hospitality consists of giving the best of yourself to your clients.",
    "Empathy is the cornerstone of building strong client relationships.",
    "A successful client interaction is a two-way street. Listen actively and understand their needs.",
    "Hospitality in the workplace is about creating a welcoming and supportive environment for your clients.",
    "A small act of kindness can go a long way in building trust and loyalty with your clients.",
    "A positive attitude is contagious. Spread it around and create a positive experience for your clients.",
    "The service we provide helps to create lasting positive impressions for our clients.",
    "Hospitality in the workplace is about going the extra mile to make your client feel valued and appreciated.",
    "In the business of service, the client is always right.",
    "A little bit of effort can make a big difference in the client experience.",
    "Every interaction with a client is an opportunity to build a relationship.",
    "The best way to have a successful day is to help your client have a successful day.",
    "Every client has a story. Take the time to listen and understand their needs.",
    "Hospitality in the workplace is about anticipating the needs of your clients before they even ask.",
    "Under-promise and over-deliver. Exceed your client's expectations.",
    "The key is to set realistic expectations, and then not to just meet them, but to exceed them.",
    "The success of any service-oriented business depends on its team members.",
    "Teamwork makes the dream work. Work together to deliver exceptional service to your clients.",
    "Be a lifelong learner. There's always something new to discover about your field and how to better serve your clients.",
    "The difference between ordinary and extraordinary service is that little extra.",
    "A positive influence can create a ripple effect of positivity. Let your enthusiasm for helping clients shine through.",
    "Hospitality in the workplace is about creating a sense of partnership with your clients.",
    "Make your clients feel like valued partners, not just a transaction.",
    "There's nothing more rewarding than exceeding a client's expectations.",
    "Hospitality in the workplace is about creating a warm and welcoming environment, even over the phone or email.",
    "A client's success is your success. Celebrate their wins and support them through challenges.",
    "It's the little things that make a big difference in the client experience.",
    "A smile is the simplest way to show you care, even in a virtual interaction.",
    "Make eye contact (if possible) and greet your clients with a warm and friendly tone.",
    "Be genuine and show your clients that you appreciate their business.",
    "Anticipate your clients' needs and be proactive in providing excellent service.",
    "Go the extra mile to make your clients feel special. It doesn't have to be grand gestures, just thoughtful touches.",
    "Open communication is key. Keep your clients informed and involved in the process.",
    "Hospitality in the workplace is about making a positive impact on your clients' businesses.",
    "Be a source of information and assistance for your clients. Help them succeed.",
    "Make your clients feel like they can come to you with any questions or concerns.",
    "A problem-solving attitude goes a long way. Be resourceful and find solutions for your clients.",
    "Admit mistakes promptly and work diligently to rectify them.",
    "Treat your clients with respect, courtesy, and professionalism.",
    "Be honest and transparent in your dealings with clients.",
    "A client's time is valuable. Be efficient and avoid wasting their time.",
    "Follow up with your clients after interactions to ensure their satisfaction.",
    "Hospitality in the workplace is about building trust and loyalty with your clients.",
  ];
  
  const backgroundColors = [
    "#31647d",
    "#2980b9"
  ];
  
  const quoteElement = document.getElementById('quote');
  const newQuoteButton = document.getElementById('new-quote-button');
  
  function updateDisplay() {
    const quote = generateRandomQuote();
    quoteElement.textContent = quote;
    const randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    document.body.style.backgroundColor = randomColor;
  }
  
  // Call updateDisplay initially to display a quote on page load
  updateDisplay();
  
  newQuoteButton.addEventListener('click', updateDisplay);