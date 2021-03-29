import React from "react";
import { useDispatch } from "react-redux";

import { Navbar } from "#/core/navigation/components/navbar/navbar";
import { search } from "#/series/search/store/actions";

export function NavbarContainer() {
  const dispatch = useDispatch();

  function onSearch(name: string) {
    dispatch(search({ name }));
  }

  return <Navbar onSearch={onSearch} />;
}
