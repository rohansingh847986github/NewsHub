import PropTypes from "prop-types";
import { FaCalendarAlt, FaUserCircle, FaArrowRight } from "react-icons/fa";

const fallbackImage =
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80&auto=format&fit=crop";

const NewsItem = ({
  title,
  description,
  imageUrl,
  newsUrl,
  author,
  date,
  source,
}) => {
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
      {/* Image */}

      <div className="relative overflow-hidden">
        <img
          src={imageUrl || fallbackImage}
          alt={title}
          loading="lazy"
          onError={(e) => (e.target.src = fallbackImage)}
          className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Source */}

        <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white shadow-lg">
          {source || "News"}
        </span>

        {/* Title */}

        <div className="absolute bottom-5 left-5 right-5">
          <h2 className="line-clamp-2 text-2xl font-bold text-white">
            {title || "No Title Available"}
          </h2>
        </div>
      </div>

      {/* Content */}

      <div className="p-6">
        <p className="mb-5 line-clamp-3 text-gray-600 leading-7">
          {description || "No description available for this article."}
        </p>

        {/* Author & Date */}

        <div className="mb-6 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <FaUserCircle className="text-blue-500" />
            <span>{author || "Unknown"}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-red-500" />
            <span>
              {date ? new Date(date).toLocaleDateString() : "Unknown"}
            </span>
          </div>
        </div>

        {/* Button */}

        <a
          href={newsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:gap-4 hover:from-indigo-600 hover:to-blue-600"
        >
          Read Full Article
          <FaArrowRight />
        </a>
      </div>
    </article>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  newsUrl: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  source: PropTypes.string,
};

export default NewsItem;
