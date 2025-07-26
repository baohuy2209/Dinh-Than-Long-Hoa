import React, { useState, useEffect } from 'react';
import { Image, AlertCircle, ZoomIn, Download } from 'lucide-react';

interface ImageItemProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  title?: string;
  onClick?: () => void;
  aspectRatio?: 'square' | 'wide' | 'tall' | 'auto';
}

const ImageItem: React.FC<ImageItemProps> = ({ 
  src, 
  fallbackSrc, 
  alt, 
  className = '', 
  title,
  onClick,
  aspectRatio = 'auto'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  // Aspect ratio classes
  const aspectRatioClasses = {
    square: 'aspect-square',
    wide: 'aspect-video', 
    tall: 'aspect-[3/4]',
    auto: 'h-full'
  };

  // Loading placeholder
  const LoadingPlaceholder = () => (
    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center animate-pulse">
      <div className="text-center">
        <Image className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <p className="text-sm text-gray-500">Đang tải...</p>
      </div>
    </div>
  );

  // Error placeholder
  const ErrorPlaceholder = () => (
    <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
      <div className="text-center">
        <AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
        <p className="text-sm text-red-500">Không thể tải ảnh</p>
        {title && <p className="text-xs text-red-400 mt-1">{title}</p>}
      </div>
    </div>
  );

  return (
    <div 
      className={`relative overflow-hidden bg-gray-100 rounded-lg cursor-pointer transition-all duration-300 hover:shadow-lg group ${aspectRatioClasses[aspectRatio]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {isLoading && <LoadingPlaceholder />}
      {hasError && <ErrorPlaceholder />}
      {!hasError && (
        <>
          <img
            src={currentSrc}
            alt={alt}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
          />
          
          {/* Overlay hiệu ứng khi hover */}
          <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isHovered ? 'bg-opacity-30' : 'bg-opacity-0'
          }`}>
            {isHovered && (
              <div className="absolute top-2 right-2">
                <ZoomIn className="w-6 h-6 text-white drop-shadow-lg" />
              </div>
            )}
          </div>
        </>
      )}
      
      {/* Title overlay */}
      {title && !hasError && !isLoading && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent text-white p-3">
          <p className="text-sm font-medium drop-shadow-lg">{title}</p>
        </div>
      )}
    </div>
  );
};

// Modal component để xem ảnh fullsize
const ImageModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  image: any;
}> = ({ isOpen, onClose, image }) => {
  if (!isOpen || !image) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
        >
          ✕
        </button>
        {image.title && (
          <div className="absolute bottom-4 left-4 right-4 text-white text-center">
            <h3 className="text-xl font-semibold drop-shadow-lg">{image.title}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

const DinhLongHoaGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample images với fallback từ Unsplash
  const images = {
    hero: {
      src: "/HeroSection3.png",
      fallback: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200&h=400&fit=crop",
      alt: "Lễ công nhận di tích",
      title: "Lễ Công Nhận Di Tích Cấp Thành Phố"
    },
    leftSidebar: {
      src: "/HeroSection5.jpg",
      fallback: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
      alt: "Cổng đình",
      title: "Cổng Đình Thần Long Hòa"
    },
    main: {
      src: "/HeroSection8.jpg",
      fallback: "https://images.unsplash.com/photo-1546640646-89b1ba467cea?w=800&h=600&fit=crop",
      alt: "Nội thất chính điện",
      title: "Không Gian Thờ Tự Trang Nghiêm"
    },
    rightSidebar: {
      src: "/HeroSection4.png",
      fallback: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
      alt: "Bàn thờ",
      title: "Bàn Thờ Thành Hoàng"
    },
    bottomLeft: {
      src: "/HeroSection6.jpg",
      fallback: "https://images.unsplash.com/photo-1609036540022-8e0c8e3eb99a?w=600&h=400&fit=crop",
      alt: "Tượng rồng đá",
      title: "Tượng Đá Nghệ Thuật"
    },
    bottomRight: {
      src: "/HeroSection7.jpg",
      fallback: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
      alt: "Tranh tường",
      title: "Tranh Tường Truyền Thống"
    }
  };

  const openModal = (image: any) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Additional gallery images for grid section
  const additionalImages = [
    {
      src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&h=400&fit=crop",
      alt: "Kiến trúc đình",
      title: "Chi Tiết Kiến Trúc"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop", 
      alt: "Không gian thờ cúng",
      title: "Không Gian Linh Thiêng"
    },
    {
      src: "https://images.unsplash.com/photo-1546640646-89b1ba467cea?w=600&h=400&fit=crop",
      alt: "Nghệ thuật chạm khắc",
      title: "Nghệ Thuật Chạm Khắc"
    },
    {
      src: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=400&fit=crop",
      alt: "Lễ hội truyền thống",
      title: "Lễ Hội Truyền Thống"
    },
    {
      src: "https://images.unsplash.com/photo-1609036540022-8e0c8e3eb99a?w=600&h=400&fit=crop",
      alt: "Cảnh quan xung quanh",
      title: "Cảnh Quan Xung Quanh"
    },
    {
      src: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop",
      alt: "Di vật cổ",
      title: "Di Vật Cổ"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mt-16 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center space-y-4 mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2 uppercase text-center">
            Hình ảnh tại Đình Thần Long Hòa
          </h1>
          <p className="text-gray-600 text-center max-w-2xl">
            Khám phá vẻ đẹp kiến trúc và không gian linh thiêng của di tích lịch sử - văn hóa cấp Thành phố
          </p>
        </div>

        {/* Main Featured Gallery - Sử dụng CSS Grid linh hoạt hơn */}
        <div className="mb-12">
          <div className="bg-white p-4 rounded-xl shadow-2xl">
            {/* Hero Image */}
            <div className="mb-4">
              <ImageItem
                src={images.hero.src}
                fallbackSrc={images.hero.fallback}
                alt={images.hero.alt}
                title={images.hero.title}
                aspectRatio="wide"
                className="w-full"
                onClick={() => openModal(images.hero)}
              />
            </div>
            
            {/* Three column layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <ImageItem
                src={images.leftSidebar.src}
                fallbackSrc={images.leftSidebar.fallback}
                alt={images.leftSidebar.alt}
                title={images.leftSidebar.title}
                aspectRatio="tall"
                onClick={() => openModal(images.leftSidebar)}
              />
              
              <ImageItem
                src={images.main.src}
                fallbackSrc={images.main.fallback}
                alt={images.main.alt}
                title={images.main.title}
                aspectRatio="tall"
                onClick={() => openModal(images.main)}
              />
              
              <ImageItem
                src={images.rightSidebar.src}
                fallbackSrc={images.rightSidebar.fallback}
                alt={images.rightSidebar.alt}
                title={images.rightSidebar.title}
                aspectRatio="tall"
                onClick={() => openModal(images.rightSidebar)}
              />
            </div>
            
            {/* Bottom two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ImageItem
                src={images.bottomLeft.src}
                fallbackSrc={images.bottomLeft.fallback}
                alt={images.bottomLeft.alt}
                title={images.bottomLeft.title}
                aspectRatio="wide"
                onClick={() => openModal(images.bottomLeft)}
              />
              
              <ImageItem
                src={images.bottomRight.src}
                fallbackSrc={images.bottomRight.fallback}
                alt={images.bottomRight.alt}
                title={images.bottomRight.title}
                aspectRatio="wide"
                onClick={() => openModal(images.bottomRight)}
              />
            </div>
          </div>
        </div>
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
};

export default DinhLongHoaGallery;