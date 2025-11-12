import React, { useState } from "react";

import FavoriteContext from "./FavoriteContext";

function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState();
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteInfo = { favorites, setFavorites,isFavorite, setIsFavorite };
  return <FavoriteContext value={favoriteInfo}>{children}</FavoriteContext>;
}

export default FavoriteProvider;
