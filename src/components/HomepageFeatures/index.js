import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Technical Skill & Software',
    description: (
      <>        
          C# <br/> Unity <br/> SQL <br/> Unreal Engine <br/> C/C++
      </>
    ),
  },
  {
    title: 'About me',
    description: (
      <>
        Now working at ProximaBeta(Tencent) <br/> Developer Support Engineer
      </>
    ),
  },
  {
    title: 'Tools & Services',
    description: (
      <>
        Git <br/> Visual Studio <br/> Android Studio <br/> Docusaurus
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
