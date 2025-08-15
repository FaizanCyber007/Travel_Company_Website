import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCalendarAlt,
  faUser,
  faEye,
  faHeart,
  faComment,
  faShare,
  faTag,
  faArrowRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "guides", name: "Travel Guides" },
    { id: "tips", name: "Travel Tips" },
    { id: "destinations", name: "Destinations" },
    { id: "culture", name: "Culture" },
    { id: "food", name: "Food & Dining" },
    { id: "adventure", name: "Adventure" },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Ultimate Guide to Backpacking Through Southeast Asia",
      slug: "ultimate-guide-backpacking-southeast-asia",
      excerpt:
        "Everything you need to know for an epic backpacking adventure through Thailand, Vietnam, Cambodia, and Laos. From budget tips to must-see destinations.",
      category: "guides",
      author: "Sarah Johnson",
      authorImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=150&h=150&auto=format&fit=crop",
      date: "2025-01-15",
      readTime: "12 min read",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop",
      tags: ["Backpacking", "Southeast Asia", "Budget Travel"],
      views: 2340,
      likes: 156,
      comments: 23,
      featured: true,
    },
    {
      id: 2,
      title: "10 Hidden Gems in Iceland You Must Visit",
      slug: "hidden-gems-iceland-must-visit",
      excerpt:
        "Discover Iceland's secret spots beyond the typical tourist trail. From hidden waterfalls to secluded hot springs.",
      category: "destinations",
      author: "Michael Chen",
      authorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
      date: "2025-01-12",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=800&auto=format&fit=crop",
      tags: ["Iceland", "Hidden Gems", "Nature"],
      views: 1890,
      likes: 203,
      comments: 45,
      featured: false,
    },
    {
      id: 3,
      title: "How to Pack Light for a 2-Week European Trip",
      slug: "pack-light-european-trip",
      excerpt:
        "Master the art of packing light with our comprehensive guide. Essential items, packing tips, and what to leave behind.",
      category: "tips",
      author: "Emily Rodriguez",
      authorImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
      date: "2025-01-10",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
      tags: ["Packing", "Europe", "Travel Tips"],
      views: 3240,
      likes: 412,
      comments: 67,
      featured: false,
    },
    {
      id: 4,
      title: "Street Food Adventures in Bangkok",
      slug: "street-food-adventures-bangkok",
      excerpt:
        "A foodie's guide to Bangkok's incredible street food scene. From pad thai to mango sticky rice, discover the best local eats.",
      category: "food",
      author: "David Kim",
      authorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop",
      date: "2025-01-08",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
      tags: ["Bangkok", "Street Food", "Thailand"],
      views: 1560,
      likes: 189,
      comments: 34,
      featured: false,
    },
    {
      id: 5,
      title: "Cultural Etiquette: Do's and Don'ts in Japan",
      slug: "cultural-etiquette-japan",
      excerpt:
        "Navigate Japanese culture with confidence. Essential etiquette tips for temples, restaurants, and everyday interactions.",
      category: "culture",
      author: "Yuki Tanaka",
      authorImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop",
      date: "2025-01-05",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop",
      tags: ["Japan", "Culture", "Etiquette"],
      views: 2100,
      likes: 298,
      comments: 52,
      featured: false,
    },
    {
      id: 6,
      title: "Adventure Photography: Capturing Epic Travel Moments",
      slug: "adventure-photography-travel-moments",
      excerpt:
        "Learn the techniques and gear needed to capture stunning travel photography. From landscape shots to action moments.",
      category: "adventure",
      author: "Alex Thompson",
      authorImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
      date: "2025-01-03",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop",
      tags: ["Photography", "Adventure", "Travel Tips"],
      views: 1780,
      likes: 167,
      comments: 28,
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-dark-900 pt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-dark-900 via-primary-900 to-dark-900">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Travel <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-dark-200 mb-8">
              Discover inspiring travel stories, expert tips, and hidden gems
              from around the world
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-dark-800 border-b border-dark-700">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-400"
                />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === category.id
                      ? "bg-primary-600 text-white"
                      : "bg-dark-700 text-dark-300 hover:bg-dark-600"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "all" && !searchTerm && (
        <section className="py-12 bg-dark-900">
          <div className="container">
            <h2 className="font-heading text-2xl font-bold text-white mb-8">
              Featured Article
            </h2>
            <div className="card card-hover overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-accent-500 text-dark-900 px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4 text-sm text-dark-400">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs">
                        {
                          categories.find((c) => c.id === featuredPost.category)
                            ?.name
                        }
                      </span>
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faClock} />
                        {featuredPost.readTime}
                      </div>
                    </div>

                    <h3 className="font-heading text-2xl font-bold text-white mb-4 hover:text-primary-400 transition-colors">
                      <Link to={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h3>

                    <p className="text-dark-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={featuredPost.authorImage}
                        alt={featuredPost.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-white font-medium">
                          {featuredPost.author}
                        </div>
                        <div className="text-dark-400 text-sm">
                          Travel Writer
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-dark-400 mb-6">
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faEye} />
                        {featuredPost.views.toLocaleString()} views
                      </div>
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faHeart} />
                        {featuredPost.likes} likes
                      </div>
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faComment} />
                        {featuredPost.comments} comments
                      </div>
                    </div>
                  </div>

                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="btn-primary inline-flex items-center gap-2 self-start"
                  >
                    Read Full Article
                    <FontAwesomeIcon icon={faArrowRight} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 bg-dark-900">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-2xl font-bold text-white">
              {selectedCategory === "all"
                ? "Latest Articles"
                : `${
                    categories.find((c) => c.id === selectedCategory)?.name
                  } Articles`}
            </h2>
            <div className="text-dark-400 text-sm">
              {regularPosts.length} articles found
            </div>
          </div>

          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="card card-hover group">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {categories.find((c) => c.id === post.category)?.name}
                    </div>
                    <button className="absolute top-4 right-4 w-8 h-8 bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors">
                      <FontAwesomeIcon icon={faHeart} className="text-xs" />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3 text-xs text-dark-400">
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faClock} />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="font-heading text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-dark-300 text-sm mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-dark-700 text-dark-300 text-xs px-2 py-1 rounded"
                        >
                          <FontAwesomeIcon icon={faTag} className="mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-dark-700">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span className="text-dark-300 text-sm">
                          {post.author}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-dark-400">
                        <div className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faEye} />
                          {post.views.toLocaleString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <FontAwesomeIcon icon={faHeart} />
                          {post.likes}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <FontAwesomeIcon
                icon={faSearch}
                className="text-6xl text-dark-600 mb-4"
              />
              <h3 className="text-2xl font-semibold text-white mb-2">
                No articles found
              </h3>
              <p className="text-dark-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}

          {/* Load More Button */}
          {regularPosts.length > 0 && (
            <div className="text-center mt-12">
              <button className="btn-primary px-8 py-3">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Never Miss a Story
            </h2>
            <p className="text-white/90 mb-6">
              Subscribe to our travel blog and get the latest stories, tips, and
              destination guides delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-dark-900 placeholder-dark-500 focus:outline-none"
              />
              <button className="btn-accent px-6 py-3 bg-white text-primary-600 hover:bg-gray-100">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
