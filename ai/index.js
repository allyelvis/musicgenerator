import axios from 'axios';

async function createSong(prompt) {
  try {
    const response = await axios.post('https://your-firebase-url/generateLyrics', { prompt });
    console.log('Generated Song:', response.data.lyrics);
  } catch (error) {
    console.error('Error generating song:', error);
  }
}