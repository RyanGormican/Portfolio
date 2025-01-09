import React, { useState, useRef } from 'react';
import { Carousel } from 'antd';
import { Tag } from 'antd';
import { analytics } from '../firebaseConfig.js';
import { logEvent } from 'firebase/analytics';
import Tooltip from '@mui/material/Tooltip';
import { projects } from './ProjectList';
import { getColor } from './Color';

export default function Projects() {
  const featuredProjectLink = 'https://searchimization.vercel.app/';

  const featuredProject = projects.find((project) => project.link === featuredProjectLink);
  const otherProjects = projects.filter((project) => project.link !== featuredProjectLink);

  // State to track current projects in carousels
  const [currentProjects, setCurrentProjects] = useState(
    // Split the remaining projects into 8 carousels
    Array.from({ length: 8 }, (_, index) => {
      const startIndex = (index * Math.floor(otherProjects.length / 8));
      const endIndex = startIndex + Math.floor(otherProjects.length / 8);
      return otherProjects.slice(startIndex, endIndex);
    })
  );
  
  const [isHovered, setIsHovered] = useState(false);

  const carouselRefs = useRef([]);

  const trackLinkClick = (linkName) => {
    logEvent(analytics, 'project-click', { name: linkName });
    logEvent(analytics, linkName);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Pause all carousels when mouse enters
    carouselRefs.current.forEach((carousel) => {
      if (carousel) {
        carousel.innerSlider.pause();
      }
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Resume all carousels after 3 seconds when mouse leaves
    setTimeout(() => {
      carouselRefs.current.forEach((carousel) => {
        if (carousel) {
          carousel.innerSlider.play();
        }
      });
    }, 3000);
  };

  return (
    <div style={{ display: 'flex', width: '100vw', height: '80vh' }}>
      {/* Left Section: 8 Project Carousels */}
      <div
        style={{
          width: '60vw',
          height: '80vh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '20vh 20vh 20vh 20vh',
          gap: '0.75px',
        }}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
      >
        {currentProjects.map((carouselProjects, carouselIndex) => (
          <div
            key={carouselIndex}
            style={{
              border: '1px solid white',
              padding: '10px',
              overflow: 'hidden',
            }}
          >
            <Carousel
              ref={(el) => (carouselRefs.current[carouselIndex] = el)} 
              autoplay={!isHovered}
              style={{ color: 'white' }}
            >
              {carouselProjects.map((project, index) => (
                <div key={index}>
                  <Tooltip title={project.description}>
                    <a
                      href={project.link}
                      onClick={(e) => {
                        if (e.button === 0 || e.button === 1) {
                          trackLinkClick(project.title);
                        }
                      }}
                      onMouseDown={(e) => {
                        if (e.button === 1) {
                          trackLinkClick(project.title);
                        }
                      }}
                    >
                      <img
                        src={project.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '8px',
                        }}
                        alt={project.title}
                      />
                    </a>
                  </Tooltip>
                </div>
              ))}
            </Carousel>
          </div>
        ))}
      </div>

      {/* Right Section: Featured Project */}
      {featuredProject && (
        <div
          style={{
            width: '50vw',
            height: '80vh', 
            border: '1px solid white',
            marginLeft: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ height: '60vh', width: '100%' }}>
            <a
              href={featuredProject.link}
              onClick={(e) => {
                if (e.button === 0 || e.button === 1) {
                  trackLinkClick(featuredProject.title);
                }
              }}
              onMouseDown={(e) => {
                if (e.button === 1) {
                  trackLinkClick(featuredProject.title);
                }
              }}
              style={{ textAlign: 'center', display: 'block', width: '100%', height: '100%' }}
            >
              <img
                src={featuredProject.name}
                style={{
                  width: '100%',
                  height: '100%',
                }}
                alt={featuredProject.title}
              />
            </a>
          </div>
          <div style={{ color: 'white', fontSize: '1.5vw', lineHeight: '1.4', marginTop: '10px' }}>
            {featuredProject.description}
          </div>
          <div style={{ marginTop: '10px' }}>
            {featuredProject.tags.map((tag, index) => (
              <Tag key={index} color={getColor(tag)} style={{ color: 'black', margin: '2px' }}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
