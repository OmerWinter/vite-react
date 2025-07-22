import { useState } from 'react';

interface ExpoSnackEmbedProps {
  src?: string;
  height?: number;
}

export function ExpoSnackEmbed({
  src = 'https://snack.expo.dev/@omer.winter11/witty-violet-pizza',
  height = 600,
}: ExpoSnackEmbedProps) {
  const [iframeKey, setIframeKey] = useState(0);

  function handleRefresh() {
    setIframeKey((prev) => prev + 1);
  }

  return (
    <div style={{ width: '100%' }}>
      <button
        type="button"
        onClick={handleRefresh}
        style={{ marginBottom: 12, padding: '8px 16px', cursor: 'pointer' }}
        aria-label="Refresh Expo Snack"
      >
        Refresh
      </button>
      <iframe
        key={iframeKey}
        src={src}
        frameBorder={0}
        style={{ width: '100%', height }}
        allow="accelerometer; camera; microphone; geolocation; midi; encrypted-media;"
        title="Expo Snack Embed"
      />
    </div>
  );
} 