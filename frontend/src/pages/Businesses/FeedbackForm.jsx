import { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSumbitReview = async (e) => {
    e.preventDefault();

    // later we will use our api
  };
  return (
    <form action="">
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          How would you rate the overall Expreince?*
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;

            return (
              <button
                key={index}
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] crusor-pointer`}
                type="button"
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0">
          Share your Suggestions
        </h3>

        <textarea
          className="border border-solid border-[#0066ff34] foucus:outline outline-primaryColor w-full px-4 py-3 rounded-md "
          placeholder="Write Your message"
          rows="5"
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn" onClick={handleSumbitReview}>
        Submit Feedback{" "}
      </button>
    </form>
  );
};

export default FeedbackForm;
