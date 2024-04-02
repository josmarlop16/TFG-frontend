import React from 'react';
import { ProviderContainer, ProviderCard, ProviderLogo, ProviderName } from './styles';
import { Providers, Provider } from '../../../types/movie';

interface ProviderComponentProps {
  providers: Providers;
}

const ProviderComponent: React.FC<ProviderComponentProps> = ({ providers }) => {
  // Verificar si providers.flatrate es un array, de lo contrario, usar un array vacío
  const flatrateProviders = Array.isArray(providers.flatrate) ? providers.flatrate : [];
  // Verificar si providers.buy es un array, de lo contrario, usar un array vacío
  const buyProviders = Array.isArray(providers.buy) ? providers.buy : [];

  const allProviders: Provider[] = [...flatrateProviders, ...buyProviders];

  const uniqueProviders: Provider[] = allProviders.reduce((acc: Provider[], current: Provider) => {
    if (!acc.find((provider: Provider) => provider.provider_name === current.provider_name)) {
      acc.push(current);
    }
    return acc;
  }, []);

  const handleProviderSearch = (providerName: string) => {
    const searchQuery = encodeURIComponent(`${providerName} official website`);
    window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
  };

  return (
    <ProviderContainer>
      {uniqueProviders.map((provider: Provider, index: number) => (
        <ProviderCard key={index} onClick={() => handleProviderSearch(provider.provider_name)}>
          <ProviderLogo src={`https://image.tmdb.org/t/p/original${provider.logo_path}`} alt={provider.provider_name} />
          <ProviderName>{provider.provider_name}</ProviderName>
        </ProviderCard>
      ))}
    </ProviderContainer>
  );
};

export default ProviderComponent;
