import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function NewsContainer(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [language, setLanguage] = useState("en");
  const [country, setCountry] = useState("us");

  const apiKey = import.meta.env.VITE_API_KEY;

  const buildUrl = (page) => {
    return `https://newsapi.org/v2/top-headlines?country=${country}&category=${props.type}&language=${language}&apiKey=${apiKey}&page=${page}&pageSize=9`;
  };

  const getNews = async () => {
    setLoader(true);
    try {
      const url = buildUrl(page);
      const response = await fetch(url);
      const parsedData = await response.json();
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      console.log(parsedData)
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoader(false);
    }
  };

  const fetchMoreData = async () => {
    setPage(prevPage => prevPage + 1);
    try {
      const url = buildUrl(page + 1); // increment the page
      const response = await fetch(url);
      const parsedData = await response.json();
      setArticles(prevArticles => prevArticles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  // Fetch news when language or country changes
  useEffect(() => {
    getNews();
  }, [language, country]);

  const moveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle language change
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setPage(1);
    setArticles([]);
  };

  // Handle country change
  const handleCountryChange = (e) => {
    setCountry(e.target.value);
    setPage(1);
    setArticles([]);
  };

  return (
    <div
      style={{
        margin: "4% 5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <h1 className="text-center mt-5" style={{ textTransform: "capitalize" }}>
        News Buddy - Top {props.type} Headlines
      </h1>

      {/* Language and Country Dropdowns */}
      <div
        className="mb-4 d-flex justify-content-center gap-4"
        style={{ alignItems: "center" }}
      >
        <div style={{ display: "flex", alignItems: "center", minWidth: "150px" }}>
          <label htmlFor="language-select" style={{ fontWeight: "bold", marginRight: "10px" }}>
            Language:
          </label>
          <select
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
            style={{
              padding: "5px 6px",
              borderRadius: "5px",
              border: "2px solid rgb(21 27 40)",
              backgroundColor: "rgb(15 18 24)",
              fontSize: "14px",
              color: "white",
            }}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
            <option value="ru">Russian</option>
          </select>
        </div>

        <div style={{ display: "flex", alignItems: "center", minWidth: "150px" }}>
          <label htmlFor="country-select" style={{ fontWeight: "bold", marginRight: "10px" }}>
            Country:
          </label>
          <select
            id="country-select"
            value={country}
            onChange={handleCountryChange}
            style={{
              padding: "5px 6px",
              borderRadius: "5px",
              border: "2px solid rgb(21 27 40)",
              backgroundColor: "rgb(15 18 24)",
              fontSize: "14px",
              color: "white",
            }}
          >
            <option value="us">United States</option>
            <option value="de">Germany</option>
            <option value="fr">France</option>
            <option value="in">India</option>
            <option value="ru">Russia</option>
            <option value="jp">Japan</option>
          </select>
        </div>
      </div>

      {/* No News Message */}
      {articles.length === 0 && !loader && (
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#FF0000",
            textAlign: "center",
          }}
        >
          No news available.
        </div>
      )}

      {/* Loader */}
      {loader && <Loader />}

      {/* Infinite Scroll */}
      {articles.length > 0 && (
        <InfiniteScroll
          style={{ overflow: "hidden" }}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Loader />}
        >
          <div className="row justify-content-center">
            {articles.map((data, index) => (
              <div className="col col-lg-3 col-sm-5 col-11 m-3" key={index}>
                <NewsItem
                  title={data.title ? data.title.slice(0, 45) + "..." : "No Title"}
                  description={data.description ? data.description.slice(0, 90) + "..." : "No Description"}
                  imgUrl={data.urlToImage || "https://img.freepik.com/premium-photo/creative-glowing-blue-breaking-news-pattern-background-with-globe-headline-communication-global-world-concept-3d-rendering_670147-21161.jpg"}
                  date={data.publishedAt}
                  source={data.source.name}
                  readmore={data.url}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      )}

      {/* Scroll to Top Button */}
      <div className="container d-flex justify-content-center">
        <button
          type="button"
          style={{ backgroundColor: "#587AC1", color: "#E4E6EA" }}
          className="btn my-3 btn-sm"
          onClick={moveToTop}
        >
          <span>Top &uarr;</span>
        </button>
      </div>
    </div>
  );
}
