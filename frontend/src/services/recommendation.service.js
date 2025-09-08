// getRecommendations.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products
) => {
  /**
   * Crie aqui a lógica para retornar os produtos recomendados.
   */

  if (!products) {
    return [];
  }

  const {
    selectedPreferences = [],
    selectedFeatures = [],
    selectedRecommendationType,
  } = formData;
  const productsFiltered = products.filter((product) => {
    const preferences = product.preferences ?? [];
    const features = product.features ?? [];

    const matchesPreferences =
      selectedPreferences.length === 0 ||
      selectedPreferences.some((pref) => preferences.includes(pref));

    const matchesFeatures =
      selectedFeatures.length === 0 ||
      selectedFeatures.some((feat) => features.includes(feat));

    return matchesPreferences && matchesFeatures;
  });

  if (
    selectedRecommendationType === 'SingleProduct' &&
    productsFiltered.length > 0
  ) {
    return [productsFiltered[productsFiltered.length - 1]];
  }
  return productsFiltered;
};

export default { getRecommendations };
