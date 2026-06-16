// Custom hook to handle swipe-based page navigation logic.
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';

export function useSwipe(routeOrder) {
  const navigate = useNavigate();
  const location = useLocation();
  const [touchStart, setTouchStart] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Minimum distance (e.g., 50px) to consider as a swipe
    if (Math.abs(diff) < 50) return;

    const currentIndex = routeOrder.indexOf(location.pathname);

    if (diff > 0) {
      // Swiped Left: Next Page
      if (currentIndex < routeOrder.length - 1) {
        navigate(routeOrder[currentIndex + 1]);
      }
    } else {
      // Swiped Right: Previous Page
      if (currentIndex > 0) {
        navigate(routeOrder[currentIndex - 1]);
      }
    }
  };

  return { handleTouchStart, handleTouchEnd };
}