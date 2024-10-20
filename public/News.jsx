import React from "react";
import './News.css';
// Import icons and services if necessary
// import NewsService from "./NewsService";
// import AddNews from "./AddNews";
// import DisplayNews from "./DisplayNews";

// class News extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             newsArticles: [],
//             isPopupVisible: false,
//             isPopupVisible1: false,
//             isDropdownOpen: false,
//         };
//         this.handleMouseEnter = this.handleMouseEnter.bind(this);
//         this.handleMouseLeave = this.handleMouseLeave.bind(this);
//     }

//     componentDidMount() {
//         // Fetch agriculture-related news from an API or service
//         // NewsService.getLatestNews().then(response => {
//         //     this.setState({ newsArticles: response.data });
//         // });
//     }

//     togglePopup = () => {
//         this.setState((prevState) => ({
//             isPopupVisible: !prevState.isPopupVisible,
//         }));
//     };

//     togglePopup1 = () => {
//         this.setState((prevState) => ({
//             isPopupVisible1: !prevState.isPopupVisible1,
//         }));
//     };

//     handleMouseEnter() {
//         this.setState({ isDropdownOpen: true });
//     }

//     handleMouseLeave() {
//         this.setState({ isDropdownOpen: false });
//     }

//     render() {
//         const { newsArticles, isDropdownOpen } = this.state;

//         return (
//             <div className="news-container">
//                 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

//                 {/* Social Media Icons Header */}
//                 <header className="head">
                  
//                 </header>

//                 {/* Agriculture News Section */}
//                 <section className="news-section">
//                     <h1 className="news-title">Latest Agriculture News</h1>

//                     <div className="news-articles">
//                         {newsArticles.length === 0 ? (
//                             <p>No news available. Check back later!</p>
//                         ) : (
//                             newsArticles.map((article, index) => (
//                                 <div key={index} className="news-card">
//                                     <img src={article.image} alt="News" className="news-image" />
//                                     <div className="news-details">
//                                         <h3 className="news-heading">{article.heading}</h3>
//                                         <p className="news-date">{article.date}</p>
//                                         <p className="news-description">{article.description}</p>
//                                         <a href={article.link} className="read-more">Read More</a>
//                                     </div>
//                                 </div>
//                             ))
//                         )}
//                     </div>
//                 </section>

               

//                 <div className="what"> Lastest News </div>

// <p className="text">
//   Cost Prediction: Our team is actively engaged in the field of cost
//   prediction, utilizing advanced data analytics and machine learning
//   techniques.
// </p>

// <p className="text">
//   Crop Information: At present, we are dedicated to enhancing our
//   capabilities in providing comprehensive crop information.
// </p>
// <p className="text">
//   Query Form:Our team is focused on creating a user-friendly interface
//   that allows seamless submission and processing of queries through
//   E-mails.
// </p>

//                 {/* Footer or Additional Sections can be added here */}
//                 {/* <Footer /> */}
//             </div>
//         );
//     }
// }

// export default News;


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as Tractor } from './tractor.svg';
import { ReactComponent as Try1 } from './try1.svg';
import { ReactComponent as Try2 } from './try2.svg';
import { ReactComponent as Try3 } from './try3.svg';
// import TopBar from "../Screens/topbar";
// import Footer from "../Screens/footer";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsPeople } from 'react-icons/ai';


import './ImageSlider.css'; // Import your custom CSS file

