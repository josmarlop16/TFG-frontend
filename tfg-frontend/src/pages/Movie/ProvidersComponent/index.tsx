import React from 'react';
import { ProviderContainer, ProviderCard, ProviderLogo, ProviderName } from './styles';
import { Providers, Provider } from '../../../types/movie';

interface ProviderComponentProps {
  providers: Providers;
}

const ProviderComponent: React.FC<ProviderComponentProps> = ({ providers }) => {
  const allProviders: Provider[] = [...providers.buy, ...providers.flatrate];

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
