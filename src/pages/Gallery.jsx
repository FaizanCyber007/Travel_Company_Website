import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhotoUploadForm from "../components/PhotoUploadForm";
import {
  faImages,
  faPlay,
  faExpand,
  faHeart,
  faShare,
  faDownload,
  faTimes,
  faChevronLeft,
  faChevronRight,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(10);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [userPhotos, setUserPhotos] = useState([]);

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "destinations", name: "Destinations" },
    { id: "hotels", name: "Hotels & Resorts" },
    { id: "activities", name: "Activities" },
    { id: "food", name: "Food & Dining" },
    { id: "culture", name: "Culture" },
  ];

  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=800&auto=format&fit=crop",
      category: "destinations",
      title: "Maldives Paradise",
      location: "Maldives",
      type: "image",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=800&auto=format&fit=crop",
      category: "destinations",
      title: "Swiss Alps",
      location: "Switzerland",
      type: "image",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
      category: "destinations",
      title: "Tokyo Skyline",
      location: "Japan",
      type: "image",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop",
      category: "hotels",
      title: "Luxury Resort",
      location: "Bali",
      type: "image",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop",
      category: "destinations",
      title: "Santorini Sunset",
      location: "Greece",
      type: "image",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop",
      category: "activities",
      title: "Safari Adventure",
      location: "Kenya",
      type: "image",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
      category: "food",
      title: "Local Cuisine",
      location: "Thailand",
      type: "image",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop",
      category: "hotels",
      title: "Boutique Hotel",
      location: "Morocco",
      type: "image",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=800&auto=format&fit=crop",
      category: "destinations",
      title: "Northern Lights",
      location: "Iceland",
      type: "image",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=800&auto=format&fit=crop",
      category: "culture",
      title: "Temple Visit",
      location: "Cambodia",
      type: "image",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
      category: "destinations",
      title: "Mountain Lake",
      location: "Canada",
      type: "image",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
      category: "activities",
      title: "Scuba Diving",
      location: "Egypt",
      type: "image",
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
      category: "hotels",
      title: "Beach Resort",
      location: "Seychelles",
      type: "image",
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1555992336-03a23c07e78d?q=80&w=800&auto=format&fit=crop",
      category: "food",
      title: "Fine Dining",
      location: "France",
      type: "image",
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop",
      category: "culture",
      title: "Local Market",
      location: "India",
      type: "image",
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop",
      category: "destinations",
      title: "Forest Trail",
      location: "Norway",
      type: "image",
    },
    {
      id: 17,
      src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop",
      category: "hotels",
      title: "City Hotel",
      location: "Singapore",
      type: "image",
    },
    {
      id: 18,
      src: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=800&auto=format&fit=crop",
      category: "activities",
      title: "Hiking Adventure",
      location: "Peru",
      type: "image",
    },
    {
      id: 19,
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=800&auto=format&fit=crop",
      category: "food",
      title: "Street Food",
      location: "Vietnam",
      type: "image",
    },
    {
      id: 20,
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800&auto=format&fit=crop",
      category: "destinations",
      title: "Sunset Beach",
      location: "Hawaii",
      type: "image",
    },
    {
      id: 21,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
      category: "hotels",
      title: "Luxury Suite",
      location: "Dubai",
      type: "image",
    },
    {
      id: 22,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
      category: "activities",
      title: "Kayaking",
      location: "New Zealand",
      type: "image",
    },
    {
      id: 23,
      src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop",
      category: "culture",
      title: "Art Gallery",
      location: "Italy",
      type: "image",
    },
    {
      id: 24,
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
      category: "food",
      title: "Traditional Feast",
      location: "Mexico",
      type: "image",
    },
    {
      id: 25,
      src: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?q=80&w=800&auto=format&fit=crop",
      category: "destinations",
      title: "Desert Landscape",
      location: "Morocco",
      type: "image",
    },
  ];

  // Fetch user-uploaded photos from backend
  useEffect(() => {
    const fetchUserPhotos = async () => {
      try {
        const response = await fetch("http://localhost:5002/api/gallery");
        if (response.ok) {
          const data = await response.json();
          setUserPhotos(data.data || []);
        }
      } catch (error) {
        console.error("Error fetching user photos:", error);
      }
    };

    fetchUserPhotos();
  }, []);

  // Combine static gallery items with user-uploaded photos
  const allGalleryItems = [
    ...galleryItems,
    ...userPhotos.map((photo) => ({
      id: photo.id,
      src: photo.imageUrl || `http://localhost:5002${photo.src}`,
      category: photo.category,
      title: photo.title,
      location: photo.location,
      type: photo.type || "image",
      description: photo.description,
      uploadDate: photo.uploadDate,
    })),
  ];

  const filteredItems = allGalleryItems.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMoreItems = visibleCount < filteredItems.length;

  const loadMoreItems = () => {
    setVisibleCount((prev) => prev + 10);
  };

  // Reset visible count when category changes
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setVisibleCount(10);
  };

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
    );
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-8">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-dark-900 via-primary-900 to-dark-900">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
              Travel <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-xl text-dark-200 mb-8">
              Explore stunning photography from our travelers around the world.
              Get inspired for your next adventure.
            </p>
            <Link
              to="/gallery/upload"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3"
            >
              <FontAwesomeIcon icon={faImages} />
              Share Your Photos
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-dark-800 border-b border-dark-700">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex items-center gap-4">
              <FontAwesomeIcon icon={faFilter} className="text-primary-400" />
              <span className="text-white font-medium">
                Filter by Category:
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
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

            <div className="text-dark-400 text-sm">
              Showing {visibleItems.length} of {filteredItems.length} photos
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-dark-900">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer card-hover"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-dark-300 text-sm">{item.location}</p>
                  </div>
                </div>

                {/* Action Icons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-8 h-8 bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors">
                    <FontAwesomeIcon icon={faHeart} className="text-xs" />
                  </button>
                  <button className="w-8 h-8 bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors">
                    <FontAwesomeIcon icon={faExpand} className="text-xs" />
                  </button>
                </div>

                {/* Video indicator */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faPlay}
                        className="text-white text-xl ml-1"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMoreItems && (
            <div className="text-center mt-12">
              <button onClick={loadMoreItems} className="btn-primary px-8 py-3">
                <FontAwesomeIcon icon={faImages} className="mr-2" />
                Load More Photos ({filteredItems.length - visibleCount}{" "}
                remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/80">Photos Shared</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">25K+</div>
              <div className="text-white/80">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-white/80">Memories Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-800">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Share Your Travel Photos
            </h2>
            <p className="text-dark-300 mb-6">
              Join our community of travelers and share your amazing journey
              photos with the world.
            </p>
            <button
              className="btn-accent px-8 py-3"
              onClick={() => setUploadModalOpen(true)}
            >
              Upload Your Photos
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-dark-700 transition-colors z-10"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>

            {/* Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-dark-700 transition-colors z-10"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-dark-700 transition-colors z-10"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
            </button>

            {/* Image */}
            <div className="max-w-5xl max-h-full">
              <img
                src={filteredItems[currentImage]?.src}
                alt={filteredItems[currentImage]?.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Info */}
            <div className="absolute bottom-6 left-6 right-6 bg-dark-800/80 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {filteredItems[currentImage]?.title}
                  </h3>
                  <p className="text-dark-300">
                    {filteredItems[currentImage]?.location}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                  <button className="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors">
                    <FontAwesomeIcon icon={faShare} />
                  </button>
                  <button className="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors">
                    <FontAwesomeIcon icon={faDownload} />
                  </button>
                </div>
              </div>
            </div>

            {/* Counter */}
            <div className="absolute top-6 left-6 bg-dark-800/80 backdrop-blur-sm rounded-lg px-4 py-2 text-white">
              {currentImage + 1} / {filteredItems.length}
            </div>
          </div>
        </div>
      )}

      {/* Upload Modal */}
      {uploadModalOpen && (
        <div className="fixed inset-0 bg-black/75 z-50 flex items-center justify-center p-4">
          <div className="bg-dark-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-dark-800 border-b border-dark-700 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-xl font-bold text-white">
                Upload Your Photos
              </h2>
              <button
                onClick={() => setUploadModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-dark-700 text-dark-300 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className="p-6">
              <PhotoUploadForm onClose={() => setUploadModalOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
