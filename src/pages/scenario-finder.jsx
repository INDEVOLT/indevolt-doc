import React, { useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';

export default function ScenarioFinder() {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;

  // Step states
  const [mode, setMode] = useState('');
  const [phase, setPhase] = useState('');
  const [setup, setSetup] = useState('');
  const [pv, setPv] = useState('');
  const [power, setPower] = useState('');

  const isGrid = mode === 'grid';

  const isReady =
    mode &&
    phase &&
    setup &&
    pv &&
    (isGrid ? power : true);

  /**
   * Generate final path (locale aware)
   */
  const path = useMemo(() => {
    if (!isReady) return '';

    const localePrefix = locale === 'en' ? '' : `/${locale}`;

    if (mode === 'grid') {
      return `${localePrefix}/docs/scenario/grid/${phase}/${setup}/${pv}/${power}/overview`;
    }

    return `${localePrefix}/docs/scenario/offgrid/${phase}/${setup}/${pv}/overview`;
  }, [locale, mode, phase, setup, pv, power, isReady]);

  const go = () => {
    if (!isReady) return;
    window.location.href = path;
  };

  /**
   * Reusable Select Component
   */
  const Select = ({
    title,
    description,
    value,
    onChange,
    options,
  }) => (
    <div
      style={{
        marginBottom: 24,
        padding: 20,
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        boxSizing: 'border-box',
      }}
    >
      <h3 style={{ marginBottom: 6 }}>
        {title}
      </h3>

      {description && (
        <p
          style={{
            marginTop: 0,
            marginBottom: 14,
            color: '#666',
            fontSize: 14,
            lineHeight: 1.5,
          }}
        >
          {description}
        </p>
      )}

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          padding: 12,
          fontSize: 15,
          borderRadius: 8,
          border: '1px solid #e5e7eb',
        }}
      >
        <option value="">
          {translate({
            id: 'scenarioFinder.select.placeholder',
            message: 'Select...',
          })}
        </option>

        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <Layout
      title={translate({
        id: 'scenarioFinder.page.title',
        message: 'Use Case Finder',
      })}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 760,
          margin: '0 auto',
          padding: '2rem 1rem',
        }}
      >
        {/* Title */}
        <h1>
          {translate({
            id: 'scenarioFinder.h1',
            message: 'Use Case Finder',
          })}
        </h1>

        {/* Subtitle */}
        <p style={{ color: '#666', marginBottom: 32 }}>
          {translate({
            id: 'scenarioFinder.subtitle',
            message: 'Quickly match the appropriate scenario based on your system configuration.',
          })}
        </p>

        {/* STEP 1 */}
        <Select
          title={translate({
            id: 'scenarioFinder.step1.title',
            message: '1. Grid Connection Type',
          })}
          description={translate({
            id: 'scenarioFinder.step1.desc',
            message:
              'Select whether the system is connected to the grid.',
          })}
          value={mode}
          onChange={(v) => {
            setMode(v);
            setPhase('');
            setSetup('');
            setPv('');
            setPower('');
          }}
          options={[
            {
              value: 'grid',
              label: translate({
                id: 'scenarioFinder.step1.option.grid',
                message: 'Grid-tied',
              }),
            },
            {
              value: 'offgrid',
              label: translate({
                id: 'scenarioFinder.step1.option.offgrid',
                message: 'Off-grid',
              }),
            },
          ]}
        />

        {/* STEP 2 */}
        {mode && (
          <Select
            title={translate({
              id: 'scenarioFinder.step2.title',
              message: '2. Electrical Phase Type',
            })}
            description={translate({
              id: 'scenarioFinder.step2.desc',
              message:
                'Select the phase configuration of the electrical installation.',
            })}
            value={phase}
            onChange={(v) => {
              setPhase(v);
              setSetup('');
              setPv('');
              setPower('');
            }}
            options={[
              {
                value: 'single-phase',
                label: translate({
                  id: 'scenarioFinder.step2.option.single',
                  message: 'Single-phase system',
                }),
              },
              {
                value: 'three-phase',
                label: translate({
                  id: 'scenarioFinder.step2.option.three',
                  message: 'Three-phase system',
                }),
              },
            ]}
          />
        )}

        {/* STEP 3 */}
        {phase && (
          <Select
            title={translate({
              id: 'scenarioFinder.step3.title',
              message: '3. Device Configuration',
            })}
            description={translate({
              id: 'scenarioFinder.step3.desc',
              message:
                'Choose whether the system uses a single device or multiple devices operating in parallel.',
            })}
            value={setup}
            onChange={(v) => {
              setSetup(v);
              setPv('');
              setPower('');
            }}
            options={[
              {
                value: 'standalone',
                label: translate({
                  id: 'scenarioFinder.step3.option.single',
                  message: 'Standalone',
                }),
              },
              {
                value: 'cluster',
                label: translate({
                  id: 'scenarioFinder.step3.option.cluster',
                  message: 'Cluster',
                }),
              },
            ]}
          />
        )}

        {/* STEP 4 */}
        {setup && (
          <Select
            title={translate({
              id: 'scenarioFinder.step4.title',
              message: '4. PV Installation Status',
            })}
            description={translate({
              id: 'scenarioFinder.step4.desc',
              message:
                'Select the type of solar PV system installed at the site.',
            })}
            value={pv}
            onChange={(v) => {
              setPv(v);
              setPower('');
            }}
            options={[
              {
                value: 'no-pv',
                label: translate({
                  id: 'scenarioFinder.step4.option.nopv',
                  message: 'No existing PV system',
                }),
              },
              {
                value: 'balcony-pv',
                label: translate({
                  id: 'scenarioFinder.step4.option.balcony',
                  message: 'Balcony PV system',
                }),
              },
              {
                value: 'residential-pv',
                label: translate({
                  id: 'scenarioFinder.step4.option.residential',
                  message: 'Residential PV system',
                }),
              },
            ]}
          />
        )}

        {/* STEP 5 */}
        {pv && isGrid && (
          <Select
            title={translate({
              id: 'scenarioFinder.step5.title',
              message: '5. Power Range',
            })}
            description={translate({
              id: 'scenarioFinder.step5.desc',
              message:
                'Choose whether the total system power exceeds 800 W.',
            })}
            value={power}
            onChange={setPower}
            options={[
              {
                value: 'up-to-800w',
                label: translate({
                  id: 'scenarioFinder.step5.option.low',
                  message: 'Up to 800 W',
                }),
              },
              {
                value: 'over-800w',
                label: translate({
                  id: 'scenarioFinder.step5.option.high',
                  message: 'Over 800 W',
                }),
              },
            ]}
          />
        )}

        {/* CTA */}
        {isReady && (
          <button
            onClick={go}
            style={{
              width: '100%',
              padding: 14,
              fontSize: 16,
              border: 'none',
              borderRadius: 8,
              background: '#1677ff',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            {translate({
              id: 'scenarioFinder.button.view',
              message: 'View Matching Use Case →',
            })}
          </button>
        )}
      </div>
    </Layout>
  );
}