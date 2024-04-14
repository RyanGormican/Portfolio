import React from 'react';
import { Carousel } from 'antd';
import Grid from '@mui/material/Grid';
import { Tag } from 'antd';
import { analytics } from '../firebaseConfig.js';
import { logEvent } from 'firebase/analytics';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { shuffle } from 'lodash';
import { projects } from './ProjectList';
import { getColor } from './Color';

export default function Projects() {
  const featuredProjectLink = 'https://searchimization.vercel.app/';
  const shuffledProjects = shuffle(projects);

  const featuredProject = shuffledProjects.find((project) => project.link === featuredProjectLink);
  const otherProjects = shuffledProjects.filter((project) => project.link !== featuredProjectLink);

  const trackLinkClick = (linkName) => {
    logEvent(analytics, 'project-click', {
      name: linkName,
    });
    logEvent(analytics, linkName);
  };

  return (
    <div>
      {/* Featured Project */}
      {featuredProject && (
        <div
          style={{
            width: '80%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            border: '1px solid white',
            padding: 0,
          }}
        >
          <Grid container spacing={0.5}>
            <Grid item xs={6}>
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
              >
                <div style={{ maxHeight: '50vh', maxWidth: '80vw' }}>
                  <img src={featuredProject.name} width="100%" height="50%" alt={featuredProject.title} />
                </div>
              </a>
            </Grid>
<Grid item xs={6}>
    <div style={{ color: 'white', fontSize: '2vw', lineHeight: '1.2' }} >
      {featuredProject.description}
    </div>
    <br />
    <div style={{ marginTop: '-5px' }}>
      {featuredProject.tags.map((tag, index) => (
        <Tag key={index} color={getColor(tag)} style={{ color: 'black', margin: '2px' }}>
          {tag}
        </Tag>
      ))}
    </div>
</Grid>


          </Grid>
        </div>
      )}
      {/* Other Projects Carousel */}
      <div
        style={{
          width: '80%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          border: '1px solid white',
        }}
      >
        <Carousel style={{ color: 'white', maxHeight: '40vh', maxWidth: '80vw'}} autoplay>
          {otherProjects.map((project, index) => (
            <div key={index}>
              <div style={{ flex: 'auto', flexDirection: 'row' }}>
                <div style={{ width: '100%' }}>
                  <Tooltip title={project.description} style={{ fontFamily: 'Jost' }}>
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
                      <img src={project.name} style={{ width: '80vw', height: '40vh'}} alt={`index-${index}`} />
                    </a>
                  </Tooltip>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
