import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  content: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    Svg: require('@site/static/img/box.svg').default,
    content: (
      <>
        <h3>Health Digest</h3>
        <h4>Containerized Messaging Engine</h4>
        <p>
          Health Digest is a healthcare messaging engine designed for modern
          DevOps practices and cloud deployments. Define interfaces in YAML and
          deploy interface logic in containers.
        </p>
      </>
    ),
  },
  {
    Svg: require('@site/static/img/box.svg').default,
    content: (
      <>
        <h3>Next Bridge</h3>
        <h4>MLLP to HTTPS Gateway</h4>
        <p>
          Next Bridge is a light-weight gateway between MLLP and HTTPS. Bridge
          legacy systems to modern REST-based infrastructure.
        </p>
      </>
    ),
  },
  {
    Svg: require('@site/static/img/box.svg').default,
    content: (
      <>
        <h3>hit-hl7</h3>
        <h4>HL7 TypeScript Library</h4>
        <p>
          Filter, transform and process HL7 messages with TypeScript and
          Node.js.
        </p>
      </>
    ),
  },
];

function Feature({Svg, content}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">{content}</div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
