import React, { useEffect, useState } from 'react';

import Body from './components/body/body';
import { Category } from './domain/models/category';
import { GlobalStyles } from './GlobalStyles';
import Header from './components/header/header';
import { HttpClient } from './infra/interfaces/http-client';
import { getCategories } from './services/movies-service';

const App: React.FC<{ httpClient: HttpClient }> = (props) => {
  const [categories, setCategories] = useState<Category[]>([]);

  const updateCategories = async () => {
    const result = await getCategories(props.httpClient);
    setCategories(result);
  };

  useEffect(() => {
    updateCategories();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Body categories={categories} />
    </>
  );
};

export default App;
