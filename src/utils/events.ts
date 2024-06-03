declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
export const sendDataToGA = async (item: string) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      'https://script.google.com/macros/s/AKfycbxB1iWk41ZmEs3Nkeeu2dpwcRUz7W5aq-egeaHV2YynZHDNc2QQjNirrOdXyIHWB4HlTw/exec',
      {
        redirect: 'follow',
        method: 'POST',
        body: JSON.stringify({ date, button: item, variant: 'variant_3' }),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      },
    );
  } catch (error) {
    console.error('Error!', error);
  }
};
