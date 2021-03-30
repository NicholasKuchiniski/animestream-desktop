import { useFormik } from "formik";
import { debounce } from "lodash";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "#/core/application/store/actions";
import { VideoUploadChangeEvent } from "#/core/components/video-upload/types";
import { ApplicationState } from "#/core/store/store";
import { NewEpisodeModal } from "#/episodes/new-episode/components/new-episode-modal/new-episode-modal";
import { newEpisodeFormSchema } from "#/episodes/new-episode/components/new-episode-modal/schemas";
import { NewEpisodeFormSchema } from "#/episodes/new-episode/components/new-episode-modal/types";
import { searchSeriesAction, uploadVideoAction } from "#/episodes/new-episode/store/actions";

export function NewEpisodeModalContainer() {
  const dispatch = useDispatch();

  const isOpen = useSelector<ApplicationState, boolean>((state) => state.application.modals["new-episode"]);
  const { isLoadingSeries, series } = useSelector<any, any>((state) => state.newEpisode);

  function onClose() {
    dispatch(closeModal());
  }

  function onSubmit(values: NewEpisodeFormSchema) {
    dispatch(
      uploadVideoAction({
        file: values.video,
        newEpisode: values,
      }),
    );
    onClose();
  }

  function onSearch(name: string) {
    dispatch(searchSeriesAction({ name }));
  }

  function onUpload(event: VideoUploadChangeEvent) {
    form.setFieldValue("duration", event.duration);
    form.setFieldValue("image", event.preview);
    form.setFieldValue("quality", event.quality);
    form.setFieldValue("video", event.file);
  }

  const debounceadOnSearch = useRef(debounce(onSearch, 1000));

  const form = useFormik<NewEpisodeFormSchema>({
    isInitialValid: false,
    initialValues: {} as NewEpisodeFormSchema,
    validationSchema: newEpisodeFormSchema,
    onSubmit,
  });

  return (
    <NewEpisodeModal
      isValid={form.isValid}
      isOpen={isOpen}
      isLoading={isLoadingSeries}
      series={series}
      values={form.values}
      errors={form.errors}
      onChange={form.handleChange}
      onSubmit={form.handleSubmit}
      onClose={onClose}
      onSearch={debounceadOnSearch.current}
      onUpload={onUpload}
    />
  );
}
