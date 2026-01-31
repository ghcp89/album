
import { AppData, UserRole, Sticker } from './types';

const DB_KEY = 'album_figurinhas_db';

// Inicializa as 45 semanas vazias para o Admin preencher
const emptyStickers: Sticker[] = Array.from({ length: 45 }, (_, i) => ({
  id: `sticker-${i + 1}`,
  week: i + 1,
  name: i + 1 >= 42 ? `Elo Supremo - Parte ${i - 40}` : `Semana ${i + 1}`,
  imageUrl: '' 
}));

const initialData: AppData = {
  professors: [],
  students: [],
  stickers: emptyStickers,
  studentStickers: [],
  currentWeek: 1
};

export const loadData = (): AppData => {
  const saved = localStorage.getItem(DB_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return initialData;
    }
  }
  return initialData;
};

export const saveData = (data: AppData) => {
  localStorage.setItem(DB_KEY, JSON.stringify(data));
};

export const clearData = () => {
  localStorage.removeItem(DB_KEY);
  window.location.reload();
};
