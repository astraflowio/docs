import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Open Source',
    Svg: require('@site/static/icons/book-open.svg').default,
    description: (
      <>
        Apache-2.0 license for commercial and non-commerical use. Freedom to deploy, modify and contribute back.
      </>
    ),
  },
  {
    title: 'Modular',
    Svg: require('@site/static/icons/grid.svg').default,
    description: (
      <>
        A fully abstracted backend enables you choose your own persistence layer and queueing service.
      </>
    ),
  },
  {
    title: 'Control',
    Svg: require('@site/static/icons/code.svg').default,
    description: (
      <>
        Powerful flow control constructs including Decisions, Dynamic Fork-Joins and Subworkflows. Variables and templates are supported.
      </>
    ),
  },
  {
      title: 'Polyglot',
      Svg: require('@site/static/icons/aperture.svg').default,
      description: (
        <>
          Client libraries in multiple languages allows workers to be implemented in Java, Node JS, Python and C#.
        </>
      ),
    },
    {
      title: 'Scalable',
      Svg: require('@site/static/icons/chevron-up.svg').default,
      description: (
        <>
          Distributed architecture for both orchestrator and workers scalable from a single workflow to millions of concurrent processes.
        </>
      ),
    },
    {
          title: 'Conductor',
          Svg: require('@site/static/icons/conductor.svg').default,
          description: (
            <>
              Fully compatible with Conductor. Workflows and Tasks can be used with no changes.
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
        <Heading as="h3">{title}</Heading>
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
