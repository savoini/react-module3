import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import { Creators as FavoritesActions } from '../ducks/favorites';

export function* addFavorite(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    const repositoryData = {
      id: data.id,
      name: data.full_name,
      description: data.description,
      url: data.html_url,
    };

    yield put(FavoritesActions.addFavoriteSuccess(repositoryData));
  } catch (error) {
    console.log(error);
    yield put(
      FavoritesActions.addFavoriteFailure(`Erro ao adicionar repositório: ${error.message}`),
    );
  }
}
