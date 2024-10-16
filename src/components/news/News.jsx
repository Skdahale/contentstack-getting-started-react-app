import React from "react";
import './News.css';
// Import icons and services if necessary
// import NewsService from "./NewsService";
// import AddNews from "./AddNews";
// import DisplayNews from "./DisplayNews";

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newsArticles: [],
            isPopupVisible: false,
            isPopupVisible1: false,
            isDropdownOpen: false,
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    componentDidMount() {
        // Fetch agriculture-related news from an API or service
        // NewsService.getLatestNews().then(response => {
        //     this.setState({ newsArticles: response.data });
        // });
    }

    togglePopup = () => {
        this.setState((prevState) => ({
            isPopupVisible: !prevState.isPopupVisible,
        }));
    };

    togglePopup1 = () => {
        this.setState((prevState) => ({
            isPopupVisible1: !prevState.isPopupVisible1,
        }));
    };

    handleMouseEnter() {
        this.setState({ isDropdownOpen: true });
    }

    handleMouseLeave() {
        this.setState({ isDropdownOpen: false });
    }

    render() {
        const { newsArticles, isDropdownOpen } = this.state;

        return (
            <div className="news-container">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                {/* Social Media Icons Header */}
                <header className="head">
                  
                </header>

                {/* Agriculture News Section */}
                <section className="news-section">
                    <h1 className="news-title">Latest Agriculture News</h1>

                    <div className="news-articles">
                        {newsArticles.length === 0 ? (
                            <p>No news available. Check back later!</p>
                        ) : (
                            newsArticles.map((article, index) => (
                                <div key={index} className="news-card">
                                    <img src={article.image} alt="News" className="news-image" />
                                    <div className="news-details">
                                        <h3 className="news-heading">{article.heading}</h3>
                                        <p className="news-date">{article.date}</p>
                                        <p className="news-description">{article.description}</p>
                                        <a href={article.link} className="read-more">Read More</a>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </section>

               

                <div className="what"> Lastest News </div>

<p className="text">
  Cost Prediction: Our team is actively engaged in the field of cost
  prediction, utilizing advanced data analytics and machine learning
  techniques.
</p>

<p className="text">
  Crop Information: At present, we are dedicated to enhancing our
  capabilities in providing comprehensive crop information.
</p>
<p className="text">
  Query Form:Our team is focused on creating a user-friendly interface
  that allows seamless submission and processing of queries through
  E-mails.
</p>

                {/* Footer or Additional Sections can be added here */}
                {/* <Footer /> */}
            </div>
        );
    }
}

export default News;
