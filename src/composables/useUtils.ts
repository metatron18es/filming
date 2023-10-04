export interface UseUtils {
  parseImgUrl: (imagePath: string) => string;
}

export function useUtils(): UseUtils {

  const parseImgUrl = (imagePath: string) => {
    return `https://image.tmdb.org/t/p/w500/${imagePath}`;
  };

  return {
    parseImgUrl,
  };
}