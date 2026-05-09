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

  // Generate path
  const path = useMemo(() => {
    if (!isReady) return '';

    const localePrefix =
    locale === 'en'
        ? ''
        : `/${locale}`;

    if (mode === 'grid') {
      return `${localePrefix}/docs/scenario/grid/${phase}/${setup}/${pv}/${power}/overview`;
    }

    return `${localePrefix}/docs/scenario/offgrid/${phase}/${setup}/${pv}/overview`;
  }, [mode, phase, setup, pv, power, isReady]);

  // Jump
  const go = () => {
    if (!isReady) return;
    window.location.href = path;
  };

  // Reusable select
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
        }}
    >
        {/* Title */}
        <h3 style={{ marginBottom: 6 }}>
        {title}
        </h3>

        {/* Description */}
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

        {/* Select */}
        <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
            width: '100%',
            padding: 12,
            fontSize: 15,
            borderRadius: 8,
        }}
        >
        <option value="">Select...</option>

        {options.map((o) => (
            <option key={o.value} value={o.value}>
            {o.label}
            </option>
        ))}
        </select>
    </div>
    );

  return (
    <Layout title="Use Case Finder">
      <div
        style={{
          width: '100%',
          maxWidth: 760,
          margin: '0 auto',
          padding: '2rem 1rem',
        }}
      >
        <h1>Use Case Finder</h1>

        <p style={{ color: '#666', marginBottom: 32 }}>
          Select your system configuration step by step.
        </p>

        {/* STEP 1 */}
        <Select
          title="1. Grid connection"
          description="Choose whether your system operates with grid tied or off grid."
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
              label: 'Grid-tied system',
            },
            {
              value: 'offgrid',
              label: 'Off-grid system',
            },
          ]}
        />

        {/* STEP 2 */}
        {mode && (
          <Select
            title="2. Electrical phase type"
            description="Select the phase configuration used in your electrical installation."
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
                label: 'Single-phase system',
              },
              {
                value: 'three-phase',
                label: 'Three-phase system',
              },
            ]}
          />
        )}

        {/* STEP 3 */}
        {phase && (
          <Select
            title="3. Device configuration"
            description="Choose whether the system uses a single device or multiple devices operating in parallel."
            value={setup}
            onChange={(v) => {
              setSetup(v);
              setPv('');
              setPower('');
            }}
            options={[
              {
                value: 'standalone',
                label: 'Standalone',
              },
              {
                value: 'cluster',
                label: 'Cluster',
              },
            ]}
          />
        )}

        {/* STEP 4 */}
        {setup && (
          <Select
            title="4. PV installation status"
            description="Select the type of solar PV system installed at the site."
            value={pv}
            onChange={(v) => {
              setPv(v);
              setPower('');
            }}
            options={[
              {
                value: 'no-pv',
                label: 'No existing PV system',
              },
              {
                value: 'balcony-pv',
                label: 'Balcony PV system',
              },
              {
                value: 'residential-pv',
                label: 'Residential PV system',
              },
            ]}
          />
        )}

        {/* STEP 5 (ONLY GRID) */}
        {pv && isGrid && (
          <Select
            title="5. System power level"
            description="Choose whether the total system power exceeds 800W."
            value={power}
            onChange={setPower}
            options={[
              {
                value: 'up-to-800w',
                label: 'Up to 800 W',
              },
              {
                value: 'over-800w',
                label: 'Over 800 W',
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
              View Use Case →
            </button>
        )}
      </div>
    </Layout>
  );
}