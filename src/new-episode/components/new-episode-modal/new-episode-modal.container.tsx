import { useFormik } from "formik";
import { debounce } from "lodash";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "#/application/store/actions";
import { ApplicationState } from "#/core/store/store";
import { NewEpisodeModal } from "#/new-episode/components/new-episode-modal/new-episode-modal";
import { newEpisodeFormSchema } from "#/new-episode/components/new-episode-modal/schemas";
import { NewEpisodeFormSchema } from "#/new-episode/components/new-episode-modal/types";
import { newEpisodeAction, searchSeriesAction, uploadVideoAction } from "#/new-episode/store/actions";

export function NewEpisodeModalContainer() {
  const dispatch = useDispatch();

  const isOpen = useSelector<ApplicationState, boolean>((state) => state.application.modals["new-episode"]);
  const { isLoading, series, video } = useSelector<any, any>((state) => state.newEpisode);

  function onClose() {
    dispatch(closeModal());
  }

  function onSubmit(values: NewEpisodeFormSchema) {
    dispatch(newEpisodeAction(values));
  }

  function onSearch(name: string) {
    dispatch(searchSeriesAction({ name }));
  }

  function onUpload(event: any) {
    form.setFieldValue("duration", event.duration);
    form.setFieldValue("image", event.preview);
    form.setFieldValue("quality", event.quality);

    dispatch(uploadVideoAction({ file: event.file }));
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
      isLoading={isLoading}
      isVideoLoading={video.isLoading}
      series={series}
      videoProgress={video.progress}
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
