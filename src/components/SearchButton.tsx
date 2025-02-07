"use client"
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import {client} from '@/sanity/lib/client'

const SearchModal = ({ onSearch }: { onSearch: (results: any[]) => void }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const handleSearch = async () => {
    if (!query.trim()) {
      console.log("Search query is empty"); 
      return;
    }

    setLoading(true);
    console.log("Searching for:", query); 

    try {
      const queryResult = await client.fetch(
        `*[_type == "product" && (title match "${query}*" || category match "${query}*")]{
          _id,
          title,
          productImage,
          category
        }`
      );

      console.log("Query results:", queryResult);

      onSearch(queryResult);
      setShowSearch(false);

      // Redirect to shop page with the search query as a query parameter
      router.push(`/shop?query=${query}`);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="cursor-pointer text-lg md:text-2xl"
        onClick={() => setShowSearch(!showSearch)}
      >
        <IoSearch />
      </div>

      {showSearch && (
        <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
          <div className="p-4 flex items-center justify-between">
            <input
              type="text"
              className="w-full p-3 border rounded-lg text-sm focus:outline-none"
              placeholder="Search for products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="ml-4 bg-yellow-600 text-white p-3 rounded-lg hover:bg-yellow-700 transition"
              onClick={handleSearch}
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
            </button>
            <button
              className="ml-2 text-gray-700 text-lg"
              onClick={() => setShowSearch(false)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchModal;
