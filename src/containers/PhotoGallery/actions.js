/**
 *
 * PhotoGallery actions
 * @flow
 */

import {
  SET_LOADING,
  REQUEST_PHOTOS,
  REQUEST_PHOTOS_SUCCESS,
  REQUEST_PHOTOS_FAILED,
  ANIMATE_PHOTO
} from './constants';

import type { PhotosType, GalleryAction } from './types';

export function setLoading(loading: boolean): GalleryAction {
  return {
    type: SET_LOADING,
    loading
  };
}

export function getPhotos(): GalleryAction {
  return {
    type: REQUEST_PHOTOS
  };
}

export function getPhotosSuccess(photos: PhotosType): GalleryAction {
  return {
    type: REQUEST_PHOTOS_SUCCESS,
    photos
  };
}

export function getPhotosFailed(error: string): GalleryAction {
  return {
    type: REQUEST_PHOTOS_FAILED,
    error
  };
}

export function animatePhoto(
  index: number,
  isAnimated: boolean
): GalleryAction {
  return {
    type: ANIMATE_PHOTO,
    index,
    isAnimated
  };
}
