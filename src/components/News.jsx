// import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";

// const News = ({
//   setProgress,
//   apiKey,
//   country = "in",
//   category = "general",
//   pageSize = 8,
// }) => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [totalResults, setTotalResults] = useState(0);

//   const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

//   const fetchNews = async (pageNumber = 1) => {
//     try {
//       setProgress?.(10);
//       setLoading(true);

//       //   const response = await fetch(
//       //     `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${pageNumber}&pageSize=${pageSize}`,
//       //   );
//       const response = await fetch(
//         `https://newsapi.org/v2/everything?q=${category}&sortBy=publishedAt&apiKey=${apiKey}&page=${pageNumber}&pageSize=${pageSize}`,
//       );

//       console.log(response);
//       setProgress?.(40);

//       const data = await response.json();
//       console.log(data);
//       console.log(data.articles);

//       setProgress?.(70);

//       setArticles(data.articles || []);
//       setTotalResults(data.totalResults || 0);

//       setLoading(false);
//       setProgress?.(100);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     document.title = `${capitalize(category)} | News`;
//     fetchNews();
//   }, [category]);

//   const fetchMoreData = async () => {
//     const nextPage = page + 1;

//     try {
//       const response = await fetch(
//         `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${nextPage}&pageSize=${pageSize}`,
//       );

//       const data = await response.json();

//       setArticles((prev) => [...prev, ...(data.articles || [])]);
//       setTotalResults(data.totalResults || 0);
//       setPage(nextPage);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <main className="max-w-7xl mx-auto px-4 pt-24 pb-10">
//       <h1 className="text-4xl font-bold text-center mb-10">
//         Top {capitalize(category)} Headlines
//       </h1>

//       {loading && <Spinner />}

//       <InfiniteScroll
//         dataLength={articles.length}
//         next={fetchMoreData}
//         hasMore={articles.length < totalResults}
//         loader={<Spinner />}
//       >
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {articles.map((article) => (
//             <NewsItem
//               key={article.url}
//               title={article.title?.slice(0, 60) || ""}
//               description={article.description?.slice(0, 120) || ""}
//               imageUrl={article.urlToImage}
//               newsUrl={article.url}
//               author={article.author}
//               date={article.publishedAt}
//               source={article.source?.name}
//             />
//           ))}
//         </div>
//       </InfiniteScroll>
//     </main>
//   );
// };

// News.propTypes = {
//   setProgress: PropTypes.func,
//   apiKey: PropTypes.string.isRequired,
//   country: PropTypes.string,
//   category: PropTypes.string,
//   pageSize: PropTypes.number,
// };

// export default News;

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = ({ setProgress, apiKey, category = "general", pageSize = 6 }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  const fetchNews = async (pageNumber) => {
    try {
      setLoading(true);
      setProgress?.(20);

      const url = `https://newsapi.org/v2/everything?q=${category}&sortBy=publishedAt&page=${pageNumber}&pageSize=${pageSize}&language=en&apiKey=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      setProgress?.(60);

      if (data.status === "ok") {
        setArticles(data.articles);
        setTotalResults(data.totalResults);
        setPage(pageNumber);
      } else {
        console.log(data.message);
      }

      setProgress?.(100);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    document.title = `${capitalize(category)} News`;
    fetchNews(1);
  }, [category]);

  const handlePrevious = () => {
    if (page > 1) {
      fetchNews(page - 1);
    }
  };

  const handleNext = () => {
    if (page < Math.ceil(totalResults / pageSize)) {
      fetchNews(page + 1);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 pt-24 pb-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Top {capitalize(category)} Headlines
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <NewsItem
                key={article.url}
                title={article.title}
                description={article.description}
                imageUrl={article.urlToImage}
                newsUrl={article.url}
                author={article.author}
                date={article.publishedAt}
                source={article.source?.name}
              />
            ))}
          </div>

          <div className="flex justify-between items-center mt-10">
            <button
              onClick={handlePrevious}
              disabled={page <= 1}
              className={`px-5 py-2 rounded-lg text-white transition ${
                page <= 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              ← Previous
            </button>

            <span className="font-semibold text-lg">Page {page}</span>

            <button
              onClick={handleNext}
              disabled={page >= Math.ceil(totalResults / pageSize)}
              className={`px-5 py-2 rounded-lg text-white transition ${
                page >= Math.ceil(totalResults / pageSize)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Next →
            </button>
          </div>
        </>
      )}
    </main>
  );
};

News.propTypes = {
  setProgress: PropTypes.func,
  apiKey: PropTypes.string.isRequired,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
