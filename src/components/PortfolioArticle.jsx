const PortfolioArticle = ({ image, alt, category, title, description, linkTo, linkText }) => {
    return (
        <article className="news-article">
            <div className="article-image">
                <img src={image} alt={alt} />
            </div>
            <div className="article-div">
                <div className="article">
                    <span className="category">{category}</span>
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={linkTo} className="read-more">{linkText}</a>
            </div>
        </article>
    );
};

export default PortfolioArticle; 