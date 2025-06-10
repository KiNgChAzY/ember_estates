import '../css/news.css';
import NewsArticle from '../components/NewsArticle';

const News = () => {
    return (
        <main>
            <div className="container">
                <section className="news-content">
                    <div className="news-header">
                        <h1>Latest News & Updates</h1>
                        <p>Stay informed about the latest real estate trends, market insights, and 
                            company news from Ember Estates.</p>
                    </div>

                    <div className="video-container">
                        <h3>Featured Video</h3>
                        <div className="video-wrapper">
                            <iframe 
                                src="https://www.youtube.com/embed/M04k8VK-I5Q?si=PDdSRI8uSrJJ50ba" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                    
                    <div className="news-grid">
                        <NewsArticle 
                            image="images/Downtown Real Estate Market Shows Strong Growth.jpg"
                            alt="Downtown Real Estate Development"
                            date="March 15, 2024"
                            category="Market Trends"
                            title="Downtown Real Estate Market Shows Strong Growth"
                            description="The downtown real estate market continues to show remarkable growth, with property values increasing by 15% in the last quarter. This trend is driven by increased demand for urban living spaces and new commercial developments..."
                            linkText="Read More"
                        />
                        <NewsArticle 
                            image="images/Ember Estates Launches Sustainable Housing Initiative.jpg"
                            alt="Sustainable Housing Initiative"
                            date="March 10, 2024"
                            category="Company News"
                            title="Ember Estates Launches Sustainable Housing Initiative"
                            description="We're proud to announce our new sustainable housing initiative, focusing on eco-friendly building practices and energy-efficient homes. This program aims to reduce carbon footprint while providing modern, comfortable living spaces..."
                            linkText="Read More"
                        />
                        <NewsArticle 
                            image="images/Top 5 Real Estate Investment Strategies for 2024.webp"
                            alt="Real Estate Investment Tips"
                            date="March 5, 2024"
                            category="Investment Tips"
                            title="Top 4 Real Estate Investment Strategies for 2024"
                            description="As we move through 2024 we look back and learn from 2023, the real estate market presents new opportunities for investors. From residential properties to commercial developments, we explore the most promising investment strategies for the current market..."
                            linkText="Read More"
                        />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default News;
