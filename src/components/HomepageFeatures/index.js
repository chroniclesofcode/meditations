import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Programming',
    Svg: require('@site/static/img/programmingimage.svg').default,
    description: (
      <>
        Things that I find interesting in the world of programming - from short 
        guides, interesting algorithms to random musings on improvement. 
      </>
    ),
  },
  {
    title: 'Meditations',
    Svg: require('@site/static/img/3818985.svg').default,
    description: (
      <>
        A small 'open journal' where I document the thoughts I have on life,
        my hobbies, my cats, philosophy, and much more. 
      </>
    ),
  },
  {
    title: 'Portfolio',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        A showcase of some of the
        things I have built or worked on. Currently a work in progress!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
