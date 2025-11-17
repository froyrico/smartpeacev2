import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center flex-wrap gap-2 text-xs sm:text-sm mb-4 sm:mb-6 animate-fadeIn" aria-label="Breadcrumb">
      <Link
        to="/"
        className="flex items-center text-white/80 hover:text-white transition-colors duration-300 p-1 active:scale-95"
        aria-label="Ir al inicio"
      >
        <Home size={16} />
      </Link>

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={14} className="text-white/60 flex-shrink-0" />
          {item.path ? (
            <Link
              to={item.path}
              className="text-white/80 hover:text-white transition-colors duration-300 p-1 active:scale-95 min-h-[32px] flex items-center"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white font-semibold min-h-[32px] flex items-center">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
