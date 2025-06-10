const PropertyListing = (props) => {
    return (
        <article className="news-article">
            <div className="article-image">
                <img src={props.property.img_name} alt={props.property.title} />
            </div>
            <div className="article-div">
                <div className="article">
                    <span className="category">{props.property.property_type}</span>
                    <span className="price">{props.property.price}</span>
                </div>
                <h2>{props.property.title}</h2>
                <p>{props.property.description}</p>
                
                <div className="property-details">
                    <p><strong>Address:</strong> {props.property.address}</p>
                    <p><strong>Bedrooms:</strong> {props.property.bedrooms} & <strong>Bathrooms:</strong> {props.property.bathrooms}</p>
                    <p><strong>Square Feet:</strong> {props.property.square_feet}</p>
                    <p><strong>Year Built:</strong> {props.property.year_built}</p>
                    <p><strong>Features:</strong> {props.property.features.join(", ")}</p>
                </div>
            </div>
        </article>
    );
};

export default PropertyListing; 