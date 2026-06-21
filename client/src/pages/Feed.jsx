import React from "react";
import { dummyPostsData } from "../assets/assets";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import StoriesBar from "../components/StoriesBar";

const Feed = () => {
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeeds = async () => {
    setFeeds(dummyPostsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchFeeds();
  }, []);

  return !loading ? (
    <div className="h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8">
      {/* Stories and Post List  */}
      <div>
        <StoriesBar />
        <div>List of posts here</div>
      </div>
      {/* Right Sidebar  */}
      <div>
        <div>
          <h1>Sponsored</h1>
        </div>
        <h1>recent Message</h1>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Feed;
