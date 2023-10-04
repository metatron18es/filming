import { describe, it, expect } from 'vitest';

import { shallowMount } from '@vue/test-utils';
import HySearchResults from '../MySearchResults.vue';
import type { Movie } from '@/types';

function generateFakeMovies(length: number = 5) {
  const movies: Movie[] = [];
  for (let index = 0; index < length; index++) {
    movies.push({
      adult: false,
      backdrop_path: 'random_url.jpg',
      genre_ids: [
          18,
          80
      ],
      id: Math.floor(Math.random() * 1000),
      original_language: 'en',
      original_title: 'Movie ' + index,
      overview: 'Movie ' + index + ' overview',
      popularity: 152.285,
      poster_path: 'random_url.jpg',
      release_date: '19-11-1983',
      title: 'Movie ' + index,
      video: false,
      vote_average: Math.floor(Math.random() * 10),
      vote_count: Math.floor(Math.random() * 10000),
    });
  }
  return movies;
}

const props = {
  title: 'Search movies title',
  movies: generateFakeMovies(),
};

const stubs = {
  RouterLink: true,
};

describe('HySearchResults', () => {
  it('should show correct title', () => {
    const wrapper = shallowMount(HySearchResults, {
      props,
      global: {
        stubs,
      }
    });
    expect(wrapper.find('[data-testid="movie-title"]').text()).toContain(props.title);
  });
  
  it('should show as movies as array has length', () => {
    const wrapper = shallowMount(HySearchResults, {
      props,
      global: {
        stubs,
      }
    });
    expect(wrapper.findAll('[data-testid="movie-item"]').length).toBe(props.movies.length);
  });
});