function News() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        className: 'image-slider', // Add a custom class name to the slider
    };
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
         
            <Slider {...settings}>
                <div>
                    <Try1></Try1>
                </div>
                <div>
                    <Try2></Try2>
                </div>
                <div>
                    <Try3></Try3>
                </div>
            </Slider>

            <table className="mb-0">
                <tr>
                    <td>
                    <img src="./seed_bg.jpg" alt="" style={{height:"300px",width:"400px"}} className="m-5"/>
                    </td>
                    <td className="align-top">
                        <div className="headline-card my-5 mr-3" style={{ marginRight: '1rem',minWidth:'200px' }}>
                            <div className="headline-by mb-1 align-top">
                                <span className="headluine-date h5" style={{color:"rgb(7, 155, 39)"}}>29 Jan 2023</span>
                                <span className="mx-2">By Smuel</span>
                            </div>
                            <span className="headline_txt fw-bolder h3">
                            IFFCO to procure 2,500 agri-drones; launches campaign to train 5k rural entrepreneurs to promote use of nano fertilisers
                            Lorem, ipsum dolor.
                            </span>
                        </div>
                        </td>
                  
                    <td className="align-top">
                        <div className="headline-card my-5 mr-3" style={{ marginRight: '1rem',minWidth:'200px' }}>
                            <div className="headline-by mb-1 align-top h6">
                            Indian cooperative IFFCO is launching a national campaign to promote the use of nano fertilisers, with plans to procure 2,500 agri-drones and train 5,000 rural entrepreneurs. The drones will be used to spray IFFCO's nano urea and nano
                             di-ammonium phosphate products. The cooperative will also purchase 2,500
                            </div>
                            <span className="" style={{color:"rgb(131, 211, 46)"}}>Read me</span>
                        </div>
                    </td>
                </tr>

                
                <br></br>
                <tr>
                <td>
                <img src="./images/picture5.jpeg" alt="" style={{height:"300px",width:"400"}}  className="m-5 mt-0"/>
                    </td>
                    <td className="align-top">
                        <div className="headline-card my-5 mr-3" style={{ marginRight: '1rem',minWidth:'200px' }}>
                            <div className="headline-by mb-1 align-top">
                                <span className="headluine-date h5" style={{color:"rgb(7, 155, 39)"}}>29 Jan 2023</span>
                                <span className="mx-2">By Marco</span>
                            </div>
                            <span className="headline_txt fw-bolder h3">
                            How saffron grows in New India, even miles away from Kashmir
                       </span>
                        </div>
                        </td>
                  
                    <td className="align-top">
                        <div className="headline-card my-5 mr-3" style={{ marginRight: '1rem',minWidth:'200px' }}>
                            <div className="headline-by mb-1 align-top h6">
                            Saffron is loved by Indians. Be it our pulaos or curries, a dash of saffron makes everything better. However, over the years, saffron has not just limited itself to its cultural significance, but also turned up its volume on trade front. India is the second-largest producer of the golden spice in the world, with 7% of it coming
                       </div>
                            <span className="" style={{color:"rgb(131, 211, 46)"}}>Read me</span>
                        </div>
                    </td>
                </tr>
            </table>

            <Slider {...settings}>
                <div>
                    <img src="./images/picture1.png" alt="" style={{height:"250px",width:"100%"}}></img>
                </div>
                <div>
                <img src="./images/picture2.png" alt="" style={{height:"250px",width:"100%"}}></img>
                </div>
                <div>
                <img src="./images/picture3.png" alt="" style={{height:"250px",width:"100%"}}></img>

                </div>
            </Slider>
        
            <table>
                <tr>
                     <td>
                     <img src="./images/drone.jpg" alt="" style={{height:"270px",width:"200"}}  className="m-5"/>
                    </td>
                    <td className="align-top">
                        <div className="headline-card my-5 mr-3" style={{ marginRight: '1rem',minWidth:'200px' }}>
                            <div className="headline-by mb-1 align-top">
                                <span className="headluine-date h5" style={{color:"rgb(7, 155, 39)"}}>29 Jan 2023</span>
                                <span className="mx-2">By Leonard</span>
                            </div>
                            <span className="headline_txt fw-bolder h3">
                            IFFCO to procure 2,500 agri-drones; launches campaign to train 5k rural entrepreneurs to promote use of nano fertilisers
                         </span>
                        </div>
                        </td>
                  
                    <td className="align-top">
                        <div className="headline-card my-5 mr-3" style={{ marginRight: '1rem',minWidth:'200px' }}>
                            <div className="headline-by mb-1 align-top h6">
                            Indian cooperative IFFCO is launching a national campaign to promote the use of nano fertilisers, with plans to procure 2,500 agri-drones and train 5,000 rural entrepreneurs. The drones will be used to spray IFFCO's nano urea and nano di-ammonium phosphate products. The cooperative will also purchase 2,500
                       </div>
                            <span className="" style={{color:"rgb(131, 211, 46)"}}>Read me</span>
                        </div>
                    </td>
                </tr>
                <br></br>
                <tr>
                     <td>
                     <img src="./images/picture7.jpeg" alt="" style={{height:"270px",width:"200"}}  className="m-5 mt-0"/>
                    </td>
                    <td className="align-top">
                        <div className="headline-card my-5 mr-3" style={{ marginRight: '1rem',minWidth:'200px' }}>
                            <div className="headline-by mb-1 align-top">
                                <span className="headluine-date h5" style={{color:"rgb(7, 155, 39)"}}>29 Jan 2023</span>
                                <span className="mx-2">By Leonard</span>
                            </div>
                            <span className="headline_txt fw-bolder h3">
                            How saffron grows in New India, even miles away from Kashmir
                        </span>
                        </div>
                        </td>
                  
                    <td className="align-top">
                        <div className="headline-card my-5 mr-3" style={{ marginRight: '1rem',minWidth:'200px' }}>
                            <div className="headline-by mb-1 align-top h6">
                            Saffron is loved by Indians. Be it our pulaos or curries, a dash of saffron makes everything better. However, over the years, saffron has not just limited itself to its cultural significance, but also turned up its volume on trade front. India is the second-largest producer of the golden spice in the world, with 7% of it coming
                        </div>
                            <span className="" style={{color:"rgb(131, 211, 46)"}}>Read me</span>
                        </div>
                    </td>
                </tr>
            </table>

            <div className='bottom-info'>

                <div className="bottom-body">
                    <span className="bottom-text1 fw-bold h3 m-0 p-0">Helping a local </span>
                    <div className="bottom-text-div"><span className="bottom-text2 fw-bold h2 m-0 p-0" >business reinvent itself</span></div>
                    <span className="bottom-text3">
                        We reached here with our hard work and dedication
                    </span>
                </div>

                <div className="bottom-icon">
    
                </div>
            </div>




<div className="bottom-sctn-slogan">
                <Tractor className="Tractor-icon" />
           

            <div className="bottom-slogan align-center">
                <div className="bottom-text4 h2 fw-bolder text-center">
                    Pellentesque suscipit fringilla libero eu.
                </div>
                <button className="btn btn-primary d-flex justify-content-between align-items-center">
                <span>Get</span>
                <AiOutlineArrowRight />
                </button>
            </div>

            <div className="Plant-icon">
            <img src="./images/plant1.png" alt=""  style={{height:"270px",width:"200"}}/>
            </div>

            </div>


        </div>
    )
}
export default News;
